import {getWitness, useWitness} from "./WitnessProvider.js"
import { Witness } from "./Witness.js";

export const WitnessList = () => {
    getWitness()
    .then(() => {
        const witnessArray = useWitness();
        addWitnessToDOM(witnessArray);
    })
}

const addWitnessToDOM = (aWitnessTacoCollection) => {
    //get a reference to DOM location to put this stuff
    const domElement = document.querySelector('#witnessContainer');
    //loop through witnessCollection and make HTML for each one
    let HTMLArray = aWitnessTacoCollection.map(singleWitness => {
        return Witness(singleWitness)
    }).join("")
    //add to innerHTML
    domElement.innerHTML += HTMLArray;
}