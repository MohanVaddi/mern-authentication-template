import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default (req: any, res: Response, next: NextFunction) => {
    // * Get token from header.
    const token = req.header('x-auth-token');

    // * Check if exists
    if (!token) {
        return res
            .status(401)
            .json({ errors: [{ msg: 'No token, authorization denied.' }] });
    }

    //* Verify Token
    try {
        const decoded: any = jwt.verify(
            token,
            process.env['JWT_SECRET'] as string
        );
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({
            errors: [{ msg: 'Invalid token, authorization denied.' }],
        });
    }
};
