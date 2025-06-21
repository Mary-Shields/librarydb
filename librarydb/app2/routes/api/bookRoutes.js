const express = require('express');
const router = express.Router();

const { bookDao: dao } = require('../../dao/dao');

router.get('/', (req, res) => {
    dao.findBooks(res, dao.table)
})

router.get('/:id', (req, res) => {
    dao.findBookById(res, dao.table, req.params.id)
})


router.get('/author/:id', (req, res) => {
    dao.findBooksByAuthor(res, req.params.id)
})

router.get('/publish/:id', (req, res) => {
    dao.findBooksByPublish(res, req.params.id)
})

router.post('/post', (req, res) => {
    dao.addBook(req, res, dao.table)
})

router.patch('/update/:id', (req, res) => {
    dao.update(req, res, dao.table)
})

module.exports = router;