const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({ origin: "http://localhost:5173" }));

app.get("/fruit", function (req, res) {
    const fruitname = req.query.fruitname;
    console.log("fruit name:", fruitname);

    
    const output = [` ${fruitname}`];

    res.send(output);
});

app.listen(PORT, function () {
    console.log(`Server started on port ${PORT}...`);
});