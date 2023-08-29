const fruit = ["apple", "mango", "banana", "avacad0"]
let fruitsort = fruit.sort()
console.log(fruitsort)
console.log(fruit.reverse())

const marks = [250,400,306,212,357,420,324]
let sorted_marks = marks.sort(function(a,b){return a-b})
console.log(sorted_marks)
// console.log("The maximum mark is "+Math.max(...marks))

const cars = [
    {type:"volvo", year:2016},
    {type:'BMW',year : 2018} ,
    { type :"Toyota" ,year:2001}
]

let sorted_cars= cars.sort(function(a,b){return a.year - b.year})
console.log(sorted_cars)
stringsort_cars = cars.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x<y){
        return -1;
    }
    if(x>y){
        return 1;
    }
    return 0;
});
console.log(stringsort_cars)

const numbers = [45, 4, 9, 16, 25];
let text = "";
numbers.forEach(myfunction);

function myfunction(value, index, array){
    text += value + " ";
}
console.log(text)

const over18 = numbers.filter(myFunction);
function myFunction(value, index, array){
    return value > 18; 
}
console.log(over18)
const randomNumbers = [];

for (let i = 0; i < 100; i++) {
  const randomNumber = Math.floor(Math.random() * 401); // Generates a random number between 0 and 400
  randomNumbers.push(randomNumber);
}

console.log(randomNumbers);
let ove200 = randomNumbers.filter(mfunction);
function mfunction(value, index, array){
    return value >=200;
}
console.log(ove200)

const numberss= []
for(let j = 0; j<=500; j++){
    console.log(j)
}
let over300 = numberss.filter(mufunction);
console.log(over300)
function mufunction(value, index, array){
    return value>=300 ;
}
console.log(over300)

const fruitz = ["apple", "mango" , "banana", "plums"]

let fruitz2 = fruitz.sort(function(a,b){
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if(x<y){return -1};
    if(x>y){return 1};
    return 0;
})
console.log(fruitz2)

let position = fruitz.indexOf("apple") + 1;
console.log(position)