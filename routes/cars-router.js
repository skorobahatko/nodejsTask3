const {Router} = require('express');
const carsRouter = Router();
const controller = require('../controllers/cars-controller');
const middleware = require('../middlewares/check-car-validity')


carsRouter.get('/', controller.getAllCars);
carsRouter.post('/', middleware, controller.createNewCar);
carsRouter.get('/update/:brand', controller.findUpdatedCar);
carsRouter.post('/search', controller.getCarByName);
carsRouter.post('/update', controller.updateCar);
carsRouter.get('/new', controller.newCar);
// carsRouter.delete('/:brand', controller.deleteCar);
// carsRouter.post('/:brand', controller.deleteCar);
carsRouter.post('/delete', controller.linkToDelete);

module.exports = carsRouter;
