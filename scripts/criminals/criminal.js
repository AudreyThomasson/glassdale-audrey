export const CriminalHTML = (criminalTaco) => {
    return `
        <section id="criminal-${criminalTaco.id}" class="card-criminal">
            <h4>${criminalTaco.name}</h4>
            <p>Age: ${criminalTaco.age}</p>
            <p>Crime: ${criminalTaco.conviction}</p>
            <p>Term start: ${new Date(criminalTaco.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end: ${new Date(criminalTaco.incarceration.end).toLocaleDateString('en-US')}</p>
        </section>     
    `
}