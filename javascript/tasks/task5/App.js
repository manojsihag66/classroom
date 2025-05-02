function add() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = num1 + num2;
    document.getElementById("ans").value = num3;
}

function sub() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = num1 - num2;
    document.getElementById("ans").value = num3;
}
function multiply() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = num1 * num2;
    document.getElementById("ans").value = num3;
}
function divide() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = num1 / num2;
    document.getElementById("ans").value = num3;
}