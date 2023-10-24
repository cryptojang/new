console.log("Hi");
//document -> html
let h2 = document.createElement("h2");
//<h2></h2>

let dom = document.getElementById("dom");

h2.innerText = "My name is yurright!";

dom.appendChild(h2);