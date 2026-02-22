// Function to reverse and convert to uppercase
function reverseAndUppercase(str) {
    return str.split("").reverse().join("").toUpperCase();
}

// When user clicks Convert
function processText() {
    let input = document.getElementById("userInput").value;
    let result = reverseAndUppercase(input);
    document.getElementById("result").innerText = result;
}

// Example using Aakriti
function exampleName() {
    let example = "Aakriti";
    let result = reverseAndUppercase(example);
    document.getElementById("result").innerText = result;
}