// https://leetcode.com/problems/longest-palindrome/
(() => {
	function longestPalindrome(s: string): number {
		// String can contain lowercase and uppoercase characters.
		// We can build a map to maintain freq
		const freq: Map<string, number> = new Map();
		for (const char of s) {
			freq.set(char, (freq.get(char) || 0) + 1);
		}

		let count = 0;
		let hasOdd = false;
		for (const f of freq.values()) {
			if (f % 2 === 0) {
				count += f;
			} else {
				count += f - 1;
				hasOdd = true;
			}
		}
		return hasOdd ? count + 1 : count;
	}

	console.log(longestPalindrome('abccccdd'));
	console.log(longestPalindrome('ccc'));
})();
