let val;

val = document;

let url = val.baseURI; // 웹페이지 URI 리턴
let head = val.head; //<head>태그 리턴
let body = val.body; //<body> 태그 리턴

console.log(`${url} ${head} ${body}`);
console.log(`${document.outerWidth}`)
console.log(`${window.outerWidth}`)

window.addEventListener("resize", function(){
    console.log(`${window.outerWidth}`)
    if(window.outerWidth > 1000){
        var h1 = document.querySelector('h1');
        if (h1) {
            h1.innerText = "Page Size is Big!";
        } else {
            console.error("'h1' element not found.");
        }
    } else {
        var h1 = document.querySelector('h1');
        if (h1) {
            h1.innerText = "Page Size is Small!";
        } else {
            console.error("'h1' element not found.");
        }
    }
});
