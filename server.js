const io = require('socket.io')();
const port = 8000;
const fs = require('fs');
io.listen(port);

let oldData = {};

io.sockets.on('connection', (client) => {
    console.log('connection');

    client.on('putSongsTOFile', (data) => {
        console.log(data.data)
        const ids = data.data;

        // fs.readFile("public/" + 'myList' + ".json", "utf8",  (err, data) => {
        //     if (err) throw err;
        //     console.log('reading')
        //     oldData = { data };
        //     return oldData
        // });


        fs.appendFile("public/" + 'myList' + ".json", JSON.stringify(data.data), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });
});

console.log(' on fire  ', port);