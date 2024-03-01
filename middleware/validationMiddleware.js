<<<<<<< HEAD
const { body, validationResult } = require('express-validator');

// Validate genre name
exports.validateGenre = [
    body('name').isString().isLength({ min: 2, max: 30 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
=======
const { body, validationResult } = require('express-validator');

// Validate genre name
exports.validateGenre = [
    body('name').isString().isLength({ min: 2, max: 30 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
>>>>>>> 32c421696ef396f125a906c42046d77cbcddcc7e
