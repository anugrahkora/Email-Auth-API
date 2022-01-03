const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/', (req, res) => {
    const user = new User({
        uid: 'qwerty',
        name: 'testqwert',
        email: 'testqwert5@gmail.com',
        password: '123456'
    });

    user.save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));

});

module.exports = router;