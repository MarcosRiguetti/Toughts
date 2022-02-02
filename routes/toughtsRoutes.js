const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, ToughtController.createTought)
router.get('/edit/:id', checkAuth, ToughtController.updateTought)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.get('/', ToughtController.showToughts)

router.post('/add', checkAuth, ToughtController.createToughtSave)
router.post('/edit', checkAuth, ToughtController.updateToughtSave)
router.post('/remove', checkAuth, ToughtController.removeTought)

module.exports = router