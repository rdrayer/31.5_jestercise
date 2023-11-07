/** Command-line tool to generate Markov text. */
const fs = require('fs');
const markov = require('/markov');
const axios = require('axios');
const process = require('process');

function generateText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText());
}

function makeText(path) {
    fs.readFile(path, "utf8", function cb(err, data) {
        if (err) {
            console.error(`Cannont read file: ${path}: ${err}`);
            process.exit(1);
        }
        else {
            generateText(data);
        }
    });
}

let [method, path] = process.argv.slice(2);

if (method == "file") {
    makeText(path);
}
else {
    console.error(`unknown method: ${method}`);
    process.exit(1);
}