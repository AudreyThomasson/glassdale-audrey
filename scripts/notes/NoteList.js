// map over an array and display all notes from Note.js
import { useNotes, getNotes } from "./NoteProvider.js"
import { noteHTML } from "./Note.js"

const contentTarget = document.querySelector('.noteContainer');
const eventHub = document.querySelector(".container")
// Listen for the custom event you dispatched in NoteProvider
eventHub.addEventListener('noteStateChanged', event => {  
        render(useNotes())
})
// _________END OF EVENTHUB_____________

export const noteList = () => {
    getNotes() 
    // getNotes initiates the api call
    .then(useNotes)
        // set the useNotes array equal to the name noteArray
    .then(render)
        // calls the render function below and passes in the array
}


const render = (aNoteTacoArray) => {
    let HTMLArray = aNoteTacoArray.map(singleTacoNote => {
        return noteHTML(singleTacoNote);
    })
    
    contentTarget.innerHTML += HTMLArray.join("");
    // adds to dom without the joining comma
}