import Router from 'express';
import orders from '../controllers/orders';

const router = Router();

router.get('/orders/all', orders.getAll);

router.get('/orders/:orderId', orders.getSpecific);

router.post('/orders/create', orders.createNew);

router.put('/orders/cancel/:orderId', orders.cancel);

export default router;
