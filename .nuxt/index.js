import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_ada66034 from 'nuxt_plugin_plugin_ada66034' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_plugin_7d80edc8 from 'nuxt_plugin_plugin_7d80edc8' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_vuesweetalert2_2fab7a93 from 'nuxt_plugin_vuesweetalert2_2fab7a93' // Source: ./vue-sweetalert2.js (mode: 'client')
import nuxt_plugin_workbox_07e28a18 from 'nuxt_plugin_workbox_07e28a18' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_dd078daa from 'nuxt_plugin_metaplugin_dd078daa' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_d3b842c2 from 'nuxt_plugin_iconplugin_d3b842c2' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_6c4b23fc from 'nuxt_plugin_axios_6c4b23fc' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_moment_2bc4ed1c from 'nuxt_plugin_moment_2bc4ed1c' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_vuegalleryclient_76ec8f1a from 'nuxt_plugin_vuegalleryclient_76ec8f1a' // Source: ../plugins/vue-gallery.client.js (mode: 'client')
import nuxt_plugin_vviewer_14000650 from 'nuxt_plugin_vviewer_14000650' // Source: ../plugins/v-viewer.js (mode: 'all')
import nuxt_plugin_vuedirectives_558ee0b6 from 'nuxt_plugin_vuedirectives_558ee0b6' // Source: ../plugins/vue-directives.js (mode: 'all')
import nuxt_plugin_plugin_110e4438 from 'nuxt_plugin_plugin_110e4438' // Source: ./auth/plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s","title":"ประเสริฐผลยูสด์คาร์","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-status-bar-style","content":"default"},{"name":"apple-mobile-web-app-title","content":"prasertpol"},{"name":"theme-color","content":"#1976D2"},{"hid":"description","name":"description","content":"## Build Setup"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"backend"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"backend"},{"hid":"og:description","name":"og:description","property":"og:description","content":"## Build Setup"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002Fbackend\u002F_nuxt\u002Ficons\u002Ficon_64x64.d98443.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"\u002Fbackend\u002F_nuxt\u002Ficons\u002Ficon_512x512.d98443.png","sizes":"512x512"},{"rel":"manifest","href":"\u002Fbackend\u002F_nuxt\u002Fmanifest.e0fcdd80.json","hid":"manifest"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"script":[{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.3.1.slim.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.14.3\u002Fumd\u002Fpopper.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fstatic.line-scdn.net\u002Fliff\u002Fedge\u002F2\u002Fsdk.js"}],"style":[],"htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_ada66034 === 'function') {
    await nuxt_plugin_plugin_ada66034(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_7d80edc8 === 'function') {
    await nuxt_plugin_plugin_7d80edc8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuesweetalert2_2fab7a93 === 'function') {
    await nuxt_plugin_vuesweetalert2_2fab7a93(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_07e28a18 === 'function') {
    await nuxt_plugin_workbox_07e28a18(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_dd078daa === 'function') {
    await nuxt_plugin_metaplugin_dd078daa(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_d3b842c2 === 'function') {
    await nuxt_plugin_iconplugin_d3b842c2(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_6c4b23fc === 'function') {
    await nuxt_plugin_axios_6c4b23fc(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_2bc4ed1c === 'function') {
    await nuxt_plugin_moment_2bc4ed1c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuegalleryclient_76ec8f1a === 'function') {
    await nuxt_plugin_vuegalleryclient_76ec8f1a(app.context, inject)
  }

  if (typeof nuxt_plugin_vviewer_14000650 === 'function') {
    await nuxt_plugin_vviewer_14000650(app.context, inject)
  }

  if (typeof nuxt_plugin_vuedirectives_558ee0b6 === 'function') {
    await nuxt_plugin_vuedirectives_558ee0b6(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_110e4438 === 'function') {
    await nuxt_plugin_plugin_110e4438(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
