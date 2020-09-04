// Take notes made and prepare to display on website
// This is where the html for displaying each note will live

export const noteHTML = (noteTaco) => {
    return `
        <section id="note-${noteTaco.id}" class="card-note">
            <p>Note Text: ${noteTaco.noteText}</p>
            <p>Suspect: ${noteTaco.suspect}</p>
            <p>Date: ${new Date(noteTaco.date).toLocaleDateString('en-US')}</p>
            <br>
        </section>     
    `
}