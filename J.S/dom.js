
// function example()
// {
// console.log(val);
// var val="USERNAME";
// }

// console.log(example());


// function(a,w)
// {

// }

// (23, 45);


// let userinfo = {
//     name: "Manoj",
//     age: 24,
//     social: {
//         facebook: 
//         {
//             ac1: "somewhere@gmail.com",
//             ac2: "somewhere@gmail.com"
//         },
//         twitter: 
//         {
//             free:
//             {
//             ac1: "somewhere@gmail.com"
//             },
//             paid:
//             {
//             ac1: "somewhere@gmail.com"
//             }
//         }
//     }

// };


// function makeDeepCopy(obj) 
// {
//     if(typeof obj !== 'object' || obj === null)
//     {
//         return obj;
//     };

//     let copiedval = Array.isArray(obj) ? [] : {};

//     let keys = Object.keys(obj);

//     for(let i = 0; i<keys.length; i++)
//     {
//         copiedval[keys[i]] = makeDeepCopy(obj[keys[i]]);
//     }

//     return copiedval;
// }

    


//  const copy = makeDeepCopy(userinfo);


// console.log(copy);


// let num = [342, 849, 78, 898, 341, 478, 41, 87, 99, 564, 643, 64];

// const arr = num.filter((num) => num % 2 === 0);

// const arr1 = arr.map((arr) => arr*5);

// console.log(arr1);


// function overRide(x, y)
// {
//    let obj = x*y;
//       return obj;
//     return x + y;
// }
// overRide = function (x, y) {
//     return x * y;
// }

// console.log(overRide(7, 14));

// const paragraph = document.getElementById('para');

// const button = document.getElementById('btn');

// function changeText()
// {
//     paragraph.textContent = "Rahul, Name Changed!";
// }

// button.addEventListener('click', changeText);

// const paragraph = document.getElementById('text-content');

// const contentDiv = document.getElementById('content');

// const contentChangeText = document.getElementById('text-textcontent');

// const contentChangeInnerText = document.getElementById('text-innertext');

// const contentChangeInnerHtml = document.getElementById('text-innerhtml');

// const contentChangeOuterHtml = document.getElementById('text-outerhtml');

// contentChangeText.addEventListener('click', () => {
//     paragraph.textContent = 'Text Content has been changed!';
// });

// contentChangeInnerText.addEventListener('click', () => {
//     paragraph.innerText = 'Inner Text has been changed!';
// });

// contentChangeInnerHtml.addEventListener('click', () => {
//     paragraph.innerHTML = '<strong>Inner HTML has been changed!</strong>';
// });

// contentChangeOuterHtml.addEventListener('click', () => {
//     paragraph.outerHTML = '<div id="content"><p id="text-content">Outer Text content has been changed!</p></div>';
// });


// const paragraph = document.querySelectorAll(".name");

// const button = document.getElementById('btn');

// function apple() {
//     paragraph.forEach( function(paragraph) {
//         paragraph.textContent = 'Manoj Sihag'; 
//     };
   
// }

// button.addEventListener('click', apple);



const paragraph = document.getElementsByTagName("span");

const button = document.getElementById('btn');

function apple() {
    for(let i = 0; i< paragraph.length; i++) {
        paragraph[i].textContent = 'Manoj Sihag'; 
    };
   
}

button.addEventListener('click', apple);
