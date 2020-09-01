/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
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