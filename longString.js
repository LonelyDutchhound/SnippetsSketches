//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
//each taken only once - coming from s1 or s2.
// return [...new Set(s1+s2)].sort().join('')

let s1 = "xyaabbbccccdefww"
let s2 = "xxxxyyyyabklmopq"

function longest(s1, s2) {
  let setLongestString = new Set(s1+s2);
  let arrayLongestString = Array.from(setLongestString);
  arrayLongestString.sort();
  let LongestString = arrayLongestString.join('');
  return LongestString;
}

console.log(longest(s1, s2));
