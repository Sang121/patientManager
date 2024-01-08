export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'UserManager',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  buildModules: [
    '@nuxtjs/composition-api/module'
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: 
  [
    'primevue/resources/themes/saga-blue/theme.css', // Chọn một theme theo ý muốn
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'


],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [    { src: '@/plugins/primevue.js', mode: 'client' }, // Tạo file plugin ở bước 3
],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    'primevue/nuxt',
    // https://go.nuxtjs.dev/axios
     '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    [
      'primevue/nuxt', {
          theme: 'md-light-indigo',
          ripple: true,
          components: ['InputText','Button','DataTable','Column','Dialog','Calendar'],
          directives: ['Tooltip','Badge']
      }
  ]
  ],
  axios: {
    baseURL: 'http://192.168.1.53:9098',
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
           required: true,
           
           type: 'Bearer'
        },
        user: {
          property: 'user',
        
          autoFetch: true
        },
        endpoints: {
          login: { url: 'http://192.168.1.53:9098/Auth/login', method: 'post' },
          logout: { url: 'http://192.168.1.53:9098/Auth/logout', method: 'get' },
          //user: { url: 'http://192.168.1.53:9098/Auth/user', method: 'get' },
          // getPatient: { url: 'http://192.168.1.53:9098/Patient', method: 'get' },
         
        },
        
      },
     
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: process.env.API_URL || ' http://192.168.1.53:9098/',
    // debug: process.env.DEBUG || false,
    // proxyHeaders: false,
    // credentials: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ['primevue'],
  },
  router: {
   middleware: ['auth']
  },
  
}
