function reverseName(fullName) 
{
    let name = fullName.split("");

    let reversedName = name.reverse();

    let result = reversedName.join(' ');

    return result;
}
console.log(reverseName('Manoj Sihag'));

function checkVowels(fullName)
{
    const vowels = ["a", "e", "i", "o", "u"];
    
    let name = fullName.split('');

    let findvowels = name.filter(char => vowels.includes(char));

    return findvowels;
   
}

console.log(checkVowels('Manoj Sihag'));



function largest(fullName)
{
    let name = fullName.split(' ');

    let firstName = name[0];

    
    let surname = name[name.length -1];

    if (firstName.length > surname.length) {
        return `The first name ${firstName} is longer.`
    } 
    else if (surname.length > firstName.length) 
    {
        return `The surname ${surname} is longer`
    }
    else {
        return `The first name ${firstName} and surname ${surname} are of the same length`
    }    
}

console.log(largest("Manoj Sihag"))


function hi()
{
    console.log('My name is :', name);

    console.log('My age is :' , age);
 
    var name = "XYZ";
    
    let age = 24;

}
console.log(hi());

// console.log(0 === false);

// console.log(0 === true);


// date() === date();



// 4+4+structuredClone
// str+4+5



