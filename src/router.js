import { createRouter, createWebHistory } from 'vue-router'

// importiamo le componenti delle router

import AppHomepage from './pages/AppHomepage.vue';
import AppFailed404 from './components/AppFailed404.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
        name: 'homepage',
        path: '/',
        component: AppHomepage
      },
      {
        path: '/:path*',  /* il ":whatever*" diventa un selettore universale di tutte le pagine che non dovessero corrispondere con le rotte qui presenti*/
        name: 'failed',
        component: AppFailed404
      },
  ]
})

export { router }
