import supertest from "supertest";
import app from "../../server";
import orderRouter from "../order";

let token: string;
let user_token: string;
const request = supertest(app);

describe("Test ORDER endpoints response", () => {
  it("GET /order/:id", async () => {
    const res = await request
      .get("/order/1")
      .set("Authorization", `Bearer ${user_token}`);
    expect(res.status).toBe(403);

    // expect(orderRouter.get("/order/:id")).toBeDefined();
  });
  it("GET /order", async () => {
    const res = await request
      .get("/order")
      .set("Authorization", `Bearer ${user_token}`);
    expect(res.status).toBe(403);
  });
  it("DELETE /order/:id", async () => {
    const res = await request
      .get("/order/1")
      .set("Authorization", `Bearer ${user_token}`);
    expect(res.status).toBe(403);
    // expect(orderRouter.delete).toBeDefined();
  });
  it("POST /order", async () => {
    const res = await request
      .get("/order")
      .set("Authorization", `Bearer ${user_token}`);
    expect(res.status).toBe(403);
    // expect(orderRouter.post).toBeDefined();
  });
});
