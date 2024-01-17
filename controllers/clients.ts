import { Request, Response } from "express"
import ClientModel from "../models/clients"


export const getAll=async(req: Request, res:Response)=>{
 try {
    const client = await ClientModel.find()   
    res.status(200).json({ok: true, data: client})
 } catch (error) {
    res.status(500).json({ok: false, message:"Server error"})
 }
}

export const getById=async(req: Request, res:Response)=>{
   const {id} = req.params 
   try {
      const client = await ClientModel.findById(id)   
      res.status(200).json({ok: true, data: client})
   } catch (error) {
      res.status(500).json({ok: false, message:"Server error"})
   }
  }

  export const update=async(req: Request, res:Response)=>{
   const {id} = req.params 
   try {
      const updateClient = await ClientModel.findByIdAndUpdate(id, req.body)   
      res.status(200).json({ok: true, data: updateClient})
   } catch (error) {
      res.status(500).json({ok: false, message:"Server error"})
   }
  }

export const create=async(req: Request, res:Response)=>{
   console.log({body: req.body})
     const createClient = await ClientModel.create(req.body)
    res.status(200).json({ok: true, data: createClient})
}