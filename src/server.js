import express from "express";
import { mapOrder } from "*/utilities/sorts.js";

const app = express();

const hostname = "localhost";
const port = 8017;

app.get("/", (req, res) => {
  res.end("<h1>Hello world! quangdungdev</h1><hr/>");
});

app.listen(port, hostname, () => {
  console.log(`Hello quangdungdev. I'm running at ${hostname}:${port}/`);
});
