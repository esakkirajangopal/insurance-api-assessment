import express from "express"
import { policy_router } from "./routes/policy-route"

const app = express()

app.use("/api", policy_router)

app.use("/", (req, res) => {
    res.status(404).json({
        message:"No API Found"
    })
})

app.listen(7000, () => console.log("listening on 7000!"))