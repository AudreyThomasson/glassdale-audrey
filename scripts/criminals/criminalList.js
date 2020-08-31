import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { CriminalHTML } from "./Criminal.js";

export const criminalList = () => {
    // this OfficerList function just calls getOfficers
    getCriminals() 
    // getOfficers initiates the api call
    .then(()=> {
        // .then = wait until everything processes into getOfficers
        const criminalArray = useCriminals();
        // set the useOfficers array equal to the name officerArray
        console.log('criminalArray', criminalArray);
        addCriminalsToDOM(criminalArray);
        // calls the addOfficersToDOM function below and passes in the array
    })
}

const addCriminalsToDOM = (anCriminalTacoArray) => {
    const domElement = document.querySelector('.criminalsContainer');
    
    let HTMLArray = anCriminalTacoArray.map(singleTacoCriminal => {
        // .map goes through each item of the array
        return CriminalHTML(singleTacoCriminal);
        // calls the HTML for a single criminal from criminal.js
    })
    
    domElement.innerHTML = HTMLArray.join("");
    // adds to dom without the joining comma
}