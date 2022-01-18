import databaseConnection from "../database";
import { methods, modelBuilder } from "./parent";
import { getHash, verfiyHash } from "../helpers/helpers";

const getAllUsers = `SELECT * FROM users;`;
const getUserById = `SELECT * FROM  users WHERE id=($1) LIMIT 1;`;
const deleteUser = `DELETE FROM users where id=($1);`;
const insertUser = `INSERT INTO users (first_name, last_name, password) values ($1, $2, $3)  returning *;`;

const methods: methods = {
  show: { sql: getUserById },
  index: { sql: getAllUsers },
  delete: { sql: deleteUser },
};

export type userType = {
  id?: number;
  first_name: string;
  last_name: string;
  password: string;
};

const table = "users";

export class User extends modelBuilder {
  constructor() {
    super(table, methods);
  }
  async create(userT: userType): Promise<userType> {
    try {
      // @ts-ignore
      const connection = await databaseConnection.connect();

      const result = await connection.query(insertUser, [
        userT.first_name,
        userT.last_name,
        getHash(userT.password),
      ]);

      const data = result.rows[0];

      connection.release();

      return data;
    } catch (err) {
      throw new Error(`Could not add a new user. Error: ${err}`);
    }
  }
}
