const person={
    firstname : "collins",
    lastname : "Koech",
    age : 20,
    fullname : function (){
        return this.firstname +"" + this.lastname
    }
}

console.log(person.fullname)
alert(person.fullname())

function date(){
    return date.date()
}
let text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eius quidem similique voluptatibus ullam eaque saepe dolore tenetur, laboriosam dolorem soluta aspernatur placeat, officiis totam ducimus sed labore pariatur aliquam."
console.log(text.length)

let x = new String("John");
let y = new String("John")
// same as above but different object
console.log(x == y)
let col = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum nihil corrupti asperiores dolorem voluptate beatae dicta reprehenderit, error illo maxime perferendis debitis dolores, ipsum, ex quia. Harum, cumque nam?"
console.log(col.length)
let col2= col.slice(20,100)
console.log(col2.length)
let colreplaced = col.replace("ipsum", "collins");
// replace the word ipsum with collins in string
console.log(colreplaced)
let u= "Please Visit Microsoft"
let v= u.replace(/MICROSOFT/i, "W3schools")
console.log(v)
let col3 = col.toUpperCase();
console.log(col3)
let char = text.charAt(56)
let char2 = text.charCodeAt(56)
console.log(char)
console.log(char2)
console.log(char.split(","))
console.log(char.split("."))
console.log(char.split("|"))
