let balance = 1000; // Saldo inicial em Cpcoins
let history = []; // Histórico de resultados

// Função para colocar aposta
function placeBet(color) {
    const betAmount = parseInt(document.getElementById('betAmount').value);
    
    if (isNaN(betAmount) || betAmount <= 0) {
        alert("Digite um valor válido para apostar!");
        return;
    }

    if (betAmount > balance) {
        alert("Saldo insuficiente!");
        return;
    }

    // Subtrai o valor apostado do saldo
    balance -= betAmount;
    document.getElementById('balance').textContent = balance;

    // Chama a função de girar a roleta
    roll(color, betAmount);
}

// Função que simula o giro da roleta
function roll(userBetColor, betAmount) {
    const colors = ['red', 'black', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 'white']; // Distribuição das cores
    const resultColor = colors[Math.floor(Math.random() * colors.length)]; // Escolhe uma cor aleatória

    document.getElementById('result').textContent = resultColor.toUpperCase();

    // Verifica se o usuário ganhou
    let winnings = 0;
    if (userBetColor === resultColor) {
        if (resultColor === 'white') {
            winnings = betAmount * 14; // Branco paga 14x
        } else {
            winnings = betAmount * 2; // Vermelho e preto pagam 2x
        }
        balance += winnings;
        alert(`Você ganhou ${winnings} Cpcoins!`);
    } else {
        alert("Você perdeu!");
    }

    // Atualiza o saldo
    document.getElementById('balance').textContent = balance;

    // Atualiza o histórico
    history.push(resultColor);
    document.getElementById('history').textContent = history.join(', ');
}
