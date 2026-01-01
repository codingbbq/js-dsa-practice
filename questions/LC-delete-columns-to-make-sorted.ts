// https://leetcode.com/problems/delete-columns-to-make-sorted/?envType=daily-question&envId=2025-12-20

(() => {
	function minDeletionSize(strs: string[]): number {
        if (strs.length === 0) return 0;
        const n = strs[0].length;
        let toDelete = 0;

        for (let col = 0; col < n; col++) {
            for (let row = 1; row < strs.length; row++) {
                if (strs[row][col] < strs[row - 1][col]) {
                    toDelete++;
                    break;
                }
            }
        }
        return toDelete;
    }

    console.log(minDeletionSize(["cba","daf","ghi"]));
    console.log(minDeletionSize(["a","b"]));
    console.log(minDeletionSize(["zyx","wvu","tsr"]));
})();

