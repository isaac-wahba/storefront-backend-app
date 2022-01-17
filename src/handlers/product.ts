import express from "express";
import { Product, productType } from "../models/product";
import { getHash, verifyToken, verfiyHash } from "../helpers/helpers";

const productRouter = express.Router();
const product = new Product();

productRouter.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const allProducts = await product.index();
    res.send(allProducts);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

productRouter.get(
  "/:id",
  async (req: express.Request, res: express.Response) => {
    const requestedProduct = await product.show(req.params.id);
    try {
      res.send(requestedProduct);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

productRouter.post(
  "/",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const productToAdd: productType = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const addedProduct = await product.create(productToAdd);
    try {
      res.send(addedProduct);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

productRouter.delete(
  "/:id",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const deletedProduct = await product.delete(req.params.id);
    try {
      res.send(deletedProduct);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

export default productRouter;
