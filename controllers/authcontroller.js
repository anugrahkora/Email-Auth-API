const User = require('../models/userModel');


exports.signup = async(req, res) => {
    // console.log(req.body);
    const { uid, name, email, password } = req.body;

    try {
        const user = await User.create({ uid, name, email, password });
        res.status(201).json(user);
    } catch (err) {

        const error = handleErrors(err);
        res.status(400).json(error);
    }
}


exports.signin = (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    try {
        User.findOne({ email }).exec((err, user) => {
            if (user) {
                if (user.password != password) {
                    return res.status(400).json({
                        message: 'Incorrect password'
                    });
                } else if (err) {
                    return res.json({
                        message: err
                    })

                } else return resres.status(201).json({
                    message: 'Sign in Success'
                });
            } else {
                return res.status(400).json({
                    message: 'User does\'t exist',
                });
            }
        });
    } catch (err) {
        res.status(400).json({
            message: err,
        });
    }
}

const handleErrors = (err) => {

    let error = {};
    if (err.code = 11000) {
        error.email = 'Email ID is already registered';
        return error;
    }

    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            error[properties.path] = properties.message

        });
    }
    return error;
}