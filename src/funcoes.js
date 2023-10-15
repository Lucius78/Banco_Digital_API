
const { contas } = require('./bancodedados');


const buscarContaPorNumero = (numero) => {
    return contas.find((conta) => conta.numero === Number(numero));
};
const dataAtual = () => {

    const formataData = (date) => {
        const ano = date.getFullYear();
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const dia = String(date.getDate()).padStart(2, '0');
        const horas = String(date.getHours()).padStart(2, '0');
        const minutos = String(date.getMinutes()).padStart(2, '0');
        const segundos = String(date.getSeconds()).padStart(2, '0');

        return `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    }

    const data = new Date();

    const dataformatada = formataData(data);

    return dataformatada;

}


module.exports = {

    buscarContaPorNumero,
    dataAtual

}