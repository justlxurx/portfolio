import { NextResponse } from 'next/server'
import { format } from 'date-fns'
import { ValidationError } from 'yup'

import clientPromise from '@/lib/mongodb'
import { teamMemberFormSchema } from '@/schemas/teamMember'

import { sendMail } from '../mailer'

export async function POST(request: Request) {
  try {
    try {
      const res = await request.json()

      const date = format(new Date(), 'dd.MM.yyyy HH:mm')

      const data = teamMemberFormSchema.validateSync(
        { ...res, date },
        {
          abortEarly: false,
          stripUnknown: true,
        },
      )

      const client = await clientPromise
      const db = client.db('team')

      await db.collection('data').insertOne(data)

      try {
        await sendMail({
          theme: 'Стать частью команды',
          textHtml: `
              <div>
                <h3>Стать частью команды</h3>
                <p>Телефон: ${res.phone}</p>
                <p>ФИО: ${res.username}</p>
                <p>Краткая информация: ${res.about}</p>
                <p>Дата отправки: ${date}</p>
                <a href='https://${res.url}' target='_blank'>Резюме: ${res.url}</a>
              </div>`,
        })
      } catch (error) {
        return NextResponse.json(
          {
            error: "Произошла ошибка в '/api/team-member': " + error,
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
        error: "Произошла ошибка в '/api/team-member': " + error,
      },
      {
        status: 400,
      },
    )
  }
}
