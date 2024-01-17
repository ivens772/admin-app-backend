import { Request, Response } from "express"
import saleModel from "../models/sales"

export const getAll = async (req: any, res: Response) => {
 
 try {
  const sales =  await saleModel.find({user: req.user.sub})
  res.status(200).json({ok: true, data :sales})
  
  } catch (error){
    return res.status(500).json({ok: false, message: "Server Error"})
  }
 
   
  }
  
export const create = async (req: any, res: Response )=>{
 const { operation_date,total_amount} = req.body
 const createSale = await saleModel.create({
  operation_date,
  total_amount, 
  user: req.user.sub})
  res.status(200).json({ok: true, data: createSale})
}