const {
  getProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("./product");
const { userReg } = require("./user");

module.exports = {
  getProduct,
  getProducts,
  userReg,
  addProduct,
  updateProduct,
  deleteProduct,
};
