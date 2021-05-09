const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

const addDays = (date, days) => dayjs(date).add(days, 'day');

const subtractDays = (date, days) => dayjs(date).subtract(days, 'day');

module.exports = {
  addDays,
  subtractDays,
};
