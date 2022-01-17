import express from "express";
import { User, userType } from "../models/user";
import jwt from "jsonwebtoken";
import { getHash, verifyToken, verfiyHash } from "../helpers/helpers";
import dotenv from "dotenv";
dotenv.config();

const userRouter = express.Router();
const user = new User();

userRouter.get(
  "/",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    try {
      const allusers = await user.index();
      res.send(allusers);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

userRouter.get(
  "/:id",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const requesteduser = await user.show(req.params.id);
    try {
      res.send(requesteduser);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

userRouter.post("/", async (req: express.Request, res: express.Response) => {
  const userToAdd: userType = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
  };
  const addedUser = await user.create(userToAdd);
  const tokenSecret = process.env.TOKEN_SECRET as string;

  try {
    const token = jwt.sign(addedUser, tokenSecret);
    res.send({ token });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

userRouter.delete(
  "/:id",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const deletedUser = await user.delete(req.params.id);
    try {
      res.send(deletedUser);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

export default userRouter;
