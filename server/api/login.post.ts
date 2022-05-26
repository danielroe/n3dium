export default defineEventHandler(async event => {
  const { username, password } = await useBody(event)
  if (username !== 'vuejsglobal' || password !== 'ilovenuxt') {
    throw createError({
      statusCode: 401,
      message: 'Invalid username or password',
    })
  }
  setCookie(event, 'token', 'secret-token')
  await sendRedirect(event, '/')
})
