const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('alive and kickin!')
})

app.listen(7890, () => {
  console.log('health check listening on 7890')
})
