import express from 'express'
import 'dotenv/config'
import userRoutes from './src/routers/user.route.js'

const port = process.env.PORT || 3001

const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/user', userRoutes)

app.get("", (request, response) => {
    response.send("todo ok")
})

app.listen(port, () => {
    console.log("http://localhost:" + port)
})
