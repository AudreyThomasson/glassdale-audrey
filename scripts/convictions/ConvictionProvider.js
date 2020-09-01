let convictions = []

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedCrimes => {
                // console.table(parsedCrimes)
                convictions = parsedCrimes
            }
        )
}

export const useConvictions = () => {
    return convictions.slice()
}