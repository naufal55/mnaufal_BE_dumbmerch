const { userReg } = require("./user");
const { getTransactions, addTransaction } = require("./transaction");
const {
  getProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("./product");

module.exports = {
  userReg,
  addProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addTransaction,
  getTransactions,
};
