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
// const fs = require('fs')
// fs.readFile('files/example.txt', 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

//Ex2.
const fs = require('fs')
fs.readFile('files/config.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error loading:", err);
        return;
        
    } else {
        console.log("File contents:", JSON.parse(data))
    }
})

//writing to a file using fs.writefile
