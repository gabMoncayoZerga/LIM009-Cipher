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
  //parametros de la función --> string y offset//
  let valueOfTextToEncode = textToEncode.value; //A
  //for (let i = 0; i <= valueOfTextToEncode.length; i++){
  /*
//OBTENIENDO CODIGO ASCII/
let getAsciiCode= string.charCodeAt(i);
//APLICANDO LA FORMULA DE CIFRADO CESAR//
(x-65 +n)%26+65 -->
x= letra ascii
n= offset
const aplyingFormula= ((getAsciiCode-65+n)%26)+65);
//CAMBIAR AL ALFABETO QUE ENTENDEMOS //
const result=string.fromCharCode(aplyingFormula);
console.log(result)

<--!PLANTEANDO FUNCION ENCODE-->

function cipher(valueOfTextToEncode,offset) {

let finalResultEncode= " ";
for ( i = 0; i < valueOfTextToEncode.length; i++) {
const getAsciiLetter= string.charCodeAt(i);
const formula= ((getAsciiLetter-65+offset)%26)+65);
}

finalResultEncode=finalResultEncode+ valueOfTextToEncode.fromCharCode(formula);
}

*/
  encodedText.innerHTML = valueOfTextToEncode;//return encodedText =valueOfTextToEncode; //asigno a la caja dos el valor de la caja 1
}

encodeButton.addEventListener("click", () => {
  showTextoEncode();
})
/*
*/

// OBTENIENDO EL VALOR DE TEXTAREA desde TEXTO A DESCIFRAR a TEXTO DESCIFRADO//

function showTextToDecode() {
  let valueOfTextToDecode=textToDecode.value;
  decodedText.innerHTML=valueOfTextToDecode;
}

decodeButton.addEventListener("click",()=>{
  showTextToDecode();
})
