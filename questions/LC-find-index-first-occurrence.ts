// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

(() => {
    function strStr(haystack: string, needle: string): number {
        if(needle === "") return 0;
        return haystack.indexOf(needle);
    };

    console.log(strStr("hello", "ll"));
    console.log(strStr("sadbutsad", "sad"));
})();