const axios = require('axios');
const { uuid } = require('uuidv4');

const fetchData = {
    keyword: "crypto",
    getData: async function () {
        const queryString = `?q=${this.keyword}`;
        const url = `https://www.reddit.com/search.json${queryString}`
        const response = await axios.get(url)
        return response.data.data;
    },
    formatData: async function () {
        const logResponse = await this.getData();
        newArray = [];
        let postId = uuid();
        const formatted = logResponse.children.map(post => newArray.push(
            {
                [postId]: {
                    title: post.data.title,
                    author: post.data.author_fullname,
                    upvotes: post.data.ups,
                    comments: post.data.num_comments,
                    permalink: post.data.permalink,
                    img: post.data.url
                }
            }
        ));
        return newArray;
    }
}

module.exports = { fetchData };

