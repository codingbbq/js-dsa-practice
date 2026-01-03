// https://leetcode.com/problems/plus-one/description/?envType=daily-question&envId=2026-01-01

(() => {
	function plusOne(digits: number[]): number[] {
        let carry = 0;
        for(let i = digits.length - 1; i >= 0; i--) {
            if(digits[i] !== 9) {
                if(carry) {
                    digits[i] = digits[i] + carry;
                    carry = 0;
                } else {
                    digits[i] = digits[i] + 1;
                }
                break;
            } else {
                digits[i] = 0;
                carry = 1;
            }
        }

        if(carry) {
            digits.unshift(1);
        }

        return digits;
    }

    console.log(plusOne([1,2,3])); // [1,2,4]
    console.log(plusOne([9])); // [1,0]
    console.log(plusOne([4,3,2,1])); // [4,3,2,2]
    console.log(plusOne([9,9,9])); // [1,0,0,0]
})();
