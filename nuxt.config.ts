import fs from 'node:fs'

export default defineNuxtConfig({
  /**
   * You can generate keys with:
   *
   * ```bash
   * openssl ecparam -genkey -name prime256v1 -noout -out key-pair.pem
   * openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in key-pair.pem -out private.key
   * openssl ec -in key-pair.pem -pubout -out public.key
   * ```
   */

  runtimeConfig: {
    privateKey: process.env.NUXT_PRIVATE_KEY || fs.readFileSync('./private.key', 'utf-8'),
    publicKey: process.env.NUXT_PUBLIC_KEY || fs.readFileSync('./public.key', 'utf-8'),
  },

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-10-19',
})