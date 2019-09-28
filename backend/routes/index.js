const { Router } = require('express')

const twilioWebhookRouter = require('./twilioWebhook')
const storyRouter = require('./story')

const router = Router()

router.use(twilioWebhookRouter)
router.use(storyRouter)

module.exports = router
