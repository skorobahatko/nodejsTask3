module.exports = (req, res, next) => {
    try {
        const newCar = req.body;
        console.log (newCar);
        if (!newCar.brand || !newCar.engine || !newCar.year) {
            throw new Error ('fill all inputs')
        }
        if (!newCar.id) {
            throw new Error('where is ID?????')
        }
        next ();
    } catch (e) {
        return res.status (400).end (e.message);
    }
}
