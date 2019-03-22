let theArray = [1, 2, 3, 4, 5, 6];

let rotateArray = (times, array) => {
	while (times > 0) {
		let element = array.shift();
		array.push(element);
		times--
	}

};
rotateArray(1, theArray);


class Fibonnachi {
	constructor(n) {
		let arr = [0, 1];
		let number = 1;
		while (n > 1) {
			number = arr[arr.length - 1] + arr[arr.length - 2];
			arr.push(number);
			n--
		}
		arr.shift();
		return arr
	}

}

let newNumbers = new Fibonnachi(50);
console.log(newNumbers);

let num = "2342";

let toDigits = (arr) => {
	if (typeof arr === "number") {
		arr = arr.split('');
		newArr = arr.map(Number)
	} else {
		arr = arr.split('');
		newArr = arr.map(Number)
	}
	return newArr

};

// console.log(toDigits(num))

let takieSlowa = 'The quick brown fox';

let translatorPigLatin = (sentence) => {
	let arraySentence = sentence.split(' ');
	let translatedArray = [];
	while (translatedArray.length < arraySentence.length) {
		let i = translatedArray.length;

		if (i < 1) {
			wordSentence = arraySentence[0].split('');
			firstElement = wordSentence.shift();
			firstElement = firstElement.toLowerCase();
			wordSentence.push(firstElement) // first to last, change upper to lower
			wordSentence[0] = wordSentence[0].toUpperCase();
			wordSentence.push('a', 'y');
			wordSentence = wordSentence.join('');
			translatedArray.push(wordSentence);

		} else {
			wordSentence = arraySentence[i].split('');
			firstElement = wordSentence.shift();
			wordSentence.push(firstElement);
			wordSentence.push('a', 'y');
			wordSentence = wordSentence.join('');
			translatedArray.push(wordSentence);
		}
	}
	translatedArray = translatedArray.join(" ");
	return translatedArray
}
console.log(translatorPigLatin(takieSlowa));
