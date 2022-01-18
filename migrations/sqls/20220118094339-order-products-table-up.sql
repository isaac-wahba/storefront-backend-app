/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS order_products ( id SERIAL PRIMARY KEY,  quantity integer , order_id INTEGER, product_id INTEGER,
FOREIGN KEY(order_id) REFERENCES orders(id)ON DELETE CASCADE ,
FOREIGN KEY(product_id) REFERENCES product(id) ON DELETE CASCADE);
