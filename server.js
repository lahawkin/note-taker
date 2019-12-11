// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = process.env.PORT || 8080;

// Create our server
var server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});
// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  var path = req.url; 
  switch (path) {

    case "/Home":
      return displayHome(res);

    case "/Notes":
      return displayNotes(res);

    default:
      return display404(path, res);
  }
}

function displayHome(res) {
  fs.readFile(__dirname + "/public/index.html", function (err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });

}

function displayNotes (res) {
  fs.readFile(__dirname + "/public/notes.html", function (err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function display404(url, res) {

  myHTML = "ugh"
  // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
  res.writeHead(404, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}


