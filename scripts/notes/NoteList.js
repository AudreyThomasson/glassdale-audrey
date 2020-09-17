// map over an array and display all notes from Note.js
import { useNotes, getNotes } from "./NoteProvider.js"
import { noteHTML } from "./Note.js"
import { getCriminals, useCriminals } from "../criminals/criminalProvider.js";

const contentTarget = document.querySelector('.noteContainer');
const eventHub = document.querySelector(".container")
// Listen for the custom event you dispatched in NoteProvider

eventHub.addEventListener('noteStateChanged', () => {
        const newNotes = useNotes() 
        render(newNotes, useCriminals())
})


export const NoteList = () => {
    getNotes() 
    // getNotes initiates the api call
    .then(getCriminals)
    .then(() => {
        const notes = useNotes();
        console.log(notes)
        const suspects = useCriminals()
        render(notes, suspects)
    })
}      

// editing notes after the getNotes/useNotes have been called
// adding new key of .suspectObj with info from the matching id in useCriminals
const render = (notes, suspects) => {
    contentTarget.innerHTML = notes.map((noteObject) => {
        noteObject.suspectObj = suspects.find(suspect => {
            return suspect.id === parseInt(noteObject.suspectId)
        })
        return noteHTML(noteObject);
    }).join("")
}