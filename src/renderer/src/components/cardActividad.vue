<script setup>
import boton from './boton.vue';
defineProps(['texto', 'titulo', 'imagen'])
</script>

<template>
    <div class="carta" :style="{ backgroundImage: `url('${imagen}')` }">
        <div class="overlay">
            <div class="contenido">
                <span class="texto-clase">{{ texto }}</span>
                <span class="titulo-clase">{{ titulo }}</span>
                <boton texto="Reservar" class="boton-reserva"></boton>
            </div>
        </div>
    </div>
</template>

<style scoped>
.carta {
    height: 80%;
    width: 23%;
    border: solid 0.2rem #ff5733;
    border-radius: 2.5rem;
    background-size: cover;
    background-position: center;
}

.overlay {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.contenido {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.texto-clase {
    color: white;
    font-size: 4rem;
    text-align: center;
    width: 100%;
}

.titulo-clase {
    color: #ff5733;
    font-size: 4rem;
    margin-bottom: 5%;
}

.boton-reserva {
    font-size: 4rem;
    padding: 1.5rem;
    width: 60%;
    margin-bottom: 10%;
}
</style>