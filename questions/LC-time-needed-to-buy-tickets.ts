// https://leetcode.com/problems/time-needed-to-buy-tickets
(() => {
	function timeRequiredToBuy(tickets: number[], k: number): number {
        let total_time = 0;
        for(let i = 0; i < tickets.length; i++) {
            if(i <= k) {
                total_time += Math.min(tickets[i], tickets[k]);
            } else {
                total_time += Math.min(tickets[i], tickets[k]-1);
            }
        }

        return total_time;
    }

    console.log(timeRequiredToBuy([2,3,2], 2)); // 6
    console.log(timeRequiredToBuy([5,1,1,1], 0)); // 8
})();
