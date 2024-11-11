// let age = 19;

// if (age < 18) {
//   console.log("you are not eligible young");
// } else if (age >= 18 && age <= 50) {
//   console.log("you are eligible");
// } else {
//   console.log("you are not eligible old");
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// function calArea(width, heigt) {
//   let area = width * heigt;
//   // return area;
//   console.log("your area is " + area);
// }

// calArea(10, 5);
// console.log(calArea(10, 5));

// assignment
// const books = [
//   {
//     title: "Ananse in the land of idiots",
//     author: "Yaw Asante",
//     pulibshedYear: 2002,
//   },
// ];

// const addBook = (title, author, pulibshedYear) => {
//   let newBook = {
//     title: title,
//     author: author,
//     pulibshedYear: pulibshedYear,
//   };

//   books.push(newBook);
// };

// addBook("as", "jh", 2020);

const button = document.querySelector("#submit-btn");
const username = document.querySelector("#input-text");
const password = document.querySelector("#password");
const form = document.querySelector("form");

// changing text from login to sign in
// function changeTextInButton() {
//   button.value = "Sign In";
// }

// button.addEventListener("click", changeTextInButton);

// creating paragrapgh
const paragrapgh = document.createElement("p");
const headerText = document.querySelector("h2");
const headerDiv = document.querySelector(".title-div");

paragrapgh.textContent = "Lord Baah";

headerDiv.style.display = "flex";
headerDiv.style.alignItems = "center";
headerDiv.style.gap = "16px";

headerDiv.appendChild(paragrapgh);
