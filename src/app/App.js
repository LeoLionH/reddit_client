import React from 'react';
import './App.css';
import { store } from './store';
import { Lister } from '../features/lister/Lister'
import { useSelector } from 'react-redux';

console.log(store.getState())
function App() {
  console.log(useSelector(state => state.lister.redditData))
  return (
    <div className="App">
      <header className="Appheader">
        <p>App</p>
        <Lister />
      </header>
    </div>
  );
}

export default App;
