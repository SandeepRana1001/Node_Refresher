const userName = "Node JS"
//importing file system module
const fs = require('fs')

// To run this file use  - node app.js

// This statement below will print the value of userName
//console.group(userName)

// This alert statement below won't work as it is not supported by Node Js
// alert("Go")    

// This statement below will create a file in the same directory
fs.writeFile('user-data.txt', 'username : ' + userName, (err) => {
    if (err) {
        console.log('There is some error in your code')
        return;
    }
    console.log('Cool! Your File Has Been Created')
})
