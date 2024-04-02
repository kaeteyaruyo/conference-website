import { createMemoryHistory, createRouter } from 'vue-router'

import IndexView from '@/views/IndexView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  { path: '/', component: IndexView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router