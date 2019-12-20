const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('../routes/api/items');

const app = express();

//extra
// mongoose.set('useUnifiedTopology', true);
// .connect(db, { useNewUrlParser: true })

mongoose.set('useUnifiedTopology', true);

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('../config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
