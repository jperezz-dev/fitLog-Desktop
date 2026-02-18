<script setup>
import boton from './boton.vue'
defineProps(['titulo', 'fecha', 'hora', 'imagen'])
</script>

<template>
  <div class="selector">
    <span class="icono" :style="{ backgroundImage: `url('${imagen}')` }"></span>
    <a>
      {{ titulo }}
    </a>
    <a>
      {{ fecha }}
    </a>
    <a>
      {{ hora }}
    </a>
    <boton class="boton" texto="Reservar"></boton>
  </div>
</template>

<style scoped>
.selector {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  border-radius: 1.7rem;
  border: solid #ff58339d 0.1rem;
  background-color: rgba(0, 0, 0, 0.55);
  font-size: 3rem;
  height: 7%;
  width: 85%;
}

.icono {
  height: 100%;
  width: 5%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: solid 1px white;
}

.boton {
  font-size: 3rem;
  padding: 1.5rem;
  width: 10%;
}
</style>
