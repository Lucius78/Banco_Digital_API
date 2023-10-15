
const { contas, depositos, saques, transferencias } = require('../bancodedados');

const { buscarContaPorNumero } = require('../funcoes');



const listaconsta = (req, res) => {

    return res.status(200).json(contas);

}
const criarConta = (req, res) => {

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;


    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {

        return res.status(400).json({ mensagen: 'Dados incompleto!' });
    }
    const conta = contas.find((conta) => {
        return conta.usuario.cpf === cpf && conta.usuario.email === email;
    })
    if (conta) {
        return res.status(401).json({ mensagen: 'Já existe uma conta com o cpf ou e-mail informado!' });
    }

    const contador = contas.length + 1;

    const criar = {
        numero: contador,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    }

    contas.push(criar);

    return res.status(201).json();

}

const atualizarUsuario = (req, res) => {
    const { numeroConta } = req.params;

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {

        return res.status(400).json({ mensagen: 'Dados incompletos' });
    }

    const conta = buscarContaPorNumero(numeroConta);

    if (!conta) {
        return res.status(404).json({ mensagem: 'Conta bancária não encontada!' });
    }
    if (conta.usuario.cpf === cpf) {
        return res.status(401).json({ mensagen: 'O CPF informado já existe cadastrado!' });
    }
    if (conta.usuario.email === email) {
        return res.status(401).json({ mensagen: 'O email informado já existe cadastrado!' });
    }

    conta.usuario.nome = nome;
    conta.usuario.cpf = cpf;
    conta.usuario.data_nascimento = data_nascimento;
    conta.usuario.telefone = telefone;
    conta.usuario.email = email;
    conta.usuario.senha = senha;

    return res.status(204).json();
}

const excluirConta = (req, res) => {
    const { numeroConta } = req.params;

    const conta = buscarContaPorNumero(numeroConta);

    if (!conta) {
        return res.status(404).json({ mensagem: 'Conta bancária não encontada!' });
    }
    if (conta.saldo > 0) {
        return res.status(403).json({ mensagem: 'A conta só pode ser removida se o saldo for zero!' });
    }

    contas.splice(conta, 1);

    return res.status(201).json();

}

const saldo = (req, res) => {

    const { numero_conta } = req.query;

    const conta = buscarContaPorNumero(numero_conta);

    return res.status(200).json({ saldo: conta.saldo });

}

const extrato = (req, res) => {

    const { numero_conta } = req.query;


    const deposito = depositos.filter((deposito) => {
        return deposito.numero_conta === numero_conta;
    })
    const saque = saques.filter((saque) => {
        return saque.numero_conta === numero_conta;
    })
    const transferencia = transferencias.filter((transferencia) => {
        return transferencia.numero_conta_origem === numero_conta || transferencia.numero_conta_destino === numero_conta;
    })


    const extratoResposta = {

        depositos: deposito,
        saques: saque,
        transferencias: transferencia
    }


    return res.status(200).json({ extratoResposta });

}


module.exports = {
    listaconsta,
    criarConta,
    atualizarUsuario,
    excluirConta,
    saldo,
    extrato
}
