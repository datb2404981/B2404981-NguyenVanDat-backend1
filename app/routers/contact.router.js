import express from "express";
import * as contact from "../controllers/contact.controller.js";

const router = express.Router();

router.route("/")
  .get(contact.findAll).post(contact.create).delete(contact.deleteAll);

router.route("/favorite")
  .get(contact.findAllFavorite);

router.route("/:id")
  .get(contact.findOne).put(contact.update).delete(contact.deleteOne);

export default router;

