import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// / ----------------EVENTHUB CODE FOR CHOICE MADE BELOW---------------------
/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // // Only do this if the user actually clicked on a 
    // crime in the dropdown -ie-`crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
                
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})
// ------------------------------END OF EVENTHUB CODE--------------------------

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
    .then(convictionNames => {
        const convictionsList = convictionNames;
        const fullList = useConvictions(convictionsList);
        const sortedArray = [];
        // pushes only the crime names into an array
        fullList.map(taco => {
            sortedArray.push(taco.name)
        })
        // sorts the array alphabetically
        sortedArray.sort();

        const render = (convictionsCollection) =>  {
       
            contentTarget.innerHTML = `
                <select class="dropdown" id="crimeSelect">
                    <option value="0">Please select a crime...</option>
                    ${
                        convictionsCollection.map(tacoCrime => {
                        return `<option value=${tacoCrime}>${tacoCrime}</option>`
                        })
                    }
                </select>
            `
    }

    render(sortedArray)
    }

)}