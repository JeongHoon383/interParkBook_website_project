import express from 'express';
import * as categoryMainController from '../controller/CategoryMainController';

const router = express.Router();

router.get('/', categoryMainController.getList);

export default router;