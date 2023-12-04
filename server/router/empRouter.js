import express from 'express';
import * as empController from '../controller/empController.js';

const router = express.Router();

router.get('/', empController.getList);

export default router;
