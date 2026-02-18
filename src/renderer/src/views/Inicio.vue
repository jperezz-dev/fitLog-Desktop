<template>
  <div class="menuLateral">
    <div class="contenedorOpcionesLateral">
      <span style="color: #ff5733" class="material-symbols-outlined opcionLateral">home</span>
      <span class="material-symbols-outlined opcionLateral">backup_table</span>
      <span class="material-symbols-outlined opcionLateral">calendar_month</span>
    </div>
    <div class="contenedorOpcionesLateral">
      <span class="material-symbols-outlined opcionLateral">account_circle</span>
      <span class="material-symbols-outlined opcionLateral">admin_panel_settings</span>
    </div>
  </div>
  <div class="contenedorPrincipal">
    <div style="display: flex; flex-direction: row; padding-left: 3%">
      <a style="color: white; font-size: 5.5rem"
        >Bienvenido<a style="color: #ff5733; font-size: 5.5rem; margin-left: 3rem">John Doe</a></a
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
          <a style="color: white; font-size: 3.5rem; text-align: center">Tu actividad favorita es:</a>
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
</style>
