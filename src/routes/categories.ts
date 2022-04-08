import express from 'express';
import { getCategories } from '../controllers/categories';
const router = express.Router();

router.get('/categories', getCategories);

export = router;

