const fs = require('fs');
const transformStream = require('stream');
let fileStream = fs.createReadStream(__dirname + "/index.html");
let outputStream = process.stdout;

// readStream.pipe(writeStream)
let middleStream = new transformStream.Transform({
    transform(chunk, enc, nextCB) {
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(nextCB, 1000);
        // nextCB();
        //here(line 10) the middlestream is also returned as Readable file/stream in the end
    }
});

// fileStream.pipe(outputStream);
let newReadableStream = fileStream.pipe(middleStream);
newReadableStream.pipe(outputStream);

// This code is using Node.js streams to read data from a file, transform it to uppercase, and then output it to the console. The Transform stream is used to modify the data as it's being read and written. The setTimeout function is used to delay the callback function, simulating asynchronous operations. The commented-out lines show alternative ways to pipe streams directly without transformation. Please let me know if you need further explanation or help with this code. 😊