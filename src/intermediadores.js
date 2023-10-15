
const { banco, contas } = require('./bancodedados');




const senhaAdmin = (req, res, next) => {

    const { senha_banco } = req.query;

    if (!senha_banco) {
        res.status(400).json('Não foi informado a senha!');
    }
    if (senha_banco !== banco.senha) {
        res.status(403).json('A senha do banco informada é inválida!');
    }
    next();

}

const validacaoUsuario = (req, res, next) => {

    const { numero_conta, senha } = req.query

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (!numero_conta) {
        res.status(400).json('Não foi informado o numero da conta!');
    }
    if (!conta) {
        res.status(403).json('Conta bancária não encontrada!');
    }


    if (!senha) {
        res.status(400).json('Não foi informado a senha!');
    }
    if (senha !== conta.usuario.senha) {
        res.status(403).json('A senha do banco informada é inválida!');
    }
    next();

}

module.exports = {
    senhaAdmin,
    validacaoUsuario
}