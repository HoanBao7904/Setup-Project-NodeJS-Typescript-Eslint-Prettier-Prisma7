import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '~/generated/prisma/client'
import { config } from 'dotenv'
console.log('DATABASE_URL =', process.env.DATABASE_URL)
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
})

const prisma = new PrismaClient({
  adapter
})

export default prisma
