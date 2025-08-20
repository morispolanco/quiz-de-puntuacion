import { Question } from '../types';

export const quizData: Question[] = [
    {
        id: 2,
        question: "El enunciado *A la entrega de diplomas acudieron todos los estudiantes, quienes junto con sus padres y familiares, disfrutaron de una jornada festiva*:",
        options: [
            "Está mal puntuado porque debe ponerse una coma después de quienes.",
            "Está bien puntuado porque no falta ni sobra ninguna coma.",
            "Aunque lo normal hubiera sido poner una coma detrás de quienes, en este caso no es necesaria, ya que hemos marcado el inciso con anterioridad.",
            "Tras estudiantes, deberíamos haber escrito punto y coma."
        ],
        correctAnswerIndex: 1,
        feedback: "La oración está bien puntuada. La cláusula 'quienes junto con sus padres y familiares' es una oración de relativo explicativa que añade información no esencial, y por ello debe ir correctamente delimitada por comas, como es el caso."
    },
    {
        id: 3,
        question: "El enunciado *Juan, es el jefe*:",
        options: [
            "Está bien puntuado porque la coma está marcando una pausa en la lengua hablada.",
            "Está bien puntuado porque entre sujeto y predicado se puede colocar una coma.",
            "En esta oración, la presencia de la coma nos indica que Juan es un vocativo.",
            "Incluso tratándose de un vocativo, deberíamos suprimir la coma."
        ],
        correctAnswerIndex: 2,
        feedback: "La coma indica que 'Juan' es un vocativo, es decir, se está llamando o interpelando directamente a Juan. Es un error muy común separar el sujeto del predicado con una coma ('Juan es el jefe')."
    },
    {
        id: 4,
        question: "El enunciado *Recibieron el premio, no solo los alumnos, sino también sus profesores*:",
        options: [
            "Está mal puntuado porque no se pone coma entre sujeto y predicado. Sobra, pues, la coma entre premio y no.",
            "Aunque no se puede poner coma entre sujeto y predicado, sí se suele poner cuando, como en este caso, se trata de estructuras contrastivas del tipo no solo…, sino también…",
            "En este caso, la presencia de la coma refleja en la escritura la pausa oral.",
            "No solo sobra la coma después de premio, sino que, en ningún caso, debe ponerse coma delante de sino."
        ],
        correctAnswerIndex: 1,
        feedback: "Correcto. Aunque la regla general prohíbe la coma entre verbo y sujeto, las estructuras correlativas como 'no solo..., sino también...' son una excepción y la coma es apropiada para dar claridad."
    },
    {
        id: 5,
        question: "El enunciado *Los libros mal encuadernados, casi todos se deshojan*:",
        options: [
            "Está mal puntuado porque no se debe poner coma entre sujeto y predicado.",
            "La coma está marcando una pausa y, por tanto, es correcta.",
            "Sintácticamente, la oración es incorrecta, de manera que poco importa aquí el signo de puntuación utilizado.",
            "Está bien puntuado."
        ],
        correctAnswerIndex: 3,
        feedback: "La oración está bien puntuada. Se trata de una topicalización o tematización, donde 'Los libros mal encuadernados' se presenta como tema y el resto de la oración es el comentario. Esta estructura es válida y requiere la coma."
    },
    {
        id: 6,
        question: "El enunciado *Los temas referentes a gramática, literatura, historia, filosofía, geografía, etc., son objeto de una prueba específica*:",
        options: [
            "Está bien puntuado.",
            "Está mal puntuado: ya ha concluido la enumeración, y, por tanto, sobra la coma detrás de etc.",
            "Detrás de una abreviatura siempre se escribe punto; de ahí que no se pueda escribir coma detrás de etc.",
            "Estaría bien puntuado si, en lugar de etc., se hubiera escrito etcétera."
        ],
        correctAnswerIndex: 0,
        feedback: "El enunciado está perfectamente puntuado. Cuando la abreviatura 'etc.' no cierra el enunciado, debe ir seguida de una coma además de su punto correspondiente."
    },
    {
        id: 7,
        question: "Dados los enunciados *Ni quiere quedarse en casa ni venir con nosotros ni irse por su cuenta* / *Ni quiere quedarse en casa, ni venir con nosotros, ni irse por su cuenta*:",
        options: [
            "Solo el segundo está bien puntuado.",
            "El segundo está mal, puesto que no se escribe coma entre los miembros coordinados por conjunciones copulativas.",
            "En el segundo caso, se le quiere dar un uso expresivo; por tanto, las comas son correctas.",
            "Solo el primero está bien puntuado."
        ],
        correctAnswerIndex: 2,
        feedback: "Ambas formas son aceptables. La primera sigue la regla general de no usar coma con 'ni'. La segunda, con comas, es un uso expresivo válido para enfatizar cada elemento de la enumeración."
    },
    {
        id: 8,
        question: "El uso de la coma es incompatible con las conjunciones *y, e, ni, o, u*:",
        options: [
            "Es una regla general que no admite excepciones.",
            "Esa regla se aplica con algunas conjunciones (y, e), pero no con otras (ni, o, u).",
            "Es una regla que admite excepciones. Por ejemplo, en la siguiente oración: Pagó los lápices, las libretas, las carpetas, y salió del local.",
            "Admite excepciones, pero no la del ejemplo anterior."
        ],
        correctAnswerIndex: 2,
        feedback: "La regla general tiene excepciones. El ejemplo es un caso claro: la 'y' une la última acción de una enumeración con una proposición diferente que tiene un significado distinto, por lo que la coma antes de 'y' es correcta para marcar este cambio."
    },
    {
        id: 9,
        question: "¿Cuál de los siguientes enunciados está bien puntuado?:",
        options: [
            "Trajo todos los alimentos, pero se olvidó de la bebida.",
            "Es lento: pero seguro.",
            "Está muy, pero que muy enamorada.",
            "Está bien pero que muy bien."
        ],
        correctAnswerIndex: 0,
        feedback: "La opción 'a' está correctamente puntuada. Se usa coma antes de conjunciones adversativas como 'pero'. En la opción 'c', la expresión correcta es 'muy, pero que muy'."
    },
     {
        id: 10,
        question: "Dado el par de enunciados *Pero, ¿qué quieren esos chicos de nosotras?* y *Pero ¿qué quieren esos chicos de nosotras?*:",
        options: [
            "Los dos están bien puntuados.",
            "Solo lo está el primero, puesto que la coma indica una pausa necesaria antes de la interrogación.",
            "Solo es correcto el segundo: no se escribe coma detrás de una conjunción adversativa.",
            "Aunque la regla es la que se establece en c), este enunciado constituye una excepción, al pasar de la modalidad enunciativa a la interrogativa. Por tanto, es correcto escribirlo con coma."
        ],
        correctAnswerIndex: 0,
        feedback: "Ambas puntuaciones son correctas. La coma después de 'Pero' es opcional y depende del énfasis o la pausa que el escritor quiera marcar antes de la pregunta."
    },
    {
        id: 11,
        question: "La oración *Que salgas por las noches, me preocupa*:",
        options: [
            "Está bien puntuada.",
            "Aunque sintácticamente es incorrecto escribir coma entre el verbo y la oración subordinada sustantiva, en este caso es admisible porque la coma está marcando una pausa necesaria en el discurso oral.",
            "La coma es incorrecta.",
            "En este caso, la coma es necesaria para no producir ambigüedades."
        ],
        correctAnswerIndex: 2,
        feedback: "La coma es incorrecta. La oración 'Que salgas por las noches' funciona como sujeto del verbo 'preocupa', y nunca se debe separar el sujeto del predicado con una coma."
    },
    {
        id: 12,
        question: "La oración *Yo que te he visto enfrentarte a grandes retos, sé que podrás superar este*:",
        options: [
            "Es agramatical: no se puede decir Yo que.",
            "Es una oración de relativo cuyo antecedente es un pronombre personal sujeto, y, en este caso, es admisible no escribir la coma entre ambos elementos (entre yo y que).",
            "Si damos por válido el supuesto anterior, habría que eliminar también la coma situada detrás de la palabra retos.",
            "Hace falta escribir la coma detrás de Yo, puesto que sigue una oración de relativo explicativa."
        ],
        correctAnswerIndex: 3,
        feedback: "La oración de relativo 'que te he visto enfrentarte a grandes retos' es explicativa (añade información extra, no esencial), por lo que debe ir entre comas. Falta la coma inicial después de 'Yo'."
    },
    {
        id: 13,
        question: "La oración *Quienes hayan participado en el sorteo del lote de libros, recibirán un obsequio que podrán recoger en la tienda*:",
        options: [
            "Está bien puntuada.",
            "Está mal puntuada: falta una coma detrás de obsequio, puesto que se introduce una oración de relativo explicativa.",
            "Está mal puntuada: el segmento en el sorteo del lote de libros debe ir entre comas.",
            "Está mal puntuada, pero por razones distintas de las anteriores."
        ],
        correctAnswerIndex: 3,
        feedback: "Está mal puntuada porque la proposición 'Quienes hayan participado en el sorteo del lote de libros' funciona como sujeto de 'recibirán', y no debe separarse el sujeto del verbo con una coma."
    },
    {
        id: 14,
        question: "¿Qué oración está bien puntuada?:",
        options: [
            "El que da primero, da dos veces.",
            "El que a hierro mata, a hierro muere.",
            "En casa del herrero, cuchillo de palo.",
            "Quien la hace, la paga."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' es el mejor ejemplo del uso correcto de la coma para indicar la elipsis (omisión) de un verbo, en este caso 'hay' o 'es'. Las demás opciones son refranes cuya puntuación puede variar, aunque las mostradas son comunes."
    },
    {
        id: 15,
        question: "Las oraciones *Se fue de vacaciones a Formentera porque necesitaba un descanso* y *No tenía ni idea de literatura, porque dejó toda esa parte en blanco*:",
        options: [
            "Están mal puntuadas.",
            "Solo está bien puntuada la primera.",
            "Solo está bien puntuada la segunda.",
            "Están bien puntuadas."
        ],
        correctAnswerIndex: 3,
        feedback: "Ambas están bien puntuadas. En la primera, no se usa coma antes de 'porque' cuando introduce la causa real. En la segunda, se usa coma porque la cláusula no indica la causa, sino la razón por la que el hablante llega a esa conclusión (causal de la enunciación)."
    },
    {
        id: 16,
        question: "¿Cuál de estas oraciones está bien puntuada?:",
        options: [
            "Se celebró la gala, en el transcurso de la cual, todos los asistentes fueron felicitados por su contribución al evento.",
            "A continuación, miró a su nuevo jefe, el cual, se sintió intimidado.",
            "Durante el rodaje de la película, el cual fue bastante accidentado, surgió la amistad entre los dos actores.",
            "En la cafetería se encontró con Laura, a la cual, había hecho promesa de no ver más."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' es la correcta. La proposición relativa explicativa 'el cual fue bastante accidentado' debe ir entre comas. Las otras opciones usan comas incorrectamente, separando elementos que no deben separarse."
    },
    {
        id: 17,
        question: "Señale la opción que considere correcta:",
        options: [
            "Las prótasis condicionales y concesivas aparecen habitualmente en posición inicial y, en ese caso, lo normal es separarlas mediante una coma del resto del enunciado.",
            "Las prótasis condicionales y concesivas aparecen normalmente en posición final, y, también en estos casos, se suelen separar mediante una coma del resto del enunciado.",
            "Las prótasis condicionales y concesivas aparecen habitualmente en posición inicial, pero no es normal separarlas mediante una coma del resto del enunciado.",
            "En cualquier caso, lo normal es separarlas mediante un punto y coma."
        ],
        correctAnswerIndex: 0,
        feedback: "Correcto. Cuando una oración subordinada (como una condicional con 'si' o una concesiva con 'aunque') precede a la oración principal, se separa de esta con una coma. Ejemplo: 'Si estudias, aprobarás'."
    },
    {
        id: 18,
        question: "En la oración *La situación era tan insostenible que no le quedó otra opción*:",
        options: [
            "Debe escribirse una coma detrás de insostenible porque la conjunción que introduce una oración subordinada sustantiva.",
            "La razón de escribir una coma en ese lugar es la presencia de una inflexión tonal en la cadena hablada.",
            "Debe escribirse una coma en ese lugar porque se está introduciendo una oración subordinada consecutiva.",
            "En las construcciones consecutivas, debe evitarse la escritura de la coma ante el segundo término."
        ],
        correctAnswerIndex: 3,
        feedback: "En las oraciones consecutivas introducidas por 'que' y que dependen de un cuantificador como 'tan', 'tanto' o 'tal', no se debe escribir coma antes de 'que'."
    },
    {
        id: 19,
        question: "Dada la oración *No te vas a presentar a la reelección, si he entendido bien*, elija la opción que considere correcta:",
        options: [
            "En las construcciones condicionales, si la prótasis va pospuesta, no se suele escribir coma.",
            "En este caso, la coma es necesaria porque la prótasis no expresa realmente una condición.",
            "Se escribe siempre coma, aunque la prótasis vaya pospuesta.",
            "Ninguna de las anteriores respuestas es correcta."
        ],
        correctAnswerIndex: 1,
        feedback: "La coma es necesaria. Aunque la subordinada condicional está al final (donde normalmente no llevaría coma), aquí no es una condición real, sino un comentario del hablante. Se conoce como 'condicional de la enunciación'."
    },
    {
        id: 20,
        question: "Dada la oración *Si será habladora que todos los profesores no saben ya qué hacer*, establezca la opción que considere correcta:",
        options: [
            "Debe escribirse coma detrás de habladora, al ser la prótasis condicional.",
            "En este caso, sería preferible escribir dos puntos.",
            "Se trata de una oración consecutiva, y, en este caso, es recomendable no escribir la coma.",
            "Se trata, en efecto, de una oración consecutiva, pero, en este caso, sí es recomendable escribir coma."
        ],
        correctAnswerIndex: 2,
        feedback: "Esta estructura 'Si será...' tiene un valor consecutivo (equivale a 'Es tan habladora que...'). Al igual que en otras consecutivas con 'que', no se recomienda el uso de la coma antes de 'que'."
    },
    {
        id: 21,
        question: "La oración *He pedido la revisión del examen, aunque, la verdad, no creo que sirva de mucho*:",
        options: [
            "Está bien puntuada.",
            "Está mal porque detrás de aunque no debe escribirse coma.",
            "Está mal puntuada porque detrás de examen, en lugar de coma, debería figurar el signo de dos puntos.",
            "Sobra la coma detrás de verdad."
        ],
        correctAnswerIndex: 0,
        feedback: "La puntuación es correcta. El inciso 'la verdad' debe ir entre comas, y la coma antes de 'aunque' es válida para marcar la pausa y el matiz concesivo."
    },
    {
        id: 22,
        question: "Señale el enunciado que considere correcto:",
        options: [
            "Detrás de así que siempre se escribe coma: Así que, no te lo pienses demasiado.",
            "Detrás de así que no se escribe coma, ni siquiera cuando lo que sigue es una pregunta: Así que ¿qué piensas hacer con el asunto?",
            "La regla general es no escribir coma detrás de así que, excepto cuando se trata de una pregunta.",
            "Escribir o no la coma depende de la inflexión tonal que se le quiera dar a la construcción."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción correcta es la 'c'. Como norma general no se escribe coma tras 'así que', pero cuando introduce una pregunta directa, la RAE recomienda ponerla para separar la conjunción del enunciado interrogativo."
    },
    {
        id: 23,
        question: "¿Está bien puntuada la oración *Lo que me gusta de viajar en tren es que mientras descansas vas viendo el paisaje*?:",
        options: [
            "No; el segmento de viajar en tren debería ir entre comas.",
            "No; habría que poner dos puntos en lugar de coma tras la palabra tren.",
            "Sí; es admisible no poner entre comas el segmento mientras descansas.",
            "No; obligatoriamente, el segmento mientras descansas ha de ir entre comas."
        ],
        correctAnswerIndex: 2,
        feedback: "La puntuación es admisible. Cuando una oración subordinada adverbial es breve y se integra fluidamente en la principal, las comas que la aíslan son opcionales."
    },
    {
        id: 24,
        question: "Las oraciones *He ido a verla varias veces, pero no ha querido hablar conmigo* y *He ido a verla varias veces, sin embargo, no ha querido hablar conmigo*:",
        options: [
            "Está bien puntuada la primera, pero no la segunda.",
            "La primera está mal puntuada; la segunda, en cambio, está bien.",
            "Las dos están mal puntuadas.",
            "Las dos están bien puntuadas."
        ],
        correctAnswerIndex: 3,
        feedback: "Ambas oraciones están bien puntuadas. Se escribe coma delante de la conjunción 'pero'. El conector 'sin embargo' debe ir entre comas cuando se intercala en la oración."
    },
    {
        id: 25,
        question: "¿Cuál de los siguientes enunciados está bien puntuado?:",
        options: [
            "Voy a correr todo lo que pueda: es más, creo que voy a bajar de los diez segundos.",
            "Voy a correr todo lo que pueda; es más: creo que voy a bajar de los diez segundos.",
            "Voy a correr todo lo que pueda; es más, creo que voy a bajar de los diez segundos.",
            "Los dos últimos enunciados están bien puntuados."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' es la más adecuada. Los conectores como 'es más' suelen separarse con punto y coma del enunciado anterior y con una coma del enunciado que introducen."
    },
    {
        id: 26,
        question: "¿Cuál de los siguientes enunciados está bien puntuado?:",
        options: [
            "Y, sin embargo te quiero.",
            "Y, sin embargo, te quiero.",
            "Y sin embargo te quiero.",
            "Tanto b) como c) son correctos."
        ],
        correctAnswerIndex: 3,
        feedback: "Ambas opciones 'b' y 'c' son correctas. 'Sin embargo' va entre comas. Si le precede una conjunción como 'y', la coma después de esta es opcional."
    },
    {
        id: 27,
        question: "La puntuación en *Así, lo consiguió retratar* y *Así lo consiguió retratar*:",
        options: [
            "Es correcta solo en el primer caso, puesto que el conector se suele aislar del resto del enunciado con una coma.",
            "Los conectores no necesitan aislarse con una coma del resto del enunciado; por consiguiente, solo el segundo supuesto es correcto.",
            "Las dos oraciones están bien puntuadas.",
            "Ninguna de las oraciones está bien puntuada."
        ],
        correctAnswerIndex: 2,
        feedback: "Ambas son correctas, pero significan cosas distintas. En la primera, 'Así,' es un conector ('por lo tanto'). En la segunda, 'Así' es un adverbio de modo ('de esa manera')."
    },
    {
        id: 28,
        question: "En *Tres por cinco, quince*:",
        options: [
            "La coma es optativa.",
            "La coma debe ser sustituida por el signo de los dos puntos.",
            "Desde el punto de vista normativo, no se debe escribir coma en este tipo de enunciados.",
            "La coma debe escribirse para indicar que el verbo está elidido."
        ],
        correctAnswerIndex: 3,
        feedback: "La coma es necesaria para indicar la elisión del verbo 'son'. Es un uso frecuente de la coma en enunciados breves."
    },
    {
        id: 29,
        question: "El enunciado *Felipe se llevó el primer premio; Víctor, el segundo, y Mario, el tercero*:",
        options: [
            "Está mal puntuado porque no puede haber coma delante de la conjunción copulativa y.",
            "El error está en el punto y coma detrás de premio, que debe sustituirse por una coma.",
            "La puntuación correcta del enunciado sería: Felipe se llevó el primer premio, Víctor el segundo y Mario el tercero.",
            "El enunciado está bien puntuado, aunque se admitiría la puntuación establecida en c) si se quiere escribir con un estilo menos trabado."
        ],
        correctAnswerIndex: 3,
        feedback: "El enunciado 'd' es el más completo. La puntuación con punto y coma y comas es correcta. La coma antes de 'y' es necesaria porque el último elemento también contiene una coma por elipsis verbal. La opción 'c' es una alternativa más simple y también aceptable."
    },
    {
        id: 30,
        question: "Marque el enunciado que considere falso:",
        options: [
            "Se escribe el signo de dos puntos tras las fórmulas de saludo en cartas y documentos: Querida Mercedes: / Espero que hayas tenido buen viaje…",
            "Es obligatorio el uso de la coma en las reduplicaciones enfáticas o expresivas de una palabra: Me gusta el café, café.",
            "En la datación de cartas y documentos, se escribe coma entre el lugar y la fecha: Valencia, 21 de julio de 2010.",
            "Se separan mediante coma el nombre de una colección y el número del volumen correspondiente: Colección Ánfora y Delfín, 16."
        ],
        correctAnswerIndex: 1,
        feedback: "La afirmación 'b' es falsa. Aunque es común usar una coma en reduplicaciones enfáticas, no se considera un uso 'obligatorio'. Las otras opciones describen usos correctos de los signos de puntuación."
    },
    {
        id: 31,
        question: "El signo de punto y coma:",
        options: [
            "Coincide con la coma en casi todas sus funciones.",
            "Siempre delimita unidades que están por encima del enunciado.",
            "En ocasiones, la función que ejerce no le aleja mucho de la del punto.",
            "Es intercambiable, en muchas ocasiones, con los dos puntos."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' es la más precisa. El punto y coma indica una pausa superior a la de la coma e inferior a la del punto, y a menudo se utiliza para separar oraciones con una estrecha relación semántica, una función similar a la del punto y seguido."
    },
    {
        id: 32,
        question: "Señale la opción en la que el signo de punto y coma está bien utilizado:",
        options: [
            "Si vienes más tarde; no podremos ir al cine.",
            "Presentó dentro del plazo reglamentario toda la documentación necesaria; sin embargo, le han dicho que tiene pocas posibilidades.",
            "Tiene pocas posibilidades; aunque ha presentado toda la documentación dentro del plazo legal.",
            "Aunque tengo mucho trabajo; procuraré ir."
        ],
        correctAnswerIndex: 1,
        feedback: "La opción 'b' muestra un uso canónico del punto y coma: se coloca delante de conectores como 'sin embargo', 'por tanto', etc., cuando estos unen oraciones largas."
    },
    {
        id: 33,
        question: "Los enunciados *Ha nevado: estoy contentísimo* y *Ha nevado; estoy contentísimo*:",
        options: [
            "Dicen exactamente lo mismo.",
            "Expresan ideas distintas: en el primer caso, expresa que estoy contentísimo porque ha nevado; en el segundo, que estoy contentísimo, pero no necesariamente por la nieve.",
            "Expresan ideas distintas: en el primer caso, se establece la consecuencia que me produce la lluvia; en el segundo, la causa.",
            "Expresan ideas distintas, pero por causas distintas a las indicadas en b) y c)."
        ],
        correctAnswerIndex: 1,
        feedback: "La opción 'b' explica la diferencia. Los dos puntos establecen una relación de causa-consecuencia. El punto y coma, en cambio, solo indica que las dos ideas están relacionadas semánticamente."
    },
    {
        id: 34,
        question: "El uso de los dos puntos en el enunciado *Así me gustan las historias: breves, emocionantes y con un final sorprendente*:",
        options: [
            "Es correcto, aunque también se admitiría el uso de coma o punto y coma.",
            "Es incorrecto, ya que sobra el elemento anticipador (Así).",
            "Es incorrecto, puesto que deberíamos ordenar el enunciado de esta manera: Las historias me gustan así: breves, emocionantes y con un final sorprendente.",
            "Es correcto."
        ],
        correctAnswerIndex: 3,
        feedback: "La puntuación es correcta. Los dos puntos se usan para introducir una enumeración explicativa, y en este caso la palabra 'Así' funciona como un elemento anticipador que justifica su uso."
    },
    {
        id: 35,
        question: "¿Qué enunciado está bien puntuado?:",
        options: [
            "Ayer me compré: un libro de Javier Cercas, un disco de Joaquín Sabina, una libreta de papel reciclado y una pluma estilográfica.",
            "Mis favoritas son: Ana, Bárbara y Mercedes.",
            "Me gustan, sobre todo, dos autores: Ian McEwan y Julian Barnes.",
            "La película está dirigida por: Carlos Saura, Víctor Erice y Juan Antonio Bardem."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' es la única correcta. No debe escribirse dos puntos después de una preposición (d) o entre un verbo y su complemento (a, b). En 'c', la expresión 'dos autores' funciona como elemento anticipador."
    },
    {
        id: 36,
        question: "El enunciado *Al local no se puede acceder con objetos metálicos, tales como: tijeras, cuchillos, navajas, sacacorchos, etc.*:",
        options: [
            "Está bien puntuado.",
            "Está mal puntuado, ya que deben sustituirse los dos puntos por punto y coma.",
            "Está mal puntuado, ya que debe prescindirse de la coma.",
            "Está mal puntuado, puesto que sobran los dos puntos."
        ],
        correctAnswerIndex: 3,
        feedback: "La oración está mal puntuada porque los dos puntos son redundantes. La locución 'tales como' ya introduce la ejemplificación, por lo que no se necesita ningún signo adicional."
    },
    {
        id: 37,
        question: "Los dos puntos en *Que cada uno lleve lo que pueda: pan, agua, galletas, chocolate…*:",
        options: [
            "No se deben escribir aquí porque falta el elemento anticipador.",
            "Al no ser una enumeración, el signo es incorrecto.",
            "Son correctos, puesto que el signo da paso a una serie de elementos enumerativos de carácter ejemplificador.",
            "Ninguna de las respuestas anteriores es correcta."
        ],
        correctAnswerIndex: 2,
        feedback: "El uso de los dos puntos es correcto. La primera parte del enunciado tiene sentido completo y funciona como una presentación de la lista de ejemplos que viene a continuación."
    },
    {
        id: 38,
        question: "Los dos puntos en *Me queda todavía una lección por estudiar: la relativa al cambio lingüístico*:",
        options: [
            "Son incorrectos porque al signo no sigue una enumeración.",
            "Son correctos, aunque podrían alternar con el punto y coma.",
            "Son correctos porque, aunque no haya enumeración, sí hay un elemento anticipador.",
            "Son incorrectos porque falta dicho elemento anticipador."
        ],
        correctAnswerIndex: 2,
        feedback: "La puntuación es correcta. Los dos puntos se usan aquí para conectar una proposición con su aclaración. La expresión 'una lección por estudiar' funciona como el elemento anticipador."
    },
    {
        id: 39,
        question: "¿Cuál de las siguientes oraciones está bien puntuada?:",
        options: [
            "Abrió los ojos y pensó, «Tendré que llevármela de aquí».",
            "Ellos dicen que: si vas a entrar, tendrás que dejar la mochila aquí.",
            "«Vas a tener que quedarte»: dijo mi amigo.",
            "Rodolfo no es una persona: es mi gato."
        ],
        correctAnswerIndex: 3,
        feedback: "La opción 'd' es la correcta. Los dos puntos se emplean para conectar dos oraciones, donde la segunda es una explicación de la primera. Las otras opciones tienen errores en el uso de la puntuación con el discurso directo."
    },
    {
        id: 40,
        question: "Diga qué tipo de relaciones entre enunciados no se pueden expresar mediante el signo de los dos puntos:",
        options: [
            "Causa-efecto.",
            "Finalidad.",
            "Consecuencia.",
            "Explicación."
        ],
        correctAnswerIndex: 1,
        feedback: "Los dos puntos pueden expresar relaciones de causa-efecto, consecuencia o explicación. Sin embargo, no se utilizan habitualmente para expresar una relación de finalidad (propósito)."
    },
    {
        id: 41,
        question: "El enunciado *Ha realizado todas las tareas correctamente: por tanto, no tendrá problemas para aprobar*:",
        options: [
            "Está bien puntuado porque entre las dos oraciones se establece una relación de consecuencia.",
            "Está mal puntuado: los dos puntos deben sustituirse por un punto y coma.",
            "Está mal puntuado porque el valor consecutivo se ha de expresar bien por un conector, bien por dos puntos, pero no por ambos a la vez.",
            "Está bien puntuado porque el valor consecutivo puede expresarse mediante un elemento consecutivo (por tanto) y, simultáneamente, por el signo de los dos puntos."
        ],
        correctAnswerIndex: 2,
        feedback: "La puntuación es redundante. Tanto los dos puntos como el conector 'por tanto' expresan consecuencia. Se debe optar por uno de los dos. Correcto: '...correctamente; por tanto, no tendrá problemas...'."
    },
    {
        id: 42,
        question: "El enunciado *Todavía no ha llegado. Es más: no creo que venga esta tarde*:",
        options: [
            "Está mal puntuado porque no se debe usar el signo de los dos puntos detrás de un conector.",
            "Está bien puntuado, pero la oración que sigue al conector discursivo y a los dos puntos debe iniciarse con mayúscula.",
            "Está bien puntuado, aunque también sería admisible una coma en lugar de los dos puntos.",
            "Ninguna de las anteriores respuestas es correcta."
        ],
        correctAnswerIndex: 0,
        feedback: "El enunciado está mal puntuado. Después de un conector discursivo como 'Es más', lo apropiado es usar una coma, no dos puntos. La forma correcta sería: '... Es más, no creo que venga esta tarde'."
    },
    {
        id: 43,
        question: "El enunciado *Se lo dije repetidamente. Pues bien: sigue haciendo lo mismo* ¿puede escribirse también *Se lo dije repetidamente. Pues bien, sigue haciendo lo mismo*?:",
        options: [ "Sí.", "No.", "Ambos están mal puntuados.", "Están bien puntuados, pero en el primer caso, tras los dos puntos, debe iniciarse con mayúscula." ],
        correctAnswerIndex: 0,
        feedback: "Sí, ambas formas son aceptables. El conector 'Pues bien' puede ir seguido tanto de dos puntos como de una coma, dependiendo de la pausa que se quiera marcar."
    },
    {
        id: 44,
        question: "¿Qué enunciado está bien puntuado?:",
        options: [
            "Estimado Javier,\nTe escribo para recordarte el encuentro que tendrá lugar…",
            "Estimado Javier:\nTe escribo para recordarte el encuentro que tendrá lugar…",
            "Estimado Javier.\nTe escribo para recordarte el encuentro que tendrá lugar…",
            "Estimado Javier:\nte escribo para recordarte el encuentro que tendrá lugar…"
        ],
        correctAnswerIndex: 1,
        feedback: "La opción 'b' es la correcta. En español, después del saludo en una carta se usan dos puntos, y el texto principal comienza en un nuevo párrafo y con letra mayúscula."
    },
    {
        id: 45,
        question: "¿En qué enunciado se ha hecho un uso correcto de la raya?:",
        options: [
            "Este curso imparto docencia en tres asignaturas –todas ellas en el primer cuatrimestre.",
            "Este año imparto docencia en tres asignaturas –todas ellas en el primer cuatrimestre–.",
            "Las dos anteriores son correctas.",
            "Cuando el inciso ocupa la posición final del enunciado, como ocurre con los enunciados anteriores (a y b), hay que sustituir la raya por los paréntesis."
        ],
        correctAnswerIndex: 1,
        feedback: "La opción 'b' está correctamente puntuada. Cuando se usan rayas para un inciso en medio de una oración, se debe usar una raya de apertura y otra de cierre. En 'a', falta la raya de cierre antes del punto final."
    },
    {
        id: 46,
        question: "¿Qué enunciado está bien puntuado?:",
        options: [
            "Lo vi en una foto con sombrero y delante de un micrófono. (Creo que cantó y todo.)",
            "¿Cuánto tiempo hace que trabajas en la UNED? (Universidad Nacional de Educación a Distancia).",
            "Visto el expediente, (repleto de sobresalientes) creo que le darán a él la plaza.",
            "Se marchó sin decir nada. (A lo mejor tú sabes por qué)."
        ],
        correctAnswerIndex: 0,
        feedback: "La opción 'a' es la más aceptable. Representa una oración completa entre paréntesis que funciona como un comentario a la oración anterior. En este caso, la puntuación final (el punto) se incluye dentro del paréntesis."
    },
    {
        id: 47,
        question: "El uso de los corchetes en *El escritor afirmo: «No voy a cumplir algunas de las normas ortográficas recién aprobadas [y ello pese a ser académico] porque no estoy de acuerdo con los últimos cambios»*:",
        options: [
            "Señala una aclaración del escritor cuya cita se reproduce.",
            "Indica que el comentario no pertenece al autor de la cita.",
            "Los corchetes se pueden sustituir por un paréntesis.",
            "Indica que el pasaje encerrado entre ellos se puede suprimir."
        ],
        correctAnswerIndex: 1,
        feedback: "Los corchetes se usan dentro de una cita textual para intercalar una aclaración o comentario que no pertenece al texto original, sino a quien lo transcribe."
    },
    {
        id: 48,
        question: "El signo de la raya:",
        options: [
            "Tiene las mismas funciones que el guion (-).",
            "Tiene las mismas funciones que el guion bajo ( _ ).",
            "Es un signo exclusivamente tipográfico.",
            "Puede emplearse como signo simple o como signo doble."
        ],
        correctAnswerIndex: 3,
        feedback: "La raya (—) puede usarse como signo doble para encerrar incisos, o como signo simple para introducir elementos en una lista o las intervenciones en un diálogo."
    },
    {
        id: 49,
        question: "¿Qué enunciado hace un uso correcto de la raya?:",
        options: [
            "Las clases de Salvador –¡cómo ponerlo en duda!– son las más interesantes.",
            "–Voy a revisar el manuscrito –dijo Mila. A la mañana siguiente, el libro estaba ya en la imprenta.",
            "–Todavía voy un poco coja –me dijo Amparo tocándose la pierna–. No te puedes imaginar el golpe que me di.",
            "Todos los enunciados anteriores utilizan correctamente el signo de la raya."
        ],
        correctAnswerIndex: 3,
        feedback: "Todos los ejemplos son correctos. 'a' muestra un inciso, 'b' una intervención en un diálogo con un comentario del narrador, y 'c' una intervención más compleja también con un inciso del narrador."
    },
    {
        id: 50,
        question: "¿Es correcta la puntuación en el enunciado que se expone a continuación?:\nSegún Carolina Figueras, los signos de puntuación de primer régimen son:\n– coma,\n– dos puntos,\n– punto y coma,\n– punto y seguido,\n– punto y aparte,\n– punto final.",
        options: [
            "Sí, aunque igualmente válido hubiera sido prescindir del signo de la coma.",
            "No. Lo correcto hubiera sido escribir punto después de cada enunciado y utilizar la mayúscula inicial.",
            "Las dos anteriores son correctas.",
            "En relación con esta cuestión, no hay una normativa explícita."
        ],
        correctAnswerIndex: 0,
        feedback: "La puntuación es correcta. En las listas, se puede optar por cerrar cada línea con coma (excepto la última, con punto) o sin puntuación (poniendo punto solo al final de la última). Ambas son válidas."
    },
    {
        id: 51,
        question: "En el enunciado *Los rasgos más sobresalientes de su estilo son:\n– Gran complejidad en el vocabulario, con abundancia de términos poco utilizados.\n – Abundancia de oraciones subordinadas adverbiales, sobre todo de lugar y de tiempo.\n – Inclusión de latinismos y de neologismos.*",
        options: [
            "La puntuación no es correcta.",
            "En estos casos, la raya puede sustituirse por letras o números.",
            "La puntuación es correcta.",
            "Tanto la b) como la c) son ciertas."
        ],
        correctAnswerIndex: 3,
        feedback: "La puntuación de la lista con rayas es correcta. Además, es cierto que este tipo de listas también pueden organizarse usando letras o números en lugar de rayas."
    },
    {
        id: 52,
        question: "Señale la opción incorrecta:",
        options: [
            "Las comillas se utilizan para enmarcar citas textuales.",
            "Los extranjerismos crudos pueden ir entre comillas y, en textos impresos, también en letra cursiva.",
            "Se escriben entre comillas los nombres propios y las siglas y acrónimos de otras lenguas.",
            "Los usos metalingüísticos también se escriben entre comillas."
        ],
        correctAnswerIndex: 2,
        feedback: "La afirmación 'c' es incorrecta. Los nombres propios extranjeros y sus siglas (ej. John, CIA) no necesitan comillas; se integran en el texto como los demás nombres propios."
    },
    {
        id: 53,
        question: "En el enunciado *«Estoy en lo mejor de mi vida» –dijo Bioy Casares–: «por la mañana, escribo; al mediodía, tenis; por la tarde, mujeres»*:",
        options: [
            "Se utilizan bien las comillas.",
            "Se utilizan mal los dos puntos.",
            "Se utilizan mal las comillas.",
            "Después de los dos puntos, debería haber utilizado mayúscula inicial."
        ],
        correctAnswerIndex: 1,
        feedback: "Los dos puntos después del segundo guion son incorrectos. El comentario del narrador interrumpe la cita, que debería continuar sin dos puntos. Correcto: '...Casares—. Por la mañana...'"
    },
    {
        id: 54,
        question: "En el enunciado *¡Vaya!, siete suspensos. Se nota que el verbo «estudiar» es tu favorito*:",
        options: [
            "Sobran las comillas en la palabra estudiar.",
            "Las comillas señalan que esa palabra se ha utilizado irónicamente.",
            "Las comillas reflejan que esa palabra no es de uso corriente.",
            "Ninguna de las respuestas anteriores es correcta."
        ],
        correctAnswerIndex: 1,
        feedback: "Las comillas se utilizan, entre otras cosas, para indicar que una palabra o expresión se está usando con un sentido especial o irónico, como en este caso."
    },
    {
        id: 55,
        question: "¿Qué enunciado está bien puntuado?:",
        options: [
            "El crítico señalaba que «Alatriste es importante porque enseña que no hay vida mejor que la literaria.»",
            "Has leído ya la última novela de Javier Cercas?",
            "¿La has leído tú, Mara?",
            "A mí me gustan las que tienen acción, intriga, asesinatos…."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' está bien puntuada. El vocativo ('Mara') se separa con una coma del resto de la pregunta. 'a' es aceptable, 'b' carece del signo de apertura '¿' y 'd' tiene cuatro puntos suspensivos en lugar de tres."
    },
    {
        id: 56,
        question: "¿Qué enunciado está bien puntuado?:",
        options: [
            "En la primera cita, me formuló las siguientes preguntas: «¿Cuántos años tienes?, ¿ganas mucho dinero?, ¿tienes casa propia?»",
            "¿Mi marido?. Ni idea; se marchó hace años con una etnógrafa del habla.",
            "Me gusta la televisión, el cine, salir con los amigos, el fútbol, etc…",
            "¿Viste a ese Sr…?"
        ],
        correctAnswerIndex: 0,
        feedback: "La opción 'a' es correcta. Cuando se citan varias preguntas seguidas, se separan por comas y solo la última lleva el punto (implícito en la comilla de cierre). Las demás opciones usan incorrectamente el punto, los puntos suspensivos y las abreviaturas."
    },
    {
        id: 57,
        question: "En el enunciado *Mi amigo, Marcial, siempre juega al tenis los miércoles*:",
        options: [
            "El nombre propio constituye una aposición especificativa.",
            "Al tratarse de una aposición especificativa, el nombre propio debe escribirse entre comas.",
            "Al escribirse entre comas, el nombre propio constituye una aposición explicativa, por lo que se deduce que la persona que habla solo tiene un amigo.",
            "Ninguna de las anteriores respuestas es correcta."
        ],
        correctAnswerIndex: 2,
        feedback: "Las comas encierran una aposición explicativa. Al explicar quién es 'mi amigo' (dando su nombre), se infiere que no hay necesidad de especificar, porque solo hay uno."
    },
    {
        id: 58,
        question: "¿Qué enunciado está bien puntuado?:",
        options: [
            "Le aconsejé que no se liara con Beatriz, y no me hizo caso.",
            "Le aconsejé que no se liara con Beatriz, y Estefanía, a la vez.",
            "Le aconsejé que no se liara con Beatriz y no me hizo caso.",
            "También le aconsejé que no se liara, a la vez, con Beatriz, y Begoña."
        ],
        correctAnswerIndex: 0,
        feedback: "La opción 'a' está bien puntuada. La coma antes de 'y' es correcta aquí porque une dos proposiciones con ideas diferentes ('aconsejar' vs 'no hacer caso')."
    },
    {
        id: 59,
        question: "El enunciado *No pude hacer otra cosa sino renunciar*:",
        options: [
            "Está mal puntuado, ya que falta una coma delante de la conjunción adversativa sino.",
            "El enunciado puede cambiar de significado si se escribe o no la coma delante de la conjunción adversativa.",
            "Está bien puntuado.",
            "La ausencia de coma antes de la conjunción sino hace que el enunciado sea ambiguo."
        ],
        correctAnswerIndex: 2,
        feedback: "Está bien puntuado. No se escribe coma antes de 'sino' en la estructura 'no... sino' cuando lo que sigue no es una oración completa. En este caso, equivale a 'excepto'."
    },
    {
        id: 60,
        question: "¿Qué enunciado está bien puntuado?:",
        options: [
            "Quien lo quiera, que se pase por el departamento.",
            "Cuando acabes, apaga la luz.",
            "Apaga la luz, cuando acabes.",
            "Todos los enunciados anteriores están bien puntuados."
        ],
        correctAnswerIndex: 3,
        feedback: "Los tres enunciados son correctos. 'a' y 'b' tienen la coma obligatoria tras la subordinada inicial. En 'c', la coma antes de la subordinada final es opcional pero correcta."
    },
    {
        id: 61,
        question: "Señale la opción errónea:",
        options: [
            "La función principal del punto consiste en señalar el final de un enunciado.",
            "El punto tiene también usos no lingüísticos.",
            "El correlato del punto en la cadena oral es una pausa de extensión variable, pero en todo caso muy marcada.",
            "Si aparece al final de un escrito o de una división importante del texto, se denomina punto y final."
        ],
        correctAnswerIndex: 3,
        feedback: "La afirmación 'd' es errónea. El término correcto es 'punto final', no 'punto y final'."
    },
    {
        id: 62,
        question: "Señale la opción correcta:",
        options: [
            "Se escribe punto tras los títulos y subtítulos de libros, artículos, capítulos, etc., cuando aparecen aislados y son el único texto del renglón.",
            "Los eslóganes publicitarios deben llevar punto final, aunque aparezcan aislados y sean el único texto en su línea.",
            "Los textos que aparecen bajo ilustraciones o fotografías dentro de un libro o publicación periódica no suelen cerrarse con punto cuando constituyen etiquetas que describen el contenido de dichas imágenes.",
            "En los índices que aparecen en las obras para facilitar el acceso a la información, debe escribirse obligatoriamente punto al final de cada línea."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' es correcta. Los pies de foto o imagen que son descriptivos no suelen llevar punto final. Las opciones 'a', 'b' y 'd' son incorrectas; en esos casos no se suele usar punto."
    },
    {
        id: 63,
        question: "Señale la opción errónea:",
        options: [
            "El uso del punto y coma depende del contexto, concretamente de la longitud y complejidad de las secuencias que se separan y de la presencia de otros signos.",
            "Como regla general, se escribe minúscula tras los dos puntos que anuncian una enumeración.",
            "Sin embargo, se escribe mayúscula cuando los dos puntos establecen relaciones semánticas de diverso tipo entre las unidades que separan.",
            "En las obras teatrales, se utilizan los paréntesis para encerrar las acotaciones del autor o los apartes de los personajes."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' es errónea. La regla general es escribir con minúscula después de dos puntos, salvo en casos específicos como el saludo de una carta o al citar textualmente."
    },
    {
        id: 64,
        question: "¿Qué enunciado está mal puntuado?:",
        options: [
            "Tiene tanto miedo al examen que dudo que se presente.",
            "Depende tanto de lo que le diga su novia que apenas sabe hacer nada por sí mismo.",
            "Cuanto más esfuerzo hagas para salir de esa situación tanto mayor será tu alegría si lo logras.",
            "Lo hice como me dijiste."
        ],
        correctAnswerIndex: 2,
        feedback: "El enunciado 'c' está mal puntuado. Le falta una coma para separar la oración subordinada inicial de la principal: 'Cuanto más esfuerzo hagas..., tanto mayor será tu alegría...'."
    },
    {
        id: 65,
        question: "Señale el enunciado correctamente puntuado:",
        options: [
            "Valencia: 15 de septiembre de 2011.",
            "Pons, Salvador: Conceptos y aplicaciones de la teoría de la relevancia.",
            "Estás igual, igual que hace diez años.",
            "Hoy 22 de julio hace dos años de aquello."
        ],
        correctAnswerIndex: 1,
        feedback: "La opción 'b' presenta un formato bibliográfico estándar y correctamente puntuado. 'a' requiere coma. 'c' requiere coma (Estás igual, igual...). 'd' requiere comas para el inciso (Hoy, 22 de julio,...)."
    },
    {
        id: 66,
        question: "El enunciado *Amparo, ¿cómo puedes tener toda la programación en la cabeza?*:",
        options: [
            "Está mal puntuado porque no se puede escribir coma entre sujeto y predicado.",
            "Está mal puntuado porque la coma debe ser sustituida por dos puntos.",
            "Está mal puntuado porque la interrogación debe contener todo el enunciado.",
            "Está bien puntuado porque la coma indica que Amparo es un vocativo."
        ],
        correctAnswerIndex: 3,
        feedback: "La puntuación es correcta. La coma separa el vocativo ('Amparo') del resto del enunciado interrogativo, que es la forma adecuada de hacerlo."
    },
    {
        id: 67,
        question: "Señale el enunciado que refleje un uso incorrecto de los dos puntos:",
        options: [
            "Ella me dijo: «No te quiero ver más».",
            "Todavía queda una cuestión por aclarar: ¿cuándo me vas a pagar?",
            "El trabajo fue realizado por: Marta, Virginia y Milagros.",
            "Apenas tiene gasolina: no podrá ir muy lejos con ese coche."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' es incorrecta. No se deben usar dos puntos después de una preposición ('por') para introducir la enumeración que funciona como su término."
    },
    {
        id: 68,
        question: "Señale el enunciado bien puntuado:",
        options: [
            "En la localidad de Llíria, (Valencia) se celebra todos los años una fiesta gastronómica.",
            "¿David, has pasado ya a firmar el contrato?",
            "El equipo de este año en el que han invertido una millonada, no está dando el rendimiento esperado.",
            "¿Te acuerdas de mí, Ofelia?"
        ],
        correctAnswerIndex: 3,
        feedback: "La opción 'd' está bien puntuada. El vocativo ('Ofelia') al final de la oración se separa con una coma. Las demás opciones tienen errores de puntuación."
    },
    {
        id: 69,
        question: "El enunciado *Llevo un día que ni tengo ganas de salir ni de leer ni de nada*:",
        options: [
            "Está mal puntuado porque siempre hay que separar con comas los miembros coordinados por la conjunción copulativa ni.",
            "Está bien puntuado porque nunca hay que separar con comas los miembros coordinados por la conjunción copulativa ni.",
            "La coma es optativa.",
            "Ninguna de las respuestas anteriores es correcta."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' es la más precisa. Por regla general, no se usa coma con 'ni'. Sin embargo, se pueden usar para dar un énfasis especial a cada elemento. Por tanto, su uso es optativo."
    },
    {
        id: 70,
        question: "¿Qué enunciado está mal puntuado?:",
        options: [
            "Ha suspendido siete u ocho; es muy «estudioso».",
            "Alguien sabio dijo: «No basta con darse cuenta, sino que hay que saber actuar».",
            "No sé qué significa exactamente sinuoso.",
            "Podríamos sustituir ese «Quien bien te quiere te hará llorar» por «Quien bien te quiere te hará reír», ¿no te parece?"
        ],
        correctAnswerIndex: 2,
        feedback: "El enunciado 'c' presenta una puntuación mejorable. Al referirse a la palabra 'sinuoso' como tal (uso metalingüístico), lo ideal sería escribirla entre comillas o en cursiva para distinguirla del resto del enunciado."
    },
    {
        id: 71,
        question: "Señale el enunciado bien puntuado:",
        options: [
            "No trajo nada de lo que había dicho: salvo la bebida.",
            "No vino David sino Juan Carlos.",
            "¿Qué puedo hacer sino secundar la huelga?",
            "Estudió el capítulo primero y se fue a dar una vuelta."
        ],
        correctAnswerIndex: 3,
        feedback: "La opción 'd' está correctamente puntuada. En 'b', falta una coma antes de 'sino'. En 'c', el uso de 'sino' es correcto sin coma. En 'a', los dos puntos son incorrectos. La opción 'd' no presenta ningún problema."
    },
    {
        id: 72,
        question: "El enunciado *Los estudiantes estarán en la manifestación, porque hoy hay clase y las aulas están vacías*:",
        options: [
            "Está mal puntuado: sobra la coma.",
            "Está mal puntuado: hay que sustituir la coma por los dos puntos.",
            "Está bien puntuado porque se trata de una oración causal del enunciado.",
            "Está bien puntuado porque se trata de una oración causal de la enunciación."
        ],
        correctAnswerIndex: 3,
        feedback: "La puntuación es correcta. La coma es necesaria porque la razón no es la causa del hecho, sino la justificación del hablante para hacer esa afirmación (causal de la enunciación)."
    },
    {
        id: 73,
        question: "¿Qué oración está bien puntuada?:",
        options: [
            "Los alumnos, que no vengan a clase, tendrán que traer una justificación.",
            "Leí el libro de Posteguillo, porque me gusta mucho la novela histórica.",
            "Leí el libro de Posteguillo porque me gusta mucho la novela histórica.",
            "Que tengas aprobado el examen, no significa que vayas a aprobar la asignatura."
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' es la correcta. La causa ('porque me gusta...') está directamente ligada a la acción principal, por lo que no lleva coma. Las otras opciones tienen errores de puntuación."
    },
    {
        id: 74,
        question: "El enunciado *Mila escribió el prólogo; Santiago, el primer capítulo, y David, los restantes*:",
        options: [
            "Está mal puntuado.",
            "Está bien puntuado, excepto la coma delante de y.",
            "Está bien puntuada, aunque también es admisible Mila escribió el prólogo, Santiago el primer capítulo y David los restantes.",
            "Ninguna de las anteriores respuestas es correcta."
        ],
        correctAnswerIndex: 2,
        feedback: "La puntuación es correcta. El punto y coma separa los elementos principales, y las comas indican la elisión del verbo 'escribió'. Se usa coma antes de 'y' porque el último elemento también contiene una coma elíptica. La forma simplificada también es admisible."
    },
    {
        id: 75,
        question: "Señale el enunciado bien puntuado:",
        options: [
            "Mis amigos, y yo nos vemos todos los meses en el café Rodrigo.",
            "Mara, es la única que se lee siempre todos los libros.",
            "Aunque cada uno vive en una ciudad distinta, procuramos vernos una vez al año.",
            "Pero, ¿desde cuándo no venías por aquí?"
        ],
        correctAnswerIndex: 2,
        feedback: "La opción 'c' está bien puntuada. La oración concesiva 'Aunque...' precede a la principal, por lo que se separan con coma. Las opciones 'a' y 'b' separan incorrectamente el sujeto del predicado."
    }
];
