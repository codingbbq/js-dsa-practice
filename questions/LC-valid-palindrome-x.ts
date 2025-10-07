// https://leetcode.com/problems/valid-palindrome

(() => {
	function isPalindrome(s: string): boolean {
		const sProcessed = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
		let left = 0;
		let right = sProcessed.length - 1;
		while (left < right) {
			if (sProcessed[left] !== sProcessed[right]) {
				return false;
			}
			left++;
			right--;
		}
		return true;
	}

	console.log(isPalindrome('A man, a plan, a canal: Panama'));
})();
