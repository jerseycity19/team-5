const { Router } = require('express')

const twilioWebhookRouter = require('./twilioWebhook')
const storyRouter = require('./storyRouter')

const router = Router()

router.use(twilioWebhookRouter)
router.use(storyRouter)

module.exports = router
