'use strict';
import openSocket from "socket.io-client";
const io = openSocket('http://localhost:8000');
// var socket = io();

// Do this as the first thing so that any code reading it knows the right env.
// Ensure environment variables are read.
// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
});

function AddSong(interval, cb) {
    io.emit('saveSongsToFile')
}

export { AddSong }