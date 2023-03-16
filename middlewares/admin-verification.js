import jwt from 'jsonwebtoken';

export const verifyAdmin = (req, res, next) => {
    const token = req.header('token');

    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
        if (error) {
            return res.status(401).json({
                msg: 'Invalid token'
            })
        }

        // If the user role is not admin, can't access to some features
        if (decodedToken.userData.role !== 'admin') {
            return res.status(403).json({
                msg: 'Unauthorized to perform this action'
            })
        }
        next();
    })
}