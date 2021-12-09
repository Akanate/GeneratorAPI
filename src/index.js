const express = require('express')
const api = require('./generators/generator.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/numgen', async(req, res) => {
  try{
    const queriedNumber = Number(req.query.number)
    const generatedArray = await numGenerator(queriedNumber)
    res.send(generatedArray)
  }catch(e){
    console.log('Error',e)
  }
})

app.get('/alphagen', async(req, res) => {
    try{
      const queriedAlpha = parseInt(req.query.alpha)
      const generatedOutput = await alphaGenerator(queriedAlpha)
      res.send(generatedOutput).status(202)
    }catch(e){
      res.send(e).status(404)
    }

})

app.listen(port, () => {
  console.log('Server running!')
})
