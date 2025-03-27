// https://leetcode.com/problems/valid-parentheses
(() => {
	function isValid(s: string): boolean {
        const stack: string[] = [];
		for (let i = 0; i < s.length; i++) {
            let top = stack.length - 1;
			if (
				(stack[top] === '(' && s[i] === ')') ||
				(stack[top] === '[' && s[i] === ']') ||
				(stack[top] === '{' && s[i] === '}')
			) {
				stack.pop();
			} else {
                stack.push(s[i]);
            }
		}
        return stack.length === 0;
	}

	console.log(isValid('()[]{}')); // true
})();
