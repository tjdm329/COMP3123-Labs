// COMP3123 Full Stack
// Thomas del Mundo 101498572
// Lab 2

// Exercise 1
function greeter(myArray){
    const greet = 'Hello';
    for(let item of myArray){
        console.log(greet, item);
    }
}
//Output
console.log('\nExercise 1');
greeter(['Randy Savage', 'Rick Flair', 'Hulk Hogan '], 3);

//Exercise 2
const capitalize = (x) => {
    const [first, ...other] = x;
    return first.toUpperCase() + other.join('');
}
//Output
console.log('\nExercise 2');
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//Exercise 3
const colours = ['red','green','blue'];
const capitalizeColours = colours.map(colour => capitalize(colour));
//Output
console.log('\nExercise 3');
console.log(capitalizeColours);

//Exercise 4
var values = [1,60,34,30,20,5];
const filterLessThan20 = values.filter(value => value < 20);
//Output
console.log('\nExercise 4');
console.log(filterLessThan20);

//Exercise 5
var array = [1,2,3,4];
const calculateSum = array.reduce((sum, i) => sum + i);
const calculateProduct = array.reduce((product, i) => product * i);
//Output
console.log('\nExercise 5');
console.log(calculateSum);
console.log(calculateProduct);


//Exercise 6
class Car{
    constructor(model,year){
        this.model = model;
        this.year = year;
    }
    details(){
        return `Model: ${this.model} | Engine: ${this.year}`;
    }
}
class Sedan extends Car{
    constructor(model,year,balance) {
        super(model,year);
        this.balance = balance;
    }
    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}
//Output
console.log('\nExercise 6')
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD',2018,30000);
console.log(sedan.info());