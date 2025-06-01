import { cookies } from 'next/headers'

export async function POST() {
  cookies().set({
    name: 'token',
    value: '',
    path: '/',
    maxAge: 0 // يمسح الكوكي
  })

  return Response.json({ message: 'تم تسجيل الخروج' })
}
