
// require express here
const express = require('express');
const router = express.Router();
const validator = require("../middleware/validator_mid")
//routes For dispute

const controller = require('../controller/controller')
const user_auth = require('../middleware/authentication')
// This APui for login
router.post('/login', controller.login_user)
// This API for category
router.post('/category', validator.validate_add_category, user_auth.authentication, controller.create_category)
router.get('/categories', user_auth.authentication, controller.get_category_data)
router.put('/category/:categoryId', validator.validate_update_category, user_auth.authentication, controller.update_category)
router.delete('/category/:categoryId', validator.validate_delete_category, user_auth.authentication, controller.delete_category)

// This API for services
router.post('/category/:categoryId/service', validator.validate_add_sevices, user_auth.authentication, controller.create_services)
router.get('/category/:categoryId/services', user_auth.authentication, controller.get_services)
router.put('/category/:categoryId/service/:serviceId', validator.validate_update_sevices, user_auth.authentication, controller.update_services)
router.delete('/category/:categoryId/service/:serviceId', validator.delete_service, user_auth.authentication, controller.delete_services)

module.exports = router