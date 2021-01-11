<h3 align="center">
  Desafio Mindhouse: Aplicação (back-end, front-end e mobile)
</h3>

# Instruções para executar a aplicação.

Faça o download do repositório e siga as instruções:

## Ambiente 

Este procedimento foi testado usando o Windows 10 e o emulador Android Studio.

Para criação das bases de dados foi utilizado o docker. Com o docker configurado na sua máquina, abra o terminal e rode os seguintes comandos

```
  docker run --name challengeMH -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
Utilize o Postbird ou qualquer outro aplicativo gráfico de gerenciamento de base de dados para se conectar ao postgress. Crie uma base de dados com o nome challengeMindhouseBD (Você pode utilizar outro nome, mas lembre de alterar no arquivo .env);


## Backend

duplique o arquivo .env.example que se encontra na raiz da pasta backend salve com o nome .env e preencha as variáveis de acordo com a configuração utilizada na preparaçÃo do ambiente.

utilizando o terminal acesse a pasta backend e rode o seguinte comando para instalar as dependências do projeto.

```
  yarn
```
Para criação das tabelas utilize o comando:

```
yarn sequelize db:migrate
```

Para registrar as informações default na base de dados, utilize o comando:

```
yarn sequelize db:seed:all
```

É hora de subir o servidor. Rode o seguinte comando na raiz da pasta backend:
```
yarn dev
```

Pronto o backend já está pronto para o uso, agora vamos para a parte web da aplicação.

### Opcionais desenvolvidos no backend

 - Paginação para todas as listagens

### tecnologias aprendidas e aplicadas

- Node
- Express
- Sequelize
- Docker
- eslint
- prettier
- nodemon

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

🚀 Feito por Jefferson Couto | For MindHouse 