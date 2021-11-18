const {
  compareHash,
  generateHash,
} = require('../../../infrastructure/helpers/hash.helper.');
const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/user.repository');
const { usersByProfession } = require('../../aggregations/aggregates');
const { generateToken } = require('../../../infrastructure/helpers/jwt');

const signIn = async ({ email, password }) => {
  try {
    const user = await Repository.findOne({ email });
    if (!user || !compareHash(password, user.password)) {
      throw new CustomError({
        ...getErrorByName('USER:credentials'),
      });
    }

    return generateToken({
      id: user.id,
      role: user.type,
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
          error: new Error('Un usuario ya existe con este correo'),
        });
      }
      if (user.phone === data.phone) {
        throw new CustomError({
          ...getErrorByName('USER:create:exist_phone'),
          error: new Error('Un usuario ya existe con este telefono'),
        });
      }
    }
    return Repository.create({
      ...data,
      password: generateHash(data.password),
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

const searchUserByProfession = async (search) => {
  try {
    const users = await usersByProfession(search);
    return users;
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
  searchUserByProfession,
};
