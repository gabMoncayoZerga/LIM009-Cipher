window.cipher = {
  encode: (textToEncode,encodeOffset) => {
    let valueOfTextToEncode = textToEncode.value;
    let offset= parseInt(encodeOffset.value);
    let palabra = "";

 for(let i=0; i < valueOfTextToEncode.length ; i++) {
   const getAsciiCode= valueOfTextToEncode.charCodeAt(i);
   let aplyingFormula;
    if (getAsciiCode>=65 && getAsciiCode<=90){
    aplyingFormula=(getAsciiCode-65+offset)%26+65
  } else if (getAsciiCode>=97 && getAsciiCode<=122){
    aplyingFormula=(getAsciiCode-97+offset)%26+97
  } else if (getAsciiCode>=160 && getAsciiCode<=165) {
    aplyingFormula=(getAsciiCode-160+offset)%6+160
  } else if (getAsciiCode>=129 && getAsciiCode<=148){
    aplyingFormula=(getAsciiCode-129+offset)%20+129
  } else if (getAsciiCode>=32 && getAsciiCode<=38) {
    aplyingFormula=(getAsciiCode-32+offset)%7+32
  } else {
    aplyingFormula=getAsciiCode
  }

   const getEncodeWord = String.fromCharCode(aplyingFormula);
   palabra = palabra + getEncodeWord;

 }
 return palabra;
  },

  decode: (textToDecode,decodeOffset) => {
    let valueOfTextToDecode = textToDecode.value; //A
    let offset= parseInt(decodeOffset.value);

   let palabra = "";
    for(let i=0; i < valueOfTextToDecode.length ; i++) {
      const getAsciiCode= valueOfTextToDecode.charCodeAt(i);
      if (getAsciiCode>=65 && getAsciiCode<=90) {
        let aplyingFormula= (getAsciiCode-90 -offset)%26 + 90;
        const getDecodeWord = String.fromCharCode(aplyingFormula);
        palabra = palabra + getDecodeWord;
      }
    }

   return palabra;
 },


 }
