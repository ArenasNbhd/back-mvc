const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.get('/get-allusers', authMiddleware, authController.getAllUsers)
router.delete('/:id', authMiddleware, authController.deleteUser)
router.put('/:id', authMiddleware, authController.updateUser)

module.exports = router

