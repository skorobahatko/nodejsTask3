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
        console.log (updatedCar);
        res.render('update-car', {oldCar: updatedCar});
    },
    updateCar: (req, res) => {
        // console.log ('PARAMS');
        // console.log (req.params);
        console.log ('BODY');
        console.log (req.params);
        // const updatedCar = req.body;
        // const updatedArrayCars = carsService.updateCar(updatedCar);
        // console.log ('updatedArrayCars');
        // console.log (updatedArrayCars)
    },
    // deleteCar: (req, res) => {
    //     console.log ('delete')
    //     let clearArr = carsService.deleteCar(req.params);
    //     res.render('cars', {arr: clearArr})
    // },
    linkToDelete: (req, res) => {
        console.log ('carToDelete');
        const carToDelete = req.params;
        console.log (carToDelete);
        let clearArr = carsService.deleteCar(req.params);
        res.render('cars', {arr: clearArr})
    }
};
