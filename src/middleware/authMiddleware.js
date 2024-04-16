const jwt = require('jsonwebtoken')
require('dotenv').config()

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({
            message: 'No Token Provided'
        })
    }

    try {
        const validToken = jwt.verify(token, process.env.TOP_SECRET)
        req.userData = validToken
        next()
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid Token'
        })
    }
}

module.exports = authMiddleware