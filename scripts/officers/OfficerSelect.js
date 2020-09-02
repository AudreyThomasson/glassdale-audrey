import { getOfficers, useOfficers} from "./officerProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {
    if (event.target.id === "officerSelect") {
        // Get the name of the selected officer
        // Define a custom event
        const officerCustomEvent = new CustomEvent('officerSelected', {
            detail: {
                officerChosen: event.target.value
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(officerCustomEvent)
    }
})

// ------------------------------END OF EVENTHUB CODE--------------------------
const contentTarget = document.querySelector(".filters__officer")


export const OfficerSelect = () => {
    // Get all officers from application state
    getOfficers()
    .then(() => {
        const officerList = useOfficers();

        const render = (officerCollection) =>  {
            contentTarget.innerHTML = `
                <select class="dropdown" id="officerSelect">
                    <option value="0">Please select an officer...</option>
                    ${
                        officerCollection.map(tacoOfficer => {
                        return `<option value="${tacoOfficer.name}">${tacoOfficer.name}</option>`
                        })
                    }
                </select>
            `
    }
    render(officerList)
    }
)}