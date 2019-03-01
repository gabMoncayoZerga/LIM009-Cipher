window.cipher = {
  encode: (textToEncode,encodeOffset) => {
    let valueOfTextToEncode = textToEncode.value; //A
    let offset= parseInt(encodeOffset.value);

    let palabra = "";

 for(let i=0; i < valueOfTextToEncode.length ; i++) {
   const getAsciiCode= valueOfTextToEncode.charCodeAt(i);
   if (getAsciiCode>=65 && getAsciiCode<=90) {
     let aplyingFormula= (getAsciiCode-65+ offset)%26 + 65;
     const getEncodeWord = String.fromCharCode(aplyingFormula);
     palabra = palabra + getEncodeWord;
   }
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
