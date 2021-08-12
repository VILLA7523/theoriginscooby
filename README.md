# Scooby Attendance
Bienvenido al centro de desarrolladores de Scooby Attendance. Encontrará guías y documentación completas que lo ayudarán a comenzar a trabajar con Scooby Attendances lo más rápido posible, así como asistencia en caso de que se atasque. ¡Saltemos de inmediato!

<p align="center">
  <img src="https://github.com/VILLA7523/theoriginscooby/blob/main/WEB/src/public/images/logodog.png?raw=true" alt="Sublime's custom image"/>
</p>

## Contexto
Debido a la coyuntura actual generada por el virus SARS COV-2, las clases virtuales se ha vuelto un estándar a nivel mundial, esto nos llevó a poder redefinir las maneras de como realizar muchas de nuestras actividades, algunas con mayor facilidad y otras que sean dificultados.

Como sabemos la época actual exige personas altamente cualificadas, capaces de adaptarse a los cambios constantes y de innovar, no solo para garantizar su sostenibilidad y su éxito en el mercado mundial, sino también para promover el crecimiento económico. 

Hasta ahora, hay indicios de que la asistencia regular contribuye al éxito de los estudiantes no sólo en el marco escolar sino también en la vida real. Sin embargo, los datos revelan que un alto porcentaje de estudiantes abandona la universidad, lo que significa que varios candidatos de gran potencial no continúan sus estudios . Además, parece que se ha prestado poca atención a la importancia de la asistencia de los alumnos y a su repercusión en el rendimiento escolar.

En uno de los intentos de poder solucionar este problema se generó la asistencia, con el fin de llevar registro de las personas que debieran estar atendiendo a clases, más por la pandemia este sistema ha sido modificado y adaptado en la mayoría de los casos por formas estáticas como llenar un pequeño formulario o el llamado de una lista. 

Esto genera mucho tiempo perdido, siendo un proceso muy ineficiente para el aprendizaje, antes esta situación nos planteamos como podemos optimizar y agilizar este proceso.


## ¿Qué es Scooby Attendance?
El proceso de control de la asistencia en cualquier institución es una parte importante para determinar la eficacia de los servicios ofrecidos por la misma y el interés general de quienes se benefician de los servicios de la institución, en nuestro caso, los estudiantes. Este proceso es una rutina engorrosa, y por ello, el presente artículo propone una nueva forma de reemplazar el antiguo sistema, que implica registros de asistencia que tienen que ser llenados uno por uno para cada alumno, ya que este método requiere mucho tiempo y es propenso a cometer errores, ya sea marcando a un alumno como ausente por error o contando un número erróneo de asistencias cuando hay que entregar informes o estadísticas.

## OBJETIVOS

### Objetivo General
Renovar completamente el proceso de toma de asistencia para los docentes y estudiantes de la universidad, haciéndolo mas eficiente y ahorrando tiempo.
### Objetivos Específicos
* *Implementar el uso de marcadores biométricos.*
* *Integrar plataformas móviles con plataformas web*
* *Poner en funcionamiento bases de datos y servidores que funcione conjuntamente con la aplicación.*
* *Estudiar el desarrollo de aplicaciones Android y aplicaciones web.*
* *Disminuir la carga laboral del personal docente y administrativo.*

## Propuesta
La asistencia es una de las tareas administrativas que deben realizarse al comienzo de cada clase. Esto conlleva a la pérdida de tiempo valioso al comienzo de  la clase que es aproximadamente el 10\% de la misma y a veces es difícil de gestionar. Es por ello que es necesaria la elaboración de una aplicación móvil y web que utilice métodos de identificación biométrica y de identificación convencional, aplicando el uso de base de datos relaciones junto con la implementación de APIs; además el uso de una plataforma web desde donde se podrá administrar la aplicación, mostrar estadísticas de los estudiantes y de las clases en general utilizando tecnologías modernas como son HTML5, CSS, Javascript, Web Services, Base de datos relacional. 

## Beneficios
* **Ahorrar tiempo**: Con nuestro sistema tendremos un único punto de referencia para los registros de asistencia de toda la universidad. No es necesario utilizar los tradicionales múltiples registros.
* **Aumentar la precisión:** Con el sistema se reduce drásticamente el error humano y los profesores pueden justificar eficientemente inasistencias o tardanza.
* **Garantizar la integridad de los datos:** En comparación con los anticuados registros en papel o excel que pueden perderse, destruirse o eliminarse accidentalmente, sus registros de asistencia están seguros; y disponibles en la nube.
* **Mejorar la productividad de las clases:** Ya que no se perderá tiempo en la toma de asistencia.
* **Reducir el trabajo administrativo:** Los registros y estadísticas estarán disponibles al instante.
* **Disminuir los costes administrativos:** Que requieren gasto de tiempo y trabajo repetitivo.

## Impacto Social
La iniciativa tiene repercusiones positivas para:
**Estudiantes:** Reducción del el absentismo, aumentar la puntualidad, mejorar la concentración, la retención, el rendimiento y el éxito.
**Docentes:** Gestionar y mantener la asistencia ya no es una molestia. Toma de asistencia rápida y eficiente.
**Dirección de las Escuelas y Facultades:** El equipo directivo recibe informes de asistencia generados automáticamente al final de cada día.

## 📈 Arquitectura

Es un patrón de arquitectura de software, que comúnmente se utiliza para implementar interfaces de usuario, datos y lógica de control. Enfatiza una separación entre la lógica de negocios y su visualización , Este patrón de arquitectura de software se basa en las ideas de reutilización de código y la separación de conceptos, características que buscan facilitar la tarea de desarrollo de aplicaciones y su posterior mantenimiento.

## Descripción del patrón
MVC propone la construcción de tres componentes distintos que son el modelo, la vista y el controlador, es decir, por un lado define componentes para la representación de la información, y por otro lado para la interacción del usuario. 
En donde nuestros controladores (/controllers) llaman a los modelos de nuestras bases de datos (/models) y en donde se consulta a nuestra base de datos.
Para mostrar ello lo puede encontrar en las rutas (/routers), siendo mas especificos en index.js.
Todas las vistas están realizadas en JADE siendo un lenguaje que tiene de base la meta-programación de fondo con el fin de poder optimizar el rendimiento.

* **El Modelo:** Es la representación de la información con la cual el sistema opera, por lo tanto gestiona todos los accesos a dicha información, tanto consultas como actualizaciones, implementando también los privilegios de acceso que se hayan descrito en las especificaciones de la aplicación. Envía a la 'vista' aquella parte de la información que en cada momento se le solicita para que sea mostrada. Las peticiones de acceso o manipulación de información llegan al 'modelo' a través del 'controlador'. 
* **El Controlador:** Responde a eventos e invoca peticiones al 'modelo' cuando se hace alguna solicitud sobre la información (por ejemplo, editar un documento o un registro en una base de datos). También puede enviar comandos a su 'vista' asociada si se solicita un cambio en la forma en que se presenta el 'modelo' (por ejemplo, desplazamiento o scroll por un documento o por los diferentes registros de una base de datos), por tanto se podría decir que el 'controlador' hace de intermediario entre la 'vista' y el 'modelo' (véase Middleware).
* **La Vista:** Presenta el 'modelo' (información y lógica de negocio) en un formato adecuado para interactuar (usualmente la interfaz de usuario), por tanto requiere de dicho 'modelo' la información que debe representar como salida.

# Diagrama MVC

![alt text](https://github.com/VILLA7523/theoriginscooby/blob/main/WEB/src/public/images/digrama.svg)

# Base de Datos 
![alt text](https://github.com/VILLA7523/theoriginscooby/blob/main/WEB/src/public/images/imagen.png)

## 🔧 Herramientas usadas
### Wireframes
Para las diagramamaciones de las se utilizó Figma

**Link APP:** -  [Versión App](https://www.figma.com/file/98YCTCsRYmb6R7Mibg79dR/Scooby-Attendance?node-id=0%3A1)
**Link WEB** - [Versión Web](https://www.figma.com/file/VvYuJi1rbh2pscG7iIGO3n/Admin-Dashboard)

### FRONTEND WEB
* **Pug:** pug.js, también conocido como PUG, es una biblioteca de Javascript que antes se conocía como JADE. Es un motor de plantilla fácil de codificar que se utiliza para codificar HTML de una manera más legible. Una ventaja de PUG es que equipa a los desarrolladores para codificar documentos HTML reutilizables extrayendo datos dinámicamente de la API.
* **JavaScript:** JavaScript es un lenguaje de programación o secuencias de comandos que le permite implementar funciones complejas en las páginas web, cada vez que una página web hace más que simplemente sentarse allí y mostrar información estática para que usted la vea, mostrando actualizaciones de contenido oportunas, mapas interactivos, animación 2D / Gráficos en 3D, máquinas de discos de vídeo con desplazamiento, etc., puede apostar que probablemente JavaScript esté involucrado.
* **CSS:** Es un lenguaje de diseño simple destinado a simplificar el proceso de hacer que las páginas web sean presentables. CSS se encarga de la apariencia de una página web. Con CSS, puede controlar el color del texto, el estilo de las fuentes, el espacio entre párrafos, el tamaño y la disposición de las columnas, las imágenes o colores de fondo que se utilizan, los diseños de diseño, las variaciones en la visualización para diferentes dispositivos y tamaños de pantalla. así como una variedad de otros efectos.
* **HTML - 5:** HTML5 es un lenguaje de programación cuyo acrónimo significa Hyper Text Markup Language. Es un sistema que permite modificar la apariencia de las páginas web, así como realizar ajustes en su apariencia. También se utiliza para estructurar y presentar contenido para la web.
* **Bootstrap 5:** Bootstrap, el front-end framework más popular creado para diseñar interfaces modernas, receptivas y dinámicas para páginas web de diseño profesional.

### APLICACIÓN
* **Android Studio:** Android Studio es el entorno de desarrollo integrado (IDE) oficial para el desarrollo de aplicaciones de Android. Android Studio proporciona más funciones que mejoran nuestra productividad al crear aplicaciones de Android.
* **Android JDK:** El JDK proporciona herramientas, como el compilador de Java, que utilizan los IDE y los SDK para desarrollar programas de Java. El JDK también contiene un entorno de ejecución de Java (JRE), que permite que los programas de Java, como Eclipse, se ejecuten en su sistema.

### BACKEND
* **Node.js:** Node.js es un entorno de ejecución multiplataforma, de código abierto y de un solo subproceso para crear aplicaciones de red y del lado del servidor rápidas y escalables. Se ejecuta en el motor de tiempo de ejecución de JavaScript V8 y utiliza una arquitectura de E / S sin bloqueo, impulsada por eventos, lo que la hace eficiente y adecuada para aplicaciones en tiempo real.
* **Express.js:** Express.js, o simplemente Express, es un marco de aplicación web back-end para Node.js, lanzado como software gratuito y de código abierto bajo la licencia MIT. Está diseñado para crear aplicaciones web y API. Se le ha llamado el marco de servidor estándar de facto para Node.js.
* **MySQL:** MySQL es un sistema de administración de bases de datos relacionales SQL de código abierto desarrollado y respaldado por Oracle.
* **Java:** Java es un lenguaje de programación y una plataforma informática lanzada por primera vez por Sun Microsystems en 1995. Hay muchas aplicaciones y sitios web que no funcionarán a menos que tenga Java instalado, y cada día se crean más. Java es rápido, seguro y confiable. Desde computadoras portátiles hasta centros de datos, consolas de juegos y supercomputadoras científicas, teléfonos celulares e Internet, ¡Java está en todas partes!

## 📝 Para inicializar el proyecto WEB
Ejecute primero los siguientes comandos
```
cd attendance
npm install
npm run dev
```

## 📝 Para inicializar el proyecto Android
Ejecute primero los siguientes comandos
```
emulator -avd scooby
```

## 🚦 API

En nuestro proyecto contamos con un API la cual realiza el proceso de consulta a base de datos local como una en remoto, ella se encarga de consultar datos de los estudiantes y puede usarla con libertad siempre teniendo en cuenta que es información publica recopilada por estudiantes de Ciencia de la Computación de la UNSA.


## Autores ✒️

* **Fiorela Estefany Villarroel Ramos** -  [ VILLA7523](https://github.com/VILLA7523)
* **Merisabel Ruelas Quenaya** -  [Mrsbl465](https://github.com/Mrsbl465)
* **Piero Emiliano Vizcarra Vargas** -  [pevv2016](https://github.com/Pev40)
