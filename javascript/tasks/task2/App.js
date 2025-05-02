function check() {
    let a = document.getElementById("month").value;
    if (a == 1){
        document.getElementById("result").innerHTML = "January! Have 31 Days";
    } else if (a == 2) {
        document.getElementById("result").innerHTML = "February! Have 28 Days";
    } else if (a == 3) {
        document.getElementById("result").innerHTML = "March! Have 31 Days";
    } else if (a == 4)     {
        document.getElementById("result").innerHTML = "Apirl! Have 30 Days";
    } else if (a == 5) {
        document.getElementById("result").innerHTML = "May! Have 31 Days";
    } else if (a == 6) {
        document.getElementById("result").innerHTML = "June! Have 30 Days";
    } else if (a == 7) {
        document.getElementById("result").innerHTML = "July! Have 31 Days";
    } else if (a == 8) {
        document.getElementById("result").innerHTML = "August! Have 31 Days";
    } else if (a == 9) {
        document.getElementById("result").innerHTML = "September! Have 30 Days";
    } else if (a == 10) {
        document.getElementById("result").innerHTML = "October! Have 31 Days";
    } else if (a == 11) {
        document.getElementById("result").innerHTML = "November! Have 30 Days";
    } else if (a == 12) {
        document.getElementById("result").innerHTML = "December! Have 31 Days";
    } else {
          document.getElementById("result").innerHTML = "Invalid Month";
    }
}



