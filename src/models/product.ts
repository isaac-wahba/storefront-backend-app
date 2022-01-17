import databaseConnection from "../database";
import { methods, modelBuilder } from "./parent";

const getAllProducts = `SELECT * FROM product;`;
const getProductById = `SELECT * FROM  product WHERE id=($1);`;
const deleteProduct = `DELETE FROM product where id=($1);`;
const insertProduct = `INSERT INTO product (name, price, category) values ($1, $2, $3) returning *;`;

const methods: methods = {
  show: { sql: getProductById },
  index: { sql: getAllProducts },
  delete: { sql: deleteProduct },
};

export type productType = {
  id?: number;
  name: string;
  price: number;
  category: string;
};
const table = "product";

export class Product extends modelBuilder {
  constructor() {
    super(table, methods);
  }
  async create(productT: productType): Promise<productType> {
    try {
      // @ts-ignore
      const connection = await databaseConnection.connect();

      const result = await connection.query(insertProduct, [
        productT.name,
        productT.price,
        productT.category,
      ]);

      const data = result.rows[0];

      connection.release();

      return data;
    } catch (err) {
      throw new Error(`Could not add a new product. Error: ${err}`);
    }
  }
}
