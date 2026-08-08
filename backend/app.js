const { verifyAdmin, validateToken } = require("./helper/validate");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./helper/error-handler");
const db = require("./config");
const cookieParser = require("cookie-parser");

const app = express();
require("dotenv/config");
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.options("*", cors());
const api = process.env.API_URL;

// middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());

// routes
const AdminRouter = require("./routers/admin");
const userRouter = require("./routers/user");
app.use(`${api}`, userRouter);
app.use(`${api}/admin`, validateToken, verifyAdmin, AdminRouter);

// error handler (must be registered after the routes)
app.use(errorHandler);

db.connect((err) => {
  if (err) {
    console.log("Database is not connected:", err.message);
    return;
  }
  console.log("Database is connected");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
