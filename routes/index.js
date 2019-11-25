
const express =     require('express')
const usersCtrl =   require('../controllers')
const verifyToken = require('../auth').verifyToken

const usersRouter = new express.Router()


usersRouter.route('/allSports').get(usersCtrl.sportsGames)

usersRouter.route('/').post(usersCtrl.create)

usersRouter.route('/allProducts').get(usersCtrl.allProducts)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.use(verifyToken)

usersRouter.route('/').get(usersCtrl.index)


usersRouter.route('/:id').get(usersCtrl.show)

usersRouter.route('/:id').patch(usersCtrl.update)

usersRouter.route('/:id').delete(usersCtrl.destroy)

module.exports = usersRouter
