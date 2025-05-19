const daoCommon = require('./common/daoCommon')

const bookDao = {
    ...daoCommon,
    ...require('./api/bookDao')
}

const authorDao = {
    ...daoCommon,
    ...require('./api/authorDao')
}

const publishDao = {
    ...daoCommon,
    ...require('./api/publishDao')
}

module.exports = {
    bookDao,
    authorDao,
    publishDao
}