const io = require('socket.io')();
const fs = require('fs')

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        setInterval(() => {
            client.emit('saveSongs');
        }, interval);
    });
});

const port = 8000;
io.listen(port);
console.log(' on portasadsadsaddasd ', port);