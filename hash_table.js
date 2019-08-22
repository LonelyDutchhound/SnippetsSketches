let hashObjects = {
  '11-22-33':[
    {time: 10, value: 5},
    {time: 2, value: 3}
  ],
  '44-55-66':[
    {time: 7, value: 5},
    {time: 6, value: 8}
  ]
};



for (let hashObject in hashObjects){
    for (let i=0; i< hashObjects[hashObject].length; i++){
      console.log(hashObjects[hashObject][i].time, hashObjects[hashObject][i].value);
  };
};
