import express from "express";
import { Order, orderType } from "../models/order";
import { getHash, verifyToken, verfiyHash } from "../helpers/helpers";
const orderRouter = express.Router();
const order = new Order();

orderRouter.get(
  "/",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    try {
      const allOrders = await order.index();
      res.send(allOrders);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

orderRouter.get(
  "/:id",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const requestedOrder = await order.show(req.params.id);
    try {
      res.send(requestedOrder);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

orderRouter.post(
  "/",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const orderToAdd: orderType = {
      quantity: req.body.quantity,
      status: req.body.status,
      user_id: req.body.user_id,
      product_id: req.body.product_id,
    };
    const addedOrder = await order.create(orderToAdd);
    try {
      res.send(addedOrder);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

orderRouter.delete(
  "/:id",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const deletedOrder = await order.delete(req.params.id);
    try {
      res.send(deletedOrder);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

export default orderRouter;
