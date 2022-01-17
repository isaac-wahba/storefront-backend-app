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

## Data Shapes (Schema)

#### Product

##### product table:

- id
- name
- price
- [OPTIONAL] category

#### User

##### users table:

- id
- firstName
- lastName
- password

#### Orders

##### orders table:

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
