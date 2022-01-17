import supertest from "supertest";
import userRouter from "../user";
import app from "../../server";

let token: string;
let user_token: string;
const request = supertest(app);

describe("Test USER endpoints response", () => {
  it("POST /user:", async () => {
    const user = {
      first_name: "wael",
      last_name: "ahmed",
      password: "1234",
    };
    const res = await request
      .post("/user")
      .send(user)
      .set("Accept", "application/json");
    expect(res.status).toBe(200);
    expect(res.body).toBeTruthy();
    token = res.body;
  });

  it("GET /user", async () => {
    const res = await request
      .get("/user")
      .set("Authorization", `Bearer ${user_token}`);
    expect(res.status).toBe(403);
  });
  it("GET /user/:id", async () => {
    expect(userRouter.get).toBeDefined();
  });
  it("DELETE /user/:id", async () => {
    expect(userRouter.delete).toBeDefined();
  });
  it("POST /user", async () => {
    expect(userRouter.post).toBeDefined();
  });
});
