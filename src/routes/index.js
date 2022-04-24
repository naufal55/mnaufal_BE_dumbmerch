const express = require("express");


//instantiate express module here
const router = express.Router()

// Controller 
const { userReg, getUsers, getUser, updateUser, deleteUser } = require('../controllers/user')

  
// Route db
router.post("/register", userReg);
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

//route todo
// router.get("/todos", getTodos);
// router.get("/todo/:id", getTodo);
// router.post("/todo", addTodo);
// router.patch("/todo/:id", updateTodo);
// router.delete("/todo/:id", deleteTodo);

module.exports = router