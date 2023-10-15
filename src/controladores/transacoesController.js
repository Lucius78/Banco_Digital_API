const { depositos, saques, transferencias } = require('../bancodedados');

const { buscarContaPorNumero, dataAtual } = require('../funcoes');



const depositar = (req, res) => {
    const { numero_conta, valor } = req.body;

    if (!numero_conta && !valor) {
        return res.status(400).json({ mensagem: 'O número da conta e o valor são obrigatórios!' })

    };

    const conta = buscarContaPorNumero(numero_conta);

    if (!conta) {
        return res.status(404).json({ mensagem: 'Conta bancária não encontada!' });
    }
    if (valor <= 0) {
        return res.status(403).json({ mensagem: 'Não é permitido valores negativos ou zerados!' });
    }

    const extrato = {
        data: dataAtual(),
        numero_conta,
        valor
    }
    depositos.push(extrato);


    conta.saldo += valor;

    return res.status(201).json();

}

const sacar = (req, res) => {
    const { numero_conta, valor, senha } = req.body;

    if (!numero_conta && !valor && !senha) {
        return res.status(400).json({ mensagem: 'O número da conta, senha e o valor são obrigatórios!' });
    }

    const conta = buscarContaPorNumero(numero_conta)

    if (!conta) {
        return res.status(404).json({ mensagem: 'Conta bancária não encontada!' });
    }
    if (conta.usuario.senha === Number(senha)) {
        return res.status(403).json({ mensagem: 'Senha incorreta!' });
    }
    if (conta.saldo < valor || conta.saldo === 0) {
        return res.status(400).json({ mensagem: 'O valor não pode ser menor que zero!' });

    }

    const extrato = {
        data: dataAtual(),
        numero_conta,
        valor
    }
    saques.push(extrato);


    conta.saldo -= valor;

    return res.status(201).json()
}

const transferir = (req, res) => {

    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;


    if (!numero_conta_origem && !numero_conta_destino && !valor && !senha) {
        return res.status(400).json({ mensagem: 'O número da conta de origem e destino, senha e o valor são obrigatórios!' });
    }

    const conta1 = buscarContaPorNumero(numero_conta_origem);
    const conta2 = buscarContaPorNumero(numero_conta_destino);


    if (!conta1 || !conta2) {
        return res.status(404).json({ mensagem: 'Conta bancária não encontada!' });
    }
    if (conta1.usuario.senha === Number(senha)) {
        return res.status(403).json({ mensagem: 'Senha incorreta!' });
    }
    if (conta1.saldo < valor || conta1.saldo === 0) {
        return res.status(400).json({ mensagem: 'Saldo insuficiente!' });
    }

    const extrato = {
        data: dataAtual(),
        numero_conta_origem,
        numero_conta_destino,
        valor
    }
    transferencias.push(extrato);

    conta1.saldo -= valor;
    conta2.saldo += valor;

    return res.status(201).json();
}

module.exports = {
    depositar,
    sacar,
    transferir,

}