import express from "express";
import * as controller from '../controller/SearchController.js';

const router = express.Router();

router.post('/', controller.getSearchBook);

export default router;
