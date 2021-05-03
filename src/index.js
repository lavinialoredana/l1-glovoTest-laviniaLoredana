const fetch = require("node-fetch");

//  punto 2 
// - replaced the value of the first letter from A to G on the fetch link 

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g')
.then(response => response.json())
.then(data => {
        cocktailList(data.drinks);
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
console.log(" these are my G drinks", drinksNames.join(", "));
}