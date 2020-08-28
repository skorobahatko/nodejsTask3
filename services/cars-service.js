// UUID NEED FOR CREATING UNIQUE KEYS

const { v4: uuidv4 } = require('uuid');

let carsArr = [
    {brand: 'Volvo', engine: '2.0', year: '2018', id: 1},
    {brand: 'Mercedes-Benz', engine: '2.2', year: '2015', id: 2},
    {brand: 'BMW', engine: '1.5', year: '2000', id: 3},
    {brand: 'Opel', engine: '3.0', year: '2010', id: 4},
];
module.exports = {
    //
    //  THIS SERVICES FOR WORK IN BROWSER!!!
    //
    // getAll: () => {
    //     return carsArr;
    // },
    // getByName: (search) => {
    //     console.log (search)
    //     let result = carsArr.find(item => {
    //         console.log (item.brand.toLowerCase());
    //         if (item.brand.toLowerCase() === search) {
    //          return item;
    //         }
    //     });
    //     console.log ('RESULT!!!')
    //     console.log (result);
    //     return result;
    // },
    // createNew: (request) => {
    //     let newCar = request;
    //     newCar.id = uuidv4();
    //     carsArr.push(newCar);
    //     return carsArr;
    // },
    // findCarToUpdate: (reqName) => {
    //     console.log ('reqName');
    //     console.log (reqName);
    //     let result = carsArr.find(item => {
    //         if (item.brand === reqName) {
    //             console.log ('FIND CAR TO UPD');
    //             console.log (item);
    //             return item;
    //         }
    //     });
    //     return result;
    // },
    // updateCarService: (updatedCar) => {
    //     console.log ('SERVICE')
    //     console.log (updatedCar);
    //         let index = carsArr.findIndex(item => item.id === updatedCar.id);
    //         carsArr.splice(index, 1);
    //         console.log ('NEW CARSARR');
    //         console.log (carsArr);
    //         carsArr.push(updatedCar)
    //     return carsArr;
    // },
    // deleteCar: (car) => {
    //     let indexCar = carsArr.findIndex(item => item.brand === car.brand);
    //     const clearArr = carsArr.splice(indexCar, 1);
    //     return carsArr;
    // }
    //
    //  THIS SERVICES FOR WORK IN POSTMAN!!!
    //

    getAllCars: () => {
        return carsArr;
    },
    getByName: (name) => {
        let findCarByName = carsArr.find(item => {
            if (item.brand.toLowerCase() === name) {
                return item;
            }
        });
        if (findCarByName) {
            return findCarByName;
        } else {
            return 'NO ONE FOUNDED';
        }
    },
    createNewCar: (values) => {
        values.id = uuidv4();
        carsArr.push(values);
        return carsArr;
    },
    updateCar: (carForUpdate) => {
        let carInArray = carsArr.find(item => item.id === carForUpdate.id);
        if (carInArray) {
            for (let key in carInArray) {
                carInArray[key] = carForUpdate[key]
            }
        } else {
            return 'SOMETHINK GO WRONG'
        }
        let index = carsArr.findIndex(item => item.id === carForUpdate.id);
        carsArr.splice(index, 1);
        carsArr.push(carInArray);
        return carsArr;
    },
    deleteCar: (name) => {
        let indexCar = carsArr.findIndex(item => item.brand.toLowerCase() === name);
        const newArr = carsArr.splice(indexCar, 1);
        return carsArr;
    }
};
