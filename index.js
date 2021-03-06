// FUNCTION ADDSIX
const fn = new Function('a', 'b', 'return a + b');

var addSix = (param) => fn(6, param)

console.log(addSix(10));
console.log(addSix(21));


// DUPLICANDO ARRAY
var meuArray = [1, 2, 3, 4, 5,];

function duplicate(arr){
  var arr2 = arr.slice();
  
  meuArray.push(...arr2);
  return meuArray
}

console.log(duplicate(meuArray))

// TRANSFORMANDO STRING EM OBJETO
var text = '{"name": "Erick Schimdt", "age": 32, "height": 1.78}';
var textObj = JSON.parse(text);

console.log(textObj);