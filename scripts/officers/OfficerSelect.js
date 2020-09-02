import { getOfficers, useOfficers} from "./officerProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

// ------------------------------END OF EVENTHUB CODE--------------------------
const contentTarget = document.querySelector(".filters__officer")


export const OfficerSelect = () => {
    // Get all convictions from application state
    getOfficers()
    .then(officerNames => {
        const officerList = officerNames;
        const fullList = useOfficers(officerList);
        const nameArray = [];
        // pushes only the officer names into an array
        fullList.map(taco => {
            nameArray.push(taco.name)
        })
        // // sorts the array alphabetically
        // sortedArray.sort();

        const render = (officerCollection) =>  {
       
            contentTarget.innerHTML = `
                <select class="dropdown" id="officerSelect">
                    <option value="0">Please select an officer...</option>
                    ${
                        officerCollection.map(tacoOfficer => {
                        return `<option value=${tacoOfficer}>${tacoOfficer}</option>`
                        })
                    }
                </select>
            `
    }

    render(nameArray)
    }

)}