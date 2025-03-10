import express from "express"
import { get_policies_data } from "../services/policy-service"

export const policy_router = express.Router()

policy_router.get("/policies",get_policies_data)

policy_router.use("/", (req, res) => {
    res.status(404).json({
        message:"No API Found"
    })
})