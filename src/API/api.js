'use strict';
import openSocket from "socket.io-client";
const  socket = openSocket('http://localhost:8000');



// Do this as the first thing so that any code reading it knows the right env.

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
});

// Ensure environment variables are read.
const fs = require('fs');


function subscribeToTimer(interval, cb) {

    socket.on('timer', function () {
        console.log(interval)
        console.log('asdasda')
    });

    socket.on('saveSongs', function () {

    });
    socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer }