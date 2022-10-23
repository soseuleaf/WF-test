/**
 * ch05/recipes-app-01/src/components/Recipe.js
 */

import React from "react";

export default function Recipe({name, ingredients, steps}){
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <ul className="ingredients">
        {ingredients.map( (ingrd, i) => (<li key={i}>{ingrd.name}</li>) )}
      </ul>
      <section>
        <h3>recipe</h3>
        <ul>
          {steps.map( (step, i) => (<p key={i}>{step}</p>) )}
        </ul>
      </section>      
    </section>        
  );
}