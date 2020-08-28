let carsArr = [
    {brand: 'Volvo', engine: '2.0', year: '2018'},
    {brand: 'Mercedes-Benz', engine: '2.2', year: '2015'},
    {brand: 'BMW', engine: '1.5', year: '2000'},
    {brand: 'Opel', engine: '3.0', year: '2010'},
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
        carsArr.push(request);
        return carsArr;
    },
    findCarToUpdate: (reqName) => {
        console.log ('reqName');
        console.log (reqName);
        let result = carsArr.find(item => {
            if (item.brand === reqName) {
                return item;
            }
        });
        return result;
    },
    updateCar: (updatedCar) => {
        console.log (updatedCar);
        const newArr = carsArr.map(item => {
            if (item.brand === updatedCar.brand) {
                return updatedCar;
            }
            return item
        })
        return newArr;
    },
    deleteCar: (car) => {
        let indexCar = carsArr.findIndex(item => item.brand === car.brand);
        const clearArr = carsArr.splice(indexCar, 1);
        return carsArr;
    }
};
