var express = require('express');
var router = express.Router();
const { Films } = require("../models/films");
const filmModel = new Films();

/* GET home page. */
router.get('/', function(req, res) {
    res.json(filmModel.getAll());
});

/* POST add films */
router.post('/', function (req ,res ) {
    if (
        !req.body ||
        !req.body.title ||
        !req.body.link ||
        !req.body.duration ||
        !req.body.budget ||
        !req.body.title ||
        !req.body.title.trim() ||
        !req.body.link.trim()
    )
        return res.sendStatus(400);

    const film = filmModel.addOne(req.body);

    return res.json(film);

})

router.get('/', function(req, res, next) {
    if(!req.body.predicate) res.error(400);

    return res.json(filmModel.getAll(req.body.predicate));
});


module.exports = router;
