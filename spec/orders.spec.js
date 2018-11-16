/* eslint-env jasmine */
import Request from 'request';
import Server from '../server';
import storage from '../storage';

const start = () => Server;
start();

describe('get specific order', () => {
  const data = {};
  const options = {
    url: 'http://localhost:3000/users/orders/od-0001',
    headers: {
      sender: 'user',
    },
  };
  beforeAll((done) => {
    Request.get(options, (error, response, body) => {
      data.status = response.statusCode;
      data.body = body;
      done();
    });
  });
  it('status 200', () => {
    expect(data.status).toBe(200);
  });
  it('an order object', () => {
    expect(JSON.parse(data.body)).toEqual(storage.orders.find(order => order.id === 'od-0001'));
  });
});

describe('get nonexistent order', () => {
  const data = {};
  const options = {
    url: 'http://localhost:3000/users/orders/od-0001',
    headers: {
      sender: 'user',
    },
  };
  beforeAll((done) => {
    Request.get(options, (error, response, body) => {
      data.status = response.statusCode;
      data.body = body;
      done();
    });
  });
  it('status 404', () => {
    expect(data.status).toBe(404);
  });
});

describe('get all orders', () => {
  const data = {};
  const options = {
    url: 'http://localhost:3000/users/orders/',
    headers: {
      sender: 'user',
    },
  };
  beforeAll((done) => {
    Request.get(options, (error, response, body) => {
      data.status = response.statusCode;
      data.body = body;
      done();
    });
  });
  it('status 200', () => {
    expect(data.status).toBe(200);
  });
  it('array of all orders', () => {
    expect(JSON.parse(data.body)).toEqual(storage.orders);
  });
});

describe('creating a new order', () => {
  const data = {};
  const options = {
    url: 'http://localhost:3000/users/orders/create',
    json: true,
    method: 'post',
    headers: {
      sender: 'user',
    },
    body: {
      id: 'od-0004',
      user: 'us-0001',
      status: 'transit',
      weightCat: '20kg',
      trackingNum: '4522588',
    },
  };
  beforeAll((done) => {
    Request.post(options, (error, response) => {
      data.status = response.statusCode;
      done();
    });
  });
  it('status 200', () => {
    expect(data.status).toBe(200);
  });
  describe('check if order was created', () => {
    const data2 = {};
    const options2 = {
      url: 'http://localhost:3000/users/orders/od-0004',
      headers: {
        sender: 'user',
      },
    };
    beforeAll((done) => {
      Request.get(options2, (error, response, body) => {
        data2.status = response.statusCode;
        data2.body = body;
        done();
      });
    });
    it('status 200', () => {
      expect(data2.status).toBe(200);
    });
    it('order object', () => {
      expect(JSON.parse(data2.body)).toEqual({
        id: 'od-0004',
        user: 'us-0001',
        status: 'transit',
        weightCat: '20kg',
        trackingNum: '4522588',
      });
    });
  });
});

describe('canceling an order', () => {
  const data = {};
  const options = {
    url: 'http://localhost:3000/users/orders/cancel/od-0002',
    headers: {
      sender: 'user',
    },
  };
  beforeAll((done) => {
    Request.put(options, (error, response) => {
      data.status = response.statusCode;
      done();
    });
  });
  it('status 200', () => {
    expect(data.status).toBe(200);
  });
  describe('check if order was canceled', () => {
    const data2 = {};
    const options2 = {
      url: 'http://localhost:3000/users/orders/od-0002',
      headers: {
        sender: 'user',
      },
    };
    beforeAll((done) => {
      Request.get(options2, (error, response, body) => {
        data2.status = response.statusCode;
        data2.body = body;
        done();
      });
    });
    it('status 200', () => {
      expect(data2.status).toBe(200);
    });
    it('order status should be canceled', () => {
      expect(JSON.parse(data2.body).status).toBe('canceled');
    });
  });
});
