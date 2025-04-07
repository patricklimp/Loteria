function sortearNumeros () {

    const resultado = document.getElementById("resultado");
    const numeros = [];

    while (numeros.length < 6) {

        const num = Math.floor(Math.random() * 60) +1;
        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }

    resultado.textContent = numeros.join(" - ")
}