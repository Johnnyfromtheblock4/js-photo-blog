//recupero elementi del DOM
const cardBox = document.getElementById("card-container");

//effettuo la chiamata ajax
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
  console.log(resp);
  //salvo il risultato della chiamata ajax in una variabile
  const card = resp.data;

  //ciclo per i 6 elementi
  for (let i = 0; i < 6; i++) {
    cardBox.innerHTML += `<div class="carta col-12 col-md-6 col-lg-4 mt-5 p-4">
        <img src="assets/img/pin.svg" alt="" class="pin" />
        <img src="${card[i].url}" alt="" class="img-fluid" />
        <h3 class="mt-3 mb-3">${card[i].title}</h3>
        <p class="mt-3 mb-3">
          ${card[i].date}
        </p>
      </div>`;
  }
});
