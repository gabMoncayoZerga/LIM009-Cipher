
# CIPHER ACADEMY AWARDS CIPHER PROYECT © | 91th Edition | v 2019

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.

- La palabra CASA se cifra como FDVD.

- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

Para este proyecto se aplicó este método en el marco de un evento de Premiación : Los premios Oscar :)

## Parte Obligatoria

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

#### Definición del producto

- Quiénes son los principales usuarios de producto.

  Los principales usuarios del producto son Jurados y Presentadores de un Premio, Award o Reconocimiento. Para este caso en particular el de los Premios de la Academia.


- Cuáles son los objetivos de estos usuarios en relación con tu producto.
  Los objetivos son los siguientes :

  [✓] Brindar seguridad al compartir el mismo offset


  [✓] Mantener la confidencialidad al momento de cifrar y descifrar mensajes


  [✓] Brindar información rápida y útil sobre las nominadas a mejor película



- Definición del producto final a nivel de experiencia y de interfaz

  [✓]A nivel de experiencia :


  [✓]A nivel de interfaz :
   A nivel de interfaz traté de que la navegación en la web sea clara . Cuenta con un menú de navegación con redes sociales, botones que indican las acciones a realizar(seguir,continuar,regresar a inicio),cuenta con elementos de identificación como header que incluye redes sociales y elemento de contenido representado por el slideshow.
   También tiene botones que direccionan a las paginas deseadas

- Cómo crees que el producto que estás creando está resolviendo sus problemas.


#### Interfaz de usuario (UI)

      La interfaz debe permitir al usuario:

      [✓] Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.

      [✓] Insertar un mensaje (texto) que queremos cifrar.

      [✓] Ver el resultado del mensaje cifrado.

      [✓] Insertar un mensaje (texto) a descifrar.

      [✓] Ver el resultado del mensaje descifrado.


### Proceso y Decisiones de diseño

#### 1) Definición de diagrama de Flujo

  ![Diagrama de flujo](https://i.ibb.co/G2V3Txk/diagrama-de-flujo.png)

#### 2) Bosquejo a mano alzada

![VistaFinal](https://i.ibb.co/SdF6X9S/26951445-6-D3-F-4-D1-F-A9-E6-BA552-F49-F0-A3.jpg)

     Para este proyecto se definieron 4 pantallas, que serán descritas a continuación :


     -Pantalla 1.- En la primera pantalla se da una breve introducción de la pagina web : información sobre los films nominados a mejor película, breve descripción de la funcionalidad de la página y conexión a redes sociales de La Academia.
     Haciendo click en el boton "Empezar" ingresaremos a la segunda pantalla.
     También consideré el caso en donde el Jurado no esté tan empapado de la temática de las películas nominadas y por ende actores, cada imagen del slideshow tiene anexado el link del trailer de cada película.
     En el caso de el(la) presentador(a) si minutos antes de presentar el Award desea indagar más sobre las peliculas nominadas, tambien es posible :)


     -Pantalla 2.- Como ya se mencionó anteriormente , en este caso tenemos dos usuarios : Jurado y Presentador(a). En la segunda pantalla se da una descripción de la función que realiza cada rol, con una imagen interactiva para cada unx.
     Cada rol tiene un botón , que al ser seleccionado, lleva a la pagina correspondiente.
     Si es que se desea regresar por algún motivo a la pagina principal, tan solo presionando el botón Inicio es posible retornar.


     -Pantalla 3.- en esta pantalla se tienen las cajas de texto y botones correspondientes para el(la) Jurado. En esta página se cifrará el nombre de el(la) ganador(a) , deacuerdo a una clave(offset) definido.
     Luego tanto texto cifrado como clave será compartida con el(la) presentador(a) del Premio de la Academia. Aquí se decidirá quien ganará la aclamada estatuilla.
     Cuenta con un botón de retorno que lleva a la página de inicio.


     -Pantalla 4.-en esta pantalla se tienen las cajas de texto y botones correspondientes para el(la) Presentador(a). En esta página se descifrará el nombre de el(la) ganador(a) , deacuerdo a una clave(offset) compartida por el(la) Jurado.
     De esta manera el(la) presentador(a) del Premio de la Academia revelará al mundo quien ganará la aclamada estatuilla.
     Cuenta con un botón de retorno que lleva a la página de inicio.


#### 3) Decisión sobre Diseño



#### 4) Maquetado en HTML y CSS

  ![Web](https://i.ibb.co/B6YPL6B/C0-F8-E163-0859-44-F3-AE9-D-7190-B884-D3-FF.jpg)

#### 5) Definición de la Temática

  ¿Recuerdas la gala de la 89ª Edición de los Premios de La Academia en 2017? Pues ya casi al finalizar la ceremonia había llegado el momento más esperado : la entrega del galardon a Mejor película, donde Fane Dunaway y Warren Beatty anunciaron que la ganadora era "La la land"

  ![Warren](https://ichef.bbci.co.uk/news/624/cpsprodpb/182A9/production/_94858989_warrenfaye_getty.jpg)

  Todo el elenco ganador (director , productor , actores, productores,etc.)de Lalaland subió rapidamente al escenario para recoger la ansiada estatuilla y agradecer a las personas que apoyaron a que el proyecto se lleve
  a cabo.

  ![Lalaland](https://ichef.bbci.co.uk/news/624/cpsprodpb/106DF/production/_94859276_moonlight_ap.jpg)

  Después del anuncio de Mejor Película, personal del equipo de la Academia subió al escenario y se acercó a los ganadores indicando que había un error! El sobre entregado a los presentadores no había sido leído correctamente.
  Todos fueron directamente a verificar el sobre , dentro de una situación con demasiada confunsión.

  ![Confusion1](https://ichef.bbci.co.uk/news/624/cpsprodpb/9C31/production/_94858993_moonlight_reu.jpg)

  El error se suscitó ya que en el sobre del film 
  La película que fue realmente ganadora fue Moonlight ante la sorpresa de todo el publico asistente al Teatro Kodak.

  ![Moonlight](https://ichef.bbci.co.uk/news/624/cpsprodpb/5DB1/production/_94858932_moonlight_reu6.jpg)



  Para reducir el margen de error tenemos a Cipher Academy Awards | 91th Academy Awards ©, donde tanto presentador como jurado comparten tanto clave como el link de la aplicación para que no exista confusion en la información compartida.


#### 6) Definición del Usuario


### Recursos y temas relacionados

* Diseño de experiencia de usuario (User Experience Design):

  -Ideación

  -Prototipado (sketching)

  -Testeo e Iteración

* Desarrollo Front-end:

   -Valores

   -Tipos

   -Variables

   -Control de flujo

   -Tests unitarios

   -Aprende más sobre charCodeAt()

   -Aprende más sobre String.fromCharCode()

   -Aprende más sobre ASCII

   -Documentación de NPM

Herramientas:

  -GitHub y GitHub Pages
  -Guía de Scrum: solamente para comenzar a entender cómo organizar tu trabajo.


### Parte Opcional: "Hacker edition"

 [✓] Cifra/descifra minúsculas

 [✓] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, …)

 [✓] Permite usar un `offset` negativo.
