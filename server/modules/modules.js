const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

let fetchData = {
    getData: async function (keyword) {
        const url = `https://www.reddit.com/search.json?q=${keyword}`;
        console.log(url);
        const response = await axios.get(url)
        return response.data.data;
    },
    formatData: async function (keyword) {
        //Check keyword is valid
        const queryKeyword = keyword === ("undefined") ? "gaming" : keyword;
        console.log('else has begun');
        const logResponse = await this.getData(queryKeyword);
        let newArray = {
            meta: {
                keyword: queryKeyword,
                dateTime: Date.now()
            },
            data: []
        }
        //Search keyword

        logResponse.children.map(post => {
            let id = uuidv4();
            newArray.data.push(
                {
                    id: id,
                    title: post.data.title,
                    author: post.data.author_fullname,
                    upvotes: post.data.ups,
                    comments: post.data.num_comments,
                    permalink: post.data.permalink,
                    img: post.data.thumbnail

                })
        });
        fetchData = newArray;
        return fetchData;
    },
    checkCache: async function (cacheVar, keyword) {
        console.log('cacheVar is ' + cacheVar);
        console.log('keyword is' + keyword);
        if (cacheVar.meta.keyword === undefined || keyword === undefined) return false
        if (
            cacheVar.meta.keyword.toLowerCase() === keyword.toLowerCase()
            && (cacheVar.meta.dateTime - Date.now() <= 300000)) return true;
        else false
    }
}


module.exports = { fetchData };

