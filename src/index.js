const fetch = require("node-fetch");

const extravagantDrinks = [];

//  punto 2 
// - replaced the value of the first letter from A to G on the fetch link 

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g')
.then(response => response.json())
.then(data => {
        cocktailList(data.drinks);
        extravagantCocktails(data.drinks);
        extravagantIngredients(extravagantDrinks);
        extravagantIngredientsQuantities(extravagantDrinks);
})


//  punto 3
// - total number of drinks starting with G
// - cocktail list of drinks starting with G

const cocktailList = (drinks) => {
        const drinksNames = [];

        drinks.map((drink) => {
                drinksNames.push(drink.strDrink);
        })

console.log(" total number of drinks starting with G", drinks.length);
console.log(" these are my G drinks", drinksNames.join("\n- "));
}

// punto 4
// logging the extravagant cocktails with more than 4 ingredients
const extravagantCocktails = (drinks) => {
      const drinksNames = [];

      drinks.map((drink) => {
              if(drink.strIngredient5) {
                extravagantDrinks.push(drink)
                      drinksNames.push(drink.strDrink)
              }
      })

 console.log( " these are my extravagant cocktails", drinksNames.join("\n- "))     
}

// punto 5
// parse the list of the extravagant cocktails and its ingredients and log the results

const extravagantIngredients = (drinks) => {
        const extravagantDrinksDetails = [];

        drinks.map((drink) => {
                const ingredients = [];

                // I've decided to use no. 15 in the JSON obj because I noticed that 
                // all drinks have a maximum of 15 ingredients 
                for( let i = 1; i <= 15; i++){

                        // Since it's difficult to access it I am obteining the value of this property in a dynamic way
                        if(drink[`strIngredient${i}`]) {
                                ingredients.push(drink[`strIngredient${i}`]);
                        }
                        else {
                                break;
                        }
                } 

                extravagantDrinksDetails.push({
                        name:drink.strDrink,
                        id:drink.idDrink,
                        ingredients:ingredients,
                })
        })

console.log( "These are my ED with extravagants ingredients", extravagantDrinksDetails);

}


// punto 6
// I am repeting the code snippet from punto 5 and adding the quantity per ingredient

const extravagantIngredientsQuantities = (drinks) => {
        const extravagantDrinksDetails = [];

        drinks.map( (drink) => {
                const ingredients=[];

                // I've decided to use no. 15 in the JSON obj because I noticed that 
                // all drinks have a maximum of 15 ingredients                         for( let i = 1; i <= 15; i++ ){
                for( let i = 1; i <= 15; i++){

                // Since it's difficult to access it I am obteining the value of this property in a dynamic way
                        if(drink[`strIngredient${i}`]) { 
                                        ingredients.push({
                                                name:drink[`strIngredient${i}`],
                // Adding the quantity and replacing the null value whenever the quantity is missing to " to taste".
                                                quantity:drink[`strMeasure${i}`] || "to taste",
                                        });
                                        
        
                        }
                                else {
                                        break;
                             }
                        }

                       
                       extravagantDrinksDetails.push({ 
                               name:drink.strDrink,
                               id:drink.idDrink,
                               ingredients: JSON.stringify(ingredients),
                               })

        })
console.log("these are my ED with ingredients quantities", extravagantDrinksDetails)
}

