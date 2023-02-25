const button = document.getElementById("count_button");
const amount = document.getElementById("count");
const textarea = document.getElementById("input");

function onButtonClick() {
    let wordCount = 0
    textarea.value.trim().split(" ").forEach(_ => wordCount += 1);
    amount.textContent = wordCount;
    console.log(amount.value)
}

button.addEventListener("click", onButtonClick)
