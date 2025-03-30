const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

let fruitList = [];

app.post("/fruit", (req, res) => {
    const { fruitname } = req.body;
    if (!fruitname) {
        return res.status(400).json({ error: "Fruit name is required" });
    }

    fruitList.push(fruitname);
    res.json({ message: "Fruit added", fruitList });
});

app.get("/fruit", (req, res) => {
    res.json(fruitList);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
