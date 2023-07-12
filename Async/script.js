// function fetchData(){
//     return new Promise( (resolve, reject) => {
//         //비동기 요청을 함.
//         const sucess = false;
//         if(sucess){
//             resolve('성공✋')
//         }else{
//             reject('실패👎')
//         }
//     })
// }

// fetchData().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);    
// })
//fetch() 프로미스가 내장되어있음.
//예시 http://jsonplaceholder.typicode.com/todos/1 제이슨파일을 준다.


// fetch('http://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json()).then(json1 => console.log(json1))
//     .then(() => fetch(`http://jsonplaceholder.typicode.com/todos/2`)) //이렇게 차례대로 간다. 주고 받고 주고 받고 계속..
//     .then(res2 => res2.json())
//     .then(result => console.log(result))
//     .catch(err => {
//         console.error(err);
//     })
//     .finally(()=>console.log('done'));

//async/Await 편 - 안
async function makeRequest(){
    try {
        const response1 = await fetch('http://jsonplaceholder.typicode.com/todos/1');
        const jsonResponse1 = await response1.json();
        console.log(jsonResponse1);
    }catch(err) { 
        console.error(err);
    }finally{
        console.log('done');
    }
}
makeRequest();