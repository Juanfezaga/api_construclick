const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/user.repository');
const { generateToken } = require('../../../infrastructure/helpers/jwt');
const { compareHash } = require('../../../infrastructure/helpers/hash.helper.');

const signIn = async ({ role, email, password }) => {
  try {
    const user = await Repository.findOne({ email, role });
    if (!user || !compareHash(password, user.password)) {
      throw new CustomError({
        ...getErrorByName('USER:credentials'),
      });
    }

    return generateToken({
      id: user.id,
      role: user.role,
    });
  } catch (error) {
    if (!error.code) {
      throw new CustomError({
        ...getErrorByName('USER:internal'),
        error,
      });
    }
    throw error;
  }
};

const register = async (data) => {
  try {
    const user = await Repository.findOne({
      $or: [
        {
          email: data.email,
        },
        {
          phone: data.phone,
        },
      ],
    });
    if (user) {
      if (user.email === data.email) {
        throw new CustomError({
          ...getErrorByName('USER:create:exist_email'),
        });
      }
      if (user.phone === data.phone) {
        throw new CustomError({
          ...getErrorByName('USER:create:exist_phone'),
        });
      }
    }
    return Repository.create(data);
  } catch (error) {
    if (!error.code) {
      throw new CustomError({
        ...getErrorByName('USER:internal'),
        error,
      });
    }
    throw error;
  }
};

const getDataBasicUser = async (id) => {
  try {
    const user = await Repository.findById(id);
    return user;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('USER:not_found'),
      error,
    });
  }
};

module.exports = {
  signIn,
  register,
  getDataBasicUser,
};
