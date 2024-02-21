# Cotabox API
## Projeto para o cadastro da participação de usuários

# 💻 Sobre
Este projeto foi concebido como o desafio técnico da empresa Cotabox. Ele consiste em uma API GraphQL onde eu posso manipular a participação de usuários em determinada tarefa. 


# Instalação
### Pré requisitos
Certifique-se de ter o [Node](https://nodejs.org/en/) e o [Git](https://git-scm.com) instalados, além de um gerenciador
de pacotes como o [Yarn](https://yarnpkg.com/) ou o [NPM](https://www.npmjs.com/). Certifique-se também de ter o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados, ou configure um banco de dados [MongoDB](https://www.mongodb.com/) localmente em sua máquina.

### Configuração
```bash
# Clone o repositório
$ git clone https://github.com/afonsomateus21/cotabox-api.git ou
$ git clone git@github.com:afonsomateus21/cotabox-api.git se utilizar SSH

# Instale as dependências
$ npm install ou yarn 

#Crie um arquivo .env na raiz do projeto com a seguinte variável:
MONGODB_LOCAL_URL_CONNECTION=mongodb://root:admin@localhost:27017/cotabox_db?authSource=admin

#Caso tenha configurado um banco de dados localmente a URL de conexão ficará no seguinte padrão
MONGODB_LOCAL_URL_CONNECTION=mongodb://username:password@host:port/database?authSource=admin

OBS: Certifique-se de substituir username, password e database pelas credenciais do seu banco e que a variável de ambiente esteja com o nome correto.
```

### 🎨 Execução
```bash
# Execute o banco da aplicação
$ docker-compose up -d

# Execute a aplicação em modo de desenvolvimento
$ npm run dev ou yarn dev

# O aplicação ficará disponível na porta:4000 - acesse <http://localhost:4000>
```

#  Deploy
Eu fiz o deploy da API no Render, você pode acessá-la através do [Link](https://cotabox-api.onrender.com/)


# 🛠 Tecnologias
As seguintes tecnologias foram utilizadas na construção do projeto:
- [TypeScript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/en)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [TypeGraphQL](https://typegraphql.com/)
- [Render](https://render.com/)

# Autor
Afonso Mateus<br/>
<a href="https://www.linkedin.com/in/afonso-mateus-3a8522118/"><img src="https://img.shields.io/static/v1?label=Linkedin&labelColor=0a66c2&message=Afonso&color=0a66c2&style=flat"/></a>
<img src="https://img.shields.io/static/v1?label=Gmail&labelColor=db4a39&message=afonsomateus.dev@gmail.com&color=db4a39&style=flat"/>

# Licença
Este projeto está sob a licença [MIT](https://github.com/afonsomateus21/cotabox-api/blob/main/LICENSE)

Feito com ❤️ por Afonso Mateus 👋 [Entre em contato!](https://www.linkedin.com/in/afonsomateus/)