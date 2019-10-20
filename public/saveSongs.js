var nsHttp = require("http");
var nsUrl = require("url");
var nsPath = require("path");
var nsFs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/lista', function (req, res) { // pobiera zapisane jsona

    nsFs.readFile('../myList.json', 'utf8', (err, jsonString) => {
        HTTP_SendOK(res, jsonString)
    })
});


app.post('/service', function (req, res) { // zapisuje dane do obiektu

    nsFs.readFile('../myList.json', 'utf8', (err, jsonString) => {
        const obj = JSON.parse(jsonString);
        const extendedJSON = Object.assign(obj, req.body);
        const myJSON = JSON.stringify(extendedJSON);

        nsFs.writeFileSync("../myList.json",  myJSON, function (e) {
            HTTP_SendOK(res, 'zapinsao');
        });
    });
});


function HTTP_SendOK(res, body)
{
    res.writeHead(200, {"Content-type": "text/html"});
    res.end(body);
}

function HTTP_SendInternalServerError(res)
{
    res.writeHead(500, {"Content-type": "text/html"});
    res.end();
}

function HTTP_SendNotFound(res)
{
    res.writeHead(404, {"Content-type": "text/html"});
    res.end();
}

app.listen(8080);

console.log('running save songs on 8080 poort');