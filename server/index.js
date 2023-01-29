const express = require("express");
const { fetchData } = require('./modules/modules')
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(
    __dirname, '../build')));

app.get("/api", async (req, res) => {
    const keyword = req.query.keyword;
    const data = await fetchData.formatData(keyword);
    res.json(data);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,
        '../build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
