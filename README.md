# FitLog Desktop

FitLog Desktop es la versión para ordenador de la plataforma FitLog, desarrollada con Vue 3 y ejecutada mediante Electron. Esta aplicación permite tanto a los socios como al personal administrativo gestionar el gimnasio desde una interfaz de escritorio fluida, con un diseño "Dark Mode" optimizado y una experiencia de usuario de alto rendimiento.

## Características:

- **Listado de Actividades y Clases:** Explora toda la oferta del gimnasio (Crossfit, Yoga, Spinning, etc.) a través de una interfaz limpia y organizada, diseñada para pantallas grandes.
- **Sistema de Reservas Completo:** Los usuarios pueden reservar sus plazas directamente desde el ordenador. El sistema controla en tiempo real que no haya reservas duplicadas y gestiona el aforo.
- **Gestión de Perfil e Historial:** Acceso directo a los datos del usuario y un listado detallado de todas las clases asistidas anteriormente para llevar un control del progreso.
- **Calendario y Horarios Personalizados:** Selección de fecha y hora mediante componentes creados específicamente para la app, manteniendo la coherencia visual con la versión móvil.
- **Cancelación tardía:** Si cancelas una clase a 15 minutos de su inicio la plaza no se libera, como si ocurre con las cancelaciones normales.
- **Panel de administración:** Los usuarios con rol de administrador tienen acceso a un panel especial donde crear y modificar actividades.
- **Seguridad y Validación:** Toda la información introducida se valida mediante ZOD en el backend, garantizando que los datos de las actividades y usuarios sean siempre correctos.

## Flujo de Navegación:

La aplicación utiliza un sistema de rutas inteligente que separa la experiencia del usuario común de la del administrador. Gracias a la integración con Pinia, la sesión se mantiene segura y se limpia por completo al cerrar la sesión, redirigiendo al usuario a la pantalla de acceso.

## Tecnologías utilizadas:

- **Framework Frontend:** Vue 3
- **Entorno de Escritorio:** Electron
- **Gestión de Estado:** Pinia
- **Backend de Soporte:** Node.js / Express
- **Base de Datos:** MongoDB (Mongoose)
- **Comunicación:** Axios con gestión de tokens JWT.

## Instalación y ejecución:
Sigue estos pasos para poner en marcha la versión de escritorio:

1. Requisitos Previos
Node.js (Versión LTS) instalado en el sistema.

Backend configurado y en funcionamiento (ver instrucciones en la carpeta server).

3. Ejecución de FitLog Desktop
Navega a la carpeta raíz del proyecto de Vue/Electron.

Instala las dependencias necesarias `npm install`

Lanza la aplicación en modo desarrollo:

`npm run dev`

## Imagenes en ejecución:

### Ventana de login
<img width="1911" height="1078" alt="{83ABDE44-AF65-43F9-B1D6-A6DD32ACDADB}" src="https://github.com/user-attachments/assets/af4f0032-e8f9-4eb5-878e-1bc1fd6ddc29" />

### Ventana de registro
<img width="1909" height="1075" alt="{0A84FAE7-FB19-44E9-9E91-26C33EC292D2}" src="https://github.com/user-attachments/assets/07b9fc24-7396-408b-8623-8e0a65a19260" />

### Ventana de inicio
<img width="1909" height="1073" alt="{59CDF58F-4676-4D22-ABE0-9DFAB62BD518}" src="https://github.com/user-attachments/assets/4c4c59c0-f74e-463f-90c8-a13fa06741a1" />

### Ventana de actividades
<img width="1911" height="1074" alt="{9A7FD40F-0B6E-40E4-9F38-0FA79FFCC67C}" src="https://github.com/user-attachments/assets/dad83cad-3de4-413f-a087-af497b342e03" />

### Ventana de reservas
<img width="1907" height="1071" alt="{6C9CB9B4-F8B0-4650-937A-A2309730B955}" src="https://github.com/user-attachments/assets/8768a60f-8b54-4604-9f05-a12eff0638be" />

### Ventana de perfil
<img width="1902" height="1071" alt="{FCA71622-0275-46A6-9CC8-5CA47601047F}" src="https://github.com/user-attachments/assets/fa089a08-f9de-404f-8ca9-7e49786aa593" />

### Ventana de admin
<img width="1906" height="1077" alt="{8A2831E0-6933-4A98-81E4-F09EE97445B8}" src="https://github.com/user-attachments/assets/22a210a9-7f65-4bec-8339-5034c8bc557f" />

### Edición de actividad
<img width="1906" height="1075" alt="{14FE6B2D-E304-4468-A0F6-90871F139164}" src="https://github.com/user-attachments/assets/5bce1556-d668-4e13-aefb-ec5071b7195c" />
