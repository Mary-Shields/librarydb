const express = require('express')
const server = express()
const router = require('./routes/router')
const helmet = require('helmet')
const cors = require('cors')
const PORT = process.env.PORT || 3013

server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"],
        "img-src": ["'self'", "http: data"]
    }
}));

server.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

    server.use('/', router)


server.listen(PORT, ()=> console.log(`this is the end for us...${PORT}`));