<script setup>
import boton from './boton.vue'

const props = defineProps(['titulo', 'fecha', 'hora', 'texto'])
</script>

<template>
  <div class="selector">
    <a>
      {{ titulo }}
    </a>
    <a>
      {{ fecha }}
    </a>
    <a>
      {{ hora }}
    </a>
    <boton class="boton" :texto="texto"></boton>
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

.boton {
  font-size: 3rem;
  padding: 1.5rem;
  width: 10%;
}
</style>
