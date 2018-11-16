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

const parcels = {
  getAll: (req, res) => {
    const allparcels = storage.parcels;
    if (allparcels) res.status(200).json(allparcels);
    else res.status(404).json(new Error(404, 'Not found'));
  },
  getAllUserParcels: (req, res) => {
    const userParcels = storage.parcels.filter(parcel => parcel.userId === req.params.userId);
    if (userParcels.length > 0) res.status(200).json(userParcels);
    else res.status(404).json(new Error(404, `can't find any parcels for user: ${req.params.userId}`));
  },
  getSpecific: (req, res) => {
    const parcel = storage.parcels.find(parcelObj => parcelObj.id === req.params.parcelId);
    if (parcel) res.status(200).json(parcel);
    else res.status(404).json(new Error(404, 'parcel not found'));
  },

  createNew: (req, res) => {
    storage.parcels.push(req.body);
    res.status(200).json(new Success(200, 'parcel created'));
  },

  cancel: (req, res) => {
    const parcel = storage.parcels.find(parcelObj => parcelObj.id === req.params.parcelId);
    if (parcel) {
      parcel.status = 'canceled';
      res.status(200).json(new Success(200, 'parcel canceled'));
    } else {
      res.status(404).json(new Error(404, 'parcel not found'));
    }
  },
};

export default parcels;
