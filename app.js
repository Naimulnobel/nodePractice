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
// const fs =require('fs')
// fs.writeFileSync('text.txt','yo yo')
// fs.appendFileSync('text.txt','haha')
const note=require('./note.js')
// // console.log(yourNote)
// const note=yourNote()
// console.log(note)
const chalk = require('chalk');
const yargs = require('yargs');

// 
yargs.command({
    command:'add',
    describe:'Adding a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        note.addNote(argv.title, argv.body)
        
    }

})
yargs.command({
    command:'remove',
    describe:'Removing a note',
    handler: function(){
        console.log('Removing a note')
    }

})
yargs.command({
    command:'read',
    describe:'Reading a list',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('Reading a list',argv)
    }

})
//console.log(yargs.argv)
yargs.parse()
    


