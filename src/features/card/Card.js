import React from 'react';
import './Card.css'

export function Card(props) {
    const { title, permalink, author, upvotes, comments } = props.article;
    const url = `https://www.reddit.com/${permalink}`;

    return (
        <div className="cardContainer" data-testid="card" >
            <a href={url} className="card mb-4 rounded-3 shadow-sm">
                <h3 className="card-title pricing-card-title">{title}</h3>
                <div className="cardListParent">
                    <div className="cardList" id="Author">
                        <h5 className="" data-testid="Author">Author</h5>
                        <p className="" data-testid="AuthorResult">{author}</p>
                    </div>
                    <div className="cardList" id="Upvotes">
                        <h5 className="" data-testid="Upvotes">Upvotes</h5>
                        <p className="" data-testid="UpvotesResult">{upvotes}</p>
                    </div>
                    <div className="cardList" id="Comments">
                        <h5 className="" data-testid="Comments">Comments</h5>
                        <p className="" data-testid="CommentsResult">{comments}</p>
                    </div>
                </div>

            </a>
        </div>
    )
}