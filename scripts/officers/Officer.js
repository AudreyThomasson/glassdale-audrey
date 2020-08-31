export const OfficerHTML = (officerTaco) => {
    return `
        <section id="officer-${officerTaco.id}" class="card-officer">
            <h2>Name: ${officerTaco.name}</h2>
        </section>     
    `
}