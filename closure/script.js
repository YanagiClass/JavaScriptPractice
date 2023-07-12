// function outerFunction(outerVariable){
//     return function innerFunction(innerVariable) {
//         console.log('Outer function: ' + outerVariable) // 외부함수의 변수에도 엑세스가 가능함 이것을 Closure라고 한다.
//         console.log('inner function: ' + innerVariable)
// }
// }

// const newFunction = outerFunction('outside')
// console.log('new Function' + newFunction)
// newFunction('inside')

let a = 'a'




function functionA() {
    let b = 'b'
    function functionB() {
        let c = 'c';
        console.log(a, b, c);
    
    }
    functionB();
    console.log(a, b)

}
functionA()