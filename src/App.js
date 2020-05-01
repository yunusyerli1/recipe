import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';




class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Header /> 
          <RecipeList/>
      </div>
    );
  }
}

export default App;