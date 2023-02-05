import { Card } from './Card';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe("test card render", () => {
    it("renders individual card", () => {
        const key = "test_key";
        const article = {
            title: "How to test",
            permalink: "https://test.com",
            author: "Leo Hardy",
            upvotes: "0",
            comments: "1"
        }
        const { queryByTestId } = render(
            <Card article={article} key={key} />
        )
        expect(queryByTestId("Author")).toBeTruthy();
        expect(queryByTestId("Upvotes")).toBeTruthy();
        expect(queryByTestId("Comments")).toBeTruthy();
        expect(queryByTestId("AuthorResult").innerHTML).toBe("Leo Hardy");
        expect(queryByTestId("UpvotesResult").innerHTML).toBe("0");
        expect(queryByTestId("CommentsResult").innerHTML).toBe("1");
    })
})


/*
data-testid="Author"
data-testid="Upvotes"
data-testid="Comments"
data-testid="AuthorResult"
data-testid="UpvotesResult"
data-testid="CommentsResult"*/