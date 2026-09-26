import prisma from './database.services'

export const getUsers = async () => {
  // return await await prisma.users.findMany({
  //   take: 10,
  //   orderBy: {
  //     id: 'asc'
  //   }
  // })
  return await prisma.users.findUnique({
    where: {
      id: 2
    }
  })
}
