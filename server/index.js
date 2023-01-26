const express = require("express");
const { fetchData } = require('./modules/modules')

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", async (req, res) => {
    const data = await fetchData.formatData();
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
