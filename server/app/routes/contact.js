const express = require('express')
const router = express.Router()
const trimRequest = require('trim-request')
const controller = require('../controllers/contact')

/*
 * Create new item route
 */
router.post(
  '/',
  trimRequest.all,
  controller.contact
)
module.exports = router
