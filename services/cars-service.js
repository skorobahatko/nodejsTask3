let carsArr = [
    {brand: 'Volvo', engine: '2.0', year: '2018'},
    {brand: 'Mercedes-Benz', engine: '2.2', year: '2015'}
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
    }
};
