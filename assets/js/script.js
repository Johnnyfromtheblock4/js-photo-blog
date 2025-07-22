//RECUPERO CARTE CON LA CHIAMATA AJAX
//recupero elementi del DOM
const cardBox = document.getElementById("card-container");

//effettuo la chiamata ajax
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
  console.log(resp);
  //salvo il risultato della chiamata ajax in una variabile
  const card = resp.data;

  //ciclo per i 6 elementi
  for (let i = 0; i < 6; i++) {
    cardBox.innerHTML += `<div class="carta mt-5 p-4">
        <img src="${card[i].url}" alt="" class="img-fluid" />
        <img src="assets/img/pin.svg" alt="" class="pin" />
        <p class="mt-3 mb-3">
          ${card[i].date}
        </p>
        <h2 class="mt-3 mb-3">${card[i].title}</h2>
      </div>`;
  }

  //CAMBIO IMMAGINE AL CLICK
  //recupero le card per assegnare loro l'evento click
  const cards = document.querySelectorAll(".carta");

  //ciclo le cards
  cards.forEach((elem) => {
    elem.addEventListener("click", () => {
      // per recuperare la img
      const overlay = document.getElementById("overlay");

      //sostituisco la classe
      overlay.classList.add("d-block");
      overlay.classList.remove("d-none");
    });
  });

  //METTO FUNZIONE AL BUTTON CHIUDI
  document.getElementById("start-button").addEventListener("click", function () {
    //sostituisco classe a overlay
    overlay.classList.add("d-none");
  });

  //INDIZZO CORRETTO IMMAGINE APERTA
  cards.forEach((elem) => {
    elem.addEventListener("click", () => {
      const image = elem.querySelector("img");
      //sostituisco in overlay
      const overlayImage = document.getElementById("img-overlay");
      overlayImage.src = image.src;
    });
  });
});

// //OVERLAY CLICK
// document.getElementById("startButton").addEventListener("click", function () {
//   //rimuovo l'overlay
//   document.getElementById("overlay").classList.add("d-none");
//   //mostro il contenuto principale
//   document.querySelector(".blog").classList.remove("d-none");
// });
