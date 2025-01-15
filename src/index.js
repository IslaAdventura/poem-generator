function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "There once was a rollercoaster named Bob",
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
