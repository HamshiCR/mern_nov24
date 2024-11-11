function showSquare() {
    let number = parseFloat(document.getElementById("number").value);
    if (isNaN(number)) {
        alert("Please enter a valid number!");
    } else {
        let result = number * number;
        document.getElementById("result").value = result;
    }
}

function showCube() {
    let number = parseFloat(document.getElementById("number").value);
    if (isNaN(number)) {
        alert("Please enter a valid number!");
    } else {
        let result = number * number * number;
        document.getElementById("result").value = result;
    }
}
