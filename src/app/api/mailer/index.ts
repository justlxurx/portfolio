import nodemailer from 'nodemailer'
import { AttachmentLike } from 'nodemailer/lib/mailer'
import { Readable } from 'nodemailer/lib/xoauth2'

interface IsendMailProps {
  email?: string
  theme?: string
  text?: string
  textHtml?: string | Buffer | Readable | AttachmentLike
}

export async function sendMail({
  email = 'test@qazdev.kz',
  theme,
  text,
  textHtml,
}: IsendMailProps) {
  let transporter = nodemailer.createTransport({
    //@ts-ignore
    pool: true,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  let message = {
    from: process.env.SMTP_EMAIL,
    to: email,
    subject: theme,
    text: text,
    html: textHtml,
  }

  let info = await transporter.sendMail(message)

  if (info.response.substr(0, 3) == '250') {
    return `Письмо успешно отправлено на адрес ${email}!`
  }

  return `Ошибка отправки письма на адрес ${email}!`
}
