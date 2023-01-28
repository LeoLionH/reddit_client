const express = require("express");
const { fetchData } = require('./modules/modules')

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", async (req, res) => {
    const keyword = req.query.keyword;
    const data = await fetchData.formatData(keyword);
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
