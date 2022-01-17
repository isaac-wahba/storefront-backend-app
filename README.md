# Storefront Backend Project

## Getting Started

This repo contains a backend project with the following details:

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

## Steps to Run the project

1- To setup dependencies: `npm install`
2- To run the server: `npm start`
3- To run the tests: `npm test`
