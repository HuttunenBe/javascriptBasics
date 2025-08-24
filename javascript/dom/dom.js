/*Select an element by ID and log it.*/

const elementById = document.getElementById("element");
console.log(elementById);

const elementByClass = document.getElementsByClassName("class");
console.log(elementByClass);
console.log(elementByClass[0]); // by index

const querySelectorClass = document.querySelector(".class");
const querySelectorId = document.querySelector("#id");
const querySelectorAll = document.querySelectorAll(".class");

const tagName = document.getElementsByTagName("div");

/* Change text content of a paragraph.*/

//<p id= "paragraph ">This is a paragraph</p>

const paragraph = document.querySelector("#paragraph");

paragraph.innerHTML = "Hello";

/*Change background color on button click.*/

const backgroundColor = document.getElementById("background")

const changeColor = () => {
  backgroundColor.style.backgroundColor = "red" // Variable, style, css property
}

backgroundColor.addEventListener("click", changeColor)

/*Add a new element to the page.

Remove an element from the page.

Add a CSS class to an element.

Toggle a class with a button click.

Get user input value from a form.

Respond to a click event.

Loop through all li elements and style them.*/

// 1. Add a click event to a button that shows an alert when clicked.

const button = document.querySelector(".button");

const showAlert = () => {
  alert("Button was clicked");
};

button.addEventListener("click", showAlert);

// Add a click event to a div

const div = document.getElementsByTagName("div")[0];

const colorChange = () => {
  div.style.backgroundColor = "black";
};

div.addEventListener("click", colorChange);

// Add a click event to a paragraph

const clickParagraph = document.getElementById("clickParagraph");

function paragraphAlert() {
  alert("Hello!");
}

clickParagraph.addEventListener("click", paragraphAlert);

// Change text when mouse hovers over a paragraph

const hover = document.querySelector("#hover");

const hoverOver = () => {
  hover.textContent = "You hovered over me!";
};

const hoverLeave = () => {
  hover.textContent = "Hover over me!";
};
hover.addEventListener("mouseover", hoverOver);
hover.addEventListener("mouseleave", hoverLeave);

// Change border color

const border = document.getElementById("border");

border.addEventListener("click", () => {
  // Combine addEventListener and function
  border.style.borderColor = "purple";
});

// Make a onClick button with React

<button onClick={handleClick}>Click Me!</button>;

// 2. Change the text and color of a paragraph when a button is clicked.

const textAndColor = document.getElementById("textAndColor");

textAndColor.addEventListener("click", () => {
  textAndColor.style.color = "black";
  textAndColor.innerHTML = "Changed HTML";
});

// 3. Change the background color of a div when the mouse hovers over it.

const hoverOverDiv = document.getElementById("hover")

const colorChangeDiv = () => {
hoverOverDiv.style.backgroundColor = "blue"
}

hoverOverDiv.addEventListener("mouseenter", colorChangeDiv)


hoverOverDiv.addEventListener("mouseenter", () => {
  hoverOverDiv.style.backgroundColor = "blue";
});


// 4. Display the value of an input field in a paragraph as the user types.

const input = document.getElementById("input") // Access value typed
const output = document.getElementById("output") // Display output value

input.addEventListener("input", () => {
  output.textContent = input.value 
}) // Set paragraph text to match input field




// 5. Toggle the visibility of a paragraph when a button is clicked.

const visibilityButton = document.querySelector("#visibilityButton");
const visibilityParagraph = document.querySelector("#visibilityParagraph");

const toggleVisibility = () => {
  if (visibilityParagraph.style.display === "none") {
    //check
    visibilityParagraph.style.display = "block"; //show
  } else {
    visibilityParagraph.style.display = "none"; //hide
  }
};

visibilityButton.addEventListener("click", toggleVisibility);

const hideButton = document.querySelector("#hideButton");
const paragraphToHide = document.querySelector("#paragraphToHide");

const hideParagraph = () => {
  paragraphToHide.style.display = "none";
};

hideButton.addEventListener("click", hideParagraph);

// 6. Add both click and mouseover events to a button, each doing something different.

const buttonDifferent = document.getElementById("button")
const containerBackground = document.getElementsById("aboutPage")
const textColor = document.getElementById("aboutParagraph")

const buttonClick = () => {
  containerBackground.style.backgroundColor = "blue"
  
}

const mouseOver = () => {
textColor.style.color = "white"
}

buttonDifferent.addEventListener("click", buttonClick)
buttonDifferent.addEventListener("mouseover", mouseOver)


buttonDifferent.addEventListener("click", () => {
    containerBackground.style.backgroundColor = "blue"
  textColor.style.color = "white"
})