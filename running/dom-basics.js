document.getElementById("p2").innerText = "Hellooooooo World";

const greenP = document.querySelector(".green");
greenP.innerText = "This paragraph was changed using JS";

const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript!";
document.body.appendChild(newParagraph);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through JavaScript</p>";
document.body.appendChild(newSection);

const img = document.createElement("img");
img.setAttribute("src", "https://picsum.photos/200");
img.setAttribute("alt", "Random Image from Picsum");
document.body.appendChild(img);
