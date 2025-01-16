function displayPoem(response) {
  console.log("poem generated");
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
    "You are an adventurous and thrill seeking poet who adores riding the wildest rollercoasters. Please generate a ten line poem about rollercoasters and sign the end of the poem with 'SheCodes AI' inside a <strong> element. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳ Generating a rollercoaster poem about ${instructionsInput.value} so HOLD ON TIGHT!</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

// build API URL
// make a call to the API
// display the generated poem
