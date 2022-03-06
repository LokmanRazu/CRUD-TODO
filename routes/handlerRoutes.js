const router = require('express').Router()
const {
    todoGetAllController,
    todoGetSingleController,
    todoPostController,
    todoPostAllController,
    todoPutController,
    todoDeleteController
} = require('../controllers/handlerController')

router.get('/',todoGetAllController)
router.get('/:id',todoGetSingleController)
router.post('/',todoPostController)
router.post('/all',todoPostAllController)
router.put('/:id',todoPutController)
router.delete('/:id',todoDeleteController)

module.exports = router;