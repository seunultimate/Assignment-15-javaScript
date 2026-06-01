import {body} from "express-validator";

const allowedCategories = [
    'Technology',
    'lifestyle',
    'Business',
    'Education',
    'Sports',
];

export const blogValidation = [
    body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({min: 5, max: 100})
    .withMessage('Title must be 5-100 characters'),

    body('content')
    .notEmpty()
    .withMessage('Content is required')
    .isLength({min: 20})
    .withMessage('Content must be at least 20 characters'),

    body('tags')
    .isArray({min: 5})
    .withMessage('Tags must be an array with at least 5 items'),

    body('category')
    .isIn(allowedCategories)
    .withMessage("Invalid category"),
];