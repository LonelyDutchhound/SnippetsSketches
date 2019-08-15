let a, b = 8;

let closureGet = closureWrapperFunc();
function closureWrapperFunc () {
  let a = 7;
  function closureFunc(m) {
     return a*m;
   };
   return closureFunc;
};

let result = closureGet(b);
console.log(a);
console.log(result);
