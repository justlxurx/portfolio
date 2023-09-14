import { NextResponse } from 'next/server'
import format from 'date-fns/format'
import { ValidationError } from 'yup'

import clientPromise from '@/lib/mongodb'
import { educationFormSchema } from '@/schemas/education'

import { sendMail } from '../mailer'

export async function POST(request: Request) {
  try {
    try {
      const res = await request.json()

      const date = format(new Date(), 'dd.MM.yyyy HH:mm')

      const data = educationFormSchema.validateSync(
        { ...res, date },
        {
          abortEarly: false,
          stripUnknown: true,
        },
      )

      const client = await clientPromise
      const db = client.db('education')

      await db.collection('data').insertOne(data)

      try {
        await sendMail({
          email: 'justlxurx0@gmail.com',
          theme: 'Образовательная программа',
          textHtml: `
            <div>
              <h3>Образовательная программа</h3>
              <p>Телефон: ${res.phone}</p>
              <p>ФИО: ${res.username}</p>
              <p>Дата отправки: ${date}</p>
            </div>`,
        })
      } catch (error) {
        return NextResponse.json(
          {
            error: "Произошла ошибка в '/api/education': " + error,
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
        error: "Произошла ошибка в '/api/education': " + error,
      },
      {
        status: 400,
      },
    )
  }
}
