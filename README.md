# api_cursos_mean

Descripción breve de la aplicación, su propósito y sus características principales.

## Requisitos Previos

Antes de instalar y ejecutar la aplicación, asegúrate de tener instalado:

- MongoDB
- Node.js (v18)
- npm (viene con Node.js)

## Instalación

Sigue estos pasos para instalar la aplicación:

1. **Clona el Repositorio**
   
   Primero, clona el repositorio de la aplicación en tu máquina local usando git:
   
   `git clone https://github.com/dmarmijosa/cursos_online`
   
   `cd cursos_online`

2. **Instalar Dependencias**

Dentro del directorio del proyecto, ejecuta el siguiente comando para instalar las dependencias necesarias:
  
  `npm init`


## Configuración

Antes de ejecutar la aplicación, asegúrate de que MongoDB esté ejecutándose en tu sistema. 

Puedes configurar la conexión a MongoDB y otras variables de entorno en un archivo `.env` en el directorio raíz del proyecto. Por ejemplo:

`MONGO_URI=mongodb://localhost:27017/miBaseDeDatos`

`PORT=3000`


## Ejecución

Para iniciar la aplicación, ejecuta el siguiente comando:

`npm start`


Este comando iniciará el servidor Express en el puerto especificado en el archivo de configuración o en el puerto 3000 por defecto.

## Uso

Una vez que la aplicación esté ejecutándose, puedes acceder a ella a través de un navegador web o una herramienta de API como Postman en `http://localhost:[PORT]`, donde `[PORT]` es el puerto que configuraste.



