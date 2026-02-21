<script setup>
import boton from '../components/boton.vue'
import { useRouter } from 'vue-router'
import api from '../services/axios'
import { ref } from 'vue'

const router = useRouter()
const usuario = ref('')
const email = ref('')
const password = ref('')
const passwordRepetir = ref('')

const registro = async () => {
  try {
    const response = await api.post('/registro', {
      nombreUsuario: usuario.value,
      correoUsuario: email.value,
      contrasenhaUsuario: password.value
    })

    console.log('Respuesta completa del servidor:', response.data);

    if (response.status = 201) {
      alert('Usuario registrado')
    }
  } catch (error) {
    console.error('Error en el registro:', error.response?.data || error.message)
    alert('Error en el registro')
  }
}
</script>

<template>
  <div id="contenedor">
    <div class="publicidadContenedor">
      <h1 style="width: 40%">Descarga <a style="color: #ff5733">FitLog App</a></h1>
      <div class="contenedorImagenDescripcion">
        <span class="mockupApp"></span>
        <div class="contenedorDescripcion">
          <ul>
            <li>
              <a style="color: #ff5733">Notificaciones en tiempo real:</a> Recibe avisos si se
              libera una plaza en tu clase favorita.
            </li>
            <li>
              <a style="color: #ff5733">Gestión de reservas:</a> Reserva, cancela o modifica tus
              clases desde cualquier lugar.
            </li>
            <li>
              <a style="color: #ff5733">Historial a mano:</a> Consulta tus entrenamientos pasados y
              próximos retos al instante.
            </li>
          </ul>
          <div class="contenedorDescargas">
            <span class="descargaPlay"></span>
            <span class="descargaApple"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="contenedorLoginRegistro">
      <div class="contenedorLogo">
        <span class="logo"></span>
      </div>
      <div class="contenedorOpciones">
        <a>Inicio de sesión</a>
        <a class="opcionSeleccionada">Registro</a>
      </div>
      <div class="contenedorCampos">
        <div class="input-group">
          <span class="material-symbols-outlined iconoIzquierda">person_outline</span>
          <input v-model="usuario" class="input" type="text" placeholder="Usuario" />
        </div>
        <div class="input-group">
          <span class="material-symbols-outlined iconoIzquierda">mail_outline</span>
          <input v-model="email" class="input" type="email" placeholder="Email" />
        </div>
        <div class="input-group">
          <span class="material-symbols-outlined iconoIzquierda">lock_outline</span>
          <input v-model="password" class="input" type="password" placeholder="Contraseña" />
        </div>
        <div class="input-group">
          <span class="material-symbols-outlined iconoIzquierda">lock_outline</span>
          <input v-model="passwordRepetir" class="input" type="password" placeholder="Repetir contraseña" />
        </div>
        <boton texto="Registrarse" @click="registro"></boton>
        <a style="font-size: 3.5em; color: white"
          >¿Ya tienes cuenta?<a
            style="color: #ff5733; margin-left: 0.5em; cursor: pointer"
            @click="router.push('/')"
            >Inicio de sesión</a
          ></a
        >
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
  align-items: center;
  background-image: url(../assets/background.svg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
