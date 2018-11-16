import Router from 'express';
import parcels from '../controllers/parcels';

const router = Router();

router.get('/users/:userId/parcels', parcels.getAllUserParcels);

router.get('/parcels/:parcelId', parcels.getSpecific);

router.post('/parcels', parcels.createNew);

router.put('/parcels/:parcelId/cancel', parcels.cancel);

export default router;
