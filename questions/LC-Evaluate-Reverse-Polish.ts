// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
(() => {
	function evalRPN(tokens: string[]): number {
		const stack: number[] = [];
		const operators = new Set(['+', '-', '*', '/']);

		for (const token of tokens) {
			if (operators.has(token)) {
				const b = stack.pop()!;
				const a = stack.pop()!;
				switch (token) {
					case '+':
						stack.push(a + b);
						break;
					case '-':
						stack.push(a - b);
						break;
					case '*':
						stack.push(a * b);
						break;
					case '/':
						stack.push(Math.trunc(a / b));
						break;
				}
			} else {
				stack.push(Number(token));
			}
		}
		return stack.pop()!;
	}

	console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
})();
