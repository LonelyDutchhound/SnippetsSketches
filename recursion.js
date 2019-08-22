let myArray = [ 5, 9, 8, 3, 1];

function recurSum(array) {
  if (array.length === 1) return array[0];
  else return array[array.length-1] + recurSum(array.slice(0,array.length-1)); //last array element + f(array copy from ind 0 to 3 -> 0 to 2 -> 0 to 1)
}

console.log(recurSum(myArray));
