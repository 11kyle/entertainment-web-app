// This file is currently not used.
import { createRouter, createWebHistory } from "vue-router"

// Define route components.
// These can be imported from other files
const Home = { template: "<div>Home</div>" }
const Movies = { template: "<div>About</div>" }
const TVSeries = { template: "<div>About</div>" }
const Bookmarked = { template: "<div>About</div>" }

// Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
// const routes = [
//   { path: "/", component: Home },
//   { path: "/movies", component: About },
//   { path: "/tv-series", component: About },
//   { path: "/bookmarked", component: About },
// ]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here
const router = createRouter({
  // 4. Provide the history implementation to use.
  history: createWebHistory(),
  // routes, // short for `routes: routes`
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movies",
      name: "movies",
      component: Movies,
    },
    {
      path: "/tv-series",
      name: "tv-series",
      component: TVSeries,
    },
    {
      path: "/bookmarked",
      name: "bookmarked",
      component: Bookmarked,
    },
  ],
})
