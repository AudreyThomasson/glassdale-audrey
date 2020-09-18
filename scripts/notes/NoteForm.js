// A bunch of input boxes related to the note information

import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { saveNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

// code below listens for new note entry then tells saveNote 
// to go save the new note to the database
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        
        const noteContent = document.querySelector("#noteForm--text")
        const noteCriminal = document.querySelector("#noteForm--criminal")
        
        if (noteCriminal.value !== "0"){
            const newNote = {
                noteText: noteContent.value,
                suspectId: parseInt(noteCriminal.value),
                date: Date.now()
            }

            saveNote(newNote)

        }else{

            window.alert("Choose a Suspect");
        }
    }
})

// renderForm takes in the array of criminal names and then 
// makes a form on the DOM for entering a note with dropdown of
// criminal names
const render = (criminalArray) => {
    contentTarget.innerHTML = `
        <h3>New Note Details</h3>
        <div>
            <textarea id="noteForm--text" placeholder="Put a note here"></textarea>
            <select class="dropdown" id="noteForm--criminal">
                <option value="0">Please select a criminal...</option>
                ${
                    criminalArray.map(tacoCriminal => {
                        return `<option value="${tacoCriminal.id}">${tacoCriminal.name}</option>`
                    }).join("")
                }
            </select>
            <button type="button" id="saveNote">Save Note</button>
        </div>
    `
}

// NoteForm gets the array of criminals from the api and then
// calls renderForm and passes in the array of criminals to 
// use for the criminal name dropdown.
export const NoteForm = () => {
    getCriminals()
    .then(() => {
        render(useCriminals());
    })  
}