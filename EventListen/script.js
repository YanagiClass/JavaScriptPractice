let button = document.getElementById("b1");
console.log(button);
button.addEventListener("click", clickHandler);
function clickHandler(e) {
  let val;
  val = e;
  console.log(val.target);
  console.log(val.target.id);
  console.log(val.target.innerHTML);
  console.log(val.type);
  console.log(val.clientX);
}
