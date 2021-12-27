const express = require('express')
const calculatePercentageChange = require('./helpers/calculatePercentageChange')
const app = express()

app.get('/', (req, res) => {
    const baseValue = parseInt(req.query.baseValue)
    const newValue = parseInt(req.query.newValue)

    console.log(req.query)

    const percentageChange = calculatePercentageChange(baseValue, newValue);

    res.send({ percentageChange })

})


app.listen(2222, () => {
    console.log('App is listening at port 2222')
})

module.exports = app