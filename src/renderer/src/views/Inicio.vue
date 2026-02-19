// Añadir estadísticas funcionales y calculo
<script setup>
import { useRouter } from 'vue-router'
import api from '../services/axios'
import cardActividad from '@renderer/components/cardActividad.vue'
import { useUserStore } from '@renderer/services/usser_session'

import imgCrossfit from '../assets/imagen-crossfit.png'
import imgBodyPump from '../assets/imagen-body-pump.png'
import imgYoga from '../assets/imagen-yoga.png'

const router = useRouter()
const userStore = useUserStore()
</script>

<template>
  <div class="menuLateral">
    <div class="contenedorOpcionesLateral">
      <span style="color: #ff5733" class="material-symbols-outlined opcionLateral">home</span>
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
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/admin')"
        >admin_panel_settings</span
      >
    </div>
  </div>
  <div class="contenedorPrincipal">
    <div style="display: flex; flex-direction: row; padding-left: 3%">
      <a style="color: white; font-size: 5.5rem"
        >Bienvenido<a style="color: #ff5733; font-size: 5.5rem; margin-left: 3rem">{{ userStore.nombre }}</a></a
      >
    </div>
    <div id="contenedorStats">
      <div class="stat">
        <span id="clases" class="statIcon"></span>
        <div style="display: flex; flex-direction: column; width: 60%; height: 50%">
          <a style="color: white; font-size: 3.5rem; text-align: center">Has acudido a:</a>
          <a style="color: #ff5733; font-size: 3.5rem; text-align: center">10 Clases</a>
        </div>
      </div>
      <div class="stat">
        <span id="fav" class="statIcon"></span>
        <div style="display: flex; flex-direction: column; width: 60%; height: 50%">
          <a style="color: white; font-size: 3.5rem; text-align: center"
            >Tu actividad favorita es:</a
          >
          <a style="color: #ff5733; font-size: 3.5rem; text-align: center">Spinning</a>
        </div>
      </div>
      <div class="stat">
        <span id="racha" class="statIcon"> </span>
        <div style="display: flex; flex-direction: column; width: 60%; height: 50%">
          <a style="color: white; font-size: 3.5em; text-align: center">Racha de entrenamientos:</a>
          <a style="color: #ff5733; font-size: 3.5rem; text-align: center">3 Días</a>
        </div>
      </div>
    </div>
    <a style="color: white; font-size: 5.5rem; padding-left: 3%">Actividades a tu medida:</a>
    <div id="contenedorActividades">
      <card-actividad
        texto="Clases dirigidas de"
        titulo="Crossfit"
        :imagen="imgCrossfit"
      ></card-actividad>
      <card-actividad style="height: 90%;"
        texto="Clases dirigidas de"
        titulo="Body pump"
        :imagen="imgBodyPump"
      ></card-actividad>
      <card-actividad
        texto="Clases de iniciación al"
        titulo="Yoga"
        :imagen="imgYoga"
      ></card-actividad>
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

#contenedorStats {
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 10%;
  align-self: center;
  justify-content: space-evenly;
}

.stat {
  border: solid 0.3rem #ff5733;
  border-radius: 3rem;
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.statIcon {
  height: 50%;
  width: 20%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#clases {
  background-image: url(../assets/stat_clases.svg);
}

#fav {
  background-image: url(../assets/stat_fav.svg);
}

#racha {
  background-image: url(../assets/stat_racha.svg);
}

#contenedorActividades {
  align-self: center;
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 55%;
  justify-content: space-evenly;
  align-items: center;
}
</style>
