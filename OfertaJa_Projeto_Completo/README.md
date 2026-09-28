# 🔥 OfertaJá – Plataforma de Ofertas Web Full Stack

Uma plataforma web de monitoramento de ofertas desenvolvida como projeto de **Web Full Stack**, com separação entre Front-end e Back-end, autenticação segura, microsserviços e testes automatizados.

## 📖 Sobre o projeto

O **OfertaJá** permite que usuários acompanhem promoções de produtos e recebam alertas quando o preço diminuir. O projeto foi desenvolvido seguindo uma arquitetura semelhante à utilizada em equipes ágeis, com divisão entre interface, API e serviço de notificações.

## ✨ Funcionalidades

* 🔎 Pesquisa de produtos
* 💸 Exibição de ofertas e descontos
* 🔐 Login com autenticação JWT
* ❤️ Favoritos (estrutura preparada)
* 🔔 Alertas de queda de preço
* 📱 Interface responsiva
* ⚡ Animações em CSS/SASS

## 🛠️ Tecnologias

### Front-end

* HTML5
* JavaScript
* SASS/SCSS
* CSS Animations

### Back-end

* Node.js
* Express
* JWT
* CORS
* Express Rate Limit

### Arquitetura

* RabbitMQ (microsserviço de notificações)

### Testes

* Jest
* Cypress

### DevOps

* GitHub Actions

## 📂 Estrutura do projeto

```text
OfertaJa-WebFullStack/
├── frontend/
│   ├── index.html
│   ├── css/
│   ├── scss/
│   ├── js/
│   └── assets/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
├── microsservico-alertas/
│   └── alert.js
└── .github/
    └── workflows/
        └── test.yml
```

## 🚀 Como executar

### 1. Clonar o repositório

```bash
git clone https://github.com/Yoshizin1080/OfertaJa-WebFullStack.git
```

### 2. Entrar na pasta

```bash
cd OfertaJa-WebFullStack
```

### 3. Instalar o Back-end

```bash
cd backend
npm install
```

### 4. Iniciar a API

```bash
npm start
```

A API ficará disponível em:

```text
http://localhost:3000
```

Depois, basta abrir o `frontend/index.html`.

## 🔒 Segurança

O projeto utiliza:

* Autenticação via JWT
* CORS configurado
* Rate Limiting contra abuso da API

## 🔔 Microsserviço

O serviço de notificações utiliza RabbitMQ para processar pedidos de alerta quando um usuário solicita acompanhar a queda de preço de um produto.

## 🧪 Testes

O projeto possui estrutura para:

* Testes unitários com Jest
* Testes End-to-End com Cypress

## ⚙️ CI/CD

O GitHub Actions executa automaticamente os testes antes do deploy, garantindo maior confiabilidade do projeto.

## 📷 Prévia

> Interface moderna inspirada em plataformas de e-commerce como Mercado Livre e Shopee, com foco em usabilidade e desempenho.

## 👥 Autoria

Projeto desenvolvido para a disciplina de **Web Full Stack**.

**Repositório:** `Yoshizin1080/OfertaJa-WebFullStack`

