

# API de Banco Digital

Esta é uma API de um banco digital que oferece funcionalidades bancárias básicas, como consulta de saldo, transferências, e pagamentos.


## Tecnologias

As seguintes tecnologias foram utilizadas no desenvolvimento desta API:
- JavaScript
- Node.js
- Express


## Configurações

1. Clone o repositório:

  ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
2. Instale as dependências:

Certifique-se de ter o Node.js instalado. Em seguida, instale as dependências do projeto com o seguinte comando:

```bash
 npm install
```

3. Inicie o servidor:
```bash
npm start
```
Você pode usar um cliente HTTP, como o Insomnia, para interagir com a API e testar as funcionalidades bancárias.

Baixe e instale o [Insomnia](https://insomnia.rest/).


A API estará acessível em `http://localhost:3000`.

## Endpoints

### 1. Lista de Contas Cadastradas
- **Endpoint:** `/contas?senha_banco=Digital_47`
- **Método:** `GET`
- **Descrição:** Retorna a lista de todas as contas cadastradas no banco.

**Parâmetros:** 
  - `senha_banco`: senha do admin



### 2. Criar Conta
- **Endpoint:** `/contas`
- **Método:** `POST`
- **Descrição:** Cria uma nova conta bancária.
- **Parâmetros:**
  - `nome`: Nome do titular da conta. 
  - `cpf`: CPF do titular da conta.
  - `data_nacimento`: Data de nacimento do titular da conta.
  - `telefone`: Numero de telefone do titular da conta.
  - `email`: O edereço de email do titular da conta.
  - `senha`: Senha para conta.

 

### 3. Atualizar Conta
- **Endpoint:** `/contas/numero_conta/usuario`
- **Método:** `PUT`
- **Descrição:** Atualiza as informações de uma conta existente.
- **Parâmetros:**
  - `nome`: Nome do titular da conta. 
  - `cpf`: CPF do titular da conta.
  - `data_nacimento`: Data de nacimento do titular da conta.
  - `telefone`: Numero de telefone do titular da conta.
  - `email`: O edereço de email do titular da conta.
  - `senha`: Senha para conta.


### 4. Deletar Conta
- **Endpoint:** `/contas/numero_conta`
- **Método:** `DELETE`
- **Descrição:** Exclui uma conta bancária existente.
- **Parâmetros:**
  - `numero_conta`: O numero da conta a ser excluída.

 


### 5. Depósito
- **Endpoint:** `/transacoes/depositar`
- **Método:** `POST`
- **Descrição:** Realiza um depósito na conta especificada.
- **Parâmetros:**
  - `numero_conta`: O numero da conta para depósito.
  - `valor`: Valor a ser depositado.



### 6. Saque
- **Endpoint:** `/transacoes/sacar`
- **Método:** `POST`
- **Descrição:** Realiza um saque na conta especificada.
- **Parâmetros:**
  - `numero_conta`:O numero da conta para saque.
  - `valor`: Valor a ser sacado.
   - `senha`: A conta da conta.



### 7. Transferência
- **Endpoint:** `/transacoes/transferir`
- **Método:** `POST`
- **Descrição:** Realiza uma transferência de fundos entre contas.
- **Parâmetros:**
  - `numero_conta_origem`: O numero da conta de origem.
  - `numero_conta_destino`: O numero da conta de destino.
  - `valor`: Valor a ser transferido.
  - `senha`: A conta da conta.



### 8. Saldo
- **Endpoint:** `/contas/saldo?numero_conta=123&senha=123`
- **Método:** `GET`
- **Descrição:** Retorna o saldo atual da conta.
- **Parâmetros:**
  - `numero_conta`:O numero da conta.
  - `senha`: A senha da conta.



### 9. Extrato
- **Endpoint:** `/contas/extrato?numero_conta=123&senha=123`
- **Método:** `GET`
- **Descrição:** Retorna o extrato da conta com as transações realizadas.
- **Parâmetros:**
  - `numero`:O numero da conta.
  - `senha`: A senha da conta.


## Contribuição

- Faça um fork do repositório.
- Crie um branch para a sua contribuição (`git checkout -b minha-contribuicao`).
- Faça as alterações e faça commit (`git commit -m 'Adiciona funcionalidade X'`).
- Envie um pull request.

## Licença

Este projeto está sob a licença [MIT](https://github.com/Lucius78/Banco_Digital_API/blob/master/LICENSE). Consulte o arquivo `LICENSE` para obter mais detalhes.

## Contato

Para perguntas ou feedback, entre em contato através do e-mail [Luciano_Viera78@hotmail.com](Luciano_Viera78@hotmail.com).



