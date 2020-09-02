import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { CriminalHTML } from "./Criminal.js";

// -------THE ONE BELOW IS LISTENING FOR A PARTICULAR CHOSEN CRIME------
const eventHub = document.querySelector(".container")
// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if (event.detail.crimeThatWasChosen !== "0") {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = useCriminals().filter(currentCriminal => {
            return currentCriminal.conviction === event.detail.crimeThatWasChosen
        })

        addCriminalsToDOM(matchingCriminals)
        /* Then invoke render() and pass the filtered collection as
            an argument */
    } else {
        addCriminalsToDOM(useCriminals());
    }
})
// -------THE ONE BELOW IS LISTENING FOR A PARTICULAR CHOSEN ARRESTING OFFICER------

eventHub.addEventListener('officerSelected', event => {
    // How can you access the officer name that was selected by the user?
    // How can you get the criminals that were arrested by that officer?
    if (event.detail.officerChosen !== "0") {
    const matchedCriminalsToOfficers = useCriminals().filter(currentCriminal => {
        console.log(event.detail.officerChosen)
        return currentCriminal.arrestingOfficer === event.detail.officerChosen
    })
    console.log(matchedCriminalsToOfficers)
    addCriminalsToDOM(matchedCriminalsToOfficers)
    } else {
    addCriminalsToDOM(useCriminals());
    }
})





export const criminalList = () => {
    // this OfficerList function just calls getOfficers
    getCriminals() 
    // getOfficers initiates the api call
    .then(()=> {
        // .then = wait until everything processes into getOfficers
        const criminalArray = useCriminals();
        // set the useOfficers array equal to the name officerArray
        // console.log('criminalArray', criminalArray);
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