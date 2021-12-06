const path = require('path');
const express = require('express');
const cors = require('cors'); //From youtube tutorial
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const publicPath = path.join(__dirname, '..', 'src');

const port = process.env.PORT || 3000;

const ritualRouter = require('./routes/rituals');
const edgeRouter = require('./routes/edges');

app.use(cors());
app.use(express.json());
app.use('/rituals', ritualRouter);
app.use('/edges', edgeRouter);

//app.use('static', express.static(publicPath));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
   console.log('MongoDB connection successful');
})

app.get('/static', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
   console.log('Server is up!');
});

