/**
 * ch05/recipes-app-01/src/components/Menu.js
 */

import React from "react";
import Recipe from "./Recipe";

export default function Menu(props){
    return (
        <section>
            <header>
            <h1>{props.title}</h1>
            </header>
            <div className="recipes">
            {
                props.recipes.map( (recipe, i) => (
                <Recipe key={i} {...recipe} />
                ))
            }
            </div>
        </section>
    );
}