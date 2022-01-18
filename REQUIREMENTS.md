Your first task is to read the requirements and update the document with the following:

- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.  
  **Example**: A SHOW route: 'blogs/:id' [GET]

# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index: An Index route: '/product/' [GET]
- Show : A SHOW route: '/product/:id' [GET]
- Create [token required] : A POST route : '/product' [POST]
  (NOT IMPLEMENTED)- [OPTIONAL] Top 5 most popular products : An SHOW route : 'products/popular' [GET]
  (NOT IMPLEMENTED)- [OPTIONAL] Products by category (args: product category): An SHOW route : 'products/:category' [GET]

#### Users

- Index [token required] : An Index route: '/user' [GET]
- Show [token required]: A SHOW route: 'user/:id' [GET]
- Create N[token required]: A POST route : '/user' [POST]

#### Orders

- Current Order by user (args: user id)[token required] : A SHOW route: '/order/:user_id' [GET]
  (NOT IMPLEMENTED)- [OPTIONAL] Completed Orders by user (args: user id)[token required] : A SHOW route: 'completed_orders/:user_id' [GET]

## Data Shapes (Schema -all info are included for each single field)

### DATABASE instructions:

- database name: `storefront_db`
- testing database name: `storefront_testing_db`
- PORT: `5432
- creating databases commands:
  `create database storefront_testing_db;`
  `create database storefront_db;`

#### Product

##### product table:

- id: (serial) primary key
- name: VARCHAR(100)
- price: integer
- category: VARCHAR(100)

#### creating products with data:

1. create the table: `CREATE TABLE IF NOT EXISTS product (id SERIAL PRIMARY KEY ,name VARCHAR(100),price integer ,category VARCHAR(100)); `
2. insert data: `insert into product(name, price, category) values('ball', 100, 'sports'); `

#### User

##### users table:

- id: (serial) primary key
- firstName: VARCHAR(100)
- lastName: VARCHAR(100)
- password
  : VARCHAR(100)

#### creating users with data:

1. create the table: `CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY ,first_name VARCHAR(100),last_name VARCHAR(100), password VARCHAR(100));`
2. insert data: `insert into users (first_name,last_name,password) values('Isaac', 'Wahba', '1234'); `

#### Orders

##### orders table:

- id: (serial) primary key
- status: status VARCHAR(100)
- user_id: FOREIGN KEY REFERENCES users(id)

#### creating orders with data:

1. create the table: `CREATE TABLE IF NOT EXISTS orders ( id SERIAL PRIMARY KEY, status VARCHAR(100), user_id INTEGER, FOREIGN KEY(user_id) REFERENCES users(id)ON DELETE CASCADE); `
2. insert data: `INSERT INTO orders (status, user_id) values ($1, $2) returning *;`

#### Orders_Products

##### order_products:

- id: (serial) primary key
- quantity: integer
- product_id:FOREIGN KEY REFERENCES product(id)

#### creating order_products with data:

1. create the table: `CREATE TABLE IF NOT EXISTS order_products ( id SERIAL PRIMARY KEY, quantity integer , order_id INTEGER, product_id INTEGER, FOREIGN KEY(order_id) REFERENCES orders(id)ON DELETE CASCADE , FOREIGN KEY(product_id) REFERENCES product(id) ON DELETE CASCADE) `
2. insert data: `INSERT INTO order_products (quantity, order_id,product_id) values ($1, $2, $3, $4) returning *;`
