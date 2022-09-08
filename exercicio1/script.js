const num = Number(prompt("digite um numero")) //seu numero aqui

if (num % 2 === 0) {

    if (num % 3 === 0) {
        console.log("divisivel por 2 ou por 3")

    } else {

        console.log("não é divisivel")
    }
} else {
    console.log("Não é divisivel")

}

if (num % 2 === 0 || num % 3 === 0) {
    console.log("Esse número é divisivel por 2 ou por 3")
} else {
    console.log("Não é divisivel")
}