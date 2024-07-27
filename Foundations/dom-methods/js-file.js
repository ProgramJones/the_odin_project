let p = document.createElement("p");
p.style.color = "red";
p.textContent = "Paragraph";

let h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "heading 3";

let div = document.createElement("div");
div.setAttribute("style", "border: black solid 1px; background-color: pink;");

let h1InDiv = document.createElement("h1");
h1InDiv.textContent = "I'm in a Div!";

let pInDiv = document.createElement("p");
pInDiv.textContent = "Me too!";

document.body.appendChild(p);
document.body.appendChild(h3);
document.body.appendChild(div);

div.appendChild(h1InDiv);
div.appendChild(pInDiv);