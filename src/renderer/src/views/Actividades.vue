<script setup>
import { useRouter } from 'vue-router'
import api from '../services/axios'
import selectorReserva from '@renderer/components/selectorReserva.vue'
import { ref, computed, onMounted, watch } from 'vue'

const router = useRouter()
const actividadSeleccionada = ref('Spinning')
const actividades = ref([])

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
    const response = await api.get('/actividades/disponibles', {
      params: {
        tipo: actividadSeleccionada.value
      }
    })

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
      <span style="color: #ff5733" class="material-symbols-outlined opcionLateral"
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
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/admin')"
        >admin_panel_settings</span
      >
    </div>
  </div>
  <div class="contenedorPrincipal">
    <div style="display: flex; flex-direction: row; padding-left: 3%">
      <a style="color: white; font-size: 5.5rem">Actividades</a>
    </div>
    <div id="contenedorActividades">
      <div
        class="actividad"
        :class="{ 'actividad-activa': actividadSeleccionada === 'Spinning' }"
        @click="actividadSeleccionada = 'Spinning'"
      >
        <span id="spinning" class="actividadIcon"></span>
        <a style="color: white; font-size: 3.8em; text-align: center; width: 40%">Spinning</a>
      </div>
      <div
        class="actividad"
        :class="{ 'actividad-activa': actividadSeleccionada === 'Body pump' }"
        @click="actividadSeleccionada = 'Body pump'"
      >
        <span id="bodyPump" class="actividadIcon"></span>
        <a style="color: white; font-size: 3.8em; text-align: center; width: 40%">Body pump</a>
      </div>
      <div
        class="actividad"
        :class="{ 'actividad-activa': actividadSeleccionada === 'Yoga' }"
        @click="actividadSeleccionada = 'Yoga'"
      >
        <span id="yoga" class="actividadIcon"></span>
        <a style="color: white; font-size: 3.8em; text-align: center; width: 40%">Yoga</a>
      </div>
      <div
        class="actividad"
        :class="{ 'actividad-activa': actividadSeleccionada === 'Crossfit' }"
        @click="actividadSeleccionada = 'Crossfit'"
      >
        <span id="crossfit" class="actividadIcon"> </span>
        <a style="color: white; font-size: 3.8em; text-align: center; width: 40%">Crossfit</a>
      </div>
    </div>
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
        texto="Reservar"
        :key="actividad._id"
        :titulo="actividad.titulo"
        :fecha="actividad.fecha"
        :hora="actividad.hora"
      ></selector-reserva>

      <p v-if="actividadesFiltradas.length === 0" style="color: white; font-size: 2rem">
        No hay horarios disponibles para esta actividad.
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

#contenedorActividades {
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 7%;
  align-self: center;
  justify-content: space-evenly;
}

.actividad {
  border: solid 0.3rem #ff5733;
  border-radius: 3rem;
  height: 100%;
  width: 18%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.actividad-activa {
  background-color: #ff573333;
  border-width: 0.5rem;
  transform: scale(1.05);
  transition: all 0.2s ease;
}

.actividadIcon {
  height: 60%;
  width: 30%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#spinning {
  background-image: url(../assets/icono-spinning.svg);
}

#bodyPump {
  background-image: url(../assets/icono-body-pump.svg);
}

#yoga {
  background-image: url(../assets/icono-yoga.svg);
}

#crossfit {
  background-image: url(../assets/icono-crossfit.svg);
}
</style>
