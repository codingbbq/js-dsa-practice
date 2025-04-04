// https://leetcode.com/problems/daily-temperatures/description/
(() => {
    function dailyTemperatures(temperatures: number[]): number[] {
        const stack: number[] = [];
        const result: number[] = new Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; i++) {
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop()!;
                result[prevIndex] = i - prevIndex;
            }

            stack.push(i);
        }

        return result;
    };

    console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
})();