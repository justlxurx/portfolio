import { NextResponse } from 'next/server'
import { ValidationError } from 'yup'

import clientPromise from '@/lib/mongodb'
import { contactUsFormSchema } from '@/schemas/contactUs'

export async function POST(request: Request) {
  try {
    try {
      const res = await request.json()

      const data = contactUsFormSchema.validateSync(res, {
        abortEarly: false,
        stripUnknown: true,
      })
      return NextResponse.json('Contact Us')
    } catch (error) {}
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

// export async function POST(request: Request) {
//   try {
//     try {
//       const res = await request.json()

//       const data = addPostSchema.validateSync(res, {
//         abortEarly: false,
//         stripUnknown: true,
//       })

//       const client = await clientPromise
//       const db = client.db('news')

//       await db.collection('posts').insertOne(data)

//       return NextResponse.json(
//         { message: 'Публикация успешно добавлена' },
//         {
//           status: 201,
//         },
//       )
//     } catch (err) {
//       const error = err as ValidationError

//       return NextResponse.json(
//         {
//           errors: error.errors,
//         },
//         {
//           status: 422,
//         },
//       )
//     }
//   } catch (error) {
//     return NextResponse.json(
//       {
//         error: "Произошла ошибка в '/api/news': " + error,
//       },
//       {
//         status: 400,
//       },
//     )
//   }
// }
