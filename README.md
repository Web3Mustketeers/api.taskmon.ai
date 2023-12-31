# api.taskmon.ai

## Description

Task management RESTFul API Server built using  , TypeScript, Prisma, Graphql and PostgreSQL.

Built with ❤️on top of

- [x] Typescript
- [x] [NestJS](https://github.com/nestjs/nest)
- [x] [Prisma](https://www.prisma.io)
- [x] [Passport.js](https://docs.nestjs.com/recipes/passport)
- [x] [Graphql:Schema First](https://docs.nestjs.com/graphql/quick-start#schema-first)
- [x] [PostgreSQL](https://www.postgresql.org)

## About Task Management

### Functional specs

Task management allows users to register, create tasks and manage them, major features are

- User SignUp & SignIn
- Create Tasks which are visible only to the logged in users
- New created tasks will be in OPEN status
- Update task status to IN_PROGRESS or DONE
- Delete tasks

### Technical methodologies followed

- Modular architecture: Business Logic & Auth handled in separate modules, separating concerns.
- HTTP requests are handled by Controllers
- <s> API documentation using nest/swagger module </s>
- Business logic is implemented in Services
- Database interactions are handled  using Prisma
- Validation using NestJS Pipes
- Data Transfer Object(DTO) pattern for transferring data between layers
- Configuration management using .env files for development, test & prod configs
- Authentication / Authorization, Event ownership by users
- PassportJS, JWT tokens, Password hashing, salts
- Unit tests using Jest
- Supertest for E2E testing

### Technical documentation using [Compodoc](https://web3mustketeers.github.io/api.taskmon.ai/)

As NestJS is heavily inspired by Angular, we can generate the documentation about project structure modules, controllers, services etc. I
have generated the docs.

Find 'em here - https://web3mustketeers.github.io/api.taskmon.ai/


## Installation

```
npm install -g pnpm
pnpm install
```

## Running the app

### Prerequisite for running the app in any mode - dev/test/prod

- Copy `.env.example` with `.env`
- Fill in the env vars in `.env`


```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## License

This repo is [MIT licensed](LICENSE).
