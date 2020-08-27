const {Router} = require('express');
const carsRouter = Router();
const controller = require('../controllers/cars-controller');
const middleware = require('../middlewares/check-car-validity')


carsRouter.get('/', controller.getAllCars);
carsRouter.post('/search', controller.getCarByName);
carsRouter.get('/new', controller.newCar);
carsRouter.post('/', middleware, controller.createNewCar);

module.exports = carsRouter;
