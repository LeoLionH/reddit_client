import React from 'react';
import { render } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import App from './App';
import configureStore from 'redux-mock-store';

describe("Check app", () => {
  it("should render search box", () => {
    const { queryByText } = render(
      <Provider store={store}>
        <App />
      </Provider>);
    expect(queryByText("Loading...")).toBeTruthy();
  })
})
