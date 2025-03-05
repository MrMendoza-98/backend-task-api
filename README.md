# Proyecto NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">Un framework progresivo de <a href="http://nodejs.org" target="_blank">Node.js</a> para construir aplicaciones del lado del servidor eficientes y escalables.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
<a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Descripción

Este es un proyecto de ejemplo utilizando el framework [Nest](https://github.com/nestjs/nest) con TypeScript.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `src/app.module.ts`: El módulo principal de la aplicación que importa los módulos `TaskModule`, `UsersModule`, y `AuthModule`.
- `src/task/`: Contiene la lógica relacionada con las tareas.
- `src/users/`: Contiene la lógica relacionada con los usuarios.
- `src/auth/`: Contiene la lógica relacionada con la autenticación.

## Configuración del Proyecto

```bash
$ npm install
```
### Compilar y Ejecutar el Proyecto
- desarrollo
`$ npm run start`

- modo watch
`$ npm run start:dev`

- modo producción
`$ npm run start:prod`

### Ejecutar Pruebas
- pruebas unitarias
`$ npm run test`


- pruebas e2e
`$ npm run test:e2e`

- cobertura de pruebas
`$ npm run test:cov`
