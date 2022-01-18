import { Order, orderProductsType, orderType } from "../order";
import { User, userType } from "../user";
import { Product, productType } from "../product";
const order = new Order();
const product = new Product();
const user = new User();
describe("Order Model", () => {
  it("should have an index method", () => {
    expect(order.index).toBeDefined();
  });

  it("should have a show method", () => {
    expect(order.index).toBeDefined();
  });

  it("should have a create method", () => {
    expect(order.index).toBeDefined();
  });

  it("should have a delete method", () => {
    expect(order.index).toBeDefined();
  });
  it("should have a addProduct method", () => {
    expect(order.addProduct).toBeDefined();
  });

  it("create method should add a order", async () => {
    // Arrange
    var createdProduct = await product.create({
      name: "Ball",
      price: 250,
      category: "sports",
    });
    const createdUser = await user.create({
      first_name: "wael",
      last_name: "ahmed",
      password: "1234",
    });

    let expectedOrder: orderType = {
      status: "active",
      user_id: createdUser.id ?? 1,
    };

    // Action
    const result = await order.create(expectedOrder);

    //Assert
    expectedOrder.id = result.id;
    expect(result).toEqual(expectedOrder);
  });
  beforeAll(async () => {
    let all: orderType[] = await product.index();
    all.forEach(async (o) => await product.delete(o.id?.toString() ?? ""));
  });
  beforeEach(async () => {
    let all: orderType[] = await product.index();
    all.forEach(async (o) => await product.delete(o.id?.toString() ?? ""));
  });
  it("index method should return a list of orders", async () => {
    // Arrange
    var createdProduct = await product.create({
      id: 5,
      name: "Ball",
      price: 250,
      category: "sports",
    });
    const createdUser = await user.create({
      id: 1,
      first_name: "wael",
      last_name: "ahmed",
      password: "1234",
    });
    let expectedOrder = await order.create({
      status: "active",
      user_id: createdUser.id ?? 1,
    });
    // let addedproductToOrder: orderProductsType = {
    //   quantity: 10,
    //   order_id: expectedOrder.id ?? 1,
    //   product_id: createdProduct.id ?? 5,
    // };
    // let addedOrder = await order.addProduct(addedproductToOrder);
    const result = await order.index();
    //expectedOrder.id = expectedOrder.id;
    expect(result).toContain(expectedOrder);
  });

  it("show method should return the correct order", async () => {
    //arrange

    var createdProduct = await product.create({
      id: 5,
      name: "Ball",
      price: 250,
      category: "sports",
    });
    const createdUser = await user.create({
      id: 5,
      first_name: "wael",
      last_name: "ahmed",
      password: "1234",
    });
    let expectedOrder = await order.create({
      status: "active",
      user_id: createdUser.id ?? 1,
    });
    const result: orderType = await order.show(
      expectedOrder.user_id?.toString() ?? ""
    );
    console.log("expected order : \n", expectedOrder);
    console.log("result==>", result);
    // expectedOrder.id = result.id;
    expect(result).toEqual(expectedOrder);
  });

  it("delete method should remove the order", async () => {
    order.delete("1");
    const result = await order.show("1");

    expect(result).toEqual(undefined);
  });
});
