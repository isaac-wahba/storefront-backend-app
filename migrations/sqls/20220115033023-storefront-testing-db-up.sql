-- /* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS product (id SERIAL PRIMARY KEY ,name VARCHAR(100),price integer ,category VARCHAR(100));
CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY ,first_name VARCHAR(100),last_name VARCHAR(100), password VARCHAR(100));
CREATE TABLE IF NOT EXISTS orders ( id SERIAL PRIMARY KEY,  quantity integer , status VARCHAR(100), user_id INTEGER, product_id INTEGER,
FOREIGN KEY(user_id) REFERENCES users(id)ON DELETE CASCADE ,
 FOREIGN KEY(product_id) REFERENCES product(id) ON DELETE CASCADE);
