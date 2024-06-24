const Home = (req, res) => {
    res.status(200).json( { msg: 'This is Home Page. '} );
}

module.exports = Home;