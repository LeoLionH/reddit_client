import { SearchBox } from "./SearchBox";
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe("SearchBox submits", () => {
    it("submits", () => {
        const handleSubmit = jest.fn(() => { return "test" });
        const e = { target: { value: "test" } };
        const handleChange = jest.fn((e) => {
            const value = e.target.value;
        })
        const { queryByTestId } = render(
            <Provider store={store}>
                <SearchBox
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                />
            </Provider>
        );
        fireEvent.click(queryByTestId('search-button'));
        expect(handleSubmit).toBeCalled();
        fireEvent.change(queryByTestId('searchInput'), { target: { value: "test" } })
        expect(handleChange).toBeCalled();
    })
})