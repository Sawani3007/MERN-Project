// console.dir(document.children[0].children[1],children[0].innerHTML);
// document.getElement_s_ByTagName --> [ ] (iterable) (HTML Collection)
// const headings = document.getElementsByTagName("h3");
// console.log("headings", headings);
// const header = document.getElementsByTagName("header");
// console.log("header:", header);
// headings[0].innerText = "Heelo";
// headings[1].innerText = "Heelo hoo";
const headings = document.getElementsByClassName("text-brown");
console.log("headings", headings);
headings[0].style.color = "brown";
headings[1].style.color = "brown";
const titles = document.querySelectorAll("h3");
console.log(":titles:",titles);
const textBrownElements = document.querySelectorAll(".text-brown");
console.log(":textBrownElements:",textBrownElements);
const textParas = document.querySelectorAll("#text-1");
console.log(":textPara",textParas);

