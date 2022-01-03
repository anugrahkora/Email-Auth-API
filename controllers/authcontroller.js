const User = require('../models/userModel');


exports.signup = (req, res) => {
    console.log(req.body);
    const { uid, name, email, password } = req.body;
    User.findOne({ email }).exec((err, user) => {
        if (user) {
            res.message = 'user already exists';
            return res.message();
        } else {
            let newUser = new User({ uid, name, email, password });
            newUser.save((err, success) => {

                if (err) {
                    return res.status(400).json({
                        error: 'Error while Signing up'
                    });
                } else {
                    return res.json({
                        message: 'Sign up Success'
                    });
                }
            });
        }
    });
}
exports.signin = (req, res) => {
    console.log(req.body);
    const { uid, name, email, password } = req.body;
    User.findOne({ email }).exec((err, user) => {
        if (user) {
            if (user.password != password) {
                return res.status(400).json({
                    error: 'Incorrect password'
                });
            } else if (err) {
                return res.json({
                    error: err
                })

            } else return res.json({
                message: 'Sign up Success'
            });
        } else {
            return res.status(400).json({
                error: 'User does\'t exist',
            });
        }
    });
}