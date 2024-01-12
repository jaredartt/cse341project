const jaredRoute = (req, res) => {
    res.send('Jared Martinez');
};

const rubenRoute = (req, res) => {
    res.send('Ruben Martinez');
};

const pedroRoute = (req, res) => {
    res.send('Pedro Martinez');
};

module.exports = {
    jaredRoute,
    rubenRoute,
    pedroRoute
}