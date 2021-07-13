const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.h7tlf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const allDataCollection = client.db(`${process.env.DB_NAME}`).collection("visualizedAllData");
  // perform actions on the collection object
  app.post('/postAllData', (req, res) => {
      
  })
  
});



app.get('/', (req, res) => {
  res.send('Hello World! This is Data Visualization')
})

app.listen(3600)