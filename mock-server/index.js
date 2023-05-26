const express = require('express');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/api', require('./ilt-api'));

const port = process.env.PORT || 8070;
app.listen(port);


