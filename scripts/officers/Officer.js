export const OfficerHTML = (officerTaco) => {
    return `
        <section id="officer-${officerTaco.id}" class="card-officer">
            <h3>Officer: ${officerTaco.name}</h3>
        </section>     
    `
}