
const fs=require('fs')

const getnote= function (){
    return 'your note';
}
const addNote = function (title,body) {
    const note= loadnote()
    const duplicateNote = note.filter(function (note) {
        console.log(note.title)
        return note.title === title
    })
    
    if (duplicateNote === 0) {
        note.push({
            title:title,
            body:body
        })
        saveNote(note)
        console.log('new node added')
    } else{
        console.log('note taken')
    }
    
   
}
const loadnote = function () {
    try {
        const databaffer=fs.readFileSync('note.json')
        const dataJson=databaffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

const saveNote=function (note) {
    const dataJson= JSON.stringify(note)
    fs.writeFileSync('note.json',dataJson)
}


module.exports= {
    getnote:getnote,
    loadnote:loadnote,
    addNote:addNote,
}