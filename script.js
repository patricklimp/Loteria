function sortearNumeros (){
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const numeros = [];

    while (numeros.length < 6) {
        const num = Math.floor(Math.random() * 6) + 1;
        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }

    numeros.forEach(numero => {
        const bolinha = document.createElement("div");
        bolinha.className = "numero";
        bolinha.textContent = numero;
        resultado.appendChild (bolinha);
    })
}