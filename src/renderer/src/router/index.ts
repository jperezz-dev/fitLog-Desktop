import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Registro from '@renderer/views/Registro.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Login },
    { path: '/registro', component: Registro}
  ]
})

export default router