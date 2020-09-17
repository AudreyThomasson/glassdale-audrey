export const Witness = (witnessTaco) => {
    return `
    <section id="witness-${witnessTaco.id}" class="card-criminal">
    <p><strong>Name:</strong>${witnessTaco.name}</p>
    <p>Statement: ${witnessTaco.statements}</p>
</section>   
    
    `
}