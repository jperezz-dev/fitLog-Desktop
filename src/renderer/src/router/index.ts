import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Registro from '@renderer/views/Registro.vue'
import Inicio from '@renderer/views/Inicio.vue'
import Actividades from '@renderer/views/Actividades.vue'
import Reservas from '@renderer/views/Reservas.vue'
import Perfil from '@renderer/views/Perfil.vue'
import Admin from '@renderer/views/Admin.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Login },
    { path: '/registro', component: Registro},
    { path: '/inicio', component: Inicio},
    { path: '/actividades', component: Actividades},
    { path: '/reservas', component: Reservas},
    { path: '/perfil', component: Perfil},
    { path: '/admin', component: Admin}
  ]
})

export default router