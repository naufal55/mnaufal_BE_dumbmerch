// exports.getUsers = async (req, res) => {
//     try {

//         const users = await user.findAll({ // select *
//             attributes: {
//                 exclude: ['password','createdAt', 'updatedAt'] // pengecualian 3 item tdk dtampilkan
//             }
//         })

//         res.send({
//             status: 'success',
//             data: {
//                 users
//             }
//         })
//     } catch (error) {
//         console.log(error)
//         res.send({
//             status: 'failed',
//             message: 'Server Error'
//         })
//     }
// }

// exports.getUser = async (req, res) => {
//     try {
//         const { id } = req.params

//         const data = await user.findAll({ // select ... where ...
//             where: {
//                 id
//             },
//             attributes: {
//                 exclude: ['password', 'createdAt', 'updatedAt'] // pengecualian 3 item tdk dtampilkan
//             }
//         })

//         res.send({
//             status: 'success',
//             data: {
//                 user: data
//             }
//         })
//     } catch (error) {
//         console.log(error)
//         res.send({
//             status: 'failed',
//             message: 'Server Error'
//         })
//     }
// }

// exports.updateUser = async (req, res) => {
//     try {
//         const { id } = req.params

//         await user.update(req.body, { //update set values where
//             where: {
//                 id
//             }
//         })

//         res.send({
//             status: 'success',
//             message: `Update user id: ${id} finished`,
//             data: req.body
//         })
//     } catch (error) {
//         console.log(error)
//         res.send({
//             status: 'failed',
//             message: 'Server Error'
//         })
//     }
// }

// exports.deleteUser = async (req, res) => {
//     // code here
//     try {
//         const { id } = req.params

//         await user.destroy({ // delete where id
//             where: {id}
//         })

//         res.send({
//             status: 'success',
//             message: `Delete user id: ${id} success`,
//         })
        
//     } catch (error) {
//         console.log(error)
//         res.send({
//             status: 'failed',
//             message: 'Server Error'
//         })
//     }
// }