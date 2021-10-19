const { success } = require('../../helpers/api.helper');

const { outputUserData } = require('../../../domain/serializers/user.serializer');
const { signIn, getDataBasicUser, register } = require('../../../domain/useCases/user/user.service');

const signInController = async (req, res, next) => {
  try {
    const response = await signIn(req.body);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const registerController = async (req, res, next) => {
  try {
    const response = await register(req.body);
    success(res, outputUserData(response));
  } catch (error) {
    next(error);
  }
};

const getDataBasicUserController = async (req, res, next) => {
  try {
    const response = await getDataBasicUser(req.params.id);
    success(res, outputUserData(response));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signInController,
  registerController,
  getDataBasicUserController,
};
