const { success } = require('../../helpers/api.helper');

const { outputUserData } = require('../../../domain/serializers/user.serializer');
const {
  signIn, getDataBasicUser, register, searchUserByProfession,
} = require('../../../domain/useCases/user/user.service');

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

const searchUserByProfessionController = async (req, res, next) => {
  try {
    const response = await searchUserByProfession(req.params.search);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signInController,
  registerController,
  getDataBasicUserController,
  searchUserByProfessionController,
};
