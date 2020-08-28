const { v4: uuidv4 } = require('uuid');
let carsArr = [
    // {brand: 'Volvo', engine: '2.0', year: '2018', id: 1},
    // {brand: 'Mercedes-Benz', engine: '2.2', year: '2015', id: 2},
    // {brand: 'BMW', engine: '1.5', year: '2000', id: 3},
    // {brand: 'Opel', engine: '3.0', year: '2010', id: 4},
];
module.exports = {
    getAll: () => {
        return carsArr;
    },
    getByName: (search) => {
        console.log (search)
        let result = carsArr.find(item => {
            console.log (item.brand.toLowerCase());
            if (item.brand.toLowerCase() === search) {
             return item;
            }
        });
        console.log ('RESULT!!!')
        console.log (result);
        return result;
    },
    createNew: (request) => {
        let newCar = request;
        newCar.id = uuidv4();
        carsArr.push(newCar);
        return carsArr;
    },
    findCarToUpdate: (reqName) => {
        console.log ('reqName');
        console.log (reqName);
        let result = carsArr.find(item => {
            if (item.brand === reqName) {
                console.log ('FIND CAR TO UPD');
                console.log (item);
                return item;
            }
        });
        return result;
    },
    updateCar: (updatedCar) => {
        console.log ('SERVICE')
        console.log (updatedCar);
            let index = carsArr.findIndex(item => item.id === updatedCar.id);
            carsArr.splice(index, 1);
            console.log ('NEW CARSARR');
            console.log (carsArr);
            carsArr.push(updatedCar)
        return carsArr;
        // for (let i = 0; i > carsArr.length; i++) {
        //     console.log (carsArr[i].id)
        //     if (carsArr[i].id === updatedCar.id) {
        //         const newArr = Object.assign(carsArr[i], updatedCar);
        //         console.log ('NEW ARR')
        //         console.log (newArr);
        //     }
        // }
        // const newArr = carsArr.map(item => {
        //     if (item.brand === updatedCar.brand) {
        //         return updatedCar;
        //     }
        //     return item
        // })
        // return newArr;
    },
    deleteCar: (car) => {
        let indexCar = carsArr.findIndex(item => item.brand === car.brand);
        const clearArr = carsArr.splice(indexCar, 1);
        return carsArr;
    }
};
