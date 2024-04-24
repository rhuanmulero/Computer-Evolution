let total = 0;
let contadorDezenas = 0;
let contadorUnidades = 0;

const dezenas = document.querySelectorAll('#dezenas .conta');
const unidades = document.querySelectorAll('#unidades .conta');
const placarTotal = document.getElementById('placar-total');

dezenas.forEach((conta, index) => {
    conta.addEventListener('click', () => {
        moverBolinha(conta, index, 'dezenas');
    });
});

unidades.forEach((conta, index) => {
    conta.addEventListener('click', () => {
        moverBolinha(conta, index, 'unidades');
    });
});

function moverBolinha(bolinha, index, tipo) {
    const contador = tipo === 'dezenas' ? contadorDezenas : contadorUnidades;
    if (contador === 0) {
        resetarBolinhas(tipo);
    }
    let deslocamento = index * 7;
    if (bolinha.classList.contains('ativa')) {
        deslocamento = 0; 
    } else {
        if (tipo === 'dezenas') {
            deslocamento = (index + 1) * 7; 
        }
    }
    bolinha.style.transform = `translateX(${deslocamento}px)`;
    bolinha.classList.toggle('ativa');
    if (bolinha.classList.contains('ativa')) {
        if (tipo === 'dezenas') {
            contadorDezenas++;
            total += 10;
        } else {
            contadorUnidades++;
            total++;
        }
    } else {
        if (tipo === 'dezenas') {
            contadorDezenas--;
            total -= 10;
        } else {
            contadorUnidades--;
            total--;
        }
    }
    placarTotal.textContent = total;
}

function resetarBolinhas(tipo) {
    const bolinhas = tipo === 'dezenas' ? dezenas : unidades;
    bolinhas.forEach((bolinha, index) => {
        bolinha.style.transform = 'translateX(0)';
        bolinha.classList.remove('ativa');
    });
    if (tipo === 'dezenas') {
        contadorDezenas = 0;
    } else {
        contadorUnidades = 0;
    }
}

function calcularDiferenca() {
    var valor1 = parseFloat(document.getElementById('input1').value);
    var valor2 = parseFloat(document.getElementById('input2').value);
    var diferenca = valor2 - valor1;
    document.getElementById('resultado').innerText = "A diferença é: " + diferenca;
}

const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

let count = 0;

incrementBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});
