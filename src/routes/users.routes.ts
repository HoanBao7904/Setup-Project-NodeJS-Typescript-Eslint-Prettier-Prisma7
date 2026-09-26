import { Router } from 'express'
import { getUsersController } from '../controllers/users.controllers'

const usersRouter = Router()

usersRouter.get('/', getUsersController)

export default usersRouter
