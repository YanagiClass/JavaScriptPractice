let doc = document;
console.log(doc.baseURI);
console.log(doc.head);
console.log(doc.body);
console.log("p1 is ",doc.getElementById('p1').innerText);
console.log("p1 is ",doc.getElementsByName('p1_name')[0].innerText);
console.log("p1 is ",doc.querySelector('#p1').innerText);
console.log("p1 is ",doc.querySelector('.p1_class').innerText);
console.log("p1 is ",doc.getElementsByTagName('p')[0].innerText);
console.log("p1 is ",doc.getElementsByClassName('p1_class')[0].innerText);