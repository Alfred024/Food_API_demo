const urlAPI = 'https://pizza-and-desserts.p.rapidapi.com/pizzas/1';
//const apiView = document.getElementById('viewContainer');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
		'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
	}
};

async function consumeAPI(urlAPI){
    const response = await fetch(urlAPI, options);
    const data = response.text();
    return data;
}

consumeAPI(urlAPI)
    .then(response => {console.log('Response: '+response);})
    .catch(error => {console.log('Error: '+error);});


    const url = 'https://pizza-and-desserts.p.rapidapi.com/pizzas/1';
    
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }