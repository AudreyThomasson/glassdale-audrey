let criminals = []


export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.table(parsedCriminals)
                debugger
                criminals = parsedCriminals
            }
        )
}

export const useCriminals = () => {
    return criminals.slice()
}