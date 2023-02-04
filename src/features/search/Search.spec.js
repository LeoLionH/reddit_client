import { Search } from './Search';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe("Check search component", () => {
    describe("render search box", () => {
        const { queryByTestId, queryByPlaceholderText } = render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        it("should render button + input", () => {
            expect(queryByTestId("search-button")).toBeTruthy();
            expect(queryByPlaceholderText("Search Reddit")).toBeTruthy();
            const searchInput = queryByTestId("searchInput");
            fireEvent.change(searchInput, { target: { value: "test" } })
            expect(searchInput.value).toBe("test");
        });
    });
});














/*it("updates on change", () => {
    const { queryByPlaceholderText } = render(
        <Provider store={store}>
            <SearchBox />
        </Provider>
    );
    const searchInput = queryByPlaceholderText("Search Reddit")
    fireEvent.change(searchInput, { target: { value: "test" } })
    expect(searchInput.value).toBe("test");
});
describe("Search button", () => {
    describe("empty query", () => {
        it("does not trigger handleSubmit function", () => {
            const requestSearch = jest.fn();
            const { queryByTestId, queryByPlaceholderText } = render(
                <Provider store={store}>
                    <SearchBox submitKeyword={requestSearch} />
                </Provider>
            );
            const searchInput = queryByPlaceholderText("Search Reddit");
            fireEvent.change(searchInput, { target: { value: "" } });
            fireEvent.click(queryByTestId('search-button'));
            expect(requestSearch).not.toHaveBeenCalled();
        });
        it("renders with keyword", () => {
            const handleSubmit = jest.fn();
            const { queryByTestId, queryByPlaceholderText } = render(
                <Provider store={store}>
                    <SearchBox onSubmit={handleSubmit} />
                </Provider>
            );
            const searchInput = queryByPlaceholderText("Search Reddit");
            fireEvent.change(searchInput, { target: { value: "Test" } });
            fireEvent.click(queryByTestId('search-button'));
            expect(handleSubmit).toBeCalled();
        })
    })

})*/


