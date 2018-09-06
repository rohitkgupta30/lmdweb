var express = require('express')
var app = express()
var port = process.env.port || 5000;
app.set('port', port)

console.log("hello this is meeeeeeeeeee");
console.log(app.get('port'));
console.log("#################*******88");
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node ### app is running at localhost:" + app.get('port'))
})
