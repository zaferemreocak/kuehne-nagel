const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const db = require('./pg-client/pg-client')

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get('/', (request, response) => {
    response.json({info: 'Zafer Emre Ocak'})
});

app.get('/data', db.getData)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})