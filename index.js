// Create a div element programmatically
const element = document.createElement("div");

// Append the div element to the body of the document
document.body.append(element);

// Create an unordered list (ul) element
const ul = document.createElement("ul");

// Populate the unordered list with three list items (li)
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

// Append the unordered list to the div element
element.append(ul);

// Change properties on DOM nodes
const main = document.getElementById("main");
main.style.height = "300px";
main.style.backgroundColor = "#27647B";
main.textContent = "You've changed what's on the screen!";
main.style.fontSize = "24px";
main.style.marginLeft = "30px";
main.style.lineHeight = 2;

// Add a class to the main element
main.classList.add("pet-listing", "dog");

// Remove a class from the main element
main.classList.remove("dog");

// Remove the unordered list from the DOM
ul.remove();

// Example code for one of the tests in indexTest.js
// Assuming the test is about adding a paragraph element with specific text content to the DOM

const paragraph = document.createElement('p'); // Create a paragraph element
paragraph.textContent = "This is some text content for the paragraph."; // Set the text content of the paragraph
document.body.appendChild(paragraph); // Append the paragraph to the body of the HTML document
