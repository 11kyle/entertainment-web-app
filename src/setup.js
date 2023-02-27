import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia"
import "./style.css"
import App from "./App.vue"
import Home from "./views/Home.vue"
import Movies from "./views/Movies.vue"
import TVSeries from "./views/TVSeries.vue"
import Bookmarked from "./views/Bookmarked.vue"

// Create Pinia
const pinia = createPinia()

// Create and mount the root instance.
const app = createApp(App)

// Define some routes
// The home route is /entertainment-web-app/ because of gh-pages and how gh-pages is set up.
const routes = [
  // { path: "/", component: Home },
  { path: "/entertainment-web-app/", component: Home },
  { path: "/entertainment-web-app/movies", component: Movies },
  { path: "/entertainment-web-app/tv-series", component: TVSeries },
  { path: "/entertainment-web-app/bookmarked", component: Bookmarked },
]

// Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

app.use(pinia)
app.use(router)
app.mount("#app")
