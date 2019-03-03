
# CIPHER ACADEMY AWARDS CIPHER PROYECT © | 91th Edition

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

  Los principales usuarios del producto son Jurados y Presentadores de un Premio, Award o Reconocimiento.


- Cuáles son los objetivos de estos usuarios en relación con tu producto.


- Definición del producto final a nivel de experiencia y de interfaz



- Cómo crees que el producto que estás creando está resolviendo sus problemas.

  
#### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:

[✓] Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.


[✓] Insertar un mensaje (texto) que queremos cifrar.


[✓] Ver el resultado del mensaje cifrado.


[✓] Insertar un mensaje (texto) a descifrar.


[✓] Ver el resultado del mensaje descifrado.


### Proceso y Decisiones de diseño

1) Definición de diagrama de Flujo


![Diagrama de flujo](https://i.ibb.co/G2V3Txk/diagrama-de-flujo.png)



2) Bosquejo a mano alzada

 Para este proyecto se definieron 4 pantallas, que serán descritas a continuación :

 -Pantalla 1.- En la primera pantalla se da una breve introducción de la pagina web : información sobre los films nominados a mejor película, breve descripción de la funcionalidad de la página y conexión a redes sociales de La Academia.
 Haciendo click en el boton "Empezar" ingresaremos a la segunda pantalla.
 También consideré el caso en donde el Jurado no esté tan empapado de la temática de las películas nominadas y por ende actores, cada imagen del slideshow tiene anexado el link del trailer de cada película.
 En el caso de el(la) presentador(a) si minutos antes de presentar el Award desea indagar más sobre las peliculas nominadas, tambien es posible :)

 ![Pantalla1](https://ibb.co/K5T9Hrh)


 -Pantalla 2.- Como ya se mencionó anteriormente , en este caso tenemos dos usuarios : Jurado y Presentador(a). En la segunda pantalla se da una descripción de la función que realiza cada rol, con una imagen interactiva para cada unx.
 Cada rol tiene un botón , que al ser seleccionado, lleva a la pagina correspondiente.
 Si es que se desea regresar por algún motivo a la pagina principal, tan solo presionando el botón Inicio es posible retornar.


![Pantalla2](https://ibb.co/GFpGV97)

 -Pantalla 3.- en esta pantalla se tienen las cajas de texto y botones correspondientes para el(la) Jurado. En esta página se cifrará el nombre de el(la) ganador(a) , deacuerdo a una clave(offset) definido.
 Luego tanto texto cifrado como clave será compartida con el(la) presentador(a) del Premio de la Academia. Aquí se decidirá quien ganará la aclamada estatuilla.
 Cuenta con un botón de retorno que lleva a la página de inicio.

 ![Pantalla3](https://ibb.co/HKTf60K)

 -Pantalla 4.-en esta pantalla se tienen las cajas de texto y botones correspondientes para el(la) Presentador(a). En esta página se descifrará el nombre de el(la) ganador(a) , deacuerdo a una clave(offset) compartida por el(la) Jurado.
 De esta manera el(la) presentador(a) del Premio de la Academia revelará al mundo quien ganará la aclamada estatuilla.
 Cuenta con un botón de retorno que lleva a la página de inicio.

![Pantalla4](https://ibb.co/VWSHRgh)

3) Maquetado inicial HTML y CSS

![Web](https://ibb.co/2Mp6qMd)

4)Definición de la Temática

  -



5) Definición del Usuario



### Parte Opcional: "Hacker edition"

Los caracteres del código ASCII a considerar para "Hacker edition" fueron los siguientes :

* [✓] Cifra/descifra minúsculas


* [✓] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, …)


* [✓] Permite usar un `offset` negativo.
