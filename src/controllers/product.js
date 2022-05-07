const { product, user } = require("../../models");

exports.getProducts = async (req, res) => {
  try {
    const data = await product.findAll({
      // image: process.env.FILE_PATH + image,
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(201).send({
      status: "success",
      products: data,
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const data = req.body;

    let newProduct = await product.create({
      ...data,
      image: req.file.filename,
      idUser: req.user.id,
    });
    
    newProduct = JSON.parse(JSON.stringify(newProduct));

    newProduct = {
      ...newProduct,
      image: process.env.FILE_PATH + newProduct.image,
    };
    const {id, image,title,desc,price,qty,idUser} = newProduct;
    
    res.status(201).send({
      status: "success",
      data: {
        product : {id,image,title,desc,price,qty,idUser},
      },
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      status: "failed",
      message: "Server Error",
    });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await product.findAll({
      // select ... where ...
      where: {
        id,
      },
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"], // pengecualian 3 item tdk dtampilkan
      },
    });

    res.status(201).send({
      status: "success",
      data: {
        product: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      status: "failed",
      message: "Server Error",
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await product.update(req.body, {
      //update set values where
      where: {
        id,
      },
    });
    const data = await product.findAll({
      // select ... where ...
      where: {
        id,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "idUser"], // pengecualian 3 item tdk dtampilkan
      },
    });

    res.status(201).send({
      status: "success",
      data: {
        product: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      status: "failed",
      message: "Server Error",
    });
  }
};
exports.deleteProduct = async (req, res) => {
  // code here
  try {
    const { id } = req.params;

    await product.destroy({
      // delete where id
      where: { id },
    });

    res.status(201).send({
      status: "success",
      data: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      status: "failed",
      message: "Server Error",
    });
  }
};
