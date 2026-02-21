<script setup>
const props = defineProps(['id', 'titulo', 'fecha', 'hora'])
const emit = defineEmits(['eliminar', 'editar'])

const solicitarEliminacion = () => {
  emit('eliminar', props.id)
}

const solicitarEdicion = () => {
  emit('editar', props.id)
}
</script>

<template>
  <div class="selector">
    <a
      style="
        height: 100%;
        width: 10%;
        justify-content: center;
        align-items: center;
        display: flex;
        justify-content: center;
        text-align: center;
      "
    >
      {{ titulo }}
    </a>
    <a
      style="
        height: 100%;
        width: 10%;
        justify-content: center;
        align-items: center;
        display: flex;
        justify-content: center;
        text-align: center;
      "
    >
      {{ fecha }}
    </a>
    <a
      style="
        height: 100%;
        width: 10%;
        justify-content: center;
        align-items: center;
        display: flex;
        justify-content: center;
        text-align: center;
      "
    >
      {{ hora }}
    </a>
    <div
      class="contenedorOpciones"
      style="height: 100%; width: 10%; justify-content: center; align-items: center"
    >
      <span class="material-symbols-outlined botonAdmin" @click="solicitarEdicion">edit</span>
      <span class="material-symbols-outlined botonAdmin" @click="solicitarEliminacion">delete</span>
    </div>
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
  box-shadow: 0 0 7px 1px #ff58334e;
}

.botonAdmin {
  color: #ff5833c2;
  cursor: pointer;
}
</style>
