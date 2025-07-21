//recupero elementi del DOM
const cardBox = document.getElementById("card-container");

//effettuo la chiamata ajax
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
  console.log(resp);
  //salvo il risultato della chiamata ajax in una variabile
  const card = resp.data;

});
