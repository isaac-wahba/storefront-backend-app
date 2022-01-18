import { getHash, verfiyHash } from "../../helpers/helpers";
import { User, userType } from "../user";

const user = new User();

describe("User Model", () => {
  it("should have an index method", () => {
    expect(user.index).toBeDefined();
  });

  it("should have a show method", () => {
    expect(user.index).toBeDefined();
  });

  it("should have a create method", () => {
    expect(user.index).toBeDefined();
  });

  it("should have a delete method", () => {
    expect(user.index).toBeDefined();
  });
  beforeEach(async () => {
    let all: userType[] = await user.index();
    all.forEach(async (p) => await user.delete(p.id?.toString() ?? ""));
  });

  it("create method should add a user", async () => {
    const userExample = {
      first_name: "wael",
      last_name: "ahmed",
      password: "1234",
    };
    const result = await user.create(userExample);
    expect(verfiyHash(result.password, "1234")).toBeTrue();
  });

  it("index method should return a list of users", async () => {
    let expectedUser = await user.create({
      first_name: "wael",
      last_name: "ahmed",
      password: "1234",
    });
    console.log("Expected: ", expectedUser);

    const acutal = await user.index();
    console.log("Actual: ", acutal);

    expect(acutal).toEqual([expectedUser]);
  });

  it("show method should return the correct user", async () => {
    let expectedUser = await user.create({
      first_name: "wael",
      last_name: "ahmed",
      password: "1234",
    });
    const result = await user.show(expectedUser.id?.toString() ?? "");
    expect(result).toEqual(expectedUser);
  });

  it("delete method should remove the user", async () => {
    user.delete("1");
    const actual = await user.show("1");

    expect(actual).toEqual(undefined);
  });
});
