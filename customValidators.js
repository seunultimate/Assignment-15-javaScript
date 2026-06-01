import User from './models/User.js';
import { body } from 'express-validator';

const checkEmailExists = async (email) => {
    const user = await User.findOne({ email });
    if (user) {
        throw new Error('Email already in use');
    } return true;
};

export const customValidators = [
    body('email')
        .isEmail()
        .withMessage('Invalid email')
        .custom(checkEmailExists),

        body('age')
        .isInt({ min: 18 })
        .withMessage('You must be at least 18 years old'),

        body('phone')
        .matches(/^(\+234|0)[789][01]\d{8}$/)
        .withMessage('Invalid Nigerian phone number'),

        body('username')
        .isLength({ min: 3 })
        .withMessage('Username must be at least 3 characters long')
];