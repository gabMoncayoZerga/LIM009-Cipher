
## ACADEMY AWARDS CIPHER PROYECT

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Parte Obligatoria

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

#### Definición del producto

los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.



- Quiénes son los principales usuarios de producto.

Los principales usuarios del producto son Jurados y Presentadores de un Premio, Award o Reconocimiento


- Cuáles son los objetivos de estos usuarios en relación con tu producto.





- Cómo crees que el producto que estás creando está resolviendo sus problemas.



#### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:

- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.


- Insertar un mensaje (texto) que queremos cifrar.


- Ver el resultado del mensaje cifrado.


- Insertar un mensaje (texto) a descifrar.


- Ver el resultado del mensaje descifrado.


### Proceso y Decisiones de diseño

1) Definición de diagrama de Flujo


![Diagrama de flujo](https://i.ibb.co/G2V3Txk/diagrama-de-flujo.png)



2) Bosquejo a mano alzada


3) Definición de la Temática



4) Definición del Usuario



### Parte Opcional: "Hacker edition"

Los caracteres del código ASCII a considerar para "Hacker edition" fueron los siguientes :

* [✓] Cifra/descifra minúsculas

   97
* [✓] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)

  -Vocales minúsculas con tilde
  -ñ,Ñ
  -Vocales minúsculas con dierecis
  
* [✓] Permite usar un `offset` negativo.
