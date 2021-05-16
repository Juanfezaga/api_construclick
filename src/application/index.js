/* eslint-disable no-console */
const http = require('http');
const dotenv = require('dotenv');

dotenv.config();

const app = require('./startup/app');
const { config } = require('./config');
const { boot } = require('../infrastructure/bootloaders');

const onListening = () => {
  console.log(`Server listening in ${config.PORT}`);
};

app.set('port', config.PORT);

const server = http.createServer(app);

server.on('listening', onListening);

console.debug('Loaders: INIT...');

const startApp = async () => {
  try {
    await boot();
    console.log('Loaders: COMPLETED');
    server.listen(config.PORT);
  } catch (error) {
    console.log('Loaders: FAILED');
    console.error(error);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};

startApp();
