"use strict";
// Variáveis para armazenar o saldo, login e senha
let saldo = 0;
let login = null;
let senha = null;
// Função para criar uma nova conta
function criarConta() {
    login = parseInt(prompt("Digite seu login (número):") || '0');
    senha = parseInt(prompt("Digite sua senha (número):") || '0');
    alert("Conta criada com sucesso!");
}
// Função para verificar login e senha
function verificarAcesso() {
    const loginDigitado = parseInt(prompt("Digite seu login:") || '0');
    const senhaDigitada = parseInt(prompt("Digite sua senha:") || '0');
    return login === loginDigitado && senha === senhaDigitada;
}
// Função para depositar dinheiro na conta
function depositar() {
    if (!verificarAcesso()) {
        alert("Login ou senha incorretos. Acesso negado.");
        return;
    }
    let valor = parseFloat(prompt("Digite o valor a depositar:") || '0');
    if (valor > 0) {
        saldo += valor;
        alert(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
    else {
        alert("Valor inválido. Tente novamente.");
    }
}
// Função para sacar dinheiro da conta
function sacar() {
    if (!verificarAcesso()) {
        alert("Login ou senha incorretos. Acesso negado.");
        return;
    }
    let valor = parseFloat(prompt("Digite o valor a sacar:") || '0');
    if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        alert(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
    else {
        alert("Saldo insuficiente ou valor inválido. Tente novamente.");
    }
}
// Função para verificar o saldo da conta
function verificarSaldo() {
    if (!verificarAcesso()) {
        alert("Login ou senha incorretos. Acesso negado.");
        return;
    }
    alert(`Seu saldo atual é de R$ ${saldo.toFixed(2)}.`);
}
// Menu de opções para interagir com o usuário
while (true) {
    let escolha = prompt("Escolha uma opção:\n" +
        "1. Criar Conta\n" +
        "2. Depositar\n" +
        "3. Sacar\n" +
        "4. Verificar Saldo\n" +
        "5. Sair");
    if (escolha === null)
        break;
    switch (escolha) {
        case "1":
            criarConta();
            break;
        case "2":
            depositar();
            break;
        case "3":
            sacar();
            break;
        case "4":
            verificarSaldo();
            break;
        case "5":
            alert("Obrigado por utilizar nosso banco!");
            break;
        default:
            alert("Opção inválida. Tente novamente.");
            break;
    }
}
