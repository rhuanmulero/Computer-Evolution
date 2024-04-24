
const quotes = [
    "A ciência é, portanto, uma perversão de si mesma, a menos que tenha como fim último, melhorar a humanidade.<br> Nikola Tesla",
    "O progresso da ciência não nos ensinou a não lutar, mas a não perder a luta. <br> J. Robert Oppenheimer",
    "Não sei com que armas a Terceira Guerra Mundial será lutada, mas a Quarta Guerra Mundial será lutada com paus e pedras. <br> Albert Einstein",
    "A história da humanidade é a história da guerra. <br> John Keegan",
    "A guerra é o pior de todos os males; mas às vezes resulta em grandes bens. <br> Cicero"
];

const quoteElement = document.getElementById('quote');

const changeQuoteBtn = document.getElementById('changeQuoteBtn');

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerHTML = quotes[randomIndex];
}

changeQuoteBtn.addEventListener('click', changeQuote);

document.getElementById('end-game').addEventListener('click', function() {
    let player1Name = document.getElementById('player1Name').value || 'Jogador 1';
    let player2Name = document.getElementById('player2Name').value || 'Jogador 2';
    let result = document.getElementById('result');
    let game = document.getElementById('game');
    
    result.textContent = `O fogo ainda não foi descoberto por ninguém, portanto nem ${player1Name}, nem ${player2Name} venceram o combate`;

    let fightButton = document.getElementById('end-game');
    game.removeChild(fightButton);

    let chooseTribeButton = document.createElement('button');
    chooseTribeButton.textContent = 'Descobrir o Fogo';
    chooseTribeButton.id = 'choose-tribe';
    chooseTribeButton.addEventListener('click', function() {
        let chosenTribe = Math.random() < 0.5 ? player1Name : player2Name;
        result.textContent = `A tribo de ${chosenTribe} recebeu o fogo e venceu o combate e conquistou a outra tribo, aniquilando com seus homens, tomando suas mulheres, escravizando suas crianças e roubando seus animais!`;
        game.removeChild(chooseTribeButton);
    });

    game.appendChild(chooseTribeButton);
});
let energy = 100;
let hasHorse = false;

function buyHorse() {
    hasHorse = true;

    if (energy == 0) {
        updateStatus("Você descobriu quem roubou você! Foi um lindo cavalo marrom! Ele pareceu feliz enquanto comia as maçãs, você decidiu se aproximar dele e..., olha só, ele deixou você montar nele. Você agora pode cavalgar em suas costas e poderá chegar à cidade vizinha com sucesso.");
    } else if (energy > 0) {
        updateStatus("Sua energia estava tão alta devido a empolgação de vender, que ao se aproximar do cavalo, ele te deu um coice tão forte que você morreu! Da próxima vez tente dar algumas maçãs a ele, e se lembre, menos agitado...");
    }
    disableButtons();
}


function walk() {
    if (hasHorse) {
        updateStatus("Você chegou à cidade vizinha com sucesso!");
        disableButtons();
    } else {
        energy -= 20;
        updateStatus(`Você caminhou e sua energia agora é ${energy}%.`);
        if (energy <= 0) {
            updateStatus("Sua energia acabou. Você desmaiou no meio do caminho e percebeu que foi roubado!");
            document.getElementById("buy-horse").style.display = "inline";
            document.getElementById("walk").disabled = true;
        }
    }
}

function updateStatus(message) {
    document.getElementById("status").textContent = message;
}

function disableButtons() {
    document.getElementById("walk").disabled = true;
}

document.getElementById("buy-horse").addEventListener("click", buyHorse);
document.getElementById("walk").addEventListener("click", walk);
