const {Router} = require('express')
const authController = require('../controller/authController')
const router = Router();

router.post('/auth/signup', authController.signUp);
router.post('/auth/signin', authController.signin);
router.get('/auth/signout', authController.signout);

module.exports = router