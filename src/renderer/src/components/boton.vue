<script setup>
defineProps(['texto'])
</script>

<template>
  <button class="botonEstilo">
    {{ texto }}
  </button>
</template>

<style scoped>
.botonEstilo {
  background-color: #ff5833c2;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 5em;
  text-align: center;
  border-radius: 1.1em;
  cursor: pointer;
  width: 85%;
  border: none;
  padding: 20px;
}
</style>
