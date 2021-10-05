/* eslint-disable no-underscore-dangle */
const axios = require('axios');

const { ESEARCH_URL } = require('../../application/config');

const createRegister = (index, type, id, body) => axios.put(`${ESEARCH_URL}/${index}/${type}/${id}`, body);
const searchRegister = (q) => axios.get(`${ESEARCH_URL}/_search?q=${q}`);
const deleteRegister = (index, type, id) => axios.delete(`${ESEARCH_URL}/${index}/${type}/${id}`);

const registerProduct = (id, body) => createRegister('app', 'product', id, body);
const searchProducts = async (q) => {
  let result = [];
  const { hits } = await searchRegister(q);
  if (hits.total.value > 0) {
    result = hits.hits.filter((hit) => hit._type === 'product');
  }
  return result;
};
const deleteProduct = (id) => deleteRegister('app', 'product', id);

module.exports = {
  registerProductInSeeker: registerProduct,
  searchProductsInSeeker: searchProducts,
  deleteProductInSeeker: deleteProduct,
};
