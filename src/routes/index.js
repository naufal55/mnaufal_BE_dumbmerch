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

// Route reg
router.post("/register", userReg);
router.post("/login", userLog);
// Route product
router.post("/product", addProduct);
router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
// Route transaction
router.post("/transaction", addTransaction);
router.get("/transactions", getTransactions);
// Route category
router.post("/category", addCategory);
router.get("/categories", getCategories);
router.get("/category/:id", getCategory);
router.patch("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

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
