const express = require("express");

//instantiate express module here
const router = express.Router();

// Controller
const {
  userReg,
  userLog,
  getProduct,
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addTransaction,
  getTransactions,
  addCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
} = require("../controllers");

//middleware auth
const {auth} = require('../middlewares/auth')

// Route reg
router.post("/register", userReg);
router.post("/login", userLog);
// Route product
router.post("/product",auth, addProduct);
router.get("/products",auth, getProducts);
router.get("/product/:id",auth, getProduct);
router.patch("/product/:id",auth, updateProduct);
router.delete("/product/:id",auth, deleteProduct);
// Route transaction
router.post("/transaction",auth, addTransaction);
router.get("/transactions", auth, getTransactions);
// Route category
router.post("/category",auth, addCategory);
router.get("/categories",auth, getCategories);
router.get("/category/:id",auth, getCategory);
router.patch("/category/:id",auth, updateCategory);
router.delete("/category/:id",auth, deleteCategory);

// router.get('/users', getUsers)
// router.get('/user/:id', getUser)
// router.patch('/user/:id', updateUser)
// router.delete('/user/:id', deleteUser)

//route todo
// router.get("/todos", getTodos);
// router.get("/todo/:id", getTodo);
// router.post("/todo", addTodo);
// router.patch("/todo/:id", updateTodo);
// router.delete("/todo/:id", deleteTodo);

module.exports = router;
