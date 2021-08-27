//Récupération de la chaine de requête dans l'url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);

//Extraire l'id
const urlSearchParams = new UrlSearchParams(queryString_url_id)
console.log(urlSearchParams);

const SelectedId = urlSearchParams.get("id");
console.log(SelectedId);

// Affichage du produit selectionné par l'id
const badUrl = `http://localhost:3000/api/furniture/null`;
const promesse = fetch(`http://localhost:3000/api/furniture/${selectedId}`);
if(selectedId != null) {
promesse
	.then((response) => {
        //j'enregistre dans une variable les données de la réponse de la promesse transformées en json.
		const furnitureData = response.json(); 
        // je récupère le tableau correspondant à mon id
		furnitureData.then((meuble) => { 
			const id = meuble._id;
			const description = meuble.description;
			const imageUrl = meuble.imageUrl;
			const name = meuble.name;
			const price = meuble.price / 100;
			const varnish = meuble.varnish;
			let structureVarnish = [];
			for (let i = 0; i < varnish.length; i++) {
				structureVarnish += `<li><a class="dropdown-item" href="#">${varnish[i]}</a></li>`;
          }

        }  
        ) }
)
}
