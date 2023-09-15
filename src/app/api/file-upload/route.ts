import { NextRequest, NextResponse } from 'next/server'
import { access, constants, writeFile } from 'fs/promises'
import { nanoid } from 'nanoid'
import { extname, join } from 'path'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false, error: 'No file provided' })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // Определите путь к директории "public"
  const publicDir = join(process.cwd(), 'public/cv')

  // Генерируйте уникальный идентификатор файла с использованием nanoid
  const fileId = nanoid()

  // Получите расширение файла из его имени
  const fileExtension = extname(file.name)

  // Создайте имя файла с уникальным идентификатором и расширением
  const fileName = `${fileId}${fileExtension}`

  // Создайте путь к файлу внутри директории "public"
  const filePath = join(publicDir, fileName)

  // Проверьте существование директории "public"
  try {
    await access(publicDir, constants.W_OK)
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Public directory does not exist or is not writable',
    })
  }

  // Запишите файл в директорию "public"
  await writeFile(filePath, buffer)
  console.log(`File saved at: ${filePath}`)

  // Получите текущий хост и протокол из запроса
  const host = request.headers.get('host')
  const protocol = request.headers.get('x-forwarded-proto') || 'http' // Используйте 'http' по умолчанию, если протокол не указан

  // Сформируйте полный URL к сохраненному файлу
  const fileURL = `${host}/cv/${fileName}`

  // Вернуть полный URL к сохраненному файлу
  return NextResponse.json(
    { url: fileURL },
    {
      status: 201,
    },
  )
}
