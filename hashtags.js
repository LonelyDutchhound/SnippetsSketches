let tweet = prompt ('Enter a tweet with hashtags');
let hashtagsArray=[];

let wordsArray = tweet.split(' ');
for (let value of wordsArray){
  if (value[0]==='#') hashtagsArray.push(value);
}
console.log(hashtagsArray);
let stringOfHashtags = hashtagsArray.join(' ');
alert (stringOfHashtags);
