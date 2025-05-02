function check() {
    let a = document.getElementById("box1").value;
    let b = document.getElementById("box2").value;
    let c = document.getElementById("box3").value;
    if (a > b && a>c) {
        document.getElementById("result").innerHTML="1st Box is large"
    } else if (b>a && b>c) {
        document.getElementById("result").innerHTML="2nd Box is large"
    } else {
        document.getElementById("result").innerHTML="3rd Box is large"
    }
}