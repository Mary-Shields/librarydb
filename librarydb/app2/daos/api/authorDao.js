const fs = require('fs')
const path = require('path')
const con = require('../../config/dbconfig');

const authorDao = {
    table: 'author_author',

    findAuthor: (res, table) => {
        con.execute(
            `SELECT author_id, author_name 
            FROM author_author 
            ORDER BY author_id;`,
            (error, rows) => {
                if (!error) {
                    res.json(rows)
                } else {
                    console.log('AUTHOR DAO ERROR: ', error)
                }
            }
        )
    },

    findAuthorById: (res, table, id) => {
        con.execute(
            `SELECT author_id, author_name 
            FROM author_author 
            WHERE author_id = ?;`,
            [id], 
            (error, rows) => {
                if (!error) {
                    res.json(rows.length === 1 ? rows[0] : rows)
                } else {
                    console.log('AUTHOR DAO ERROR: ', error)
                }
            }
        )
    },
}

module.exports = authorDao;