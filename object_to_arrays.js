let productsArray = {
  "category":"auto",
  "title":"универсал BMX",
  "price":983823,
  "relationships":{"seller":"1"},
  };
console.log(typeof productsArray);
console.log(productsArray);
let a = Object.keys(productsArray);//эта функция возвращает массив ключей объекта
console.log(a);
function valuesToArray(obj) {
  return Object.keys(obj).map(function (key){ return obj[key]; });//map возвращает массив значений, собирая их по ключам объекта !obj[key] способ записа ключа объекта, 
};
let newProductsArray = valuesToArray(productsArray);
console.log(newProductsArray);
