const io = require('socket.io')();
const port = 8000;
const fs = require('fs');

io.listen(port);
io.sockets.on('connection', (client) => {
    console.log('connection');

    client.on('putSongsTOFile', (interval) => {
        fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });
});

console.log(' on fire  ', port);