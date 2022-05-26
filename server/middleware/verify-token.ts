export default defineEventHandler(async event => {
  if (!event.req.url?.startsWith('/api/_content/query')) return

  const { token } = useCookies(event)

  if (token !== 'secret-token') {
    throw createError({
      statusCode: 403,
      message: 'Invalid token',
    })
  }
})
