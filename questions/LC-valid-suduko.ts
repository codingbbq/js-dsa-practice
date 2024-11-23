// https://leetcode.com/problems/valid-sudoku/description/
(() => {
    function isValidSudoku(board: string[][]): boolean {

        const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
        const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
        const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

        for(let r = 0; r < 9; r++) {
            for(let c = 0; c < 9; c++) {

                const value = board[r][c];
                // Check if the place is empty
                if(value === '.') {
                    continue;
                }

                if(rows[r].has(value) || cols[c].has(value) || boxes[Math.floor(r/3) * 3 + Math.floor(c/3)].has(value)) {
                    return false;
                }

                rows[r].add(value);
                cols[c].add(value);
                boxes[Math.floor(r/3) * 3 + Math.floor(c/3)].add(value);


            }
        }

        return true;
    };

    console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]));
})();