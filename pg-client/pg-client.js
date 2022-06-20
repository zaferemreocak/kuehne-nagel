const Pool = require('pg').Pool
const pool = new Pool({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
    port: '5432'
})

const getData = (request, response) => {
    pool.query('SELECT * FROM kn_data', (error, results) => {
        console.log(error)
        console.log(results)
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
};

module.exports = {
    getData
}