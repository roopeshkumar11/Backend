const express = require("express");

const app = express();

let port = 8080;
app.listen(port, () => {
    console.log("app is listening on port", port);
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlstr = `<h1>welcome to the page</h1> @${username} and ${id}`;
    res.send(htmlstr);
});






app.use((req, res) => {
    res.send("root path");
});





