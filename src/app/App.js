import React from 'react';
import './App.css';
import { store } from './store';
import { Lister } from '../features/lister/Lister'
import { useSelector } from 'react-redux';
import './App.css';

console.log(store.getState())
function App() {
  console.log(useSelector(state => state.lister.redditData))
  return (
    <div className="App">
      <Lister />
    </div>
  );
}

export default App;
