'use server'

import { CookieStorage } from 'constants/storage'
import { cookies } from 'next/headers'

// eslint-disable-next-line @typescript-eslint/require-await
export async function toggle() {
  const mode = cookies().get(CookieStorage.DARK)

  if (mode) {
    cookies().delete(CookieStorage.DARK)
  } else {
    cookies().set(CookieStorage.DARK, 'true')
  }
}
