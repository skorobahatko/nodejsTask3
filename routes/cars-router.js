const {Router} = require('express');
const carsRouter = Router();
const controller = require('../controllers/cars-controller')


carsRouter.get('/', controller.getAllCars);
carsRouter.get('/:brand', controller.getCarByName);

module.exports = carsRouter;
