import supertest from "supertest";
import productRouter from "../product";
import app from "../../server";

let token: string;
let user_token: string;
const request = supertest(app);

describe("Test PRODUCT endpoints response", () => {
  it("GET /poroduct/:id", async () => {
    expect(productRouter.get).toBeDefined();
  });
  it("GET /poroduct", async () => {
    const res = await request
      .get("/user")
      .set("Authorization", `Bearer ${user_token}`);
    expect(res.status).toBe(403);
  });
  it("DELETE /poroduct/:id", async () => {
    expect(productRouter.delete).toBeDefined();
  });
  it("POST /poroduct", async () => {
    expect(productRouter.post).toBeDefined();
  });
});
