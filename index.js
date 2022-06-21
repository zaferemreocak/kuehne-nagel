const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const serviceOne = require('./fetch-and-filter')
const serviceTwo = require('./count-by-year')

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get('/', (request, response) => {
    response.json({info: 'Zafer Emre Ocak'})
});

app.get('/data', serviceOne.fetchAndFilter)
app.post('/count-by-year', serviceTwo.countByYear)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})