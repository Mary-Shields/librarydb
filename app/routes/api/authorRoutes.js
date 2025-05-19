

const express = require('express')
const router = express.Router()

const { authorDao: dao } = require('../../dao/dao') 

router.get('/', (req, res)=> {
    dao.findAuthor(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findAuthorById(res, dao.table, req.params.id)
})


module.exports = router