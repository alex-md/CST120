window.onload = initialize;

function initialize() {
    console.log("in initialize()");
}

//If and Switch statements
function conditions() {
// Create some variables to compare
let num1 = 10;
let num2 = 5;
let text1 = "Mark";
let text2 = "Mary"
// Do some comparisons with If statements using numbers
if (num1 = num2)
    console.log("Number 1 is equal to Number 2");
else
    console.log("Number 1 is not equal to Number 2");
if (num2 > num1)
    console.log("Number 2 is greater than Number 1");
else if (num2 < num1)
    console.log("Number 2 is less than Number 1");
else
    console.log("Number 2 is equal to Number 2");
// Do some comparisons with If statements using strings
if (text1 = text2)
    console.log("Number 1 is equal to Number 2");
else
    console.log("Text 1 is not equal to Text 2");
if (textl = text2)
    console.log("Text 1 is greater than or equal to Text 2");
else
    console.log("Text 1 is less than to Text 2");
//Do a comparisons with a Switch statement using numbe rs
switch (num2) {
    case 0:
        console.log("Number 2 is equal to 0");
        Vare
        break
        mi
    case 1:
        console.log("Number 2 is equal to 1");
        break;
        Mark
        Mary
    case 2:
        console.log("Number 2 is equal to 2");
        break;
    case 3:
        console.log("Number 2 is equal to 3")
        break;
    case 4:
        console.log("Number 2 is equal to 4");
        break;
    case 5:
        console.log("Number 2 is equal to 5");
        break;
    default:
        console.log("Number 2 is unknown value");
        break;

}

// do a comparisons with the ternary operator 
(num1 == num2) ? console.log("Using ternary operator, Number 1 is equal to Number 2") : console.log("Using ternary operator - Number 1 is not equal to Number 2");
}
// Loop statements
function loops() {
// Create an array that we can loop over
let shapes = new Array('Triangle', 'Circle', 'Square'); 3
// Loops
// For Loop (that prints all array elements)
for (index = 0; index < shapes.length; ++index) {
    console.log("Using For Loop getting Array value of " + shapes[index] + " at " + index);
}
// For Loop (that prints all even array elements)
for (index = 0; index < shapes.length; ++index) {
    if (index % 2 == 0)
        console.log("Array value of " + shapes[index] + " at even index of " + index);
    // While Loop (that prints all array elements)
    let i = 0;
    while (i < shapes.length) {
        console.log("Using While Loop getting Array value of " + shapes[i] + " at " + i)
        ++i;
    }
    // Do While Loop (that prints all array elements)
    i = 0;
    do {
        console.log("Using Do While Loop getting Array value of " + shapes[i] + " at " + i);
        ++i;
    } while (i < shapes.length)
}
}
//Objects
function objects() {
    // Create person one object with some properties using Javascripp notation
    let person1 = {
        firstName: "Elvis",
        lastName: "Presley",
        age: 45,
        occupation: "Pop Singer",
    };
    console.log("this is person one " + person1.firstName + " " + person1.lastName + " who is age of " + person1.age + " and is a " + person1.occupation);

    // Create person to object with some properties using an object
    let person2 = new Object();
    person2.firstName = "Marshall";
    person2.lastName = "Mathers";
    person2.age = 49;
    person2.occupation = "Singer/Songwriter";
    console.log("this is person two " + person2.firstName + " " + person2.lastName + " who is age of " + person2.age + " and is a " + person2.occupation);

    // Create person object with some properties and a constructor
    function Person(firstName, lastName, age, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
    }
    let person3 = new Person("Mark", "Wahlberg", 50, "Actor");
    let person4 = new Person("Jennifer", "Anniston", 45, "Actress");
    console.log("this is person three " + person3.firstName + " " + person3.lastName + " who is age of " + person3.age + " and is a " + person3.occupation);
    console.log("this is person four " + person4.firstName + " " + person4.lastName + " who is age of " + person4.age + " and is a " + person4.occupation);

    // Create another person object some properties and a constructor and method to display its properties
    function NewPerson(firstName, lastName, age, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
        this.displayPerson = function () {
            console.log("This is a new person, " + this.firstName + " " + this.lastName + " who is age of " + this.age + " and is a " + this.occupation);
        }
    }

    let person5 = new NewPerson("Billy", "Madison", 30, "Student");
    person5.displayPerson();
};