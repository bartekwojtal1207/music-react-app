var nsHttp = require("http");
var nsUrl = require("url");
var nsPath = require("path");
var nsFs = require("fs");
const express = require('express');
const bodyParser = require('body-parser')
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


    res.send('asdasdasda');
});

var srv = nsHttp.createServer(function(req, res)
{
    var pathname = nsUrl.parse(req.url).pathname;

    // check URL to send the right response
    switch(pathname)
    {
        case "/favicon.ico":
            res.end();
            break;

        case "/":
            console.log("asdsada")
            HTTP_SendHtmlFile(res, "./index.html");
            break;
        case "/service":
            nsFs.appendFileSync("./" + 'myList' + ".json", "chwd111p", function (e) {
                console.log('Saved!');
            });
            console.log(res)
            //HTTP_SendHtmlFile(res, "./index.html");
            break;

        default:
            HTTP_SendNotFound(res);
    }
});

// reads a file contents and sends, but if any error occur,
// sends a 500 HTTP Status Code (Internal Server Error)
function HTTP_SendHtmlFile(res, filepath)
{
    nsFs.readFile(filepath, function(err, data) {
        if (err) {
            HTTP_SendInternalServerError(res);
            return;
        }

        HTTP_SendOK(res, data);
    });
}

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
// console.log(srv)
console.log('test')