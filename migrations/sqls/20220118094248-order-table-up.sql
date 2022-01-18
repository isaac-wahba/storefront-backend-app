/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS orders ( id SERIAL PRIMARY KEY, status VARCHAR(100), user_id INTEGER,
FOREIGN KEY(user_id) REFERENCES users(id)ON DELETE CASCADE);
