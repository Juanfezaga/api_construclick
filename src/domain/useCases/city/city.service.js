const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/city.repository');

const createCity = async (data) => {
  try {
    const city = await Repository.create(data);
    return city;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('CITY:internal'),
      error,
    });
  }
};

const getCitys = async () => {
  try {
    const citys = await Repository.find();
    return citys;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('CITY:internal'),
      error,
    });
  }
};

module.exports = {
  getCitys,
  createCity,
};
