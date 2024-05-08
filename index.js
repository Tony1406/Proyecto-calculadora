let valorDisplay = document.getElementById('display')
let valorActual = ''; 
let operador = ''; 

function clearDisplay() {
    valorDisplay.innerHTML = '0';
}

function eliminarCaracter(valor) {

    if (valor === '<') {
        valorDisplay.innerHTML = valorDisplay.innerHTML.slice(0, -1);

        if (valorDisplay.innerHTML === '') {
            valorDisplay.innerHTML = '0';
        }
    }
}

function agregarAlDisplay(valor) {
    if (valor === '.' && valorDisplay.innerHTML.includes(valor)) {
        return ;
    } 
    
    if (valor === '+') {
        valorActual = valorDisplay.innerHTML;
        operador = '+';
        valorDisplay.innerHTML = '0'; 
    } else if (valor === '-') {
        valorActual = valorDisplay.innerHTML;
        operador = '-';
        valorDisplay.innerHTML = '0'; 
    } else if (valor === 'x') {
        valorActual = valorDisplay.innerHTML;
        operador = 'x';
        valorDisplay.innerHTML = '0'; 
    } else if (valor === '÷') {
        valorActual = valorDisplay.innerHTML;
        operador = '÷';
        valorDisplay.innerHTML = '0'; 
    } else if (valor === '.' && valorDisplay.innerHTML === '0' ) {
            valorDisplay.innerHTML += valor;
    } else if (valorDisplay.innerHTML === '0') {
            valorDisplay.innerHTML = valor;
    } else {
            valorDisplay.innerHTML += valor;
    }
}

function realizarCalculo() {
    let resultado;

    let num1 = parseFloat(valorActual);
    let num2 = parseFloat(valorDisplay.innerHTML);

    if (operador === '+') {
        resultado = num1 + num2;
    } else if (operador === '-') {
        resultado = num1 - num2;
    } else if (operador === 'x') {
        resultado = num1 * num2;
    } else if (operador === '÷') {
        resultado = num1 / num2;
    }

    valorDisplay.innerHTML = resultado;
}




