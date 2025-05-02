// const http = require('http')
// const server = http.createServer((req, res) =>{
//     res.write('Heloo, NodeJS!');
//     res.end()
// })

// server.listen(3000, () =>{
//     console.log('Server running on http://localhost:3000')
// })

//Reading files with fs.readfile method
//Ex1.
const fs = require('fs')
fs.readFile('files/example.txt', 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})

//Ex2.
const readfs = require('fs')
readfs.readFile('files/config.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error loading:", err);
        return;
        
    } else {
        console.log("File contents:", JSON.parse(data))
    }
})

//writing to a file using fs.writefile
//Ex1.
const writefs = require('fs')
const log = 'User logged in at:' + new Date()
writefs.writeFile('files/app.log', log, (err) => {
    if (err) {
        console.log("Error writing file:", err)
        return
    }
    console.log("Log was successfully written");
    
})

//Ex2.
const writefs2 = require('fs')
writefs2.writeFile("files/file.txt", "This is learning nodejs", (err) => {
    if (err) throw err;
    console.log("Error was found while writing");
    
})

//listing directories using fs.readdir
const dir = require('fs')
dir.readdir('./files', (err, files) => {
    if (err) throw err;
    console.log("Directory content:", files);
    
})