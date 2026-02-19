// Arreglar seleccion fecha y seleccion hora (Tamaño botones, contenedor y texto)
<script setup>
import { useRouter } from 'vue-router'
import api from '../services/axios'
import { VueDatePicker } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import boton from '@renderer/components/boton.vue'
import { ref, computed, onMounted, watch } from 'vue'
import { useUserStore } from '@renderer/services/usser_session'
import reservaAdmin from '@renderer/components/reservaAdmin.vue'

const router = useRouter()
const userStore = useUserStore()
const actividades = ref([])
const date = ref(new Date())
const time = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
})
const tipoSeleccionado = ref('Clases dirigidas de Crossfit')
const tipoLimpio = ref('Crossfit')

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
    const response = await api.get('/actividades/disponiblesTodo', {})

    if (Array.isArray(response.data)) {
      actividades.value = response.data
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      actividades.value = []
      console.log('No se encontraron actividades próximas.')
    } else {
      console.error('Error al cargar actividades:', error.message)
    }
  }
}

// Guardar actividades
const crearActividad = async () => {
  try {
    // Combinar fecha y hora
    const fechaFinal = new Date(date.value)
    fechaFinal.setHours(time.value.hours)
    fechaFinal.setMinutes(time.value.minutes)

    await api.post('/actividades', {
      tipoActividad: tipoLimpio.value,
      fechaHora: fechaFinal,
      plazasMaximas: 20
    })

    alert('Actividad creada con éxito')
    obtenerActividades() // Recargar lista de actividades al añadir
  } catch (error) {
    alert('Error al crear la actividad')
  }
}

// Eliminar actividad
const eliminarActividad = async (id) => {
  if (!confirm('¿Seguro que quieres borrar esta actividad para siempre?')) return

  try {
    await api.delete(`/actividades/${id}`)
    alert('Actividad eliminada')
    obtenerActividades()
  } catch (error) {
    alert('Error al eliminar la actividad')
  }
}

watch(tipoSeleccionado, (nuevoValor) => {
  if (nuevoValor.includes('Yoga')) tipoLimpio.value = 'Yoga'
  else if (nuevoValor.includes('Spinning')) tipoLimpio.value = 'Spinning'
  else if (nuevoValor.includes('Body Pump')) tipoLimpio.value = 'Body pump'
  else if (nuevoValor.includes('Crossfit')) tipoLimpio.value = 'Crossfit'
})

onMounted(() => {
  obtenerActividades()
})
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
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/perfil')"
        >account_circle</span
      >
      <span style="color: #ff5733" class="material-symbols-outlined opcionLateral"
        >admin_panel_settings</span
      >
    </div>
  </div>
  <div class="contenedorPrincipal">
    <div style="display: flex; flex-direction: row; padding-left: 3%">
      <a style="color: white; font-size: 5.5rem">Panel administrativo</a>
    </div>
    <a style="color: white; font-size: 5.5rem; padding-left: 3%">Crear nueva actividad:</a>
    <div id="contenedorCrearActividad">
      <div style="display: flex; flex-direction: column; width: 30%">
        <a style="color: white; font-size: 4rem">Tipo de actividad:</a>
        <select
          style="
            border: solid 0.2rem #ff5733;
            height: 33%;
            border-radius: 3rem;
            border: solid #ff58339d 0.1rem;
            background-color: rgba(0, 0, 0, 0.55);
            color: white;
            margin-top: 3%;
            padding-left: 2%;
            box-shadow: 0 0 7px 1px #ff58334e;
            border-radius: 3rem;
          "
        >
          <option>Clases dirigidas de Crossfit</option>
          <option>Clases dirigidas de Body Pump</option>
          <option>Clases de iniciación al Yoga</option>
          <option>Clases guiadas de Spinning</option>
        </select>
      </div>
      <div style="display: flex; flex-direction: column; width: 25%">
        <a style="color: white; font-size: 4rem">Hora de la actividad:</a>
        <VueDatePicker
          v-model="time"
          time-picker
          dark="true"
          style="
            margin-top: 3.5%;
            --dp-background-color: rgba(0, 0, 0, 0.55);
            --dp-border-color: #ff58339d;
            --dp-menu-border-color: #ff58339d;
            --dp-font-family: 'Poppins', sans-serif;
            --dp-border-radius: 3rem;
            --dp-cell-border-radius: 0.1rem;
            --dp-font-size: 2.5rem;
            --dp-icon-color: white;
            --dp-text-color: white;
            --dp-input-padding: 3.3rem 2rem 3rem 3rem;
            --dp-preview-font-size: 3rem;
            --dp-time-font-size: 4rem;
            box-shadow: 0 0 7px 1px #ff58334e;
            border-radius: 3rem;
          "
        >
        </VueDatePicker>
      </div>
      <div style="display: flex; flex-direction: column; width: 25%">
        <a style="color: white; font-size: 4rem">Fecha de la actividad:</a>
        <VueDatePicker
          v-model="date"
          :time-config="{ enableTimePicker: false }"
          :format="'dd/MM/yyyy'"
          :preview-format="'dd/MM/yyyy'"
          dark="true"
          style="
            margin-top: 3.5%;
            --dp-background-color: rgba(0, 0, 0, 0.55);
            --dp-border-color: #ff58339d;
            --dp-menu-border-color: #ff58339d;
            --dp-font-family: 'Poppins', sans-serif;
            --dp-border-radius: 3rem;
            --dp-cell-border-radius: 0.1rem;
            --dp-font-size: 2.5rem;
            --dp-preview-font-size: 3rem;
            --dp-cell-size: 8rem;
            --dp-icon-color: white;
            --dp-text-color: white;
            --dp-input-padding: 3.3rem 2rem 3rem 3rem;
            box-shadow: 0 0 7px 1px #ff58334e;
            border-radius: 3rem;
          "
        >
        </VueDatePicker>
      </div>
    </div>
    <div
      style="height: 5%; margin-top: -15rem; display: flex; justify-content: flex-end; width: 90%"
    >
      <boton
        texto="Guardar actividad"
        style="width: 12%; height: 100%; font-size: 3.5rem; padding: 0rem"
        @click="crearActividad"
      ></boton>
    </div>
    <a style="color: white; font-size: 5.5rem; padding-left: 3%; margin-top: -7rem"
      >Actividades Existentes:</a
    >
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        height: 45%;
        width: 95%;
        row-gap: 3%;
      "
    >
      <reserva-admin
        v-for="actividad in actividadesFiltradas"
        :key="actividad._id"
        :id="actividad._id"
        :titulo="actividad.titulo"
        :fecha="actividad.fecha"
        :hora="actividad.hora"
        @eliminar="eliminarActividad"
      ></reserva-admin>

      <p v-if="actividadesFiltradas.length === 0" style="color: white; font-size: 2rem">
        No hay horarios disponibles.
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

#contenedorCrearActividad {
  display: flex;
  flex-direction: row;
  height: 15%;
  padding-left: 3%;
  column-gap: 5%;
}
</style>
