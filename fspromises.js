//Using promises
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