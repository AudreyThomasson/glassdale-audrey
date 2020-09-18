// hold onto array of notes
// useNotes that makes copy of array of notes & returns
// getNotes from database
// add a note to the database
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}
// __________________END of EVENTHUB CODE_____________________

let notes = [];

export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then(
            parsedNotes => {
                // debugger
            notes = parsedNotes
            })
}

export const useNotes = () => {
    return notes.slice();
}

// pushes the note just written to the server
export const saveNote = tacoNoteObj => {
    return fetch("http://localhost:8088/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tacoNoteObj)
    })
    .then(() => {
        return getNotes()
    })
    .then(dispatchStateChangeEvent)
}
// button click
// reference specific note by the id
// remove from api
// get all notes
// display notes

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
}
