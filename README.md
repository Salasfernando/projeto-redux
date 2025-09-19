# Projeto Redux com Vite

Este é um projeto de exemplo utilizando **Redux** para gerenciamento de estado global em uma aplicação **React** moderna, criado com o **Vite** para desenvolvimento rápido e eficiente.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Redux**: Gerenciamento de estado global da aplicação.
- **Redux Toolkit**: Ferramentas para simplificar a configuração do Redux.
- **Redux Saga**: Middleware para lidar com efeitos colaterais (side effects) e requisições assíncronas.
- **Vite**: Ferramenta de build e desenvolvimento rápido para projetos front-end.
- **JavaScript (ES6+)**: Linguagem principal do projeto.
- **CSS Modules**: Estilização modular e escopada por componente.

## Estrutura do Projeto

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   └── header/
│   │       ├── header.module.css
│   │       └── index.jsx
│   ├── pages/
│   │   ├── address/
│   │   │   ├── address.module.css
│   │   │   └── index.jsx
│   │   ├── Home/
│   │   │   ├── home.module.css
│   │   │   └── index.jsx
│   │   └── Login/
│   │       ├── index.jsx
│   │       └── login.module.css
│   └── redux/
│       ├── root-reducer.js
│       ├── sagas.js
│       ├── store.js
│       └── user/
│           ├── saga.js
│           └── slice.js
```

## Funcionalidades

- Autenticação de usuário
- Gerenciamento de endereço
- Página inicial
- Header reutilizável
- Gerenciamento de estado global com Redux
- Side effects com Redux Saga

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador.

## Sobre o Projeto

Este projeto foi desenvolvido para fins de estudo e demonstração de boas práticas com Redux, Redux Saga e React, utilizando o Vite para otimizar o fluxo de desenvolvimento front-end.

## Autor

Desenvolvido por Fernando Salas.

---

Sinta-se à vontade para contribuir, abrir issues ou sugerir melhorias!
