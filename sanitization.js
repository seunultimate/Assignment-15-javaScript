import { body } from 'express-validator';

export const sanitizeUserInput = [
    body('name')
        .trim()
        .escape(),

    body('email')
        .normalizeEmail()
        .trim()
        .escape(),

    body('password')
        .trim()
        .escape(),

    body('bio')
        .trim()
        .escape(),
];
