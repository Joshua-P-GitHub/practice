function minusOne(num){
 return num - 1
}
console.log("11")
function makeSentence(){
  let a = arguments
  let string = ""
  for(let element of arguments){
    string = string + " " + element       
  }
  return string;
}
console.log(makeSentence("yes", "no", "maybe", "so"))

function getLastElement(array = []){
  let lastElement = array[array.length - 1]
  return lastElement;
}
let array = ["yes", "no", "maybe"]
console.log(getLastElement(array)) 
console.log(array)
