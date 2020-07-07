# Urbis
Task list, where the user creates, edits and deletes tasks.


## Features

A Node.js API built with Express and all the latest tools and best practices in development!

<ul>
  <li>Express — A web microframework for Node</li>
  <li>Sequelize — A SQL ORM for Node.js</li>
  <li>Yup - Object schema validation</li>
  <li>Lint — ESlint/Prettier/Editor Config</li>
</ul>

## Dependencies

- [Node.js](https://nodejs.org/en/) V12.16.1
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/)

## Prerequisites

_In the next few weeks, I plan to include Docker directly in the repository with docker-compose, until there this step is required._

To run this server you will need three containers running on your machine.

To do so, you will need to run the following commands:

- `docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d urbis`; src/config/database.js
