const express = require("express");
const cors = require("cors");
const data = require("./sample.json");
const app = express();

app.use(express.json());
app.use(cors());


app.get('/photos', (req, res) => res.send(data.photos));
app.get('/comments', (req, res) => res.send(data.comments));
app.post('/comments', (req, res) => res.send(data.comments));


app.listen(3000, () => {
    console.log("Server Started at 3000");
  })








