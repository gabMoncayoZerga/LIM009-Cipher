//ALMACENAMOS EN VARIABLES LAS PANTALLAS ,TEXTAREA Y BOTONES DE LA WEB :D//

//PRIMERA PAGINA//
const startPage=document.getElementById("welcome-page");
const startButton = document.getElementById("start");
const footer=document.getElementById("footer");

//SEGUNDA PAGINA//
const electionPage=document.getElementById("second-page");
const electionButtonJury=document.getElementById("opcion-jurado");
const electionButtonPresenter=document.getElementById("opcion-presentador");
const buttonComebackStartFromSecondPage=document.getElementById("comeback-inicio");

//PAGINA DE JURADO//
const encodeJuryPage=document.getElementById("jury-page");
const textToEncode=document.getElementById("texto-a-cifrar").value;
const encodeOffset=parseInt(document.getElementById("offset-cifrado").value);
const encodeButton=document.getElementById("cifrar-jurado");
const encodedText=document.getElementById("texto-cifrado");
const buttonBackFromJury=document.getElementById("return-from-jury");

//PAGINA DE PRESENTADOR//
const decodePresenterPage=document.getElementById("presenter-page");
const textToDecode=document.getElementById("texto-a-descrifrar").value;
const decodeOffset=parseInt(document.getElementById("offset-descifrado").value);
const decodeButton=document.getElementById("descifrar-presentador");
const decodedText=document.getElementById("texto-descifrado");
const buttonBackFromPresenter=document.getElementById("return-from-presenter");

// PAGINA DE COMIENZO:) ocultamos las demás páginas para que solo aparezca inicio//
startButton.style.display="block";
startPage.style.display="block"
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
});

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

// OBTENIENDO EL VALOR DE TEXTAREA desde TEXTO A CIFRAR a TEXTO CIFRADO//
function showTextoEncode() {
  // let newText = cipher.encode(encodeOffset, textToEncode);
  // encodedText.value = newText;
  encodedText.innerHTML=cipher.decode(encodeOffset, textToEncode);
}

encodeButton.addEventListener("click", () => {
  showTextoEncode();
});



// OBTENIENDO EL VALOR DE TEXTAREA desde TEXTO A DESCIFRAR a TEXTO DESCIFRADO//

function showTextToDecode() {
  decodedText.innerHTML=cipher.decode(decodeOffset, textToDecode);
}

decodeButton.addEventListener("click",()=>{
  showTextToDecode();
});
