
# Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/progmateus/api-hiper-challenge.git

# entrar na pasta do projeto front end web
cd api-hiper-challenge

# instalar dependências
yarn install

# rodar os containers do Docker
docker compose up

# rodar as migrations do banco de dados
yarn typeorm migration:run

```

## Se houver problemas com o Docker execute da seguinte forma

```bash
# clonar repositório
git clone https://github.com/progmateus/api-hiper-challenge.git

# entrar na pasta do projeto front end web
cd api-hiper-challenge

# instalar dependências
yarn install

# rodar o banco de dados postgres
docker compose up database

# rodar as migrations do banco de dados
yarn typeorm migration:run

# executar o projeto
yarn dev
```
# Autor

Mateus Lopes

https://www.linkedin.com/in/progmateus/

