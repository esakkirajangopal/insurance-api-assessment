import { Request , Response } from "express";

import  policy_data from "../data/policies.json"

import {Policy} from  "../models/policy"

const get_policies = () =>{
    return policy_data
}

export const get_policies_data = (req : Request, res:Response) => {

    let result : Policy[] = get_policies()

    const search_text = req.query.search?.toString() ?? ""
    const min_premium = req.query.min_premium ?? 0
    const max_premium = req.query.max_premium ?? 0
    const policy_type = req.query.policy_type?.toString() ?? ""
    const min_coverage_amt = req.query.min_coverage_amt ?? 0


    const sort_key = req.query.sort_key?.toString() ?? "id"
    const sort_order = req.query.sort_order?.toString() ?? "asc"


    if(search_text) result = result.filter((_policy:Policy) =>  _policy.name.toLowerCase().includes(search_text.toLowerCase()))

    if(policy_type) result = result.filter((_policy:Policy) =>  _policy.type.toLowerCase() == policy_type.toLowerCase())

    if(min_coverage_amt) result = result.filter((_policy:Policy) =>  _policy.coverage >= Number(min_coverage_amt))

    if(min_premium) result = result.filter((_policy:Policy) =>  _policy.premium >= Number(min_premium))

    if(max_premium) result = result.filter((_policy:Policy) =>  _policy.premium >= Number(max_premium))


    if(sort_order.toLowerCase() == "asc"){
        result = result.sort((a,b) => sort_key.toLowerCase() == "premium" ? a.premium - b.premium : a.id - b.id)
    } 
    else {
        result = result.sort((a,b) => sort_key.toLowerCase() == "premium" ? b.premium - a.premium : b.id - a.id)
    }

    res.status(200).json({
        data: result
    })
}