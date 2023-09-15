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

  const publicDir = join(process.cwd(), 'public/cv')

  const fileId = nanoid()

  const fileExtension = extname(file.name)

  const fileName = `${fileId}${fileExtension}`

  const filePath = join(publicDir, fileName)

  try {
    await access(publicDir, constants.W_OK)
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Public directory does not exist or is not writable',
    })
  }

  await writeFile(filePath, buffer)
  console.log(`File saved at: ${filePath}`)

  const host = request.headers.get('host')
  const protocol = request.headers.get('x-forwarded-proto') || 'http' // Используйте 'http' по умолчанию, если протокол не указан

  const fileURL = `${host}/cv/${fileName}`

  return NextResponse.json(
    { url: fileURL },
    {
      status: 201,
    },
  )
}
