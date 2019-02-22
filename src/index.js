//ALMACENAMOS EN VARIABLES LAS PANTALLAS ,TEXTAREA Y BOTONES DE LA WEB //
const startButton = document.getElementById("start");
const startPage=document.getElementById("welcome-page");
const electionPage=document.getElementById("second-page");
const electionButtonJury=document.getElementById("opcion-jurado");
const encodeJuryPage=document.getElementById("jury-page");
const buttonBackFromJury=document.getElementById("return-from-jury");
const decodePresenterPage=document.getElementById("presenter-page");
const buttonBackFromPresenter=document.getElementById("return-from-presenter");
const electionButtonPresenter=document.getElementById("opcion-presentador");
const footer=document.getElementById("footer");
const buttonComebackStartFromSecondPage=document.getElementById("comeback-inicio");
/*const textToEncode=document.getElementById("texto-a-cifrar");
const textEncoded=document.getElementById("texto-cifrado");
const textToDecode=document.getElementById("texto-a-descifrar");
const textDecoded=document.getElementById("texto-descifrado");*/


// PAGINA DE COMIENZO:) ocultamos las demás páginas para que solo aparezca inicio//

startButton.style.display="block";
startPage.style.display="block"
electionPage.style.display="none";
encodeJuryPage.style.display="none";
decodePresenterPage.style.display="none";
footer.style.display="block";

//SEGUNDA PAGINA :añadimos al boton start el evento click ocultando las otras paginas para poder escoger mi rol: presentador y jurado//
  startButton.addEventListener("click",()=>{
  startButton.style.display="none";
  startPage.style.display="none";
  electionPage.style.display="block";
  encodeJuryPage.style.display="none";
  decodePresenterPage.style.display="none";
  footer.style.display="block";
});

// PAGINA DE JURADO : añadimos al boton soy jurado el evento click y mostramos opciones para cifrar al ganador//

electionButtonJury.addEventListener("click",()=>{
  startPage.style.display="none";
  electionPage.style.display="none";
  encodeJuryPage.style.display="block";
  decodePresenterPage.style.display="none";
  footer.style.display="block";
})

// PAGINA DE PRESENTADOR :añadimos al boton soy presentador el evento click y mostramos opciones para descifrar al ganador//
electionButtonPresenter.addEventListener("click",()=>{
  startButton.style.display="none";
  startPage.style.display="none";
  electionPage.style.display="none";
  encodeJuryPage.style.display="none";
  decodePresenterPage.style.display="block";
  footer.style.display="block";
});

// boton REGRESAR desde jurado//
buttonBackFromJury.addEventListener("click",()=>{
  startButton.style.display="none";
  startPage.style.display="none";
  electionPage.style.display="block";
  encodeJuryPage.style.display="none";
  decodePresenterPage.style.display="none";
  footer.style.display="block"
});

//boton REGRESAR desde presentador //
buttonBackFromPresenter.addEventListener("click",()=>{
  startButton.style.display="none";
  startPage.style.display="none";
  electionPage.style.display="block";
  encodeJuryPage.style.display="none";
  decodePresenterPage.style.display="none";
  footer.style.display="block";
});

// boton para regresar a INICIO desde la SEGUNDA pantalla de eleccion//
buttonComebackStartFromSecondPage.addEventListener("click",()=>{
  startButton.style.display="block";
  startPage.style.display="block";
  electionPage.style.display="none";
  encodeJuryPage.style.display="none";
  decodePresenterPage.style.display="none";
  footer.style.display="block";
});

// obteniendo el valor de textarea para que pase desde la caja TEXTO A CIFRAR a TEXTO CIFRADO//

/*
function showingEncodeValue(valueTextToEncode) =>{

  const valueTextToEncode=textToEncode.value;
  const
});



//obteniendo el valor de textare para que pase desde la caja TEXTO A DESCIFRAR a TEXTO DESCRIFRADO//

/*function showingDecodeValue() {
textToDecode.value;
}*/
