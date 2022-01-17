import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

export const verifyToken = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  try {
    const tokenSecret = process.env.TOKEN_SECRET as string;

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw Error("no token provided token in required");
    const tokeninfo = jwt.verify(token, tokenSecret);
    next();
  } catch (error) {
    res.status(403);
    res.contentType("application/json");
    res.send({ error: "invalid Auth token" });
  }
};

export const getHash = (password: string) => {
  const pepper = process.env.BCRYPT_PASSWORD;
  const saltRound = parseInt(process.env.SALT_ROUNDS as string);

  const salt = bcrypt.genSaltSync(saltRound);

  const passwordHash = bcrypt.hashSync(password + pepper, salt);
  return passwordHash;
};

export const verfiyHash = (hash: string, password: string) => {
  const pepper = process.env.BCRYPT_PASSWORD as string;
  const validPassword = bcrypt.compareSync(password + pepper, hash);
  return validPassword;
};
