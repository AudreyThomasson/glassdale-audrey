// map over an array and display all notes from Note.js
import { useNotes, getNotes } from "./NoteProvider.js"
import { noteHTML } from "./Note.js"

// -------THE ONE BELOW IS LISTENING FOR A change to the note list------
const eventHub = document.querySelector(".container")
// Listen for the custom event you dispatched in NoteProvider
eventHub.addEventListener('noteStateChanged', event => {  
    .then(() => {
        render(useNotes());
    })
    }
)
// _________END OF EVENTHUB_____________

// export const noteList = () => {
//     // this noteList function just calls getNotes
//     getNotes() 
//     // getNotes initiates the api call
//     .then(()=> {
//         // .then = wait until everything processes into getNotes
//         const noteArray = useNotes();
//         // set the useNotes array equal to the name noteArray
//         render(noteArray);
//         // calls the render function below and passes in the array
//     })
// }


const render = (aNoteTacoArray) => {
    const domElement = document.querySelector('.noteContainer');
    
    let HTMLArray = aNoteTacoArray.map(singleTacoNote => {
        // .map goes through each item of the array
        return noteHTML(singleTacoNote);
        // calls the HTML for a single note from note.js
    })
    
    domElement.innerHTML += HTMLArray.join("");
    // adds to dom without the joining comma
}