<script setup>
import { useRouter } from 'vue-router'
import api from '../services/axios'

const router = useRouter()
</script>

<template>
  <div class="menuLateral">
    <div class="contenedorOpcionesLateral">
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/inicio')">home</span>
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/actividades')">backup_table</span>
      <span style="color: #ff5733" class="material-symbols-outlined opcionLateral"
        >calendar_month</span
      >
    </div>
    <div class="contenedorOpcionesLateral">
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/perfil')">account_circle</span>
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/admin')">admin_panel_settings</span>
    </div>
  </div>
  <div class="contenedorPrincipal">
    <div style="display: flex; flex-direction: row; padding-left: 3%">
      <a style="color: white; font-size: 5.5rem">Mis Reservas</a>
    </div>
    <a style="color: white; font-size: 5.5rem; padding-left: 3%">Reservas activas:</a>
  </div>
</template>

<style scoped>
#contenedor {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
</style>
