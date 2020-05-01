import React, { Component } from 'react';
import Form from './Form';
import RecipeItem from './RecipeItem';

const API_KEY = "f59c392be57fd4de837a53f23c0c47c1";
const API_ID = "543163e8";


class RecipeList extends Component {
  state = {
    recipes : []
  }

  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName=e.target.elements.recipeName.value;
    const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=10`);
    const data = await api_call.json();
    this.setState({
      recipes: data.hits
    });
    console.log(this.state.recipes);
  }
componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({recipes});
}

componentDidUpdate = ( ) => {
    const recipes = JSON.stringify(this.state.recipes); //Local storage için state içindekileri stringe çevirmemiz gerekiyor 
    localStorage.setItem("recipes", recipes);
}


  render() {
    return (
      <div>
            <Form getRecipe={this.getRecipe} />
            <RecipeItem recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeList;