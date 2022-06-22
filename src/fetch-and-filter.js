const Pool = require('pg').Pool
const pool = new Pool({
    host: 'local_postgres',
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
    port: '5432'
});

async function fetch() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM kn_data', (error, data) => {
            if (error) {
                reject(error);
            }
            resolve(data.rows);
        })
    })
}

function filter(list, from, to) {
    return list.filter(data =>
        data.id
        && data.name.toLowerCase().includes('test')
        && data.code === '025'
        && (data.date > from && data.date < to)
    )
}

function makeRequest(data) {
    return new Promise((resolve, reject) => {
        let request; let body=[]
        let options = {
            hostname: 'localhost',
            port: 3000,
            path: '/count-by-year',
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        };
        let callback = function (response){
            response.on('data', chunk => {
                body.push(chunk);
            });

            response.on('end', () => {
                try {
                    body = Buffer.concat(body).toString();
                } catch(error) {
                    reject(body);
                }
                resolve(body);
            })
        }

        request = require('http').request(options, callback);
        request.write(JSON.stringify(data));

        request.on('error', error => {
            reject(error);
        });

        request.end();
    });
}

async function fetchAndFilter(from, to) {
    let fromDate = new Date(from);
    let toDate = new Date(to);
    let filteredList = await fetch()
        .then(list => filter(list, fromDate, toDate))
        .catch(error => console.log(error));

    // response.status(200).json(await makeRequest(filteredList));

    return await makeRequest(filteredList);
}

module.exports = {
    fetchAndFilter
}