const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/getJSON', (req, res) => {
  res.json({ data: 'data result' + Math.random() })
})


app.all('/userJSON', (req, res) => {
  res.json({ data: ["A" + Math.random() , "B" + Math.random()] })
})



module.exports = app