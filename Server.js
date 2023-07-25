// Import Express JS to the project(requrir() = import in java)
const ex = require('express');

// Create an Object from express " ex() " 
const app = ex();

// API

app.get("/", (req, res) => {
        res.send('<html><body> <h1> Inside the GET method... This is the first API. </h1> </body></html>')
});

app.post("/", (req, res) => {
        res.send('<html><body> <h1> HEllo POST method... This is the second API as PUT Method . </h1> </body></html>')
});

app.put("/", (req, res) => {
        res.send('<html><body> <h1> This is PUT method... This is the second API as PUT Method . </h1> </body></html>')
});

app.delete("/", (req, res) => {
        res.send('<html><body> <h1> This is DELETE method... This is the second API as PUT Method . </h1> </body></html>')
});

// Start Express server and after the server is stating display a message in the log
app.listen(5000, ()=> { console.log("My First Express JS Project At AUPP-KU")}); 
