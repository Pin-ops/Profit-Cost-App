import React from 'react';
import './App.css';
import store from './store';
import {Provider } from 'react-redux'
import CakeHook from './components/CakeHook'
import IceCreamHook from './components/IceCreamHook';
import ProfitCostHook from './components/ProfitCostHook';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <CakeHook />
            <br/>
            <hr/>
            <br/>
            <IceCreamHook />
            <br/>
            <hr/>
            <br/>
            <ProfitCostHook/>
        </div>
    </Provider>
  );
}

export default App;
