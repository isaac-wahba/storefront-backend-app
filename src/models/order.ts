import databaseConnection from "../database";
import { methods, modelBuilder } from "./parent";
import { productType } from "./product";

const getAllOrders = `SELECT * FROM orders;`;
const getOrdersByUserId = `SELECT * FROM  orders WHERE user_id=($1) AND status='active';`;
const deleteOrder = `DELETE FROM orders where id=($1);`;
const insertOrderProduct = `INSERT INTO order_products (quantity, order_id,product_id) values ($1, $2, $3, $4) returning *;`;
const insertOrder = `INSERT INTO orders (status, user_id) values ($1, $2) returning *;`;

const methods: methods = {
  show: { sql: getOrdersByUserId },
  index: { sql: getAllOrders },
  delete: { sql: deleteOrder },
};

export type orderProductsType = {
  id?: number;
  quantity: number;
  order_id: number;
  product_id: number;
};
export type orderType = {
  id?: number;
  status: string;
  user_id: number;
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
        orderT.status,
        orderT.user_id,
      ]);

      const data = result.rows[0];

      connection.release();

      console.log("order created with data: \n", data);
      return data;
    } catch (err) {
      throw new Error(`Could not add a new order. Error: ${err}`);
    }
  }
  async addProduct(
    orderProducts: orderProductsType
  ): Promise<orderProductsType> {
    try {
      // @ts-ignore
      const connection = await databaseConnection.connect();

      const result = await connection.query(insertOrderProduct, [
        orderProducts.quantity,
        orderProducts.order_id,
        orderProducts.product_id,
      ]);

      const data = result.rows[0];

      connection.release();

      console.log(
        `Product Added to order with id ${orderProducts.product_id} is added to order with id ${orderProducts.order_id} \n`,
        data
      );
      return data;
    } catch (err) {
      throw new Error(`Could not add a new order. Error: ${err}`);
    }
  }
}
