const getPosts = require('./getPosts');
const getProjects = require('./getProjects');
const recentProducts = require('./recentProducts');
const searchProducts = require('./searchProducts');
const productsByCategory = require('./productsByCategory');
const usersByProfession = require('./searchUserByProfession');

module.exports = {
  getPosts,
  getProjects,
  recentProducts,
  searchProducts,
  usersByProfession,
  productsByCategory,
};
