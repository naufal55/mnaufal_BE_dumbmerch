const { rating, user, transaction, product } = require("../../models");

exports.getTransactions = async (req, res) => {
  try {
    const data = await transaction.findAll({
      include: [
        {
          model: product,
          as: "product",
          attributes: {
            exclude: ["createdAt", "updatedAt", "idUser", "qty", "price"],
          },
        },
        {
          model: user,
          as: "buyer",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password", "status"],
          },
        },
        {
          model: user,
          as: "seller",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password", "status"],
          },
        },
        {
          model:rating,
          as:"rating",
          attributes:{
            exclude:["createdAt", "updatedAt"]
          }
        }
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "idBuyer", "idSeller", "idProduct","status"],
      },
    });

    res.status(201).send({
      status: "success",
      transactions: data,
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.addTransaction = async (req, res) => {
  try {
    const data = await transaction.create(req.body);
    const { id, idProduct, idBuyer, idSeller, price } = data;

    await rating.create({
      idTransaction: id,
      totalRate:0,
      comment:''
    });

    res.status(201).send({
      status: "success",
      data: {
        transaction: { id, idProduct, idBuyer, idSeller, price },
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
