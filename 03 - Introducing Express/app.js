/* Note - **** use npm install to add node_modules to this project before running this file *****
        - Use npm start to start the project as we have installed nodemon         
*/
// Express is used to simplify all the sending request / receiving request and many more functionalities

const express = require('express')   //importing express
const app = express()       // storing features of express in a variable
const bodyParser = require('body-parser')  //Parse incoming request bodies in a middleware 

/*  
    app.use is a middleware that accepts 3 parameters   - 
        request - req . Is used to get request
        response - res . Is used to send response
        next     - next . Is used to go to next middleware  
*/

app.use(bodyParser.urlencoded({ extended: false }))


/*
    Get and Post also accepts a route or a path where the response should be sent
*/

app.post('/user', (req, res, next) => {
    res.send('<h1>User:' + req.body.username + '</h1>')
})

app.get('/', (req, res, next) => {
    res.send('<form action="/user" method="POST"><input type="text" name="username" placeholder="Username"> <input type="submit"></form>')
})


app.listen(5000)        // using listen feature of express 