import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../card/Card';
import '../card/Card.css';

export function Lister() {
    const data = useSelector(state => state.lister.redditData.data);
    const isLoading = useSelector(state => state.lister.isLoading);
    console.log(data.length);
    if (isLoading) {
        return <div id="loading"><h2>Loading...</h2></div>
    }
    if (data.length === 0) {
        return <div id="blankResuls"><p>Please enter a keyword to begin your Reddit search</p></div>
    }
    return (
        <div>
            {data.map(article =>
                <Card
                    key={article.id}
                    article={article}
                    className="card"
                />)
            }
        </div>)
}