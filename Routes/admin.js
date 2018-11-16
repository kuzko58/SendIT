import Router from 'express';
import parcels from '../controllers/parcels';

const router = Router();

router.get('/parcels', parcels.getAll);

export default router;
