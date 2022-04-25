const express = require("express");


//instantiate express module here
const router = express.Router()

// Controller 
const { userReg,getProduct,addProduct,getProducts,updateProduct,deleteProduct,addTransaction,getTransactions } = require('../controllers')

// Route reg
router.post("/register", userReg);
// Route product
router.post("/product", addProduct);
router.get("/products",getProducts)
router.get("/product/:id",getProduct)
router.patch("/product/:id",updateProduct)
router.delete("/product/:id",deleteProduct)
// Route transaction
router.post("/transaction", addTransaction);
router.get("/transactions",getTransactions)
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

module.exports = router