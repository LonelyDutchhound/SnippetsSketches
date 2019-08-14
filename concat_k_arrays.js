//Даны k отсортированных в порядке неубывания массивов натуральных чисел,
 //каждое из которых не превосходит 100. Требуется построить результат их слияния:
 //отсортированный в порядке неубывания массив, содержащий все элементы исходных k массивов.

//Длина каждого массива не превосходит 10 ⋅ k.

//Постарайтесь, чтобы решение работало за время k ⋅ log(k) ⋅ n, если считать, что входные массивы имеют длину n.
let resultLength = 0;
let originArrayOfArrays = [[1,5,8,9,99],[2,22,25,29,64],[12,56,89],[3,58,78,79,99]];
let arrayOfAllArrays;

originArrayOfArrays.forEach(function(element){
  return resultLength += element.length;
  });     //длина результирующего массива=сумме длин исходных


for (var n = 0; n < originArrayOfArrays.length-1; n++) {
   arrayOfAllArrays = (n===0)? arraySortConcat (originArrayOfArrays[0], originArrayOfArrays[n+1]): arraySortConcat (arrayOfAllArrays, originArrayOfArrays[n+1]);
};

console.log(arrayOfAllArrays);

function arraySortConcat (x, y) {
    let i, j, array_1, array_2, resultArray = [];
    i = 0;//каунтер индекс аrray_1
    j = 0;//каунтер индекса array_2

    array_1 = x;
    array_2 = y;

    resultArray.length = array_1.length + array_2.length;

    for (k = 0; k < resultArray.length; k++){
      let a, b;
        if (i > array_1.length-1) { //если каунтер аrray_1 превысил дину массива, пишем в arrayOfArrays элемент array_2
            a = array_2[j];           //увеличиваем каунтер другого массива
            resultArray[k] = a;
            j++;
        } else if (j > array_2.length-1) { //если каунтер аrray_2 превысил дину массива, пишем в arrayOfArrays элемент array_1
            b = array_1[i];
            resultArray[k] = b;
            i++;
        } else if (array_1[i] < array_2[j]) { //иначе сравниваем элементы, меньший
            a = array_1[i];                   //пишем в arrayOfArrays,
            resultArray[k] = a;             //и увеличиваем каунтер его!!! массива
            i++;
        } else {
            b = array_2[j];
            resultArray[k] = b;
            j++;
        };
      };
    return resultArray;
  };

alert(arrayOfAllArrays);
