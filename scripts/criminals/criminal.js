import { AlibiDialog } from "./AlibiDialog.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("associates--")) {
        const [prefix, criminalId] = event.target.id.split("--")

        const alibiEvent = new CustomEvent("associatesClicked", {
            detail: {
                chosenCriminal: criminalId
            }
        })
        eventHub.dispatchEvent(alibiEvent);
    }
})

export const CriminalHTML = (criminalTaco) => {
    return `
        <section id="criminal-${criminalTaco.id}" class="card-criminal">
            <h4>${criminalTaco.name}</h4>
            <p>Age: ${criminalTaco.age}</p>
            <p>Crime: ${criminalTaco.conviction}</p>
            <p>Term start: ${new Date(criminalTaco.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end: ${new Date(criminalTaco.incarceration.end).toLocaleDateString('en-US')}</p>
            <button id="associates--${criminalTaco.id}">Alibis</button>
            ${AlibiDialog(criminalTaco.id)}
        </section>     
    `
}