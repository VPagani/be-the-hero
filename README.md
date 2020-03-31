<p align="center">
    <img src="./client/src/assets/logo.svg">
</p>

<p align="center">
    <strong>Projeto da Semana OmniStack 11.0</strong>
</p>

<p align="center">
    <a href="https://david-dm.org/VPagani/be-the-hero"><img alt="GitHub license" src="https://david-dm.org/VPagani/be-the-hero.svg"></a>
    <a href="https://github.com/VPagani/be-the-hero/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/VPagani/be-the-hero"></a>
</p>
<hr/>

*Be The Hero* é uma plataform para unir **ONGs** e pessoas solidárias - os **Heróis**. As ONGs registram os casos que precisam de ajuda financeira para serem resolvidos (Exemplo: Cachorro atropelado precisa de cirurgia que custa R$ 120,00) e as pessoas descobrem esses casos através do aplicativo e decidem se querem se tornar os Heróis ajudando da forma que puderem.

O projeto foi desenvolvido com o intuito de aprendizado durante a **Semana OmniStack 11.0** (23 a 29 de Março de 2020) da [@Rocketseat](https://github.com/Rocketseat) e é composta de 3 partes:


### Backend - [`@be-the-hero/server`](./server)

O *Backend* é responsável por servir tanto o *Frontend* quanto o *Aplicativo Mobile*. Através das rotas da API, ele armazena as ONGs e os casos registrados no banco de dados, faz validação dos dados na requisição e fornece os dados usando técnicas como paginação.

Tecnologias usadas: [TypeScript], [Express] e [Knex]
<br/>

### Frontend - [`@be-the-hero/client`](./client)

O *Frontend* é responsável por fornecer interfaces para as ONGs se registrarem e para elas registrarem seus casos.

Tecnologias usadas: [TypeScript], [React] e [Webpack]


### Aplicativo Mobile - [`@be-the-hero/mobile`](./mobile)

O *Alicativo Mobile* é responsável por fornecer interfaces para as pessoas que querem se tornar Heróis poderem descobrir os casos registrados e terem acesso aos detalhes para se comunicar com a ONG responsável.

Tecnologias usadas: [TypeScript], [React], [React Native][ReactNative] e [Expo]


## Getting Started

Para facilitar o gerenciamento das partes do projeto eu usei os [Workspaces][YarnWorkspaces] do [Yarn], então é possível gerenciar as dependências e iniciar os ambientes de desenvolvimento usando poucos comandos:

Primeiro instale as dependências:
```
yarn
```

Depois inicie todos os ambientes de desenvolvimento:

```
yarn start
```

Ou inicie cada um separadamente:

```
yarn start:server
```

```
yarn start:client
```

```
yarn start:mobile
```

Pronto!


[TypeScript]: https://github.com/microsoft/TypeScript
[Express]: https://github.com/expressjs/express
[Knex]: https://github.com/knex/knex
[React]: https://github.com/facebook/react
[Webpack]: https://github.com/webpack/webpack
[ReactNative]: https://github.com/facebook/react-native
[Expo]: https://github.com/expo/expo
[Yarn]: https://classic.yarnpkg.com
[YarnWorkspaces]: https://classic.yarnpkg.com/en/docs/workspaces/