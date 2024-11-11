let name="Arun"
const Age =25
var country="India"
function greet(name){
    return "Hello,"+name
}
console.log(greet(name))
console.log(greet("Arun"))
console.log(name)
 
 let age = 20
if(age>=18){
    console.log("your are eligible to vote")
}else{
    console.log("your are not eligible to vote")
}

for(let i=0;i<5;i++){

    console.log(i)
}

let fruits =["apple",'cherry',"oranges"]
let cars = {brand:"Toyata",model:"inova"}

for(let index in fruits){
    console.log(fruits[index])
}
for(let index in cars){
    console.log(cars[index])
}

// document.getElementById("myElement").innerHTML="Hello world"

function exampleConst(){
    const z=10;
    console .log(z)
    if(true){
        const z =20;
        console.log(z);
    }
    // console.log(z);
}
exampleConst()