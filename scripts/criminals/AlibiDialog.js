import { useCriminals } from "./criminalProvider.js";
const eventHub = document.querySelector(".container")

eventHub.addEventListener("associatesClicked", event => {
    //display all associates for a criminal
    debugger

    const targetCriminal = useCriminals().find(criminal => {
        return criminal.id === parseInt(event.detail.chosenCriminal)
        // parseInt turns a string into a number
    })
    const alibiTarget = document.querySelector(`.alibiDialog--${targetCriminal.id}`);

    alibiTarget.innerHTML = `${
        targetCriminal.known_associates.map(associate => {
            return `
           <h4>${associate.name}</h4>
           <div>${associate.alibi}</div> 
            `
        }).join("")
    }`
})


export const AlibiDialog = (id) => {
    return `
        <span class="alibiDialog--${id}"></span>
    `
}