const disparos = [0, 50, 90, 80, 100, 80, 40]
let acimaDe70 = 0

for (let tiros of disparos) {
    if (tiros > 70) {
        acimaDe70++
    }
}

if (acimaDe70 >= 3) {
    console.log(acimaDe70)
} else {
    console.log('ELIMINADO')
}