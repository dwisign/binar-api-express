const express = require('express')
const userRouter = require('./routes/users')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Halo Kamu Bjo Ya?")
})

app.use('/users', userRouter)

const PORT = 1001

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})