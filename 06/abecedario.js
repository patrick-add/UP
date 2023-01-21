const mix = [
    {
        "letra": "m",
        "palavras": [
            "mamao",
            "maca",
            "melao",
            "melancia",
            "laranja"
        ]
    }
]
let perderam = 0

for (let frutas of mix[0].palavras) {
    if (!frutas[0].includes(mix[0].letra)) {
        perderam += 1
    }
}


console.log(perderam)
console.log(mix[0].letra)
console.log(mix[0].palavras.length)