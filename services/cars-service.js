let carsArr = [
    {brand: 'Volvo', engine: '2.0', year: '2018'},
    {brand: 'Mercedes-Benz', engine: '2.2', year: '2015'}
];
module.exports = {
    getAll: () => {
        return carsArr;
    },
    getByName: (brand) => {
        let result = carsArr.find(item => {
            if (item.brand.toLowerCase() === brand) {
             return item;
            }
        });
        console.log ('RESULT!!!')
        console.log (result);
        return result;
    }
};
