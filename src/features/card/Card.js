import React from 'react';

export function Card(props) {
    const { title, permalink, img } = props.article;
    const url = `https://www.reddit.com/${permalink}`;
    return (
        <a href={url}>
            <h3>{title}</h3>
        </a>
    )
}