# Storefront Backend Project

## Getting Started

This repo contains a backend project with the following details:

### ENVIRONMENTAL VARIABLES TO INCLUDE:

POSTGRES_HOST: for example --> 127.0.0.1
POSTGRES_DB: db name
POSTGRES_USER: db user
POSTGRES_PASSWORD: db user password

POSTGRES_TESTING_DB: testing db name

TOKEN_SECRET: `string`

SALT_ROUNDS: `number`
BCRYPT_PASSWORD: `string`

ENV: `dev or test`

### DATABASE instructions:

- database name: `storefront_db`
- testing database name: `storefront_testing_db`
- PORT: `5432
- creating databases commands:
  `create database storefront_testing_db;`
  `create database storefront_db;`

## Steps to Run the project


- To setup dependencies: `npm install`
- To run the server: `npm start`
- To run the tests: `npm test`

## Technologies Used

Your application must make use of the following libraries:

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

# Features:

## Main API Endpoints

#### Products

- Index: An Index route: '/product/' [GET]
- Show : A SHOW route: '/product/:id' [GET]
- Create [token required] : A POST route : '/product' [POST]

#### Users

- Index [token required] : An Index route: '/user' [GET]
- Show [token required]: A SHOW route: 'user/:id' [GET]
- Create N[token required]: A POST route : '/user' [POST]

#### Orders

- Current Order by user (args: user id)[token required] : A SHOW route: '/order/:user_id' [GET]
