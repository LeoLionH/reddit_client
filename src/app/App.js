import React from 'react';
import './App.css';
import { store } from './store';
import { Search } from '../features/search/Search';
import './App.css';

console.log(store.getState())
function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
