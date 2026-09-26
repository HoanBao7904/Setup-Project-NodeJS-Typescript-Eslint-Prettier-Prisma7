// const name: string = 'Dư Thanh Được'
// console.log(name)
import express from 'express'
import usersRouter from './routes/users.routes'

const app = express()

app.use(express.json())

app.use('/api/users', usersRouter)

const PORT = 4000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
