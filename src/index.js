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
const textToEncode=document.getElementById("texto-a-cifrar");
const encodeOffset=document.getElementById("offset-cifrado");
const encodeButton=document.getElementById("cifrar-jurado");
const encodedText=document.getElementById("texto-cifrado");
const buttonBackFromJury=document.getElementById("return-from-jury");

//PAGINA DE PRESENTADOR//
const decodePresenterPage=document.getElementById("presenter-page");
const textToDecode=document.getElementById("texto-a-descrifrar");
const decodeOffset=document.getElementById("offset-descifrado");
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

// OBTENIENDO EL VALOR DE TEXTAREA desde TEXTO A CIFRAR a TEXTO CIFRADO//
function showTextoEncode() {
  let valueOfTextToEncode = textToEncode.value; //A
  encodedText.innerHTML = valueOfTextToEncode;
  //for (let i = 0; i <= valueOfTextToEncode.length; i++){
//return encodedText =valueOfTextToEncode; //asigno a la caja dos el valor de la caja 1
}

encodeButton.addEventListener("click", () => {
  showTextoEncode();
})

// OBTENIENDO EL VALOR DE TEXTAREA desde TEXTO A DESCIFRAR a TEXTO DESCIFRADO//

function showTextToDecode() {
  let valueOfTextToDecode=textToDecode.value;
  decodedText.innerHTML=valueOfTextToDecode;
}

decodeButton.addEventListener("click",()=>{
  showTextToDecode();
})



//PLANTEANDO FUNCION DE CIFRADO//
/*(x-65 +n)%26+65
 charCodeAt()
"ABC".charCodeAt(0) = 65  ACA LE PASO LA LETRA Y ME BRINDA EL NUMERO
String.fromCharCode(65,66,67)  ACA LE PASO EL NUMERO Y ME BRINDA LA LETRA
function CIFRADO() {
let palabra a cifrar = " algo";
let palabraenCodigoASCII
let offset = encodeOffset.value;
for ( i = 0; i < palabra a Cifrar.length; i++) {
  (x-65 +n)%26+65
((palabraenCodigoASCII-65) + offset)
}
}*/
