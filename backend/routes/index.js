const { Router } = require('express')

const twilioWebhookRouter = require('./twilioWebhook')
const storyRouter = require('./storyRouter')

const router = Router()

router.use('twilio-webhook', twilioWebhookRouter)
router.use('/story', storyRouter)

module.exports = router
