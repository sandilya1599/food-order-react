import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header/Header';
import Content from './Content/Content';
import Meals from './Meals/Meals';
import React from 'react';

import MealsListed from './Meals/MealsListed';

import ItemsAdded from './Context/ItemData';
import { useReducer } from 'react';


function App() {

  const initialState = [];
  MealsListed.forEach(meal => { initialState.push(meal); });

  const dispatcherToCall = (index, amount) => {
    dispatchMeals({ type: 'USER_INP', index: index, amount: amount });
  }

  const reducer = (state, action) => {
    const newState = state;

    if (action.type === 'USER_INP') {
      newState[action.index].amount = parseInt(action.amount);
    }
    return [...newState];
  }

  const [mealsList, dispatchMeals] = useReducer(reducer, initialState);


  return (
    <ItemsAdded.Provider value={mealsList}>
      <Header></Header>
      <Content></Content>
      <Meals mealsList={mealsList} dispatcherToCall={dispatcherToCall}></Meals>
    </ItemsAdded.Provider>
  );
}

export default App;
