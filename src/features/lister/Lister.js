import React from 'react';
import { useSelector } from 'react-redux';

export function Lister() {
    const data = useSelector(state => state.lister.redditData)
    return (
        <div>
            <p>See the data:</p>
            {data}
        </div>
    )
}