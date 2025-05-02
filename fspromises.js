//Using promises
//1.
const fs = require('fs').promises
async function run() {
    //Writing to afile
    await fs.writeFile('files/file2.txt', 'A second file of nodejs')
    console.log("Finished writing");
    //Reading a file
    const data = await fs.readFile('files/file.txt', 'utf-8')  
    console.log("Finished reading file:", data);
    
}

run()

//2.
const read = require('fs').promises

async function readConfig() {
    try {
        const data = await read.readFile('files/config.json', 'utf-8')
        console.log("File contents:", JSON.parse(data));
        
    } catch (err) {
        console.log("Error reading file:", err)
    }
    
}
readConfig()

//3
const write = require('fs').promises
async function writeLog() {
    try {
        const log = 'User logged in at:' + new Date()
        await write.writeFile('files/msg.log', log)
        console.log("Log written successfully");
        
    } catch (error) {
        console.log('Error writing content in log')
    }
}

writeLog()

//4. Listing files
const listDir = require('fs').promises

async function listFiles() {
    try {
        
    } catch (error) {
        
    }
    
}