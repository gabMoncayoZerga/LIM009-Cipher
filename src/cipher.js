window.cipher = {
  encode: (textToEncode,encodeOffset) => {
    let valueOfTextToEncode = textToEncode.value;
    let offset= parseInt(encodeOffset.value);
    let palabra = "";

 for(let i=0; i < valueOfTextToEncode.length ; i++) {
   const getasciiCode= valueOfTextToEncode.charCodeAt(i);
  let aplyingFormula;
  if(offset > 0) {    // si el offset es positivo

   if(getasciiCode >= 65 && getasciiCode <= 90) { //Letras maysculas
     aplyingFormula= (getasciiCode-65+ offset)%26 + 65;
  }else if(getasciiCode >= 97 && getasciiCode <= 122) { // minusculas
    aplyingFormula= (getasciiCode-97+ offset)%26 + 97;
  }else if(getasciiCode >= 209 && getasciiCode <= 252 ) {//ñ y vocales con tildes  y cosas (28)
    aplyingFormula= (getasciiCode-209+ offset)%43 + 209;
  } else if(getasciiCode >=32 && getasciiCode <=38) { // ver como cifrar espacio
    aplyingFormula=(getasciiCode-32+offset)%7+32;
    }
  }
  else { // si el offset es negativo
    if(getasciiCode >= 65 && getasciiCode <= 90) { //Letras maysculas
      aplyingFormula= (getasciiCode-90 + offset)%26 + 90;
    }else if(getasciiCode >= 97 && getasciiCode <= 123) { // minusculas
       aplyingFormula= (getasciiCode-122 + offset)%26 + 122;
    }else if(getasciiCode >= 209 && getasciiCode <= 252) { // minusculas
       aplyingFormula= (getasciiCode-252 + offset)%43 + 252;
    }else if (getasciiCode>=32&&getasciiCode<=38) {
      aplyingFormula=(getasciiCode-38+offset)%7+38;
    }
  }
  const getEncodeWord = String.fromCharCode(aplyingFormula);
  palabra = palabra + getEncodeWord;

}// end for
return palabra;

},
decode: (textToDecode,decodeOffset) => {
  let valueOfTextToDecode = textToDecode.value; //A
  let offset= parseInt(decodeOffset.value);

 let palabra = "";
  for(let i=0; i < valueOfTextToDecode.length ; i++) {
    const getasciiCode= valueOfTextToDecode.charCodeAt(i);
   let aplyingFormula;

if(offset > 0) {    // si el offset es positivo

    if (getasciiCode>=65 && getasciiCode<=90) {
      aplyingFormula= (getasciiCode-90 -offset)%26 + 90;
    } else if(getasciiCode >= 97 && getasciiCode <= 122) {
        aplyingFormula= (getasciiCode-122 -offset)%26 + 122;
    } else if(getasciiCode >= 209 && getasciiCode <= 252) {
        aplyingFormula= (getasciiCode-252 -offset)%43 + 252;
    }else if (getasciiCode>=32&&getasciiCode<=38) {
      aplyingFormula= (getasciiCode-38 -offset)%7 + 38;
    }

}else { // si el offset es negativo

  if(getasciiCode >= 65 && getasciiCode <= 90) { //Letras maysculas
    aplyingFormula= (getasciiCode-65- offset)%26 + 65;
 }else if(getasciiCode >= 97 && getasciiCode <= 122) { // minusculas
   aplyingFormula= (getasciiCode-97-offset)%26 + 97;
 }else if(getasciiCode >= 209 && getasciiCode <= 252 ) {//ñ y vocales con tildes  y cosas (28)
   aplyingFormula= (getasciiCode-209- offset)%43 + 209;
 } else if(getasciiCode >=32 && getasciiCode <=38) { // ver como cifrar espacio
   aplyingFormula=(getasciiCode-32-offset)%7+32;
   }

}
    const getDecodeWord = String.fromCharCode(aplyingFormula);
    palabra = palabra + getDecodeWord;
}

 return palabra;
},


 }
