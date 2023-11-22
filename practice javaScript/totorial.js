
// incroment: yacnii badi ama wax iigu dar
// let x = 2

// x++
// console.log(x)

/*------ String operator--------/

let firstName = "Abdikafi"
let lastName = "Ali"
let habby = "codding"

let story = "Hi! My name is" + firstName + " " + lastName + " "+"I am injoy doing" + habby;

console.log(story)
/---------*/

// Comparison
// ternary(?=) waxay qaadataa conditon badan tusaale ahaan
// let Age = 14
// let Abdi = (Age <= 12)? "Ninweyn": "Ninyar"

// console.log(Abdi)












/*---------Logical operotor---------*/
// if ((10 == 10) && (5 == 5)){
//     console.log("waa sax");
// }else{
//     console.log("waa qalad");
// }





/* -- Function ---*/
// function sum (num1, num2, num3,){
//     return num1+num2+num3;
// }
// console.log(sum(2, 3, 4));




// global scope and function scope 
// let name = "abdikafi ali";
// function toUpper(text){
//     return text.toUppercase();
// }
// console.log(toUpper(name));

 



/*-----3 types function----*/

//1. midka ugu caansan oo la isticmali
// waxaana loogu talagalay in shaqada lagu fududeeyo
// fat arrow/arrow function Es6
// const toUpper = () =>{
//     Text.toUpperCase()
// }




// 2. kii hore oo la isticmaali jiay

// function toUpper(text){
//     return TextDecoderStream.toUpperCase();
// }





//3. kii waayada dhexe la isticmaali jiray
// const toUpper = function(text){
//     return text.toUpperCase();
// }






//object = keys and value

// let car = {
//     name: "Toyota",
//     Model: "camry",
//     year: 2020

// }
// console.log((car.name)) 






// let Hotel ={
//     name: "Hilton",
//     rooms: 50,
//     booked: 25,
//     checkAvailability: function(){
//         return this.rooms - this.booked;
//     }
// }
// let AvailabaleRooms = Hotel.checkAvailability();

// console.log(AvailabaleRooms);















// dhowr hotel markaad wax usameenaysid
//sidaan ayaa la isticmaalaa  CONSTRACT

function Hotel(name, rooms, booked){
this.name: name;
this.rooms: rooms;
this.booked: booked;

this.checAvalability = function(){
    return this.rooms - this.booked
};
}