import nookies, { destroyCookie } from 'nookies'

const decode = (cookieValue: string) => JSON.parse(decodeURIComponent(decodeURIComponent(cookieValue)))

const encode = (cookieValue: string) => encodeURIComponent(encodeURIComponent(JSON.stringify(cookieValue)))

function parseCookies(...[ctx, options]: Parameters<typeof nookies.get>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return nookies.get(ctx, { ...options, decode }) as Record<string, any>
}

function setCookie(...[ctx, name, value, options]: Parameters<typeof nookies.set>) {
  return nookies.set(ctx, name, value, {
    ...options,
    encode,
  }) as Record<string, unknown>
}

const cookielib = {
  parseCookies,
  setCookie,
  destroyCookie,
}

export default cookielib
