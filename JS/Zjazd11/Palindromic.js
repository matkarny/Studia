var longestPalindromicSubstring = function(string) {
	var result = "";
	var centeredPalindrome = (left, right) => {
		while (left >= 0 && right < string.length && string[left] === string[right]) {
			left--;
			right++;
		}

		return string.slice(left + 1, right);
	};

	for (let i = 0; i < string.length - 1; i++) {
		let oddPal = centeredPalindrome(i, i + 1);
		let evenPal = centeredPalindrome(i, i);

		if (oddPal.length > result.length)
			result = oddPal;
		if (evenPal.length > result.length)
			result = evenPal;
	}
	return result;
};

console.log(longestPalindromicSubstring("kaak"));
