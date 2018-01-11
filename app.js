const express = require('express')
const mysql = require('mysql')
const app = express()
const http = require('http').Server(app)

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'maggan'
})
connection.connect()

connection.query('SELECT * FROM Items', (err, rows, fields) => {
  if (err) throw err

  console.log(rows)
  console.log(fields)
})

app.use('/', express.static(__dirname))

app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html')
})

http.listen(8080, function(){
  console.log('listening on *:8080')
})







connection.end()
