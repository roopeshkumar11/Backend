const express = require("express");

const port = 3000;

const app = express();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    res.send(q);
});
