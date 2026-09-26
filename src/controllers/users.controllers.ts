import { Request, Response } from 'express'
import { getUsers } from '~/services/users.services'
// import { getUsers } from '../services/users.services'

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers()

    return res.status(200).json({
      message: 'Get users successfully',
      data: users
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}
