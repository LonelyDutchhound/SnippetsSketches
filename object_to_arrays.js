let productsArray = {
  "category":"auto",
  "title":"универсал BMX",
  "price":983823,
  "relationships":{"seller":"1"},
  test: function () {console.log(this)}
  };
productsArray.test();
let a = Object.keys(productsArray);//эта функция возвращает массив ключей объекта

function valuesToArray(obj) {
  console.log(this);
  return Object.keys(obj).map(function (key){ return obj[key]; });//map возвращает массив значений, собирая их по ключам объекта !obj[key] способ записа ключа объекта,

};
let newProductsArray = valuesToArray(productsArray);
console.log(newProductsArray);
