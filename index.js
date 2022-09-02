import express from "express";
import { router as bikesRouter } from "./router.js";

import { generateAccessToken } from "./auth.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/bikes", bikesRouter);

// Create new bearer token
app.post("/api/user", (req, res) => {
  const username = req.body.username;

  const token = generateAccessToken({ username });
  res.send({ token });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});