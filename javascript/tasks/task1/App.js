function check() {
    
    let x = document.getElementById("year").value;
    
    if (x % 4 == 0) {
        document.getElementById("result").innerHTML="This is Leap Year.";
    }
    
    else {
        document.getElementById("result").innerHTML="This is not Leap Year.";
    }
}