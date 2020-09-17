let witness = [];

export const getWitness = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(respnse => response.json())
    .then(parsedResponse => {
        witness = parsedResponse;
    })
}

export const useWitness = () => {
    return witness.slice();
}