//!🌟 Exercise 1 : Change the article
//? Using a DOM property, retrieve the h1 and console.log it.
const h1Element = document.querySelector("h1");
// // console.log(h1Element);

//? Using a DOM property, remove the last paragraph in the <article> tag.
const articleElement = document.querySelector("article");
const lastParagraph = articleElement.lastElementChild;
lastParagraph.remove();

//? Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2Element = document.querySelector("h2");
h2Element.addEventListener("click", () => {
  h2Element.style.backgroundColor = "red";
});

//? Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3Element = document.querySelector("h3");
h3Element.addEventListener("click", () => {
  h3Element.style.display = "none";
});

//? Add a <button> to the HTML file, that when clicked on, should make  the text of all the paragraphs, bold.
const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", () => {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(paragraph => {
    paragraph.style.fontWeight = "bold";
  });
});

//? BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.
h1Element.addEventListener("mouseover", () => {
  const randomFontSize = Math.floor(Math.random() * 100) + "px";
  h1Element.style.fontSize = randomFontSize;
});

//? BONUS : When you hover on the 2nd paragraph, it should fade out
const secondParagraph = document.querySelectorAll("p")[1];
secondParagraph.addEventListener("mouseover", () => {
  secondParagraph.style.transition = "opacity 1s";
  secondParagraph.style.opacity = "0";
});
