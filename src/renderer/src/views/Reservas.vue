<script setup>
import { useRouter } from 'vue-router'
import api from '../services/axios'
import selectorReserva from '@renderer/components/selectorReserva.vue'
import { ref, computed, onMounted, watch } from 'vue'
import { useUserStore } from '@renderer/services/usser_session'

const router = useRouter()
const actividadSeleccionada = ref('Spinning')
const actividades = ref([])
const userStore = useUserStore()
const esAdmin = userStore.admministrador

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
const obtenerActividades = async () => {
  try {
    const response = await api.get(`/usuarios/${userStore.id}/reservasDisponibles`)

    if (Array.isArray(response.data)) {
      actividades.value = response.data
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      actividades.value = []
      console.log('No tienes reservas.')
    } else {
      console.error('Error al cargar actividades:', error.message)
    }
  }
}

// Cancelar reserva
const cancelarReserva = async (actividadId) => {
  if (!confirm('¿Seguro que quieres cancelar esta clase?')) return

  try {
    // CAMBIO: Usar api.post para que coincida con tu backend
    await api.post('/actividades/cancelar', {
      actividadId: actividadId,
      usuarioId: userStore.id
    })

    alert('Reserva cancelada correctamente')
    obtenerActividades()
  } catch (error) {
    alert('Error al cancelar')
  }
}
watch(actividadSeleccionada, () => {
  obtenerActividades()
})

onMounted(() => {
  obtenerActividades()
})
</script>

<template>
  <div class="menuLateral">
    <div class="contenedorOpcionesLateral">
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/inicio')"
        >home</span
      >
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/actividades')"
        >backup_table</span
      >
      <span style="color: #ff5733" class="material-symbols-outlined opcionLateral"
        >calendar_month</span
      >
    </div>
    <div class="contenedorOpcionesLateral">
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/perfil')"
        >account_circle</span
      >
      <span class="material-symbols-outlined opcionLateral" :class="{ 'oculto': esAdmin == false }" @click="router.push('/admin')"
        >admin_panel_settings</span
      >
    </div>
  </div>
  <div class="contenedorPrincipal">
    <div style="display: flex; flex-direction: row; padding-left: 3%">
      <a style="color: white; font-size: 5.5rem">Mis Reservas</a>
    </div>
    <a style="color: white; font-size: 5.5rem; padding-left: 3%">Reservas activas:</a>
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
      <selector-reserva
        v-for="actividad in actividadesFiltradas"
        texto="Cancelar"
        :key="actividad._id"
        :titulo="actividad.titulo"
        :fecha="actividad.fecha"
        :hora="actividad.hora"
        @click="cancelarReserva(actividad._id)"
      ></selector-reserva>

      <p v-if="actividadesFiltradas.length === 0" style="color: white; font-size: 2.5rem">
        No tienes ninguna reserva activa.
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

.oculto {
  visibility: hidden;
  display: none;
}
</style>
