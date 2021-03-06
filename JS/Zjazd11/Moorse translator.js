let alphabetToMorse = {
	'a': '.-',
	'b': '-...',
	'c': '-.-.',
	'd': '-..',
	'e': '.',
	'f': '..-.',
	'g': '--.',
	'h': '....',
	'i': '..',
	'j': '.---',
	'k': '-.-',
	'l': '.-..',
	'm': '--',
	'n': '-.',
	'o': '---',
	'p': '.--.',
	'q': '--.-',
	'r': '.-.',
	's': '...',
	't': '-',
	'u': '..-',
	'v': '...-',
	'w': '.--',
	'x': '-..-',
	'y': '-.--',
	'z': '--..',
	'1': '.----',
	'2': '..---',
	'3': '...--',
	'4': '....-',
	'5': '.....',
	'6': '-....',
	'7': '--...',
	'8': '---..',
	'9': '----.',
	'0': '-----',
	'.': '.-.-.-',
	',': '--..--',
	'?': '..--..',
	"'": '.----.',
	'!': '-.-.--',
	'/': '-..-.',
	'(': '-.--.',
	')': '-.--.-',
	'&': '.-...',
	':': '---...',
	';': '-.-.-.',
	'=': '-...-',
	'+': '.-.-.',
	'-': '-....-',
	'_': '..--.-',
	'"': '.-..-.',
	'$': '...-..-',
	'@': '.--.-.',
	' ': ' '
};

let moorseToAlphabet = {
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

let languageTranslator = (text, dictionary, separator, joiner) => {
		return text
		.split('   ')
		.map(
			a => a
				.split(separator)
				.map(
					b => dictionary[b]
				).join(joiner)
		).join('  ');
};



class Translator {
	toMoorse(text) {
		return languageTranslator(text, alphabetToMorse,'', ' ')
	}
	fromMoorse(text) {
		return	languageTranslator(text, moorseToAlphabet, ' ',  '')
	}
}

let text = "-.. ..- .--. .-";
let MoorseTranslator = new Translator
console.log(MoorseTranslator.fromMoorse(text));
