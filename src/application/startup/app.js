const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const compression = require('compression');

const routes = require('../routes');
const errorMiddleware = require('../middlewares/validation');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.set('trust proxy', true);

routes.forEach((resource) => {
  app.use(...resource);
});

app.use(errorMiddleware);

module.exports = app;
