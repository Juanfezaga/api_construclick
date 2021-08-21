const { success } = require('../../helpers/api.helper');

const { createCity, getCitys } = require('../../../domain/useCases/city/city.service');

const createCityController = async (req, res, next) => {
  try {
    const response = await createCity(req.body);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getCityControllers = async () => {
  try {
    const response = await getCitys();
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCityControllers,
  createCityController,
};
