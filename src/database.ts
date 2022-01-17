import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TESTING_DB,
  ENV,
} = process.env;

let databaseConnection = new Pool();

console.log(ENV);
if (ENV === "dev") {
  databaseConnection = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  });
}
console.log(ENV);
if (ENV === "test") {
  databaseConnection = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TESTING_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  });
}
console.log(databaseConnection);
export default databaseConnection;
