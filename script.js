// const getcolor=()=>{
//     let mathrandnumber= Math.floor( Math.random()*16777215)
//   let colorcode="#"+mathrandnumber.toString(16);
//   console.log(mathrandnumber,colorcode);
//   document.body.style.backgroundColor=colorcode;
//   document.getElementById("color").innerHTML=colorcode
//   navigator.clipboard.writeText(colorcode);
// };



// document.getElementById("btn").addEventListener("click",getcolor);

// //initial call
// getcolor();


let getcolor=()=>{
    let randomnumber=Math.floor(Math.random()*16777215);
    let hexacode="#"+randomnumber.toString(16);
    console.log(randomnumber,hexacode);
    document.body.style.backgroundColor=hexacode;
    document.getElementById("color").innerHTML=hexacode;
    navigator.clipboard.writeText(hexacode);

}
getcolor();
document.getElementById("btn").addEventListener("click",getcolor);


