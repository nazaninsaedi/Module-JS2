const characterLimit = 200;
const textArea = document.querySelector("#comment-input");

// console.log(textArea, "<------- textArea");

// textArea.addEventListener("keyup", function(){
//     console.log(textArea.value.length,"textArea Value");
//     console.log(characterLimit, "characterLimit");
// });

// textArea.addEventListener("keyup", function (){
//     const chactersLeft = characterLimit - textArea.ariaValueMax.length;
//     const charLimitInfo = document.querySelector("#character-lomit-info");
//     charLimitInfo.innerText = 'You have' ${charactersLeft} 'chaacters remaining'; 
// });


function updateCharacterLimit() {
        const charactersLeft = characterLimit - textArea.value.length;
        const charLimitInfo = document.querySelector("#character-limit-info");
        charLimitInfo.innerText = `You have ${charactersLeft} chaacters remaining`; 
    }

textArea.addEventListener("keyup", updateCharacterLimit);