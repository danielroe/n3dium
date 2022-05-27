import * as jose from 'jose'

export default defineEventHandler(async event => {
  if (!event.req.url?.startsWith('/api/_content/query')) return

  const { token } = useCookies(event)

  try {
    const publicKey = await jose.importSPKI(
      useRuntimeConfig().publicKey,
      'ES256'
    )
    const { payload } = await jose.jwtVerify(token, publicKey, {
      issuer: 'urn:n3dium:issuer',
      audience: 'urn:n3dium:audience',
    })

    if (payload['urn:n3dium:claim']) return
  } catch {}

  throw createError({
    statusCode: 403,
    message: 'Invalid token',
  })
})
