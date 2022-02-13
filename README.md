# 💻 Block Master

<img width="25%" align="right" style="margin-right:5%" alt="logo" src="https://res.cloudinary.com/silviajcn/image/upload/v1638722550/Im%C3%A1genes%20para%20proyectos/SPRING%202/logo-blockBuster_izhbos.png" />

Block Master es una página de películas que le permite al usuario hacer busquedas de peliculas tanto de los ultimos estrenos en el cine como peliculas publicadas en años anteriores, al hacerlo, obtendrá información detalla de cada película. En el apartado Agregar películas, el usuario podrá agregar sus propias películas y podrá ubicarlas en la pestaña Películas agregadas, esta función de agregar películas solo se puede utilizar si el usuario está logueado en la página.

## 📌 Puede visitar Block Master aquí:

https://spring3-a9826.web.app/

<img width="100%" alt="page" src="https://res.cloudinary.com/silviajcn/image/upload/v1643317095/Mi%20Portafolio/Proyects/p3_elvvzn.png" />

    
# 💎 Block Master Proyecto

La pagina está construida en React. Para la creación de la misma se utilizaron las siguientes herramientas de desarrollo:

* ```react```
* ```react-router-dom```
* ```@auth0/auth0-react```
* ```axios```
* ```json-server```
* ```react-infinite-scroll-component```
* ```styled-components```
* ```bootstrap```
* ```react-bootstrap```
* ```react-icons```

## 🔥 Descarga del proyecto e Instalación

* Clonar el repositorio
* Abrir el proyecto en Visual Studio Code (o editor de confianza)
* Abrir la terminal del editor
* Correr el comando ```npm install``` para instalar correctamente las dependencias del proyecto
* Para levantar el servidor local se debe correr el comando ```npm start```
* Para la base de datos de las Películas agregadas del proyecto se utilizó Heroku. Link de la endpoint: https://moviessegundospring.herokuapp.com/registros
* Se debe tener en cuenta que para la utilización de Auth0 React, se debe contar con una cuenta en Auth0.com y sus configuraciones respectivas.
* De igual modo, se debe cambiar la configuracion dentro de la constante fileUpload con datos personales de Cloudinary. Esta constante se encuentra en la siguiente direccion: src > helpers > FileUpload.js > fileUpload (leer nota 1).

Nota 2: para cambiar estos datos es necesario contar con una cuenta de developer en Cloudinary, obtener la url de la api de cloudinary (a esta url se le debe agregar al final lo siguiente: /upload), ir a la seccion settings, luego a la seccion Upload, y en el apartado de Upload presets, agregar un nuevo Udloap preset, en este paso es necesario darle el nombre que se desee, cambiar el Signing Mode a Unsigned, darle un nombre a la carpeta donde se subiran las imagenes y guardar dicha configuracion. Hacer los cambios respectivos dentro del proyecto con estos datos.

## 🔍 Vistas 

<img width="80%" align="center" alt="pages" src="https://media.giphy.com/media/OAoKa673cTHFHdDRZE/giphy.gif" />

## 🌟 Autor

* **Silvia C. Navarro**  - [@silviajcn](https://github.com/silviajcn)
