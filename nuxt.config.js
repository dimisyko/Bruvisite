export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: true
   },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Refonte du site de la ville de Bruxelles pour le travail de fin d'études." },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "msapplication-TileColor", content: "#2d89ef" },
      { name: "theme-color", content: "#ffffff" },
      { hid: 'og:url', property : "og:url", content : "https://bruvisite.netlify.app/" },
      { hid: 'og:type', property : "og:type", content : "website" },
      { hid: 'og:title', property : "og:title", content : "Bruvisite" },
      { hid: "og:description", property : "og:description", content : "Refonte du site de la ville de Bruxelles pour le travail de fin d'études." },
      { hid: 'og:image', property : "og:image", content : "https://bruvisite.netlify.app/card_meta.jpg" },
      { hid: "twitter:card", property : "twitter:card", content : "summary_large_image" },
      { hid: "twitter:site", property : "twitter:site", content : "@bruvisite" },
      { hid: "twitter:creator", property : "twitter:creator", content : "@dimi_syko" },
      { hid: "twitter:title", property : "twitter:title", content : "Bruvisite" },
      { hid: "twitter:description", property : "twitter:description", content : "Refonte du site de la ville de Bruxelles pour le travail de fin d'études." },
      { hid: "twitter:image", property : "twitter:image", content : "https://bruvisite.netlify.app/card_meta.jpg" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes:"180x180", href: "/favicon/apple-touch-icon.png" },
      { rel: 'icon', type:"image/png", sizes:"32x32", href: "/favicon/favicon-32x32.png" },
      { rel: 'icon', type:"image/png", sizes:"16x16", href: "/favicon/favicon-16x16.png" },
      { rel: 'manifest', href: "/favicon/site.webmanifest" },
      { rel: 'mask-icon', href: "/favicon/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ 
     '~/plugins/animscroll.client.js'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    'nuxt-gsap-module'
  ],
  pageTransition: {
    leave(el, done) {
      const gsap = this.$gsap.timeline()
      gsap.set('.txt-loader',{
        yPercent : "100",
      })
        gsap.to("body",{
          overflow : "auto"
        },"sameTime")
        gsap.to(".animClipPath, .clipPathLeave",{
          duration: 1.2,
          ease: "Power3.easeInOut",
          clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0 0%)",
        },"sameTime")
        gsap.to(".anim-span",{
          duration: 0.8,
          opacity : 0,
          y : "-100%",
        },"sameTime")
        gsap.to('.bg-transi',{
          transformOrigin : "bottom",
          scaleY : 1,
          duration : 1.5,
          ease : "Power4.easeInOut",
      },"sameTime")
      gsap.to('.txt-loader',{
        yPercent : 0,
        duration : 0.7,
        onComplete: () =>{
          done()
        }
      }, "-=0.5")
      
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

