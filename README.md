# Nuxt 3 + Medium (n3dium)

This is a tiny, incomplete example for a paywalled content site built in [Nuxt 3](https://v3.nuxtjs.org/) for a live-coding session at [Vue.js Global Summit 2022](https://vue.geekle.us/).

- [✨ &nbsp;Live Demo](https://n3dium.netlify.app/login)

## Features

- Based on [Nuxt 3](https://v3.nuxtjs.org/)
- [Nuxt Content v2](https://content.nuxtjs.org/)
- Server API routes using [Nuxt Nitro](https://v3.nuxtjs.org/concepts/server-engine)
- JWT authentication using [jose](https://github.com/panva/jose/)
- Light & dark mode using [pico.css](https://picocss.com/docs/)

## Try it out

### Setup

```bash
# install dependencies
pnpm install # or yarn

# serve in dev mode, with hot reload at localhost:3000
pnpm dev

# build for production (universal)
pnpm build

# preview in production mode
pnpm start
```

### Deployment

You should be able to deploy this repository with zero or minimal configuration.

- [Azure](https://v3.nuxtjs.org/docs/deployment/azure)
- [Cloudflare Workers](https://v3.nuxtjs.org/docs/deployment/cloudflare)
- [Firebase Hosting](https://v3.nuxtjs.org/docs/deployment/firebase)
- [Netlify](https://v3.nuxtjs.org/docs/deployment/netlify)
- [Vercel](https://v3.nuxtjs.org/docs/deployment/vercel)
- ... and more

## License

MIT
