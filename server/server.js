const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
let app = express();

// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// });

// app.use((req, res, next) => {
//     console.log(req.originalUrl);
//     next();
// });

app.use(bodyParser.urlencoded({extended: false}));

app.post('/formsubmissions', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('thank you')
});

app.use(express.static(path.join(__dirname, '../public'))); 

app.listen(3000);