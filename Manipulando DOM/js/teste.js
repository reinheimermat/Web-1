const ifzin = (a, b) => {
    if (a > b && b < a) {
        return "primeiro"
    } else {
        return "segundo"
    }
}
console.log(ifzin(30, 20))

const diferente = (a, b) => {
    return a != b ? "diferente" : "igual"
}
console.log(diferente(20, 20))

