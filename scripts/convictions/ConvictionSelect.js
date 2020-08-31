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
    

        const render = (convictionsCollection) =>  {
       
            contentTarget.innerHTML = `
                <select class="dropdown" id="crimeSelect">
                    <option value="0">Please select a crime...</option>
                    ${
                        convictionsCollection.map(convictionObj => {
                        const selecting = convictionObj.name
                        return `<option>${selecting}</option>`
                        })
                    }
                </select>
            `
    }

    render(fullList)
    }

)}