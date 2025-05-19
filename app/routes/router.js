
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3013

router.get('/api', (req, res)=> {
    res.json({
        'Books': `http://localhost:${PORT}/api/book`,
        'Authors': `http://localhost:${PORT}/api/author`,
        'Publishers': `http://localhost:${PORT}/api/publish`
    })
})

const endpoints = [
    'book',
    'author',
    'publish'
]

endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})




module.exports = router