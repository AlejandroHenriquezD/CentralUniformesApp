## Manual de Instalación

Necesitaremos las siguientes herramientas

- BBDD - MySQL
- [Control de Servicios: Xampp (Despliegue de la BBDD)](https://www.apachefriends.org/es/download.html).
- [Backend - Diseñado en Laravel v9 & PHP v8.1.10](https://laravel.com/)
- [Frontend- Diseñado en ReactJS](https://es.reactjs.org/).
- ORM - Artisan (Ya integrado en Laravel)
- [IDE - Visual Studio Code](https://code.visualstudio.com/).

Una vez instaladas las herramientas clonamos la app desde el repositorio en github.

`git clone https://github.com/AlejandroHenriquezD/CentralUniformes`

Una vez hecho esto tenemos que instalar las dependencias ejecutando el siguiente comando desde cada carpeta

`npm install`

Una vez esté todo hecho estará listo para ponerlo en marcha siempre que queramos, para ello debemos seguir estos pasos

El primer paso será arrancar nuestros servidores en XAMPP (Apache y MySQL)

![screenshots](https://github.com/tcrurav/ReactExpressGoogleLogin/blob/master/screenshots/xampp.png)

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
Foto

## Diagrama UML
Foto
## Casos de Uso
Foto

El administrador de almacén que gestione la aplicación podrá realizar estas tareas las cuales son básicamente lo que conocemos como un CRUD (Create Read Update Delete) y el cliente podrá hacer pedidos ver artículos y registrarse

## Modelo Relacional
Foto

El modelo de datos se compone de 4 tablas las dos más importantes son clientes y artículos, la primera se almacenará toda la información de los usuarios en la segunda todos los artículos (entendiendo como artículo un modelo de algo Ej: Camisa Básica Blanca Talla L), la entidad imagenes es un apoyo a la tabla articulos y en la entidad pedidos se guardaran los pedidos de cada cliente. La tabla pedidos tendrá dos claves foráneas (id_articulo y id_cliente) al igual que la tabla Imagenes tendrá una clave foránea de la tabla articulos.

# Requisitos de Usuario

## Enunciado del problema 

Se pide una aplicación que trabaje con clientes que realizan pedidos de ropa.

Tiene que tener
- Una pagina para hacer pedidos 
- Una pagina para ver mis pedidos

Es una app desarrollada desde cero en laravel y reactJs

## Requisitos de Usuario
- R1. Plataforma: La app sera desarrollada para dispositivos móviles

- R2. La app tendrá un sistema de cuentas y por lo tanto dos interfaces para inciar sesión y crear cuenta

- R3. La app tendrá un menú en la parte superior con un desplegable que tendrá todas las opciones de navegación y la posibilidad de cerrar la sesión.

- R4. Habrá una interfaz para ver todos los productos disponibles y poder seleccionar el que queremos.

- R5. Una vez seleccionado el producto elegimos la cantidad y confirmamos el pedido.

- R6. Habrá otra interfaz en la cual podremos comprobar todos los pedidos que hemos realizado.

- R7. Habrá otro frontend a modo de panel de administración

# Prototipo / Mockup

[Figma](https://www.figma.com/proto/BwXMCLHKQkuFyYyXLssCwu/Central-Uniformes?page-id=0%3A1&node-id=13%3A7&viewport=1803%2C-1213%2C0.99&scaling=scale-down&starting-point-node-id=13%3A7)

# Pila tecnológica

Las herramientas que usaremos para desarrollar la aplicación son:

- Laravel:  Backend - Diseñado en Laravel v9 & PHP v8.1.10

- RectJS: Frontend - Version 18.2.0

# Comparación de Tecnologías 

En este apartado compararemos nuestra tecnologías con otras populares

## React y Angular:

### ¿Qué es React?

React es una biblioteca JavaScript de código abierto desarrollada por un equipo de Facebook.

### ¿Qué es Angular?

Angular es una plataforma de código abierto basada en TypeScript y un marco de aplicación web desarrollado por un equipo de Google.
	
## Angular Vs React

Angular consta de tres componentes: modelos, vistas y controladores. Sin embargo, la estructura de la aplicación de Angular es fija y compleja. Angular permite a los desarrolladores dividir los códigos en archivos individuales, lo que facilita la reutilización de plantillas y bases de código en otros proyectos. 

Angular usa TypeScript, un superconjunto de JavaScript. En TypeScript, los errores tipográficos se pueden encontrar fácilmente y el código también es fácil de navegar.

Hablando de React, no tiene ningún formato fijo para escribir códigos. Tiene un código base muy bien estructurado y legible. El uso de árboles de componentes permite organizar lógicamente el código. La programación funcional se utiliza en la biblioteca, lo que hace que las declaraciones de los componentes sean declarativas. 

React se puede escribir en JavaScript ES6+ con script JSX, que es una extensión de sintaxis que hace que el código JavaScript se vea exactamente como HTML. React se puede mejorar utilizando una herramienta de traducción de código para compilar el código JSX en un navegador (por ejemplo, Babel). Además, React se puede desarrollar en TypeScript, pero no es compatible de forma nativa.



## Laravel vs Django

### Django
Django es un framework gratuito y de código abierto basado en Python. Este framework de alto nivel facilita el desarrollo de mejores aplicaciones web rápidamente con menos código.
Django es excelente para proyectos que involucran grandes volúmenes de contenido textual, mucho tráfico, archivos multimedia y otros proyectos basados ​​en la web.

### Laravel 

Laravel es un framework del lado del servidor gratuito y de código abierto basado en PHP.

Laravel hace que el desarrollo web sea una experiencia creativa con su gran cantidad de características y capacidades. Facilita las tareas estándar de desarrollo web, como el almacenamiento en caché, la autenticación, el enrutamiento y las sesiones.

# Usabilidad
Tras implementar la aplicación procedemos a estudiar los aspectos de usabilidad en la misma.

Respecto a los colores hemos optado por usar principalmente los colores insignia de la empresa

Foto

Al hacer esto usamos la marca de la empresa y usamos los huecos en blanco para no sobrecargar la pantalla

Foto

En cuantos a las fuentes hemos optado por hacer toda la página en Verdana, elegimos esta fuente debido a que es una fuente muy completa, tiene un tamaño adecuado, es fácil de leer 

Respecto a los iconos hemos optado por una librería de react la cual nos ofrece unos iconos muy elegante e intuitivos para nuestro menú

Foto

Para evitar la posible duda del usuario de si su pedido ha sido enviado una alerta emergente aparecerá si el pedido se registra correctamente

Foto

# Planificación

La planificación que he llevado a cabo ha sido con la ayuda de github, usando su función de proyectos en la cual puedes asignar tareas e ir cambiando su estado en una vista tablero muy cómoda.

[Mi Tablero](https://github.com/users/AlejandroHenriquezD/projects/1/views/1)

Para organizarme mejor he dividido el proyecto en pequeños objetivos para poder tener más claro que quiero hacer cada dia. Mi metodología de trabajo se basa en entender lo que quiero hacer y buscar un ejemplo de como hacerlo, preferiblemente un video, seguir el ejemplo del video y una vez hecho hacer lo mismo pero para mi caso personal.


# Referencias Externas

[1/2 - Laravel 9 + React - CRUD](https://www.youtube.com/watch?v=dyQLsQm1EtI)

[2/2 - Laravel 9 + React](https://www.youtube.com/watch?v=_aj_adg1jeI&t=175s)

[01 - Presentación del curso Laravel 9 desde cero](https://www.youtube.com/watch?v=JRUOeMkwkIo&list=PLZ2ovOgdI-kWWS9aq8mfUDkJRfYib-SvF&index=2)
