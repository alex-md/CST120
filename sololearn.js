// declare an arrow function that takes an array and prints the odd elements.
const printOdds = (arr) => {
    arr.foreach(element => {
        if (element % 2 !== 0) {
            console.log(element);
        }
    }