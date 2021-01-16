// let number =(n) =>n;

// console.log(number(10)) 

// let number =(n,b) =>n+b;

// let number =(n,b) =>{
//     return n+b;
// };

// console.log(number(10,5));
// var javascript={
//     name: "javascript",
//     liberies:["react","angular"],
//     printLabiraries:function(){
//         this.liberies.forEach((a) => console.log(`${this.name} loves ${a}`));
//     },
// };

// javascript.printLabiraries();
// 
const fs =require('fs')
fs.writeFileSync('text.txt','yo yo')
fs.appendFileSync('text.txt','haha')
