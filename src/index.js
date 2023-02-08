const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morsecode = '';
    let morsecodeReturn ='';
    
        for (let char of expr){
            if (char === ' '){
                morsecodeReturn += '**********';
            } else {
                Object.keys(MORSE_TABLE).forEach(key => {
                    let morsecodeBin = '0000000000';
                    let value = MORSE_TABLE[key];
                
                    if (value === char) {
                        // console.log(`${key}: ${value}`);
                        morsecode += key;
                        
                        for (let k of key) {
                            if(k == '.') morsecodeBin += 10;
                            if(k == '-') morsecodeBin += 11;
                            morsecodeBin = morsecodeBin.slice(2);
                        }
                        // console.log(morsecodeBin);
                        morsecodeReturn += morsecodeBin;
                    } 
                });
            }
        }
    return morsecodeReturn;
}

module.exports = {
    decode
}