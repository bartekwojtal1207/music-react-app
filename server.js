const io = require('socket.io')();
const port = 8000;
const fs = require('fs');
const axios = require('axios');
io.listen(port);

let oldData = {};

io.sockets.on('connection', (client) => {
    console.log('connection');
        client.on('putSongsTOFile', (data, e) => {
        // fs.readFile("public/" + 'myList' + ".json", "utf8",  (err, data) => {
        //     if (err) throw err;
        //     console.log('reading')
        //     oldData = { data };
        //     return oldData
        // });

        fs.appendFile("public/" + 'myList' + ".json", " " + JSON.stringify(data.data )+ "," , function (e) {
            console.log('Saved!');
        });



        axios.get("public/myList.json", {responseType: "stream"} )
            .then(response => {
// Saving file to working directory
                response.data.pipe(fs.createWriteStream("www.txt"));
            })
            .catch(error => {
                console.log(error);
            });
    });
});

console.log(' on fire  ', port);