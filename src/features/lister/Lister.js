import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { redditThunk } from './listerSlice';
import { Card } from '../card/Card';
import { Search } from '../search/Search';
import '../card/Card.css';

export function Lister() {
    const data = useSelector(state => state.lister.redditData);
    console.log(data)
    const isLoading = useSelector(state => state.lister.isLoading);
    const keywordState = useSelector(state => state.search.keyword);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(redditThunk());
    }, [dispatch]);
    const submitKeyword = (keyword) => {
        dispatch(redditThunk(keyword));
    }

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <Search submitKeyword={submitKeyword} />
            {data.data.map(article =>
                <Card
                    key={article.id}
                    article={article}
                    className="card"
                />)
            }
        </div>)
}