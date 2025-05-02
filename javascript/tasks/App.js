function check() {
    let a = document.getElementById("num").value;
    if (a % 2 == 0) {
        document.getElementById("result").innerHTML="This is Even Number.";
    } else {
        document.getElementById("result").innerHTML="This is Odd Number";
    }
}