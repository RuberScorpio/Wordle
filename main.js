let parola="cream";
let wordInputArray = [
    [input1, input2, input3, input4, input5],
    [input6, input7, input8, input9, input10],
    [input11, input12, input13, input14, input15],
    [input16, input17, input18, input19, input20],
    [input21, input22, input23, input24, input25]
]

window.onload = () => {
    wordInputArray[0][0].focus();
}

document.addEventListener("keydown", function(event) {
    if (event.key == "Backspace") {
        if (event.target.previousElementSibling && !event.target.value)
            event.target.previousElementSibling.focus();
    }
})

function onInput(e) {
    if (e.inputType == "deleteContentBackward" || e.inputType == "0") {
        return;
    } else { 
        if (e.target.nextElementSibling) {
            e.target.nextElementSibling.focus();
        }
        e.target.value=e.target.value.slice(-1);
    }
}

function onSubmit(e, wordIndex) {
    e.preventDefault();
    let word = wordInputArray [wordIndex];
    let nextLine = wordInputArray [wordIndex+1];
    let correct = 0;
    for (i=0; i<word.length; i++) {
        if (word[i].value == " ") {
            return;
        } 
    }
    for (i=0; i<word.length; i++) { 
            if (word[i].value == parola[i]) {
                word[i].style.backgroundColor="green"
                correct++;
            } else if (parola.includes(word[i].value) && word[i].value != "") {
                word[i].style.backgroundColor="orange"
            } else {
                word[i].style.backgroundColor="grey"
            }
            word[i].disabled = true;
    }
    if (correct <5 && wordIndex < wordInputArray.length-1) {
        for (i=0; i<nextLine.length; i++) {
            nextLine[i].disabled = false;
        }
        nextLine[0].focus();
    }
}