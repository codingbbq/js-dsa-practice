// https://leetcode.com/problems/reformat-the-string

(() => {

	function reformat(s: string): string {
        // Check if the string contains alphabet
        // Check if the string contains numeric

        const alphabets = s.replace(/[^a-z]/g, '');
        const numeric = s.replace(/[^0-9]/g, '');

        if(Math.abs(alphabets.length - numeric.length) > 1) return "";

        let permutedString = "";
        let first = alphabets, second = numeric;
        if(numeric.length > alphabets.length) {
            first = numeric;
            second = alphabets;
        }
        for(let i = 0; i < first.length; i++) {
            permutedString += first[i];
            if(second[i]) permutedString += second[i];
        }

        return permutedString;
    }

    console.log(reformat("covid2021"));
})();
