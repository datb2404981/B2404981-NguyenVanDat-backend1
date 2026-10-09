import express from "express"
import cors from "cors"
import contactRouter from "./app/routers/contact.router.js"
import ApiError from "./app/api-error.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRouter);

app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
})

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal server Error",
  });
});

export default app;