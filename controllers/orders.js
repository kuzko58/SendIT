import storage from '../storage';

class Error {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

class Success {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

const orders = {
  getAll: (req, res) => {
    const allOrders = storage.orders;
    if (allOrders) res.status(200).json(allOrders);
    else res.status(404).json(new Error(404, 'Not found'));
  },

  getSpecific: (req, res) => {
    const order = storage.orders.find(orderObj => orderObj.id === req.params.orderId);
    if (order) res.status(200).json(order);
    else res.status(404).json(new Error(404, 'order not found'));
  },

  createNew: (req, res) => {
    storage.orders.push(req.body);
    res.status(200).json(new Success(200, 'order created'));
  },

  cancel: (req, res) => {
    const order = storage.orders.find(orderObj => orderObj.id === req.params.orderId);
    if (order) {
      order.status = 'canceled';
      res.status(200).json(new Success(200, 'order canceled'));
    } else {
      res.status(404).json(new Error(404, 'order not found'));
    }
  },
};

export default orders;
