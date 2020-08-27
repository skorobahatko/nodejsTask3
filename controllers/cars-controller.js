const carsService = require('../services/cars-service');

module.exports = {
    getAllCars: (req, res) => {
        console.log ('cars-controller');
        const cars = carsService.getAll();
        res.render('cars', {arr: cars});
    },
    getCarByName: (req, res) => {
        let { brand } = req.params;
        const carByName = carsService.getByName(brand);
        if (carByName !== undefined) {
            res.render('cars', {oneCar: carByName})
        } else {
            res.render('cars', {noResult: 'NO RESULTS'})
        }
    }
};
