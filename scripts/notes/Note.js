// Take notes made and prepare to display on website
// This is where the html for displaying each note will live

export const noteHTML = (noteTaco) => {
    return `
        <section class="card-note">
            <div class="note--content">Note Text: ${noteTaco.noteText}</div>
            <div class="note--title">Suspect: ${noteTaco.suspectObj.name}</div>
            <div class="note--timestamp">Date: ${new Date(noteTaco.date).toLocaleDateString('en-US')}</div>
            <button id="deleteNote--${noteTaco.id}">Delete</button>
            <br>
        </section>     
    `
}