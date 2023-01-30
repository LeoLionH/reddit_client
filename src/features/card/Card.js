import React from 'react';
import './Card.css'

export function Card(props) {
    const { title, permalink, img, author, upvotes, comments } = props.article;
    const url = `https://www.reddit.com/${permalink}`;
    if (img === "self" || img === "image" || img === "spoiler") {
        return (
            <div className="cardContainer">
                <a href={url} className="card mb-4 rounded-3 shadow-sm">
                    <h3 className="card-title pricing-card-title">{title}</h3>
                    <table className="row justify-content-center">
                        <tr className="row justify-content-center">
                            <th className="col-3">Author</th>
                            <th className="col-3">Upvotes</th>
                            <th className="col-3">Comments</th>
                        </tr>
                        <tbody>
                            <tr className="row justify-content-center">
                                <td className="col-3">{author}</td>
                                <td className="col-3">{upvotes}</td>
                                <td className="col-3">{comments}</td>
                            </tr>
                        </tbody>
                    </table>
                </a>
            </div>
        )
    }
    {/*else {
        return (
            <div className="cardContainer">
                <a href={url} className="card">
                    <img src={img} alt={title} />
                    <h3>{title}</h3>
                    <ul>
                        <li>{author}</li>
                        <li>{upvotes}</li>
                        <li>{comments}</li>
                    </ul>
                </a>
            </div>
        )
    }*/}

}