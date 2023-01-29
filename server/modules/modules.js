const axios = require('axios');

const fetchData = {
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

        logResponse.children.map(post => newArray.data.push(
            {
                title: post.data.title,
                author: post.data.author_fullname,
                upvotes: post.data.ups,
                comments: post.data.num_comments,
                permalink: post.data.permalink,
                img: post.data.url

            }
        ));
        //console.log(newArray);
        let oldArray = newArray;
        return oldArray;
    }
}


module.exports = { fetchData };

