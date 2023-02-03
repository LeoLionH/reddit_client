import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../card/Card';
import '../card/Card.css';

export function Lister() {
    const data = useSelector(state => state.lister.redditData);
    const isLoading = useSelector(state => state.lister.isLoading);
    if (isLoading) {
        return <div id="loading"><h2>Loading...</h2></div>
    }
    return (
        <div>
            {data.data.map(article =>
                <Card
                    key={article.id}
                    article={article}
                    className="card"
                />)
            }
        </div>)
}