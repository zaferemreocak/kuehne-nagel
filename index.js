const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const serviceOne = require('./src/fetch-and-filter')
const serviceTwo = require('./src/count-by-year')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/data', async function (request, response) {
    let body = await serviceOne.fetchAndFilter(request.query.from, request.query.to);
    response.status(200).json(body);
})
app.post('/count-by-year', serviceTwo.countByYear)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})