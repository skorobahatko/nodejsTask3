const carsService = require('../services/cars-service');

module.exports = {
    getAllCars: (req, res) => {
        console.log ('cars-controller');
        const cars = carsService.getAll ();
        res.render ('cars', { arr: cars });
    },
    getCarByName: (req, res) => {
        let { search } = req.body;
        const carByName = carsService.getByName(search);
        if (carByName !== undefined) {
            res.render('search-car', {oneCar: carByName})
        } else {
            res.render('search-car', {noResult: 'NO RESULTS'})
        }
    },
    newCar: (req, res) => {
      res.render('new-car');
    },
    createNewCar: (req, res) => {
        const newArr = carsService.createNew(req.body)
        res.render('cars', {arr: newArr});
    }
};
