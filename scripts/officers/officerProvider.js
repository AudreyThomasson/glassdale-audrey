let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        // pause and then convert incoming data to js
        .then(parsedTacoOfficers => {
     // parsedOfficers is the data after the conversion
                console.table(parsedTacoOfficers)
                officers = parsedTacoOfficers
         // set array from line 1 equal to the result
        // so it can be used later
            }
        )
}