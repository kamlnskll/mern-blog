import express from 'express'

const router = express.Router()

// We don't need to put the /user

router.get('/', (req, res) => {
  res.send({ data: 'Here is your data from posts route' })
})

router.post('/', (req, res) => {
  res.send({ data: 'Here is your data' })
})

router.put('/', (req, res) => {
  res.send({ data: 'Here is your data' })
})

router.delete('/', (req, res) => {
  res.send({ data: 'Here is your data' })
})

export default router
