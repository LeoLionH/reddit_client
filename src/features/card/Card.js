import React from 'react';
import './Card.css'

export function Card(props) {
    const { title, permalink, author, upvotes, comments } = props.article;
    const url = `https://www.reddit.com/${permalink}`;

    return (
        <div className="cardContainer" data-testid="card" >
            <a href={url} className="card mb-4 rounded-3 shadow-sm">
                <h3 className="card-title pricing-card-title">{title}</h3>
                <table className="row justify-content-center">
                    <thead>
                        <tr className="row justify-content-center">
                            <th className="col-3" data-testid="Author">Author</th>
                            <th className="col-3" data-testid="Upvotes">Upvotes</th>
                            <th className="col-3" data-testid="Comments">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row justify-content-center">
                            <td className="col-3" data-testid="AuthorResult">{author}</td>
                            <td className="col-3" data-testid="UpvotesResult">{upvotes}</td>
                            <td className="col-3" data-testid="CommentsResult">{comments}</td>
                        </tr>
                    </tbody>
                </table>
            </a>
        </div>
    )
}