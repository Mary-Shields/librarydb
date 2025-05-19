const con = require('../../config/dbconfig')

const bookDao = {
    table: 'book',

    findBooks: (res, table) => {
        con.execute(
            `SELECT b.book_id, b.title, a.author_name, b.genre, b.format, b.binding, b.qty, b.rating, 
            b.copyright_yr, b.language, b.num_pages, b.edition, 
            p.publish_name, b.cover_img
            FROM book b
            JOIN author_author a USING (author_id)
            JOIN publish_publish p USING (publish_id)
            ORDER BY b.book_id;`,
            (error, rows) => {
                if (!error) {
                    res.json(rows.length === 1 ? rows[0] : rows)
                } else {
                    console.log('BOOK DAO ERROR: ', error)
                }
            }
        )
    },

    findBookById: (res, table, id) => {
        con.execute(
            `SELECT b.book_id, b.title, a.author_name, b.genre, b.format, b.binding, b.qty, b.rating, 
            b.copyright_yr, b.language, b.num_pages, b.edition, 
            p.publish_name, b.cover_img
            FROM book b
            JOIN author_author a USING (author_id)
            JOIN publish_publish p USING (publish_id)
            WHERE b.book_id = ${id};`,
            (error, rows) => {
                if (!error) {
                    res.json(rows.length === 1 ? rows[0] : rows)
                } else {
                    console.log('BOOK DAO ERROR: ', error)
                }
            }
        )
    },

    addBook: (req, res, table) => {
        const { title, author_id, genre, format, binding, qty, rating, copyright_yr, language, num_pages, edition, publish_id, cover_img } = req.body

        const sql = `INSERT INTO book 
        (title, author_id, genre, format, binding, qty, rating, copyright_yr, language, num_pages, edition, publish_id, cover_img)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`

        const values = [
            title, author_id, genre, format, binding, qty, rating,
            copyright_yr, language, num_pages, edition, publish_id, cover_img
        ]

        con.execute(sql, values, (error, dbres) => {
            if (!error) {
                res.status(201).json({ message: 'Book added', id: dbres.insertId })
            } else {
                console.log('BOOK DAO ADD ERROR:', error)
                res.status(500).json({ error: 'Failed to add book' })
            }
        })
    },

    findBooksByAuthor: (res, id) => {
        con.execute(
            `SELECT b.book_id, b.title, a.author_name, b.genre, b.format, b.binding, b.qty, b.rating, 
            b.copyright_yr, b.language, b.edition, 
            p.publish_name, b.cover_img
            FROM book b
            JOIN author_author a USING (author_id)
            JOIN publish_publish p USING (publish_id)
            WHERE a.author_id = ?;`,
            [id],
            (error, rows) => {
                if (!error) {
                    res.json(rows.length === 1 ? rows[0] : rows)
                } else {
                    console.log('BOOK DAO AUTHOR ERROR: ', error)
                    res.status(500).json({ error: 'Failed to fetch books by author' })
                }
            }
        )
    },

    findBooksByPublish: (res, id) => {
        con.execute(
            `SELECT b.book_id, b.title, a.author_name, b.genre, b.format, b.binding, b.qty, b.rating, 
            b.copyright_yr, b.language, b.edition, 
            p.publish_name, b.cover_img
            FROM book b
            JOIN author_author a USING (author_id)
            JOIN publish_publish p USING (publish_id)
            WHERE p.publish_id = ?;`,
            [id],
            (error, rows) => {
                if (!error) {
                    res.json(rows.length === 1 ? rows[0] : rows)
                } else {
                    console.log('BOOK DAO PUBLISHER ERROR: ', error)
                    res.status(500).json({ error: 'Failed to fetch books by publisher' })
                }
            }
        )
    },

    update: (req, res, table) => {
        const id = req.params.id

        if (isNaN(id)) {
            return res.json({
                error: true,
                message: "id must be a number"
            })
        }

        if (Object.keys(req.body).length === 0) {
            return res.json({
                error: true,
                message: "no fields to update"
            })
        }

        const fields = Object.keys(req.body)
        const values = Object.values(req.body)

        const sql = `UPDATE ${table} 
        SET ${fields.map(field => `${field} = ?`).join(', ')} 
        WHERE ${table}_id = ?;`

        con.execute(sql, [...values, id], (error, dbres) => {
            if (!error) {
                res.send(`Changed ${dbres.changedRows} row(s)`)
            } else {
                console.log(`${table}Dao error:`, error)
                res.status(500).send('Error updating record')
            }
        })
    }
};

module.exports = bookDao;