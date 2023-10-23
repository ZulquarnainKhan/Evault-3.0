// const express = require('express')
// const app  =express()
// const port = 3134;

// const mongoDB = require("./db");
// mongoDB;

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3135");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

// app.get('/',(req,res)=>{
//     res.send("Hellow World this the start");
// })

// app.listen(port , ()=>{
//     console.log(`App running on port: ${port}`)
// })

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());

const mongoURI = 'mongodb://Zulquarnain:zulquar20112003@ac-oeqp9l2-shard-00-00.fvihrvg.mongodb.net:27017,ac-oeqp9l2-shard-00-01.fvihrvg.mongodb.net:27017,ac-oeqp9l2-shard-00-02.fvihrvg.mongodb.net:27017/EvaultBERN?ssl=true&replicaSet=atlas-t5w81h-shard-0&authSource=admin&retryWrites=true&w=majority'


// Replace 'your-mongodb-uri' with your actual MongoDB Atlas connection URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  // Define your Mongoose schema and model
  const recordSchema = new mongoose.Schema({
    _id: String,
    // CategoryName: String,
    name: String,
    type: String,
    file: String,
    // options: Array,
    // description: String

    // Add other fields as needed
  });

  const records = mongoose.model('archives', recordSchema);

  // Express route to fetch data
  app.get('/api/records', async (req, res) => {
    try {
      const data = await records.find({});
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
