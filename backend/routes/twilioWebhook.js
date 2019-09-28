const { Router } = require('express')

const router = Router()

router.post('/', (req, res) => {
  console.log(req.body)
  return res.send({ 'success': true })
})

module.exports = router
