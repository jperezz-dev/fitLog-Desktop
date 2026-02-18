<script setup>
import { useRouter } from 'vue-router'
import api from '../services/axios'

const router = useRouter()
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
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/reservas')">calendar_month</span>
    </div>
    <div class="contenedorOpcionesLateral">
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/perfil')">account_circle</span>
      <span class="material-symbols-outlined opcionLateral" @click="router.push('/admin')">admin_panel_settings</span>
    </div>
  </div>
  <div class="contenedorPrincipal">
    <div style="display: flex; flex-direction: row; padding-left: 3%">
      <a style="color: white; font-size: 5.5rem">Actividades</a>
    </div>
    <div id="contenedorActividades">
      <div class="actividad">
        <span id="spinning" class="actividadIcon"></span>
        <a style="color: white; font-size: 3.8em; text-align: center; width: 40%">Spinning</a>
      </div>
      <div class="actividad">
        <span id="bodyPump" class="actividadIcon"></span>
        <a style="color: white; font-size: 3.8em; text-align: center; width: 40%">Body Pump</a>
      </div>
      <div class="actividad">
        <span id="yoga" class="actividadIcon"></span>
        <a style="color: white; font-size: 3.8em; text-align: center; width: 40%">Yoga</a>
      </div>
      <div class="actividad">
        <span id="crossfit" class="actividadIcon"> </span>
        <a style="color: white; font-size: 3.8em; text-align: center; width: 40%">Crossfit</a>
      </div>
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
