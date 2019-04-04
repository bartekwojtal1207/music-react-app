// var nsHttp = require("http");
// var nsUrl = require("url");
// var nsPath = require("path");
// var nsFs = require("fs");
//
//
// var srv = nsHttp.createServer(function(req, res)
// {
//     var pathname = nsUrl.parse(req.url).pathname;
//
//     // check URL to send the right response
//     switch(pathname)
//     {
//         case "/favicon.ico":
//             res.end();
//             break;
//
//         case "/":
//             console.log("chuj");
//             HTTP_SendHtmlFile(res, nsPath.join(__dirname, "test.html"));
//             break;
//
//         case "/service":
//             let data = {
//                 name: 'tes'
//             }
//             HTTP_SendOK(res, data);
//             break;
//
//         default:
//             HTTP_SendNotFound(res);
//     }
// });
//
// // reads a file contents and sends, but if any error occur,
// // sends a 500 HTTP Status Code (Internal Server Error)
// function HTTP_SendHtmlFile(res, filepath)
// {
//     nsFs.readFile(filepath, function(err, data) {
//         if (err) {
//             HTTP_SendInternalServerError(res);
//             return;
//         }
//
//         HTTP_SendOK(res, data);
//     });
// }
//
// function HTTP_SendOK(res, body)
// {
//     res.writeHead(200, {"Content-type": "text/html"});
//     res.end(body);
// }
//
// function HTTP_SendInternalServerError(res)
// {
//     res.writeHead(500, {"Content-type": "text/html"});
//     res.end();
// }
//
// function HTTP_SendNotFound(res)
// {
//     res.writeHead(404, {"Content-type": "text/html"});
//     res.end();
// }
//
// srv.listen(3000);
// console.log(srv)
