// dotenv file require

require('dotenv').config()

// Other imports
const express = require('express');
const app = express();
const port  = 3000;
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Database config
var config = {
    server:'localhost',
    authentication:{
        type:'default',
        options:{
            userName:process.env.DB_USER,
            password:process.env.DB_PASSWORD
        }
    },
}

var connection = new Connection(config);

connection.on('connect', function(err){
    
    if(err){
        console.log(err)
        return;
    }

    console.log("Connection established!")
})

connection.connect();

app.get('/',(req, res) => {
    res.json({"message":"ok"})

    executeStatement()
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

function executeStatement() {
    request = new Request("select 123, 'hellow'", function(err, rowCount){
        if(err){
            console.log("Request error", err)
        }else{
            console.log(`Rows found ${rowCount}`)
        }
        connection.close();
    })

    request.on("row" , function(cols){
        cols.forEach(function(column){
            if(column.value === null){
                console.log("NULL")
            }else{
                console.log(column.value)
            }
        })
    })

    connection.execSql(request)
}