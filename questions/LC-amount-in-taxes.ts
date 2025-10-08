// https://leetcode.com/problems/calculate-amount-paid-in-taxes

(() => {
	function calculateTax(brackets: number[][], income: number): number {
		let totalTax: number = 0;
		let lowerBound: number = 0;

		for (const [upper, percent] of brackets) {
			// If the entire income has already been taxed, we can stop.
			if (income <= lowerBound) {
				break;
			}

			// Determine the amount of income that falls into the current bracket.
			// It's the smaller of the total income or the bracket's upper limit,
			// minus the income that has already been taxed (lowerBound).
			const taxableAmount: number = Math.min(income, upper) - lowerBound;

			// Calculate the tax for this specific portion and add it to the total.
			const taxInBracket: number = taxableAmount * (percent / 100);
			totalTax += taxInBracket;

			// Update the lowerBound for the next bracket.
			lowerBound = upper;
		}

		return totalTax;
	}

	console.log(
		calculateTax(
			[
				[3, 50],
				[7, 10],
				[12, 25],
			],
			10
		)
	); // 2.65000
	console.log(
		calculateTax(
			[
				[1, 0],
				[4, 25],
				[5, 50],
			],
			2
		)
	); // 0.25000
	console.log(calculateTax([[2, 50]], 0)); // 0.00000
})();
