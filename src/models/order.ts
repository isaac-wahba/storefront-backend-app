import databaseConnection from "../database";
import { methods, modelBuilder } from "./parent";

const getAllOrders = `SELECT * FROM orders;`;
const getOrdersByUserId = `SELECT * FROM  orders WHERE user_id=($1) AND status='active';`;
const deleteOrder = `DELETE FROM orders where id=($1);`;
const insertOrder = `INSERT INTO orders (quantity, status, user_id,product_id) values ($1, $2, $3, $4) returning *;`;

const methods: methods = {
  show: { sql: getOrdersByUserId },
  index: { sql: getAllOrders },
  delete: { sql: deleteOrder },
};

export type orderType = {
  id?: number;
  quantity: number;
  status: string;
  user_id: number;
  product_id: number;
};
const table = "orders";

export class Order extends modelBuilder {
  constructor() {
    super(table, methods);
  }
  async create(orderT: orderType): Promise<orderType> {
    try {
      // @ts-ignore
      const connection = await databaseConnection.connect();

      const result = await connection.query(insertOrder, [
        orderT.quantity,
        orderT.status,
        orderT.user_id,
        orderT.product_id,
      ]);

      const data = result.rows[0];

      connection.release();

      console.log("order created with data: \n", data);
      return data;
    } catch (err) {
      throw new Error(`Could not add a new order. Error: ${err}`);
    }
  }
}
