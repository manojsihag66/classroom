function intro(fname, lname, age, city, state)
{
    this.firstname = fname;
    this.lastname = lname;
    this.yourage = age;
    this.yourcity = city;
    this.yourstate = state
}

const details = new intro("Manoj", "Sihag", 24, "Sirsa", "Haryana");

console.log(details);
