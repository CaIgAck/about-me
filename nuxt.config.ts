// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
    devtools: { enabled: process.env.NODE_ENV === 'development' },
    css: [
      '~/assets/styles/main.scss'
    ],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'ru'
            }
        }
    }
})
