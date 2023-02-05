const express = require("express");
const { fetchData } = require('./modules/modules')
const path = require("path");
const PORT = process.env.PORT || 3001;
let cacheVar = {
    meta: {
        keyword: "crypto",
        dateTime: Date.now()
    },
    data: []
}
const app = express();

console.log(__dirname);

app.use(express.static(path.resolve(
    __dirname, '../build')));

app.get("/api", async (req, res) => {
    const keyword = req.query.keyword;
    if (keyword === undefined || keyword === "") keyword === "gaming";
    const useCache = await fetchData.checkCache(cacheVar, keyword);
    if (useCache) { return res.json(cacheVar) }
    else {
        const data = await fetchData.formatData(keyword);
        cacheVar = data;
        res.json(data);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,
        '../build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
