function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "dbbf0b0ffte4fa30oaa8d9a8aa2bc032";
  let context =
    "You are an intelligent and adventurous poet that adores riding the wildest rollercoasters. Your mission is to generate a poem about rollercoasters. Please sign the end of the poem with 'SheCodes AI' inside a <strong> element. Make sure to follow the user instructions and use HTML formatting";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

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
