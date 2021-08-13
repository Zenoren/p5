/* DÉFINITION D'UNE CLASSE SERVANT DE MODÈLE */
class Furniture {
	constructor(jsonCameras) {
		/* Utilisation de la méthode Object.assign pour copier facilement les valeurs des propriétés */
		jsonCameras && Object.assign(this, jsonCameras); 
	}
	/* méthode pour mettre les prix en euros */
	getFormatedPrice(cameras) {
		return this.price / 100;
	}
}
/* RÉCUPÉRATION DES DONNÉES ET AFFICHAGE DES ARTICLES */
fetch("http://localhost:3000/api/cameras") /* Envoi de la requête au service Web */
	.then(data => data.json()) /* Conversion de la réponse à la requête au format json */
	.then(jsonListCameras => { /* Récupération de la nouvelle promesse et des données exploitables */
		for (let jsonCameras of jsonListCameras) { /* Boucle créant de manière dynamique un nouvel objet basé sur le modèle pour chaque article */
			let Cameras = new Cameras(jsonCameras);
			/* Sélection de l'emplacement où intégrer l'objet dans la page html et injection du code html */
			document.querySelector("#cameras").innerHTML += `<div class="col-lg-4 col-xxl-3">
                                                                    <div class="card bg-light text-center mb-4">
                                                                        <img src="${cameras.imageUrl}" alt="image" class="card-img-top" />
                                                                            <div class="card-body">
                                                                                <h5 class="card-title">${cameras.name}</h5>
                                                                                <p class="card-text lead">${cameras.description}</p>
                                                                                <p class="card-text fw-bold">${cameras.getFormatedPrice()} €</p>
                                                                                <a href="produit.html?id=${cameras._id}" class="btn btn-primary stretched-link">Détails</a>
                                                                            </div>
                                                                    </div>
                                                                </div>`;
		}
	})
	/* En cas de défaillance de l'API */
	.catch(function (erreur) {
		console.log(erreur);
	});