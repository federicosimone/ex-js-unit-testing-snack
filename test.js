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

//snack 5

function isPalindrome(string) {
    const stringLowerCase = string.toLowerCase().trim()
    const reverseString = stringLowerCase.split('').reverse().join('')
    return stringLowerCase.trim() === reverseString
}

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("Anna")).toBeTruthy()
    expect(isPalindrome("Fede")).toBeFalsy()
})

//snack 6 

function createSlug3(titolo) {
    if (!titolo) {
        throw new Error("Titolo non valido")
    }
}

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug3("")).toThrow("Titolo non valido");
    expect(() => createSlug3(null)).toThrow("Titolo non valido")
})

//snack 7 

const posts = [
    { id: 1, title: "Ciao", slug: "Ciaone" },
    { id: 2, title: "React Hooks", slug: "react-hooks" },

]

function findPostById(posts, id) {

    if (isNaN(id)) {
        throw new Error(`"${id}" non è un id`)
    }

    posts.forEach(p => {
        if (
            p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error('"L\'array non è nel formato corretto"')
        }
    });
    return posts.find(p => p.id === id) || null;

}

test(`La funzione findPostById restituisce il post corretto dato l’array di post e l’id`, () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "React Hooks", slug: "react-hooks" })
    expect(() => findPostById(posts, "ciao")).toThrow('"ciao" non è un id')
    expect(() => findPostById([34, 68], 2)).toThrow("L\'array non è nel formato corretto")
})