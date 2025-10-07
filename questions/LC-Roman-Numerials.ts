// Can you help solve below LeetCode problem?
// https://leetcode.com/problems/roman-to-integer
export function romanToInt(s: string): number {
    const romanToIntMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = 0; i < s.length; i++) {
        const currValue = romanToIntMap[s[i]];

        if (currValue > prevValue) {
            total += currValue - 2 * prevValue;
        } else {
            total += currValue;
        }

        prevValue = currValue;
    }

    return total;
}