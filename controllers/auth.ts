import { Request, Response } from "express"
import sendMailer from "../helpers/mailer"
import userModel from "../models/user"
import jwt from "jsonwebtoken"

export const login = async (req: Request, res: Response) => {
    try {
      const { email } = req.params;
      const { code } = req.body;
      
      const user = await userModel.findOne({ email, login_code: code });
      
      if (!user) {
        return res.status(400).json({ ok: false, message: "Código incorrecto" });
      }

      
      const token = jwt.sign({
        sub: user._id, 
        firstname:user.firstname, 
        lastname: user.lastname,
        roles: user.roles
      },
        process.env.JWT_SECRET_KEY as string);

      res.cookie('jwt', token)
      res.status(200).json({ ok: true, message: "¡El inicio de sesión es correcto!" });
    } catch (error) {
      console.error('Error en la autenticación:', error);
      res.status(500).json({ ok: false, message: "Error en el servidor durante la autenticación" });
    }
  };
  


 export const loginCode = async (req: Request, res: Response) => {
    const { email } = req.params
    //consult in the BD 
    const user = await userModel.findOne({ email: email })
    //verify if user exists
    if (!user) {
        return res.status(404).json({ ok: false, message: "User Not Found" })
    }
    else {
        //create a  random number
        let code = ""

        for (let index = 0; index < 6; index++) {
            const random = Math.floor(Math.random() * 9)
            code += random.toString()
        }

        //saving the code in the DATABASE
        user.login_code = code
        await user.save()

        //sending the estrcutacion to sendmailer
sendMailer({
    to: email,
     subject:"GENERACION DE CODIGO: "+ code,
      html:"<div>recuerda no compartir el codigo con nadie, <b>Corre riesgo tu seguridad</b></div>: "+ code, 
      text: "generando codigo"})
res.status(200).json({ ok: true, message: "Login code sending to email" })
   
  }
}
