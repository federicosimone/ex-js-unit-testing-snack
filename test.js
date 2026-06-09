// snack 1 

function getInitials(name) {
    const parts = name.split(" ")
    return parts[0][0] + parts[1][0];
}


test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Federico Simone")).toBe("FS")
})

//snack 2 

function createSlug(string) {

    return string.toLowerCase()
}

test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("MAIUSCOLO")).toBe("maiuscolo")
})

//snack 3

function average(array) {

    const somma = array.reduce((acc, num) => acc + num, 0)
    return somma / array.length
}

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3)
})

//snack 4 

function createSlug2(string) {
    return string.toLowerCase().replaceAll(" ", "-")
}

test("La funzione createSlug2 sostituisce gli spazi con -.", () => {
    expect(createSlug2("Questo è un test")).toBe("questo-è-un-test")
})