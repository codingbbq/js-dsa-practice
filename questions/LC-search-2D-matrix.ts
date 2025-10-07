// https://leetcode.com/problems/search-a-2d-matrix/

(() => {
    function searchMatrix(matrix: number[][], target: number): boolean {
         // Since it is sorted 2D array, find out which sub array the number is
         let left = 0;
         let right = matrix.length - 1;
         while(left <= right) {
            let mid = Math.floor((left + right) / 2);

            let len = matrix[mid].length;
            if(matrix[mid][0] <= target && matrix[mid][len - 1] >= target) {
                // Search for target is in this matrix
                return binarySearch(matrix[mid], target);
            } else {
                // Update left and right
                if(matrix[mid][0] > target) {
                    right = mid - 1;
                }

                if(matrix[mid][len - 1] < target) {
                    left = mid + 1;
                }
            }
         }

         return false;

    };

    function binarySearch(arr: number[], target: number): boolean {
        let left = 0;
        let right = arr.length - 1;
        while(left <= right) {
            let mid = Math.floor((left + right) / 1);
            if(arr[mid] < target) {
                left = mid + 1;
            }

            if(arr[mid] > target) {
                right = mid - 1;
            }

            if(arr[mid] === target) {
                return true;
            }
        }
        return false;
    }

    console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // true
    console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false
})();