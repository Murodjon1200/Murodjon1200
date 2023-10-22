// let pTextssss = document.querySelectorAll(".oneP")


// for (let i = 0; i < pTextssss.length; i++) {

//     switch (true) {
//         case i % 2 === 0:
//             pTextssss[i].style.backgroundColor = "yellow"
//             break;
//         case i % 2 !== 0:
//             pTextssss[i].style.backgroundColor = "aqua"
//             break;
//     }
// }




//                                            " Setafo'r"




let murodjon = document.querySelector(".div")

let redLight = document.getElementById("red");
let yellowLight = document.getElementById("yellow");
let greenLight = document.getElementById("green");
function changeLights() {


  if (redLight.style.backgroundColor === "red") {
    redLight.style.backgroundColor = "black";
    yellowLight.style.backgroundColor = "yellow";
    greenLight.style.backgroundColor = "black";
  } else if (yellowLight.style.backgroundColor === "yellow") {
    redLight.style.backgroundColor = "black";
    yellowLight.style.backgroundColor = "black";
    greenLight.style.backgroundColor = "green";
  } else if (greenLight.style.backgroundColor === "green") {
    redLight.style.backgroundColor = "red";
    yellowLight.style.backgroundColor = "black";
    greenLight.style.backgroundColor = "black";
  }
}

setInterval(() => {
  redLight.style.backgroundColor = 'white'

}, 2000);

setInterval(() => {
  yellowLight.style.backgroundColor = 'white'

}, 4000);

setInterval(() => {
  greenLight.style.backgroundColor = 'white'

}, 6000);














