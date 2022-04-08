import { Request, Response } from "express";

const express = require("express");
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

app.post("/category", (req: Request, res: Response) => {
  // res.json(req.body);
});

app.get("/categories", (req: Request, res: Response) => {
  return res;
});

app.listen(PORT, HOST);
