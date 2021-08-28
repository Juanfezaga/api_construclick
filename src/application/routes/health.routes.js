const router = require('express').Router();

router.get('/', (req, res) => {
  res.send({
    health: `Ok - Construclick - ENV:${process.env.NODE_ENV}`,
    date: new Date().toUTCString(),
  });
});

module.exports = router;
