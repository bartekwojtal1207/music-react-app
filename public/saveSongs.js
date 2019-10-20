var nsHttp = require("http");
var nsUrl = require("url");
var nsPath = require("path");
var nsFs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
//
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.post('/service', function (req, res) {

    nsFs.appendFileSync("../src" + 'myList' + ".json", "chw222dp", function (e) {
        console.log('Saved!');
    });

    HTTP_SendOK(res, 'success, your songs are saved !');
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