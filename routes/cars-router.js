const {Router} = require('express');
const carsRouter = Router();
const controller = require('../controllers/cars-controller');
const {checkCarValidity, checkCarValidityUpdate} = require('../middlewares')

// this routes to work in browser
// carsRouter.get('/', controller.getAllCars);
// carsRouter.post('/', middleware, controller.createNewCar);
// carsRouter.get('/update/:brand', controller.findUpdatedCar);
// carsRouter.post('/search', controller.getCarByName);
// carsRouter.post('/update', controller.updateCar);
// carsRouter.get('/new', controller.newCar);
// carsRouter.post('/delete', controller.linkToDelete);

// to work in postman recomment this!
carsRouter.get('/', controller.getAllCars);
carsRouter.get('/:name', controller.getCarByName);
carsRouter.post('/', checkCarValidity, controller.createNewCar);
carsRouter.put('/', checkCarValidityUpdate, controller.updateCar);
carsRouter.delete('/:name', controller.deleteByName);


module.exports = carsRouter;
