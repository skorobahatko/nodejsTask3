const carsService = require('../services/cars-service');
const {Router} = require('express');
const app = Router();

module.exports = {
    //
    //  THIS CONTROLLERS FOR WORK IN BROWSER!!!!
    //
    // getAllCars: (req, res) => {
    //     console.log ('cars-controller');
    //     const cars = carsService.getAll ();
    //     res.render ('cars', { arr: cars });
    // },
    // getCarByName: (req, res) => {
    //     let { search } = req.body;
    //     const carByName = carsService.getByName(search);
    //     if (carByName !== undefined) {
    //         res.render('search-car', {oneCar: carByName})
    //     } else {
    //         res.render('search-car', {noResult: 'NO RESULTS'})
    //     }
    // },
    // newCar: (req, res) => {
    //   res.render('new-car');
    // },
    // createNewCar: (req, res) => {
    //     const newArr = carsService.createNew(req.body)
    //     res.render('cars', {arr: newArr});
    // },
    // findUpdatedCar: (req, res) => {
    //     const updatedCar = carsService.findCarToUpdate(req.params.brand);
    //     console.log ('UPDATED CAR')
    //     console.log (updatedCar);
    //     res.render('update-car', {oldCar: updatedCar});
    // },
    // updateCar: (req, res) => {
    //     console.log ('BODY');
    //     console.log (req.body);
    //     const updatedCar = req.body;
    //     const updatedArrayCars = carsService.updateCarService(updatedCar);
    //     console.log ('updatedArrayCars');
    //     console.log (updatedArrayCars);
    //     res.render('cars', {arr: updatedArrayCars});
    // },
    // linkToDelete: (req, res) => {
    //     console.log ('carToDelete');
    //     const carToDelete = req.body;
    //     console.log (carToDelete);
    //     let clearArr = carsService.deleteCar(carToDelete);
    //     res.render('cars', {arr: clearArr})
    // }

    // THIS CONTROLLERS FOR WORK IN POSTMAN !!!!

    getAllCars: (req, res) => {
        const cars = carsService.getAllCars();
        res.json (cars);
    },
    getCarByName: (req, res) => {
        const {name} = req.params;
        const oneCar = carsService.getByName(name);
        res.json(oneCar);
    },
    createNewCar: (req, res) => {
        const valuesForNewCar = req.body;
        const arrWithNewCar = carsService.createNewCar(valuesForNewCar);
        res.json(arrWithNewCar);
    },
    updateCar: (req, res) => {
        console.log (req.body);
        const carForUpdate = carsService.updateCar(req.body);
        res.json(carForUpdate);
    },
    deleteByName: (req, res) => {
        const {name} = req.params;
        const carForDelete = carsService.deleteCar(name);
        res.json(carForDelete);
    }
};
