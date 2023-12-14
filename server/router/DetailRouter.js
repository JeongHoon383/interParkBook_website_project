import express from "express";
import {
  getDetail,
  getReview,
  insertReview,
} from "../controller/DetailController.js";

const router = express.Router();

router.get("/:isbn", getDetail);

router.post("/:isbn/review", insertReview);

router.get("/:isbn/review", getReview);

export default router;
