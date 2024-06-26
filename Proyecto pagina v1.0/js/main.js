function cards() {
  const productos = [
      {
          "id": 1,
          "tittle": "Bulbasaur",
          "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F001%2FBulbasaur.webp?alt=media",
          "desc": "Planta"
      },
      {
          "id": 2,
          "tittle": "Ivysaur",
          "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F002%2FIvysaur.webp?alt=media",
          "desc": "Planta"
      },
      {
          "id": 3,
          "tittle": "Ivysaur",
          "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F002%2FIvysaur.webp?alt=media",
          "desc": "Planta"
      },
      {
          "id": 4,
          "tittle": "Ivysaur",
          "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F002%2FIvysaur.webp?alt=media",
          "desc": "Planta"
      },
      {
          "id": 5,
          "tittle": "Ivysaur",
          "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F002%2FIvysaur.webp?alt=media",
          "desc": "Planta"
      }
       




















  ];




















  const contenedorCards = document.getElementById("contenedor_cards");
  let cardsHTML = "";

  productos.forEach(producto => {
      cardsHTML += `
          <div class="card" style="width: 15rem; margin: 20px;">
              <img src="${producto.image}" class="card-img-top" alt="${producto.tittle}">
              <div class="card-body">
                  <h5 class="card-title">${producto.tittle}</h5>
                  <p class="card-text">${producto.desc}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
      `;
  });

  contenedorCards.innerHTML = cardsHTML;
}

document.addEventListener("DOMContentLoaded", function() {
  cards();
});