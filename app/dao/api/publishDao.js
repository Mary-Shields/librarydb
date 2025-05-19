const con = require('../../config/dbconfig');

const publishDao = {
    table: 'publish_publish',

    findPublish: (res, table) => {
        con.execute(
            `SELECT publish_id, publish_name 
            FROM publish_publish 
            ORDER BY publish_id;`,
            (error, rows) => {
                if (!error) {
                    res.json(rows)
                } else {
                    console.log('PUBLISH DAO ERROR: ', error)
                }
            }
        )
    },

    findPublishById: (res, table, id) => {
        con.execute(
            `SELECT publish_id, publish_name 
            FROM publish_publish 
            WHERE publish_id = ?;`,
            [id], 
            (error, rows) => {
                if (!error) {
                    res.json(rows.length === 1 ? rows[0] : rows)
                } else {
                    console.log('PUBLISH DAO ERROR: ', error)
                }
            }
        );
    }
};

module.exports = publishDao;