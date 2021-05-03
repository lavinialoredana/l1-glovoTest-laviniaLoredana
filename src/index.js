const fetch = require("node-fetch");

//  punto 2 - changed the value of the first letter from the given fetch link from a to g

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g')
.then(response => response.json())
.then(data => {
        console.log(" this is my drinks object starting with G", data);
})
