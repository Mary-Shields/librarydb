const express = require('express')
    const router = express.Router()

    const { publishDao: dao } = require('../../../app/dao/dao') 

router.get('/', (req, res)=> {
    dao.findPublish(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findPublishById(res, dao.table, req.params.id)
})

module.exports = router