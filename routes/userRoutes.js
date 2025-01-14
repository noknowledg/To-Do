const express =  require('express');
const router = express.Router();
const userControllers = require('../controllers/userController');
const authMidddleware = require('../middleware/auth');


router.post('/register', userControllers.RegisterUser);
router.post('/login', userControllers.LoginUser);
router.get('/logout',authMidddleware,userControllers.logout);

module.exports = router;

