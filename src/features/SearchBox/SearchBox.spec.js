import { SearchBox } from "./SearchBox";
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe("SearchBox submits", () => {
    it("Form submits with text", () => {
        const handleSubmit = jest.fn(() => { return "test" });
        const e = { target: { value: "test" } };
        const handleChange = jest.fn().mockImplementation((e) => {
            e.preventDefault();
        })
        const { queryByTestId } = render(
            <Provider store={store}>
                <SearchBox
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                />
            </Provider>
        );
        fireEvent.change(queryByTestId('searchInput'), { target: { value: "test" } })
        fireEvent.submit(queryByTestId('searchForm'));
        expect(handleSubmit).toBeCalled();
        expect(handleChange).toBeCalled();
    })
})