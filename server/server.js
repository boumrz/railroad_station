const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db'); 
const app            = express();
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8000;

MongoClient.connect(db.url, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(client => {
    const db = client.db(); 
    require('./app/routes')(app, db);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
})
.catch(err => console.log(err));
