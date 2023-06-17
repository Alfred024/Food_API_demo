//Get recipes
const recipeSAPI = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=';
const nutritionalAPI = 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=';
const imgsAPI = 'https://real-time-image-search.p.rapidapi.com/search?query=';


const recipeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};
const nutritionalOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
		'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
	}
};
const imgsOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
        'X-RapidAPI-Host': 'real-time-image-search.p.rapidapi.com'
    }
};

async function getRecipe(url, recipe){
    const response = await fetch(`${url}${recipe}`, recipeOptions);
    const data = await response.json();
    return data;
}
async function getNutritional_info(url, food) {
    const response = await fetch(`${url}${food}`, nutritionalOptions);
    const data = await response.json();
    return data;
}
async function getImgs(url, img) {
    const response = await fetch(`${url}${img}`, imgsOptions);
    const data = await response.json();
    return data;
}

async function searchFood() {
    
    // Convierte la búsqueda del input en un formato para la API
    // let recipeSearch = fillSearch();
    // Objeto JSON con las recetas
    // const recipes = await getRecipe(recipeSAPI, recipeSearch);

    const recipesSection = document.getElementById('recipes_container');
    const imgResource = await getImgs(imgsAPI, recipeSearch);

    recipes.forEach(element => {
        const card = document.createElement('article');
        const title = document.createElement('p');
        const btnInfo = document.createElement('button');
        const imgView = document.createElement('img');

        title.innerHTML = element.title;
        imgView.src = imgResource.data[0].url;
        btnInfo.innerHTML = "Info:";

        recipesSection.appendChild(card);
        card.appendChild(btnInfo)
        card.appendChild(imgView);
    });
}

function fillSearch() {
    let recipeArray =  document.getElementById('recipe_input').value;
    let nameRecipe = '';
    for (let index = 0; index < recipeArray.length; index++) {
        if(recipeArray.charAt(index) === ' '){
            nameRecipe += '%20';
        }else{
            nameRecipe += recipeArray.charAt(index);
        }
    }
    return nameRecipe;
}

searchFood();

// getRecipe(recipeSAPI, 'meat%20balls')
//     .then(response => console.log(response))
//     .catch(error => console.log('Error: '+error));

// getNutritional_info(nutritionalAPI, 'pepperoni%20pizza')
//     .then(response => console.log(response))
//     .catch(error => console.log('Error: '+error));

// getImgs(imgsAPI, 'pepperoni%20pizza')
//     .then(response => console.log(response))
//     .catch(error => console.log('Error: '+error));


