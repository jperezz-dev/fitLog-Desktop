<script setup>
import { useRouter } from 'vue-router'
import api from '../services/axios'

const router = useRouter()
</script>

<template>
  <div class="menuLateral">
    <div class="contenedorOpcionesLateral">
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/')">home</span>
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/actividades')"
        >backup_table</span
      >
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/reservas')"
        >calendar_month</span
      >
    </div>
    <div class="contenedorOpcionesLateral">
      <span style="color: #ff5733" class="material-symbols-outlined opcionLateral"
        >account_circle</span
      >
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/admin')">admin_panel_settings</span>
    </div>
  </div>
  <div class="contenedorPrincipal">
    <div style="display: flex; flex-direction: row; padding-left: 3%">
      <a style="color: white; font-size: 5.5rem">Mi Perfil</a>
    </div>
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
