function displayPoem(response) {
    console.log("Poem generated");
//response.data.answer
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector('#user-instructions');

    
// build the API URL
    let apiKey = "007360a0b0aabc68f2a54boff1b97tfc";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
    let context = "You are a romantic poet expert and love to write short poems. Your task is to generate a 4 line poem and separate each line with a <br />. Make sure to use the user instructions. Sign the poem with '~SheCodes AI' inside <strong>.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement= document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">Generating a poem about ${instructionsInput.value}...</div>`;

    console.log("Generating a poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
// Make a call to the API
    axios.get(apiURL).then(displayPoem);
// Parse the response (see above function displayPoem)
}

let poemFormElement = document.querySelector('#poem-generator-form');
poemFormElement.addEventListener('submit', generatePoem);