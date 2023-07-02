// var Various = "나는 변수에요!";
// var Various = "중복선언 가능!";
// Various = "재할당 당연히 가능!";
// let Let = "Local";
// let Let = "중복선언은 안되는데";
// Let = "재할당은 가능하다!";
// const Constant = "Constant";
// const Constant = "중복선언 안되고!";
// Constant = "재할당 안됨!"; // 원래 에러가 떠야함!!

// function scopeFunc() {
//   if (true) {
//     var alpha = "alpha";
//     console.log(alpha); // alpha출력
//   }
//   console.log(alpha); // alpha출력
// }
// scopeFunc();
// console.log(alpha); // Reference Error: "alpha" is not defined

// function scopeFunc() {
//     if (true) {
//       let alpha = "alpha";
//       console.log(alpha); // alpha출력
//     }
//     console.log(alpha); // Reference Error: "alpha" is not defined
//   }
//   scopeFunc();
//   console.log(alpha); // Reference Error: "alpha" is not defined

console.log(hello) // undefined
var hello = "hello";

console.log(hoistingFunc) // function hoistingFunc

function hoistingFunc(){
    console.log("function hoistingFunc")
}; 

console.log(hellos) // Uncaught ReferenceError: ....
let hellos = "hellos";