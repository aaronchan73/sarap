import express from "express";
import router from "./routes/routes.js";

// const PORT = 

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(router);

app.listen(PORT);
