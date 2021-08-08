const router = require('express').Router();

router.get('/', (req, res) => {
  res.send({
    health: 'Ok - Construclick',
    date: new Date().toUTCString(),
  });
});

module.exports = router;
