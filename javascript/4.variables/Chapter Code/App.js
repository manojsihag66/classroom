// let marks = prompt("Check your Grades")

// function grade() {
//   if 
//   (marks >= 90 && marks <= 100) {
//     console.log("Congratulation! you got 'A+'");
//   }else if (marks >= 60 && marks < 90) {
//     console.log("Congratulation! you got 'B+'");
//   } else if (marks >= 40 && marks < 60) {
//     console.log("Congratulation! you got 'C+'");
//   } else if (marks >=33 && marks < 40) {
//     console.log("Congratulation! you got 'D+'");
//   } else {
//     console.log("Sorry! you got 'F'");
//   }
// }
// grade();

let marks = prompt("Check your Grades")

function grade() {
  if 
  (marks >= 90 && marks <= 100) {
    document.write("Congratulation! you got 'A+'");
  }else if (marks >= 60 && marks < 90) {
    document.write("Congratulation! you got 'First Division'");
  } else if (marks >= 40 && marks < 60) {
    document.write("Congratulation! you got 'Second Division'");
  } else if (marks >=33 && marks < 40) {
    document.write("Congratulation! you got 'Third Division'");
  } else {
    document.write("Sorry! you are 'Failed'");
  }
}
grade();

