// https://leetcode.com/problems/build-an-array-with-stack-operations/description/?envType=problem-list-v2&envId=dsa-linear-shoal-stack

(() => {
	function buildArray(target: number[], n: number): string[] {
        let x = 1;
        let result = [];
        for(let i = 0; i < target.length; i++) {
            while(target[i] !== x) {
                result.push("Push");
                result.push("Pop");
                x++;
            }

            if(x === target[i]) {
                result.push("Push");
                x++;
                continue;
            }
        }

        return result;
    }

	console.log(buildArray([1, 3], 3)); // ["Push","Push","Pop","Push"]
    console.log(buildArray([1, 2, 3], 3)); // ["Push","Push","Push"]
    console.log(buildArray([1, 2], 4)); // ["Push","Push"]
})();
