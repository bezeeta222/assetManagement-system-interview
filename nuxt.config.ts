import { resolve } from "node:path"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@hebilicious/authjs-nuxt",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
    "@nuxt/ui",
  ],
  runtimeConfig: {
    authJs: {
      secret: process.env.NEXTAUTH_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    public: {
      authJs: {
        baseUrl: process.env.NEXTAUTH_URL,
        verifyClientOnEveryRequest: false,
      },
    },
  },
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie"),
  },
  ui: {
    icons: ["heroicons", "mdi"],
    safelistColors: ["indigo", "green", "red", "orange"],
  },
  css: ["~/assets/css/font.css", "~/assets/css/tailwind.css"],
  fontMetrics: {
    fonts: ["DM Sans"],
  },
  googleFonts: {
    display: "swap",
    download: true,
    families: {
      "DM+Sans": [400, 500, 600, 700],
    },
  },
})
