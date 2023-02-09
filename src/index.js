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

function getChar (binWord) { //morseWord === one alphabet character
    binWord = checkBinWordLength(binWord);
    let morseWord = ''; 
    for (let i = 0; i < binWord.length; i += 2){
        let binDigitPair = `${binWord[i]}${binWord[i + 1]}`;
        let morseSymbol = '';
        switch (binDigitPair) {
            case '00': morseSymbol = '';
            break;
            case '10': morseSymbol = '.';
            break;
            case '11': morseSymbol = '-';
            break;
            case '**': morseSymbol = '*';
            break;
            default : morseSymbol = 'ERROR';
            break;
        }
        morseWord += morseSymbol;
    }
    if (morseWord === '*****') {
        return (' ');
    } else {
        return getAlphabetCharacter(morseWord);
    }
} // function getChar returns one alphabetic character

function getAlphabetCharacter (wordMorse) {
    let alphaChar;
            Object.keys(MORSE_TABLE).forEach(key => {
                let value = MORSE_TABLE[key];
                if (key === wordMorse) alphaChar = value;
            });
    return alphaChar;
}

function checkBinWordLength (binWord) {
    if (binWord.length < 10) {
        let str = '';
            for (let i = 0; i < 10 - binWord.length; i++) {
                str += '0'; 
            }
        return(str + binWord);
    } else return binWord;
}

function decode(expr) {
    let decodedStr = '';
        for (let i = 0; i < expr.length; i += 10){
            decodedStr += (getChar(expr.slice(i, i + 10)));
        }
    return decodedStr;
}


module.exports = {
    decode
}

