const helloRoute = (req, res) => {
    res.send('hello!');
};

const byeRoute = (req, res) => {
    res.send('bye!');
};

module.exports = {
    helloRoute,
    byeRoute,
};