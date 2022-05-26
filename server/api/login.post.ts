import * as jose from 'jose'

export default defineEventHandler(async event => {
  const { username, password } = await useBody(event)

  if (username !== 'vuejsglobal' || password !== 'ilovenuxt') {
    throw createError({
      statusCode: 401,
      message: 'Invalid username or password',
    })
  }

  const privateKey = await jose.importPKCS8(
    useRuntimeConfig().privateKey,
    'ES256'
  )
  const jwt = await new jose.SignJWT({ 'urn:n3dium:claim': true })
    .setProtectedHeader({ alg: 'ES256' })
    .setIssuedAt()
    .setIssuer('urn:n3dium:issuer')
    .setAudience('urn:n3dium:audience')
    .setExpirationTime('2h')
    .sign(privateKey)

  setCookie(event, 'token', jwt)
  await sendRedirect(event, '/')
})
