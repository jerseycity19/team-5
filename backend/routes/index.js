const { Router } = require('express')

const twilioWebhookRouter = require('./twilioWebhook')

const router = Router()

router.use(twilioWebhookRouter)

module.exports = router
