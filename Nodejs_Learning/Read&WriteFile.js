const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

async function logfile(){
    try{
    const filePath = resolve('./index.html');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
    }
    catch{
        console.log("error occures")
    }
}

logfile()

/*
import {readFile, writeFile} from 'fs/promises';

const filePath = new URL('./index.html', import.meta.url);
let contents = await readFile(filePath, { encoding: 'utf8' });
console.log(typeof contents);

const data = {
  title: 'my title',
  body: 'my data'
};

for(const [key, value] of Object.entries(data))//object.entries give you array of key-value pair
  contents = contents.replace(`{${key}}`, value);
}//wherever you see {} replace with the values☝️

await writeFile(new URL('./index.html', import.meta.url), contents);

*/ 