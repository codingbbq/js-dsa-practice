// https://leetcode.com/problems/valid-palindrome/description/
(() => {
    function isPalindrome(s: string): boolean {
        // Regext to convert all characters to lowercase and remove all non-alphanumeric characters
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let left = 0;
        let right = cleaned.length - 1;

        while(left < right) {
            if(cleaned[left] !== cleaned[right]) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }

    console.log(isPalindrome("A man, a plan, a canal: Panama"))
})();