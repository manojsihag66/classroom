// console.log("NAME");

// function demo()
// {
//     return 'ASYNC';
// }
// console.log(demo());

// setTimeout(function demoTwo(){
//     return 'THIS IS A ASYNCHRONOUS FUNCTION';
// },1000);

// // console.log(example(14,7));

// // setTimeout(function )
// console.log(328468364);

// for(a=0;a<=10;a++)
// {
//     console.log("COUNTING UPTO TEN:"+a);
// }


// function example(a,b)
// {
//     return a+b;
// }
// console.log(example(7,7));


// example();


// setTimeout(function demoTwo(){
//     return 'THIS IS A ASYNCHRONOUS FUNCTION';
// },1000);




// function ex(a,b)
// {
//     return a+b;
// }

// console.log(ex(13,2));





// function firstName(){
//     let myName = 'Manoj';
//     console.log(`My name is : ${myName}`);
// }


// const names = setInterval(firstName, 2000);

// setTimeout(() => {
//     clearInterval(names);
//     let lastName = 'Sihag';
//     console.log(`Surname is : ${lastName}`);
// }, 3000);

// setTimeout(() => {
//     let age = 20;
//     console.log(`My age is : ${age}`)
// }, 5000);

// setTimeout(() => {
//     let city = 'Sirsa'
//     console.log(`My city is : ${city}`);
// }, 7000);




// function fetchData()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const present = true;
//             if(present) 
//             {
//                resolve('You are Present');
//             }
//             else {
//                 reject('You are Absent');
//             }
//         }, 2000);
//     });
// }

// fetchData()

//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('Finally You are present in class.');
//     });

    // livescript, javascript, typescript,  ecma script  vanilla javascript, pure javascript 

    // let x = [1,2];
    // let y = [3,4];
    // let z = [...x ,...y];

    // let a = [...x];


    // function createExample(arg1,arg2){
    //     console.log(arg1,arg2);
    //    }
    //    createExample(...a);



    //    let Object = 2300;
    //    console.log(Object);

// let sample = [1,2,3,4,5];



// forEach(item)


// async function getdata()
// {
//    setTimeout(() => {
//     console.log('hello');
//    }, 5000); 
// }

// getdata();



// async function getdata() {
//    let response = await fetch('https://dummyjson.com/todos');

//     let result = await response.json();

//      console.log(result);
// }

// getdata();

async function fetchUserData() {
    const url = 'https://dummyjson.com/quotes';
    // const url = 'https://jsonplaceholder.typicode.com/nonexitent';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }

    catch (error) {
        console.error(`Error fetching user data :`, error);
        return null;
    }
    
}

document.getElementById('fetchUserBtn').addEventListener('click', async () => {
    const response = await fetchUserData();

    if (response) {
        document.getElementById('response').textContent = JSON.stringify(response, null, 2);
    } else {
        document.getElementById('response').textContent = 'Failed to fetch user data.';
    }
});

