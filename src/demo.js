//Get recipes
const recipeSAPI = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=';
let recipe_v = 'meat%20balls';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};

async function getRecipe(url, recipe){
    const response = await fetch(`${url}${recipe}`, options);
    const data = await response.json();
    return data;
}

getRecipe(recipeSAPI, recipe_v)
    .then(response => console.log(response))
    .catch(error => console.log('Error: '+error));


