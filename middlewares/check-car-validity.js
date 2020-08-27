module.exports = (req, res, next) => {
    try {
        const newCar = req.body;
        if (!newCar.brand || !newCar.engine || !newCar.year) {
            throw new Error('fill all inputs')
        }
        next();
    } catch (e) {
        return res.status(400).end(e.message);
    }
}
