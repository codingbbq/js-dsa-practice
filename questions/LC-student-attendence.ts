// https://leetcode.com/problems/student-attendance-record-i/

(() => {
	function checkRecord(s: string): boolean {
		if (s.indexOf('LLL') >= 0) return false;

		let absent = 0;
		for (const char of s) {
			if (char === 'A') absent++;
		}

		if (absent >= 2) return false;

		return true;
	}

	console.log(checkRecord('PPALLP')); // true
	console.log(checkRecord('PPALLL')); // false
})();
