import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    nombre: '',
    correo: '',
    fechaCreacion: "",
    admministrador: false,
    token: null
  }),

  actions: {
    setUser(userData) {
      this.id = userData.id
      this.nombre = userData.nombre
      this.correo = userData.correo
      this.fechaCreacion = userData.fechaCreacion
      this.admministrador = userData.administrador
      this.token = userData.token
    },
    logout() {
      this.id = null
      this.nombre = ''
      this.correo = ''
      this.token = null
      this.fechaCreacion = ""
      this.admministrador = false
      localStorage.removeItem('token')
    }
  }
})
