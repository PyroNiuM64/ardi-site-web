import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: "lapochebasque@gmail.com",
      subject: `[La Poche Basque] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #345F38; padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Nouveau message — La Poche Basque</h2>
          </div>
          <div style="background: #F5EDE0; padding: 24px; border-radius: 0 0 12px 12px; border: 2px solid #C8531C;">
            <p style="margin: 0 0 12px 0;"><strong style="color: #345F38;">Nom :</strong> ${name}</p>
            <p style="margin: 0 0 12px 0;"><strong style="color: #345F38;">Email :</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0 0 12px 0;"><strong style="color: #345F38;">Sujet :</strong> ${subject}</p>
            <hr style="border: 1px solid #C8531C; margin: 16px 0;" />
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          <p style="color: #aaa; font-size: 12px; margin-top: 16px; text-align: center;">
            Envoyé depuis le formulaire de contact lapochebasque.fr
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Erreur envoi mail :", err)
    return NextResponse.json({ error: "Erreur lors de l'envoi. Réessayez plus tard." }, { status: 500 })
  }
}
