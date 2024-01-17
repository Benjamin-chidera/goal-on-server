require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
const cors = require("cors")
const goalRouter = require("./router/goalRouter")



app.use(express.json()) // this is the middleware to get wat a user types
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({message: "welcome to goals api"})
})

app.use("/api/goals",goalRouter)

app.use((req, res) => { // this is the error route
    res.status(404).json({message: "Resource not found"})
})


const startServer = async(req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {dbName: "goalServer"})
        app.listen(PORT, () => {
            console.log(`server is listening to port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer()