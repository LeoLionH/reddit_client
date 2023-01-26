import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { redditThunk } from './listerSlice';

export function Lister() {
    const data = useSelector(state => state.lister.redditData);
    const isLoading = useSelector(state => state.lister.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(redditThunk());
    }, [dispatch])
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <p>See the data:</p>
            {data.map(id => <p key={id.title}>{id.title}</p>)}
        </div>)
}