//Implement the function unique_in_order which takes as argument a sequence
//and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// great, need to analize
//var uniqueInOrder = function (iterable){ return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));}


let charString ='ABBCcADdddEEE';

var uniqueInOrder=function(iterable){
  let uniqueArray = [];
  for (i=0; i < iterable.length; i++){
    if (iterable[i] !== iterable[i+1]) uniqueArray.push(iterable[i]);
  }
  return uniqueArray;
}

console.log(uniqueInOrder(charString));
