// import clinet
import databaseConnection from "../database";

type method = {
  sql: string;
  args?: (string | number)[];
};

export type methods = {
  show: method;
  index: method;
  insert?: method;
  delete: method;
};
export class modelBuilder {
  table: string;
  methods: methods;
  constructor(table: string, methods: methods) {
    this.table = table;
    this.methods = methods;
  }
  async index<T>(): Promise<T[]> {
    try {
      const sql = this.methods.index.sql;

      const connection = await databaseConnection.connect();

      const result = await connection.query<T>(sql);

      connection.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not find ${this.table} Error: ${err}`);
    }
  }

  async show<T>(id: string): Promise<T> {
    try {
      const sql = this.methods.show.sql;

      const connection = await databaseConnection.connect();

      const result = await connection.query<T>(sql, [id]);

      connection.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could not find ${this.table} of id: ${id}. Error: ${err}`
      );
    }
  }

  async delete<T>(id: string): Promise<T> {
    try {
      const sql = this.methods.delete.sql;
      // @ts-ignore
      const connection = await databaseConnection.connect();

      const result = await connection.query(sql, [id]);

      const data = result.rows[0];

      connection.release();

      return data;
    } catch (err) {
      throw new Error(`Could not delete ${this.table} ${id}. Error: ${err}`);
    }
  }
}
export default modelBuilder;
