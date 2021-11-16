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

router.delete('/:id', function(req, res) {
    return res.json(filmModel.deleteOne(req.params.id));
});

router.get('/:id', function(req, res) {
    return res.json(filmModel.getOne(req.params.id));
});

router.get('/', function(req, res) {
    const minimumFilmDuration = req.query
        ? parseInt(req.query["minimum-duration"])
        : undefined;
    if (
        minimumFilmDuration &&
        (isNaN(minimumFilmDuration) || minimumFilmDuration <= 0) //NaN => Not a Number
    )
        return res.sendStatus(400);
    const films = filmModel.getAll();
    if (!minimumFilmDuration) return res.json(filmModel.getAll());
    else {
        return res.json(filmModel.getAll((film) => film.duration >= minimumFilmDuration));
    }
});

router.put('/:id', function(req, res){
    if (
        !req.body ||
        (req.body.title && !req.body.title.trim()) ||
        (req.body.link && !req.body.link.trim()) ||
        (req.body.duration && isNaN(req.body.duration)) ||
        (req.body.budget && isNaN(req.body.budget))
    )
        return res.status(400).end();

    const film = filmModel.updateOne(req.params.id, req.body);
    if(!film) res.sendStatus(404);
    return res.json(film);
})


module.exports = router;
