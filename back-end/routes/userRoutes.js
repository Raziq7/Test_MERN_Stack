import express from 'express'
import { userLoginController, userRegisterController } from '../controller/userController.js'

import { auth } from '../middleware/auth.js'

const router = express.Router()

router.route('/login').post(userLoginController)
router.route('/register').post(userRegisterController)

export default router;
