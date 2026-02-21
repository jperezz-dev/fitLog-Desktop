<script setup>
import { useRouter } from 'vue-router'
import api from '../services/axios'
import reservasHistorico from '@renderer/components/reservasHistorico.vue'
import { ref, computed, onMounted, watch } from 'vue'
import { useUserStore } from '@renderer/services/usser_session'

const router = useRouter()
const actividadSeleccionada = ref('Spinning')
const actividades = ref([])
const userStore = useUserStore()

// Lista de actividades filtradas
const actividadesFiltradas = computed(() => {
  return actividades.value.map((act) => {
    const dt = new Date(act.fechaHora)
    return {
      ...act,
      titulo: act.tipoActividad,
      fecha: `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`,
      hora: `${dt.getHours()}:${dt.getMinutes().toString().padStart(2, '0')}`
    }
  })
})

// Buscar actividades
const obtenerHistorial = async () => {
  try {
    const response = await api.get(`/usuarios/${userStore.id}/historial`)

    if (Array.isArray(response.data)) {
      actividades.value = response.data
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      actividades.value = []
    } else {
      console.error('Error al cargar historial:', error.message)
    }
  }
}

watch(actividadSeleccionada, () => {
  obtenerHistorial()
})

onMounted(() => {
  obtenerHistorial()
})
</script>

<template>
  <div class="menuLateral">
    <div class="contenedorOpcionesLateral">
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/inicio')">home</span>
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
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/admin')"
        >admin_panel_settings</span
      >
    </div>
  </div>
  <div class="contenedorPrincipal">
    <div style="display: flex; flex-direction: row; padding-left: 3%">
      <a style="color: white; font-size: 5.5rem">Mi Perfil</a>
    </div>
    <div id="contenedorDatosUsuario">
      <div
        style="display: flex; flex-direction: row; color: white; font-size: 4.5rem; column-gap: 20%"
      >
        <a>Nombre: {{ userStore.nombre }}</a>
        <a
          >Miembro desde:
          {{
            new Date(userStore.fechaCreacion).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            })
          }}</a
        >
      </div>
      <div style="display: flex; flex-direction: row; color: white; font-size: 4.5rem">
        <a>Email: {{ userStore.correo }}</a>
      </div>
    </div>
    <a style="color: white; font-size: 5.5rem; padding-left: 3%">Historial de reservas: </a>
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 70%;
        row-gap: 3%;
        margin-top: 3%;
      "
    >
      <reservas-historico
        v-for="actividad in actividadesFiltradas"
        :key="actividad._id"
        :titulo="actividad.titulo"
        :fecha="actividad.fecha"
        :hora="actividad.hora"
      >
      </reservas-historico>

      <p v-if="actividadesFiltradas.length === 0" style="color: white; font-size: 2.5rem">
        No tienes ninguna reserva pasada
      </p>
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

#contenedorDatosUsuario {
  display: flex;
  flex-direction: column;
  padding-left: 3%;
  height: 15%;
  row-gap: 35%;
}
</style>
