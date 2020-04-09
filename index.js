const serverless = require('serverless-http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/expenses/', (request, response) => {

    // call service class to get me the expenses data

    // service call will as data class to make the actual ORM call to DB

    response.send([])

});

module.exports.handler = serverless(app)