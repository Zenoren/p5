//remplit la page avec les infos de l'api


//les parametres de l'url pour la page produit

//extraction de l'id

/* Affichage du meuble */
const badUrl = `http://localhost:3000/api/furniture/null`;
const promesse = fetch(`http://localhost:3000/api/furniture/${selectedId}`);
if(selectedId != null) {
promesse
	.then((response) => {
		const furnitureData = response.json(); //j'enregistre dans une variable les données de la réponse de la promesse transformées en json.
		furnitureData.then((meuble) => { // je récupère le tableau correspondant à mon meuble
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