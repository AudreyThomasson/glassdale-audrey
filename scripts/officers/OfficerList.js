import {OfficerHTML} from './Officer.js';
import {getOfficers, useOfficers} from './OfficerProvider.js';

export const officerList = () => {
    // this OfficerList function just calls getOfficers
    getOfficers() 
    // getOfficers initiates the api call
    .then(()=> {
        // .then = wait until everything processes into getOfficers
        const officerArray = useOfficers();
        // set the useOfficers array equal to the name officerArray
        addOfficersToDOM(officerArray);
        // calls the addOfficersToDOM function below and passes in the array
    })
}

// const addOfficersToDOM = (anOfficerTacoArray) => {
//     const domElement = document.querySelector('.officersContainer');
    
//     let HTMLArray = anOfficerTacoArray.map(singleTacoOfficer => {
//         // .map goes through each item of the array
//         return OfficerHTML(singleTacoOfficer);
//     })
    
//     domElement.innerHTML = HTMLArray.join("");
//     // adds to dom without the joining comma
// }