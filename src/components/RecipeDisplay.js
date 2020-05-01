import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const API_KEY = "f59c392be57fd4de837a53f23c0c47c1";
const API_ID = "543163e8";

class RecipeDisplay extends Component {
    state = {
        activeRecipe: []
    }


    componentDidMount =async () => {

    const title=this.props.location.state.recipe;
    const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await req.json();
   this.setState({
       activeRecipe:data.hits[0].recipe
   });
    console.log(this.state.activeRecipe);
    }
    
    render() {
        const {activeRecipe} =this.state;
        return (
            <div className="container m-3">
                {
                    this.state.activeRecipe.length!==0 &&
                        <div className="active-recipe">
                            <img className="active-recipe__img" src={activeRecipe.image} alt={activeRecipe.label}/>
                            <h3 className="active-recipe__title">{activeRecipe.label}</h3>
                            <h4 className="active-recipe__publisher">
                            Publisher: <span>{activeRecipe.source}</span>
                            </h4>
                            <p className="active-recipe__website">
                            Website: <span><a href={activeRecipe.shareAs}>{activeRecipe.shareAs}</a></span>
                            </p>
                            <button className="active-recipe__button">
                                <Link to="/">Go Home</Link>
                            </button>
                        </div>
                }
            </div>
        )
    }
}
export default  RecipeDisplay;

