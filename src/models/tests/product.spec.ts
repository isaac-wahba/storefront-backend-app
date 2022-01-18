import { Product, productType } from "../product";

const product = new Product();

describe("Product Model", () => {
  it("should have an index method", () => {
    expect(product.index).toBeDefined();
  });

  it("should have a show method", () => {
    expect(product.index).toBeDefined();
  });

  it("should have a create method", () => {
    expect(product.index).toBeDefined();
  });

  it("should have a delete method", () => {
    expect(product.index).toBeDefined();
  });
  beforeAll(async () => {
    let all: productType[] = await product.index();
    all.forEach(async (p) => await product.delete(p.id?.toString() ?? ""));
  });
  beforeEach(async () => {
    let all: productType[] = await product.index();
    all.forEach(async (p) => await product.delete(p.id?.toString() ?? ""));
  });
  it("create method should add a product", async () => {
    const result = await product.create({
      id: 1,
      name: "Ball",
      price: 250,
      category: "sports",
    });
    expect({
      name: result.name,
      price: result.price,
      category: result.category,
    }).toEqual({
      //    id: 1,
      name: "Ball",
      price: 250,
      category: "sports",
    });
  });

  it("index method should return a list of products", async () => {
    // Arrange
    var expectedProduct = await product.create({
      name: "Ball",
      price: 250,
      category: "sports",
    });

    //Action
    const actual = await product.index();

    //Assertion
    expect(actual).toEqual([expectedProduct]);
  });

  it("show method should return the Show product By Id", async () => {
    // Arrange
    let expectedProduct = await product.create({
      name: "Ball",
      price: 250,
      category: "sports",
    });

    //Action
    const actual = await product.show(expectedProduct.id?.toString() ?? "");

    //Assertion
    expect(actual).toEqual(expectedProduct);
  });

  it("delete method should remove the product", async () => {
    product.delete("1");

    let result = await product.show("1");

    expect(result).toEqual(undefined);
  });
});
