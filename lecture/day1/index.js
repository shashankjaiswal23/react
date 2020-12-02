// ES6

// Arrow Function

// var myName = (name) => "My name is " + name

// console.log(myName("Swati"))


// var name = "Swati"



// var greeting = (people) => {
//     const age = 26;
//     return "Hello "+ people + "My age is "+ age + " Hello " + name
// }





var name = "shashank"
console.log(name)

// //console.log(greeting(" Shashank"))

// const num = [2, 5, 4, 7, 5]
// num.push(8)
// console.log(num)


// let sayHello = (students={name: " Swati"}) => {
//     return students
// }
// let studentList = {
//     name: "Shashank",
//     age: 26,
//     city: "Ambikapur"
// }
// console.log(sayHello(undefined))


//rest parameter
// function fn(a, b, ...num) {
//     console.log(num)
//     for (let i = 0; i < num.length; i++) {
//         let d = a+b+ num[i]
//         return d;
//     }

//      return
// }

// console.log(fn(5,7,8,9,59))


// let nameArray = ["Shashank", "Swati", "Atul", "Nilesh"];
// let wordPressDev = nameArray[1];
// let fullStackDev = nameArray[0];
// let maximoDev = nameArray[2];
// let backendDev = nameArray[3]

// console.log(wordPressDev)

//destruturing

// let [a, b, c, d] = nameArray
// console.log(a,b, c, d)


let person = ["shashank", "Swati", "Manish"]

for (let i = 0; i < person.length; i++) {
    const greet = "Hello !! I am " + person[i];
    console.log(greet)   
}














