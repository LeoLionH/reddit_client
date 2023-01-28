const axios = require('axios');

const fetchData = {
    getData: async function (keyword) {
        const queryString = `?q=${keyword}`;
        const url = `https://www.reddit.com/search.json${queryString}`;
        console.log(url);
        const response = await axios.get(url)
        return response.data.data;
    },
    formatData: async function (keyword) {
        const logResponse = await this.getData(keyword);
        newArray = [];
        const formatted = logResponse.children.map(post => newArray.push(
            {
                title: post.data.title,
                author: post.data.author_fullname,
                upvotes: post.data.ups,
                comments: post.data.num_comments,
                permalink: post.data.permalink,
                img: post.data.url

            }
        ));
        return newArray;
    }
}

module.exports = { fetchData };

