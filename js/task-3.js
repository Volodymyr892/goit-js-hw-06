// class StringBuilder{
//     #value;
//     constructor(initialValue = ""){
//         this.#value=initialValue;
//     }
//     getValue(){
//         return this.#value;
//     }
//     padEnd(str){
//         this.#value += str;
//     }
//     padStart(str){
//         this.#value = str+this.#value;
//     }
//     padBoth(str){
//         this.#value = str + this.#value + str;
//     }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});