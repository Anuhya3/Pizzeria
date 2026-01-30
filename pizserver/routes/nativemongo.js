var express = require('express');
var router = express.Router();
const mngc = require('mongodb').MongoClient;

router.get('/pizza', function (req, res, next) {
    mngc.connect("mongodb://127.0.0.1:27017/pizzeria", { useNewUrlParser: true,
    useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        const db = client.db("pizzeria");
        const cl = db.collection('pizza');
        cl.find().toArray((err, docs) => {
            if (err) throw err;
            res.send(docs);
        });
    });
});

router.get('/toppingsandingredients', function (req, res, next) {
    mngc.connect("mongodb://127.0.0.1:27017/pizzeria", { useNewUrlParser: true,
    useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        const db = client.db("pizzeria");
        const cl = db.collection('toppingsandingredients');
        cl.find().toArray((err, docs) => {
            if (err) throw err;
            res.send(docs);
        });
    });
});

module.exports = router;
