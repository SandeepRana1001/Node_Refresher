const http = require('http')    // http module

// use node app.js command to run this file

//CreateServer Method creates a http server  and we can store the returned property on a variable
const server = http.createServer((req, res) => {
    console.log('INCOMING REQUEST')
    console.log(req.method, req.url)   // getting incoming request
    res.setHeader('Content-Type', 'text/plain')
    res.end('<h1>Success</h1>');   // send response back
})

//Using listen property we can listen to the server on a specific PORT
server.listen(5000)

// Rerun the server anytime you are making any changes in the file