import { Search } from './Search';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe("Check search", () => {
    it("should render search box", () => {
        const { queryByTestId, queryByPlaceholderText } = render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        expect(queryByTestId("search-button")).toBeTruthy();
        expect(queryByPlaceholderText("Search Reddit")).toBeTruthy();
    });
    it("updates on change", () => {
        const { queryByPlaceholderText } = render(
            <Provider store={store}>
                <Search />
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
                        <Search submitKeyword={requestSearch} />
                    </Provider>
                );
                const searchInput = queryByPlaceholderText("Search Reddit");
                fireEvent.change(searchInput, { target: { value: "" } });
                fireEvent.click(queryByTestId('search-button'));
                expect(requestSearch).not.toHaveBeenCalled();
            });
            it("trigger with query", () => {
                const requestSearch = jest.fn();
                const { queryByTestId, queryByPlaceholderText } = render(
                    <Provider store={store}>
                        <Search submitKeyword={requestSearch} />
                    </Provider>
                );
                const searchInput = queryByPlaceholderText("Search Reddit");
                fireEvent.change(searchInput, { target: { value: "Test" } });
                fireEvent.click(queryByTestId('search-button'));
                expect(requestSearch).toHaveBeenCalled();
            })
        })

    })
});

