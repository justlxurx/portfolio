import { NextResponse } from 'next/server'
import format from 'date-fns/format'
import { ValidationError } from 'yup'

import clientPromise from '@/lib/mongodb'
import { contactUsFormSchema } from '@/schemas/contactUs'

import { sendMail } from '../mailer'

export async function POST(request: Request) {
  debugger
  try {
    try {
      const res = await request.json()

      const date = format(new Date(), 'dd.MM.yyyy HH:mm')

      const data = contactUsFormSchema.validateSync(
        { ...res, date },
        {
          abortEarly: false,
          stripUnknown: true,
        },
      )

      const client = await clientPromise
      const db = client.db('contact-us')

      await db.collection('data').insertOne(data)

      try {
        await sendMail({
          theme: 'Форма обратной связи',
          textHtml: `
            <div>
              <h3>Форма обратной связи</h3>
              <p>Телефон: ${res.phone}</p>
              <p>ФИО: ${res.username}</p>
              <p>Дата отправки: ${date}</p>
            </div>`,
        })
      } catch (error) {
        return NextResponse.json(
          {
            error: "Произошла ошибка в '/api/contact-us': " + error,
          },
          {
            status: 400,
          },
        )
      }

      return NextResponse.json(
        { message: 'Данные успешно отправлены' },
        {
          status: 201,
        },
      )
    } catch (err) {
      const error = err as ValidationError

      return NextResponse.json(
        {
          errors: error.errors,
        },
        {
          status: 422,
        },
      )
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Произошла ошибка в '/api/contact-us': " + error,
      },
      {
        status: 400,
      },
    )
  }
}
