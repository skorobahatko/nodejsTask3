const carsService = require('../services/cars-service');
const {Router} = require('express');
const app = Router();

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
    },
    findUpdatedCar: (req, res) => {
        const updatedCar = carsService.findCarToUpdate(req.params.brand);
        console.log ('UPDATED CAR')
        console.log (updatedCar);
        res.render('update-car', {oldCar: updatedCar});
    },
    updateCar: (req, res) => {
        console.log ('BODY');
        console.log (req.body);
        const updatedCar = req.body;
        const updatedArrayCars = carsService.updateCar(updatedCar);
        console.log ('updatedArrayCars');
        console.log (updatedArrayCars);
        res.render('cars', {arr: updatedArrayCars});
    },
    // deleteCar: (req, res) => {
    //     console.log ('delete')
    //     let clearArr = carsService.deleteCar(req.params);
    //     res.render('cars', {arr: clearArr})
    // },
    linkToDelete: (req, res) => {
        console.log ('carToDelete');
        const carToDelete = req.body;
        console.log (carToDelete);
        let clearArr = carsService.deleteCar(carToDelete);
        res.render('cars', {arr: clearArr})
    }
};
