import nodemailer from 'nodemailer';

// Configuración del transporte para Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER, // Tu dirección de correo de Gmail
    pass: process.env.PWD, // Tu contraseña de Gmail o una contraseña de aplicación generada
  },
});

//creando el contenido del correo
interface EmailParams{
    to: string
    subject: string
    html: string
    text: string
}

const sendMailer = async({to, subject, html, text}:EmailParams) => {
    try {
        const data = await transporter.sendMail({
            from: 'company : <ivenscom08@gmail.com>',
            to,
            subject,
            html,
            text
        })
        console.log(data)
        return {ok:true, message: "Email enviado exitosamente"}
    } catch (error) {
        console.log({error})
        return {ok:false, message: "Hubo un problema con el envio", err: error}
    }
}

export default sendMailer

