<script setup>
import boton from '../components/boton.vue'
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
        <a class="opcionSeleccionada">Inicio de sesión</a>
        <a>Registro</a>
      </div>
      <div class="contenedorCampos">
        <div class="input-group">
          <span class="material-icons iconoIzquierda">mail_outline</span>
          <input class="input" type="email" placeholder="Email" />
        </div>
        <div class="input-group">
          <span class="material-icons iconoIzquierda">lock_outline</span>
          <input class="input" type="password" placeholder="Contraseña" />
        </div>
        <a id="passOlvidada" style="margin-bottom: 5%">¿Has olvidado tu contraseña?</a>
        <boton texto="Iniciar sesión"></boton>
        <a style="font-size: 3.5em; color: white"
          >¿No tienes cuenta?<a style="color: #ff5733; margin-left: 0.5em; cursor: pointer"
            >Regístrate</a
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
}

#passOlvidada {
  color: white;
  font-size: 2.5em;
  align-self: flex-end;
  cursor: pointer;
}
</style>
