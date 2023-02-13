## Manual de Instalación

Necesitaremos las siguientes herramientas

- BBDD - MySQL
- [Control de Servicios: Xampp (Despliegue de la BBDD)](https://www.apachefriends.org/es/download.html).
- [Backend - Diseñado en Laravel v9 & PHP v8.1.10](https://laravel.com/)
- [Frontend- Diseñado en ReactJS](https://es.reactjs.org/).
- ORM - Artisan (Ya integrado en Laravel)
- [IDE - Visual Studio Code](https://code.visualstudio.com/).

Una vez instaladas las herramientas clonamos la app desde el repositorio en github.

`git clone https://github.com/AlejandroHenriquezD/CentralUniformesApp`

Una vez hecho esto tenemos que instalar las dependencias ejecutando el siguiente comando desde cada carpeta

`npm install`

Una vez esté todo hecho estará listo para ponerlo en marcha siempre que queramos, para ello debemos seguir estos pasos

El primer paso será arrancar nuestros servidores en XAMPP (Apache y MySQL)


Lo siguiente será arrancar nuestro backend en laravel para ello entramos a la carpeta backend y ejecutamos el siguiente comando

`php artisan serve`

Una vez que este funcionando arrancamos uno de nuestros frontend con el comando 

`npm start`

Y ya podemos usar la app desde 

[http://localhost:3000](http://localhost:3000)


# Introducción al Proyecto

¿De donde surge la necesidad de la aplicación?

La idea surge por la necesidad de un sistema para realizar pedidos de ropa. La aplicación proporciona una fluidez a la hora de gestionar los productos almacenados siendo esto un ahorro de tiempo el cual podrá ser aprovechado para ser más productivos, consiguiendo así un mayor beneficio y una labor más amena a los encargados de gestionar el almacén

# Diagramas

## Diagrama Entidad Relación
![screenshots](https://github.com/AlejandroHenriquezD/CentralUniformesApp/blob/master/screenshots/entidad_relacion.png)

## Diagrama UML
![screenshots](https://github.com/AlejandroHenriquezD/CentralUniformesApp/blob/master/screenshots/modelo_relacional.png)
## Casos de Uso
![screenshots](https://github.com/AlejandroHenriquezD/CentralUniformesApp/blob/master/screenshots/casos_uso.png)

El cliente tendra la capacidad de crear sus diseños, añadir sus logos para hacer diseños con estos y realizar pedidos de estos diseños. El empleado se encargara de hacer las tareas que le asignen y el encargado sera el "administrador" el cual podra realizar todos los CRUDS de las tablas y asignara los pedidos a los empleados.

## Modelo Relacional
![screenshots](https://github.com/AlejandroHenriquezD/CentralUniformesApp/blob/master/screenshots/modelo_relacional.png)

El modelo relacional se compone de **siete tablas**, la tabla **usuarios** sera la que guarde la información principal de cada usuario registrado sin importar si es cliente, empleado o encargado, la tabla **clientes** tendra una clave foranea con la tabla usuario y servira para guardar informacion adicional de los clientes, la tabla **logos** tendra una imagen y un usuario asociado para que el cliente pueda guardar sus logos para sus diseños, la tabla **diseños** es donde se van a guardar los diseños creados por los clientes para que estos puedan hacer pedidos, la tabla **articulos** contendra la información de los articulos asi como su stock,precio etc, la tabla **trabajos** sera una tabla de tipo maestra la cual contendra los tipos de trabajo que puede necesitar un pedido (bordado, planchado...) y por ultimo la tabla **pedidos** en la cual se guardaran los pedidos realizados por el cliente y el empleado encargado en trabajar ese pedido  

# Requisitos de Usuario

## Enunciado del problema 

Se pide una aplicación que trabaje con clientes que realizan sus diseños de ropa personalizados y pueden hacer pedidos de estos diseños. Ademas si eres empleado tendras otra interfaz para ver que pedidos tienes que atender

Tiene que tener
- Una pagina para hacer diseños
- Una pagina para hacer pedidos 
- Una pagina para ver mis diseños
- Una pagina para añadir logos 
- Una pagina para configuración

Es una app desarrollada desde cero en laravel y reactJs

## Requisitos de Usuario
- R1. Plataforma: La app sera desarrollada para web

- R2. La app tendrá un sistema de registro y por lo tanto dos interfaces para inciar sesión y crear cuenta

- R3. La app tendrá un menú en la parte superior con un desplegable que tendrá todas las opciones de navegación.

- R4. Habrá una interfaz para ver todos los productos disponibles y poder seleccionar el que queremos.

- R5. Una vez seleccionado el producto elegimos la cantidad y confirmamos el pedido.

- R6. Habrá una seccion solo visible para encargado a modo de panel de administración

# Prototipo / Mockup

[Figma](https://www.figma.com/proto/yPzGfJeuUoQvJv7zYD3fZ2/Central-Uniformes-App?node-id=3%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2&show-proto-sidebar=1)

# Pila tecnológica

Las herramientas que usaremos para desarrollar la aplicación son:

- Laravel:  Backend - Diseñado en Laravel v9 & PHP v8.1.10

- RectJS: Frontend - Version 18.2.0

# Comparación de Tecnologías 

En este apartado compararemos nuestra tecnologías con otras populares


### React

React es una biblioteca JavaScript de código abierto desarrollada por un equipo de Facebook.

La comunidad de react al igual que en laravel es una muy extendida debido a que react está basado en JavaScript, esto hace que tengamos disponibles muchas librerías y mucha información que consultar cuando tengamos algún problema. Además hay que destacar que react también es una plataforma de código abierto con Licencia MIT

Una de las grandes ventajas de react reside en su sistema de componentes reutilizables. Esto hace que la escalabilidad y el mantenimiento del proyecto sean mucho mejor, además los errores sucederán en la propia funcionalidad del componente o en la comunicación con los demás siendo esto una gran ayuda a la hora de solucionar errores

En comparación con otros frameworks, React es más fácil de mantener y es flexible debido a su estructura modular. Esta flexibilidad, a su vez, ahorra una gran cantidad de tiempo. La idea principal es que cada módulo que definimos tenga todo el código relacionado con este y solo se importe código del modulo en sí. Cuando tenemos varios módulos que necesitan de la misma pieza de código esta la podemos escribir dentro de una carpeta compartida e importarla a los diferentes módulos.

React es un framework fácil de aprender si tienes conocimientos previos de JavaScript, tiene una estructura muy simple de entender ya que se basa en html, javascript y css, para un experto en JS le llevaría uno o dos días para aprender esta herramienta


### Laravel

Laravel es un framework PHP gratis y de código abierto que brinda un conjunto de herramientas y recursos para crear aplicaciones modernas.

Una de las grandes ventajas de laravel es su amplio uso debido a que laravel es de código abierto y su comunidad está muy extendida y dispuesta a compartir sus conocimientos con el resto haciendo que aprender a usar esta tecnología sea mucho más fácil, un claro ejemplo de esto es la cantidad de videos dedicados a explicar laravel en detalle desde un nivel más básico a cosas más complicadas.

Otra gran ventaja que nos ofrece laravel son las migraciones, estas nos permiten generar bases de datos de manera muy sencilla y también realizar cambios si hemos cometido algún error, además las migraciones nos dan la posibilidad de compartir la estructura de la base de datos con otros desarrolladores, en nuestro caso personal nos han sido bastante útil debido a que nos han ahorrado mucho tiempo ya que generar estas migraciones son una tarea relativamente rápida si tienes el diseño de la base de datos claro.

Respecto a la seguridad laravel no se queda atrás y es que cuenta con mecanismos de hash y salt para encriptar por medio de librerías como BCrypt. Esto es algo casi indispensable en cualquier proyecto debido a que las contraseñas de los usuarios deben ser totalmente privadas a ojos de cualquier persona encargada de gestionar esos datos.

Otra ventaja de Laravel es el uso de la arquitectura MVC (Modelo Vista Controlador) que separa el código de forma ordenada para facilitar la manipulación y la comprensión del código. Como indica el nombre de la arquitectura tendremos por separado tanto los modelos, los controladores, las migraciones y las vistas de blade (en nuestro caso no trabajamos con estas plantillas debido a que queremos montar nuestro frontend con React)

Además en Laravel gracias a su ORM Eloquent puede trabajar con cuatro tipos de bases de datos MySQL, SQL, PostgreSQL y SQLite.


# Usabilidad
Tras implementar la aplicación procedemos a estudiar los aspectos de usabilidad en la misma.

Respecto a los colores hemos optado por usar principalmente los colores insignia de la empresa

![screenshots](https://github.com/AlejandroHenriquezD/CentralUniformes/blob/master/screenshots/colores.png)

Al hacer esto usamos la marca de la empresa y usamos los huecos en blanco para no sobrecargar la pantalla

![screenshots](https://github.com/AlejandroHenriquezD/CentralUniformes/blob/master/screenshots/inicio.png)

En cuantos a las fuentes hemos optado por hacer toda la página en Verdana, elegimos esta fuente debido a que es una fuente muy completa, tiene un tamaño adecuado, es fácil de leer 

Respecto a los iconos hemos optado por una librería de react la cual nos ofrece unos iconos muy elegante e intuitivos para nuestro menú

![screenshots](https://github.com/AlejandroHenriquezD/CentralUniformes/blob/master/screenshots/menu1.png)

Para evitar la posible duda del usuario de si su pedido ha sido enviado una alerta emergente aparecerá si el pedido se registra correctamente

![screenshots](https://github.com/AlejandroHenriquezD/CentralUniformes/blob/master/screenshots/alerta.png)

Ademas todos los formularios de la app estan validados para evitar que el usuario pueda cometer errores al introducir información

Es una aplicación facil de usar ya que tiene funcionalidades muy definidas y simples haciendo que incluso una persona que no este familiarizada con las nuevas tecnologias sean capaces de usar la app

En cuanto a la cantidad de información en pantalla hemos optado por mostrar lo estrictamente necesario para que no puedas perderte usando la app

Los formularios no solo estan validados si no que ademas nos mostrara un mensaje de error en caso de que esten vacios. Ya que para crear un usuario se deben rellenar muchos campos es probable saltarse alguno, con esta medida evitamos la frustación del usuario. Ademas de que no todos los campos son obligatorios por ello hemos señalado los obligatorios con un "*"

Respecto a los elementos multimedia hemos optado por que no sean muy abdantes para no sobrecargar en exceso la interfaz


# Planificación

La planificación que hemos llevado a cabo ha sido con la ayuda de github, usando su función de proyectos en la cual puedes asignar tareas e ir cambiando su estado en una vista tablero muy cómoda.

[Nuestro Tablero](https://github.com/users/AlejandroHenriquezD/projects/3)

Para organizarnos mejor hemos dividido el proyecto en pequeños objetivos para poder tener más claro que queremos hacer cada dia. Nuestra metodología de trabajo se basa en entender lo que queremos hacer y buscar un ejemplo de como hacerlo, preferiblemente un video, seguir el ejemplo del video y una vez hecho hacer lo mismo pero adaptado a nuestro proyecto.


# Conclusión

Como conclusión de este proyecto podemos sacar en claro un par de cosas, es infinitamente mas rapido y efectivo trabajar en equipo que individualmente, la posibilidad de dividir el trabajo en varias partes y avanzar tantas cosas a la vez nos ahorra mucho tiempo y una buena prueba es que hemos desarrollado esta parte del proyecto en unas tres semanas mientras que la entrega anterior fueron casi dos meses

Creo que tambien nos ha hecho darnos cuenta de para que sirven las ramas en los repositorios que subimos, y tambien de la utilidad de las herramientas de scrum para organizar y ver las tareas hechas y por hacer.

Respecto al resultado del proyecto estamos satisfechos, hemos querido darle bastante importancia a que la aplicación tenga un funcionamiento correcto manejando casos "edge" para lograr el objetivo de que con algunos ajustes la app pueda ponerse a funcionar en un entorno real

# Referencias Externas

[1/2 - Laravel 9 + React - CRUD](https://www.youtube.com/watch?v=dyQLsQm1EtI)

[2/2 - Laravel 9 + React](https://www.youtube.com/watch?v=_aj_adg1jeI&t=175s)

[01 - Presentación del curso Laravel 9 desde cero](https://www.youtube.com/watch?v=JRUOeMkwkIo&list=PLZ2ovOgdI-kWWS9aq8mfUDkJRfYib-SvF&index=2)
