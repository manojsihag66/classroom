function sub() {
    let a = document.getElementById("email").value;
    let b = document.getElementById("pass").value;
    if (a == "msihag613@gmail.com") {
        if (b == "12345") {
            document.getElementById("res").innerHTML = "User authenticated";
        } else {
            document.getElementById("res").innerHTML = "Wrong password";
        }
    } else {
        if (b == "12345") {
            document.getElementById("res").innerHTML = "Wrong username";
        } else {
            document.getElementById("res").innerHTML = "Wrong username and password";
        }
    }
}