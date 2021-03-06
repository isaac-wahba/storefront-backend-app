import supertest from "supertest";
import productRouter from "../product";
import app from "../../server";

let token: string;
let user_token: string;
const request = supertest(app);

describe("Test PRODUCT endpoints response", () => {
  it("GET /product/:id", async () => {
    const res = await request
      .get("/product/1")
      .set("Authorization", `Bearer ${user_token}`);
    expect(res.status).toBe(200);
  });
  it("GET /product", async () => {
    const res = await request
      .get("/product")
      .set("Authorization", `Bearer ${user_token}`);
    expect(res.status).toBe(200);
  });
  it("DELETE /product/:id", async () => {
    const res = await request
      .get("/product/1")
      .set("Authorization", `Bearer ${user_token}`);
    expect(res.status).toBe(200);
  });

  it("POST /product", async () => {
    const res = await request
      .get("/product/1")
      .set("Authorization", `Bearer ${user_token}`);
    expect(res.status).toBe(200);
  });
});
