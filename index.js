console.log("hello world");

const message = document.querySelector("#message");

////// addMovie function //////
const addMovie = (event) => {
  event.preventDefault();

  ////// getting and setting the value of our input field //////
  let inputField = document.querySelector("input");

  ////// making the html for our movie list items //////
  const movie = document.createElement("li");

  ////// putting the user's input into our span //////
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;

  ////// crossing off a movie //////
  movieTitle.addEventListener("click", crossOffMovie);

  ////// appending the movieTitle-child to our movie-element-parent //////
  movie.appendChild(movieTitle);

  ////// button fordeleting a movie //////
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "x";

  deleteBtn.addEventListener("click", deleteMovie);

  movie.appendChild(deleteBtn);

  ////// attaching our movie element to the list already in our html //////
  const list = document.querySelector("ul");
  list.appendChild(movie);

  inputField.value = "";
};

////// selecting the form element and listening for a submit event, then running the addMovie function //////
document.querySelector("form").addEventListener("submit", addMovie);

const deleteMovie = (event) => {
  event.target.parentNode.remove();

  message.textContent = "Movie has been deleted!";
};

////// crossing off a movie //////
const crossOffMovie = (event) => {
  ////// being able to 'un-cross-off' a movie //////
  event.target.classList.toggle("checked");

  if (event.target.classList.contains("checked")) {
    message.textContent = "Movie has been watched!";
  } else {
    message.textContent = "Movie has been added back.";
  }
};
