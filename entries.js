const myArray = [ 'q', 'w', 'e', 'r', 't', 'y'];

for (const [index, element] of myArray.entries())
  console.log(element);

let iterator = myArray.entries();
  console.log(iterator);

for (let i of iterator) console.log(i);
