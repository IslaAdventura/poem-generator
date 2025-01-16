function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 25,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "dbbf0b0ffte4fa30oaa8d9a8aa2bc032";
  let context =
    "You are a thrill seeking poet who adores writing poems about riding wild rollercoasters. Please generate a ten line poem in basic HTML and seperate each line with a <br />. Do not include html tags. Deliver only the poem. Make sure ever the poem relates to rollercoasters. Sign the end of the poem with 'SheCodes AI' inside a <strong> element. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳ Generating a rollercoaster poem about ${instructionsInput.value} so HOLD ON TIGHT!</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
