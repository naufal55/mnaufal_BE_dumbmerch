const {product, user} = require("../../models")

exports.getProducts = async (req, res) => {
  try {
    const data = await product.findAll({
      include:{
        model: user,
        as: "user",
        attributes:{
          exclude: ['password','createdAt','updatedAt']
        }
      },
      attributes:{
        exclude: ['createdAt','updatedAt']
      }
    })

    res.send({
      status:'success',
      products : data
    })
    
  } catch (error) {
    console.log(error)
    res.send({
        status: 'failed',
        message: 'Server Error'
    }) 
  }
};

exports.addProduct = async (req, res) => {
  try {

      const data = await product.create(req.body)
      const {id, image,title,desc,price,qty} = data;
      res.send({
          status: 'success',
          data:{
            product:{id, image,title,desc,price,qty},
        }
      })
  } catch (error) {
      console.log(error)
      res.send({
          status: 'failed',
          message: 'Server Error'
      })
  }
};
exports.getProduct = async (req, res) => {
    try {
        const { id } = req.params

        const data = await product.findAll({ // select ... where ...
            where: {
                id
            },
            include:{
                model: user,
                as: "user",
                attributes:{
                  exclude: ['password','createdAt','updatedAt']
                }
              },
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt'] // pengecualian 3 item tdk dtampilkan
            }
        })

        res.send({
            status: 'success',
            data: {
                product: data
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params

        await product.update(req.body, { //update set values where
            where: {
                id
            }
        })
        const data = await product.findAll({ // select ... where ...
            where: {
                id
            },
            // include:{
            //     model: user,
            //     as: "user",
            //     attributes:{
            //       exclude: ['password','createdAt','updatedAt']
            //     }
            //   },
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt','idUser'] // pengecualian 3 item tdk dtampilkan
            }
        })

        res.send({
            status: 'success',
            data: {
                product: data
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}
exports.deleteProduct = async (req, res) => {
    // code here
    try {
        const { id } = req.params

        const data = await product.destroy({ // delete where id
            where: {id}
        })

        res.send({
            status: 'success',
            data : {
                id : id
            }
        })
        
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}