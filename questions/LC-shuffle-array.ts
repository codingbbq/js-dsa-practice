// https://leetcode.com/problems/shuffle-the-array/description/?envType=problem-list-v2&envId=dsa-linear-shoal-array-i

(() => {

	function shuffle(nums: number[], n: number): number[] {
        const shuffle = [];
        for(let i = 0; i < n; i++) {
            shuffle.push(nums[i], nums[i+n]);
        }

        return shuffle;
    }

    console.log(shuffle([2,5,1,3,4,7], 3));
    console.log(shuffle([1,2,3,4,4,3,2,1], 4));
    console.log(shuffle([1,1,2,2], 2));

})();
