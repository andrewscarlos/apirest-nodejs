const express = require('express')

const UserController = require('./Controllers/UserControllers')
const router = express.Router();

router.get('/users', UserController.index)
router.get('/users/:id', UserController.indexforid)
router.post('/users', UserController.store)
router.put('/users/:user_id', UserController.update)
router.delete('/users/:user_id', UserController.delete)


module.exports = router