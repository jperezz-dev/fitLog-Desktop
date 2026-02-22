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