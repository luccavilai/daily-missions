// Contenido diario - 90 días desde el 5 de mayo de 2026
// Cada día tiene: Would You Rather (WYR), Micro Challenge, Weird Fact con hook de debate.

export type DayContent = {
  date: string; // YYYY-MM-DD
  wyr: { a: string; b: string };
  challenge: string;
  fact: { text: string; hook: string };
};

export const content: DayContent[] = [
  {
    date: "2026-05-05",
    wyr: {
      a: "Vivir un año en un castillo escocés con WiFi malo",
      b: "Vivir un año en un departamento parisino del 6ème del tamaño de un placard",
    },
    challenge: "Sacá una foto de algo verde que veas hoy y mandámela.",
    fact: {
      text: "En 1518, en Estrasburgo, una mujer empezó a bailar sola en la calle. Bailó días enteros sin parar. En un mes se le sumaron 400 personas. Algunas murieron de agotamiento, otras de infarto. Las autoridades, convencidas de que era un castigo divino, contrataron músicos para que tocaran sin parar y los bailarines 'se cansaran'. Empeoró todo. Nunca se supo del todo qué pasó.",
      hook: "¿Histeria colectiva, intoxicación con cornezuelo en el pan, o algo que la ciencia todavía no entiende?",
    },
  },
  {
    date: "2026-05-06",
    wyr: {
      a: "Que el bebé hable cuatro idiomas pero ninguno del todo bien",
      b: "Que hable uno solo, pero como nativa absoluta, con acento perfecto",
    },
    challenge: "Mandale al otro una canción que escuchaste hoy, sin contexto.",
    fact: {
      text: "Caravaggio mató a un hombre en una pelea callejera en Roma en 1606 y pasó los últimos cuatro años de su vida huyendo. Sus cuadros más oscuros y violentos los pintó después del crimen, muchos como ofrendas para que el Papa lo perdonara. La carta de perdón llegó tres días después de su muerte.",
      hook: "¿Sus mejores obras son las anteriores al asesinato, o las posteriores? ¿La culpa hace mejor al artista?",
    },
  },
  {
    date: "2026-05-07",
    wyr: {
      a: "Cenar una sola vez con Lady Di",
      b: "Tomar el té cada semana, durante un año, con una versión tuya de 70 años más",
    },
    challenge: "Sacá una foto del cielo a las 18hs, exacto donde estés.",
    fact: {
      text: "En Japón hay una isla, Okunoshima, donde durante la Segunda Guerra Mundial se fabricaba en secreto gas venenoso. Después de la guerra el gobierno borró cualquier mención de la isla de los mapas. Hoy está habitada por más de mil conejos salvajes que se reproducen sin control. Nadie sabe con certeza cómo llegaron.",
      hook: "Algunos dicen que son descendientes de los conejos de laboratorio liberados al final de la guerra. Otros, que los soltaron turistas en los 70. ¿Cuál te convence más?",
    },
  },
  {
    date: "2026-05-08",
    wyr: {
      a: "Leer todos los libros que existen pero olvidarlos al instante",
      b: "Recordar perfectamente, palabra por palabra, solo diez libros para toda la vida",
    },
    challenge: "Escribile al otro una frase de tres palabras que resuma tu día.",
    fact: {
      text: "La canción 'Gloomy Sunday', escrita en Hungría en 1933 por Rezső Seress, fue apodada 'la canción húngara del suicidio' después de que se la asociara con una ola de muertes en Budapest y Berlín. La BBC la prohibió durante décadas. Seress se suicidó en 1968 saltando por la ventana de su departamento.",
      hook: "¿Una canción puede empujar a alguien al borde, o son siempre coincidencias amplificadas por el mito?",
    },
  },
  {
    date: "2026-05-09",
    wyr: {
      a: "Que la casa en Knightsbridge tenga vista a Hyde Park pero sea chica",
      b: "Que sea enorme pero dé a una calle interna, sin vista",
    },
    challenge: "Sacale foto a un objeto en tu mesa de luz.",
    fact: {
      text: "Existe una especie de medusa, la Turritopsis dohrnii, que cuando se lastima o envejece puede revertir su ciclo y volver al estado de pólipo. Técnicamente es biológicamente inmortal. En laboratorio se la observó hacer este proceso una y otra vez, indefinidamente.",
      hook: "Si la humanidad pudiera reiniciarse así, ¿lo harías? ¿O parte del sentido de la vida está justamente en que termina?",
    },
  },
  {
    date: "2026-05-10",
    wyr: {
      a: "Saber con exactitud el día que vas a morir",
      b: "Saber con exactitud cómo",
    },
    challenge: "Mandale al otro la última cosa que buscaste en Google.",
    fact: {
      text: "Frida Kahlo y Diego Rivera se casaron, se divorciaron, y se volvieron a casar. Frida le dijo a una amiga que tuvo dos accidentes graves en su vida: el del colectivo a los 18 años, y Diego. Sostuvo que el segundo fue mucho peor.",
      hook: "¿Existe el amor de una vida que también te destruye? ¿Vale la pena?",
    },
  },
  {
    date: "2026-05-11",
    wyr: {
      a: "Que tu primer hijo sea un genio absoluto pero socialmente complicado",
      b: "Que sea promedio en todo pero extraordinariamente feliz",
    },
    challenge: "Sacale una foto a tus pies hoy, donde estén.",
    fact: {
      text: "En 1977, dos sondas Voyager fueron lanzadas al espacio con un disco de oro adentro. El disco contiene saludos en 55 idiomas, sonidos de ballenas, música de Bach, Chuck Berry, y un mapa para que cualquier civilización extraterrestre pueda llegar hasta la Tierra. Hoy las Voyager ya salieron del sistema solar y siguen viajando.",
      hook: "¿Fue una idea hermosa o irresponsable mandar nuestra dirección al universo?",
    },
  },
  {
    date: "2026-05-12",
    wyr: {
      a: "Hablar con los animales pero ellos no pueden hablarte a vos",
      b: "Que los animales te hablen pero vos no podés responderles",
    },
    challenge: "Foto de algo redondo.",
    fact: {
      text: "El último mensaje del Titanic antes de hundirse no fue 'SOS' sino una mezcla entre 'CQD' (la señal vieja) y el nuevo 'SOS', porque el operador no estaba del todo convencido del cambio. Ese fue el primer uso documentado del SOS en una emergencia real, y casi nadie en el barco más cercano lo escuchó porque el operador se había ido a dormir diez minutos antes.",
      hook: "¿Cuántas tragedias en la historia pasaron por errores así de chiquitos? ¿Y cuántas evitamos sin enterarnos?",
    },
  },
  {
    date: "2026-05-13",
    wyr: {
      a: "Pasar un año entero solo en una cabaña en los Alpes con todos los libros que quieras",
      b: "Pasar un año en una ciudad nueva cada mes pero sin poder leer nada",
    },
    challenge: "Mandale al otro una palabra que escuchaste hoy y te gustó cómo sonaba.",
    fact: {
      text: "Existe un perfume llamado 'Secretions Magnifiques' creado por Etat Libre d'Orange que pretende oler a fluidos corporales: sangre, sudor, semen, saliva. Fue marketeado como un perfume conceptual sobre el deseo. Los reviews están divididos entre 'genio' y 'náusea pura'.",
      hook: "¿La provocación es arte cuando se trata de algo que se pone en el cuerpo? ¿O es simplemente marketing disfrazado?",
    },
  },
  {
    date: "2026-05-14",
    wyr: {
      a: "Que el bebé nazca con el carácter tuyo y la cabeza de Fran",
      b: "Que nazca con el carácter de Fran y la cabeza tuya",
    },
    challenge: "Foto de tu vista cuando levantaste la cabeza por primera vez hoy.",
    fact: {
      text: "Mozart escribió una canción llamada 'Leck mich im Arsch' (literalmente, 'lameme el culo') en 1782. Era un canon a seis voces para cantar entre amigos en fiestas. Durante décadas los editores lo censuraron, le cambiaron la letra por algo más decente, y recién en los 90 se publicó la versión original.",
      hook: "¿Cuántas otras cosas 'sagradas' del arte clásico fueron en realidad bromas internas que la posteridad embelleció?",
    },
  },
  {
    date: "2026-05-15",
    wyr: {
      a: "Tener una memoria fotográfica perfecta pero recordar también todo lo malo con la misma nitidez",
      b: "Una memoria selectiva que te borra naturalmente lo doloroso pero también partes lindas",
    },
    challenge: "Mandale al otro una foto de algo azul.",
    fact: {
      text: "El Palacio de Buckingham tiene 775 habitaciones. La Reina Isabel II vivió ahí oficialmente más de 70 años, pero en realidad pasaba la mayor parte del tiempo en Windsor o Balmoral. Decía que Buckingham era 'una oficina con cama'. La describía como un lugar incómodo, frío, y demasiado público para sentirlo casa.",
      hook: "¿Vivirías en un palacio si supieras que nunca lo vas a sentir tu casa?",
    },
  },
  {
    date: "2026-05-16",
    wyr: {
      a: "Conocer a tu yo del futuro de 80 años durante una hora",
      b: "Conocer a tu yo del pasado de 15 años durante una hora",
    },
    challenge: "Foto de algo que te dé risa hoy.",
    fact: {
      text: "Hay un fenómeno llamado 'síndrome de París' que afecta principalmente a turistas japoneses. Es una especie de shock psicológico cuando llegan a la ciudad y se dan cuenta de que la París real (sucia, ruidosa, con gente apurada) no se parece a la París de las películas. Algunos casos fueron lo suficientemente graves como para necesitar repatriación médica.",
      hook: "¿Fran alguna vez se decepcionó de un lugar que había idealizado? ¿Vos?",
    },
  },
  {
    date: "2026-05-17",
    wyr: {
      a: "Que toda tu música favorita la conozca todo el mundo y sea super mainstream",
      b: "Que sea solo tuya, secreta, pero nadie más la entienda",
    },
    challenge: "Mandale al otro la última foto que sacaste.",
    fact: {
      text: "En 1961 un coleccionista compró un cuadro de Matisse llamado 'Le Bateau' en una subasta. El MoMA de Nueva York lo expuso durante 47 días antes de que un visitante avisara que estaba colgado al revés. Nadie del museo, ni los curadores, ni los críticos, ni los miles de visitantes lo habían notado.",
      hook: "¿Qué dice eso del arte abstracto? ¿O del público? ¿O de los dos?",
    },
  },
  {
    date: "2026-05-18",
    wyr: {
      a: "Vivir en una época anterior a la tuya, la que elijas",
      b: "Saltar 200 años al futuro y ver cómo terminó todo",
    },
    challenge: "Foto de un detalle arquitectónico que te llame la atención hoy.",
    fact: {
      text: "El compositor Erik Satie tenía siete trajes de pana grises absolutamente idénticos y los usaba rotativamente toda la semana. Vivía en un cuarto minúsculo donde nadie entró durante los últimos 27 años de su vida. Cuando murió, sus amigos abrieron la puerta y encontraron pianos rotos, cientos de paraguas (algunos sin estrenar), y composiciones que nunca había mostrado.",
      hook: "¿Cuántas cosas vale la pena guardar en secreto toda la vida? ¿Hay algo que quieras hacer así?",
    },
  },
  {
    date: "2026-05-19",
    wyr: {
      a: "Que el bebé sea exactamente como vos eras de chica/o",
      b: "Que sea exactamente como era el otro",
    },
    challenge: "Mandale al otro tu canción favorita de los 14 años.",
    fact: {
      text: "Existe un pueblo en Italia llamado Civita di Bagnoregio que está construido sobre una colina de roca volcánica que se erosiona año a año. Lo llaman 'la ciudad que muere'. Tiene 11 habitantes permanentes. Para llegar hay que cruzar un puente peatonal larguísimo. Los expertos calculan que en 100 años va a haber desaparecido por completo.",
      hook: "¿Vivirías en un lugar sabiendo que se va a borrar? ¿O justamente por eso?",
    },
  },
  {
    date: "2026-05-20",
    wyr: {
      a: "Tener una conversación de una hora con cualquier persona muerta",
      b: "Tener una conversación de cinco minutos con cualquier persona viva del mundo",
    },
    challenge: "Foto de algo que estás comiendo o tomando ahora.",
    fact: {
      text: "Cuando murió Tutankamón, su tumba fue saqueada dos veces en la antigüedad y vuelta a sellar. Durante 3000 años quedó intacta porque la entrada se enterró bajo los restos de otra construcción. Howard Carter la encontró en 1922. Casi todos los miembros del equipo que abrió la tumba murieron en circunstancias raras durante los años siguientes. Lo llamaron 'la maldición del faraón'.",
      hook: "¿Existe algo así como una maldición, o son patrones que el cerebro humano arma para darle sentido al azar?",
    },
  },
  {
    date: "2026-05-21",
    wyr: {
      a: "Tener un superpoder absurdo pero tuyo solo (ej: cambiar el color de los semáforos a voluntad)",
      b: "Tener un superpoder útil pero compartido con otras 1000 personas en el mundo",
    },
    challenge: "Mandale al otro una foto donde aparezcan tus manos.",
    fact: {
      text: "En el siglo XVIII, en Francia, hubo un pollo conocido como 'le poulet prophétique' que supuestamente predecía el futuro picoteando letras. Nobles, generales y hasta el rey lo consultaban. Después se descubrió que su dueño le ponía granos debajo de las letras correctas. Lo ejecutaron por brujería. Al pollo, no al dueño.",
      hook: "¿Por qué nos seduce tanto creer en señales? ¿Sos de buscarlas o de ignorarlas?",
    },
  },
  {
    date: "2026-05-22",
    wyr: {
      a: "Recordar todos tus sueños con detalle perfecto cada mañana",
      b: "No volver a soñar nunca más",
    },
    challenge: "Foto de una sombra que te guste cómo cae.",
    fact: {
      text: "Beethoven se quedó sordo a los 27 años y compuso sus obras más importantes después. Cortaba las patas de su piano para apoyar la cabeza en el piso y sentir las vibraciones de las notas. Su novena sinfonía la estrenó él mismo dirigiendo, y cuando terminó tuvieron que girarlo hacia el público para que viera el aplauso porque no escuchaba nada.",
      hook: "¿Qué es más impresionante: que pudiera componer sin oír, o que el público supiera que estaba escuchando algo que él nunca iba a escuchar?",
    },
  },
  {
    date: "2026-05-23",
    wyr: {
      a: "Que el bebé nazca un día gris de lluvia",
      b: "Que nazca un día de sol perfecto",
    },
    challenge: "Mandale al otro un audio de 10 segundos de lo que se está escuchando alrededor tuyo.",
    fact: {
      text: "El idioma más raro del mundo es el pirahã, que se habla en una pequeña tribu del Amazonas. No tiene números, no tiene palabras para colores específicos (solo 'claro' y 'oscuro'), no tiene tiempos verbales para hablar del pasado o futuro lejano, y no tiene mitos de creación. Los hablantes solo se refieren a cosas que ellos o alguien que conocen vio directamente.",
      hook: "¿Cómo sería pensar sin pasado ni futuro? ¿Más libre o más limitado?",
    },
  },
  {
    date: "2026-05-24",
    wyr: {
      a: "Probar el mejor plato del mundo una sola vez en tu vida",
      b: "Comer infinitas veces algo muy rico pero no extraordinario",
    },
    challenge: "Foto de la primera persona desconocida que veas hoy (de lejos, sin invadir).",
    fact: {
      text: "El cuadro 'La libertad guiando al pueblo' de Delacroix, el ícono de la Revolución Francesa, fue considerado tan políticamente peligroso que el rey lo compró en 1831 y lo escondió durante años. La mujer del centro, con el pecho descubierto y la bandera en alto, no representa a una persona real: es una alegoría. Pero hay una teoría no comprobada de que sí existió, y de que era una lavandera llamada Anne-Charlotte que perdió a su hermano en los disturbios.",
      hook: "¿Es más poderoso un símbolo que se basa en una persona real, o uno completamente inventado?",
    },
  },
  {
    date: "2026-05-25",
    wyr: {
      a: "Que en Knightsbridge te crucen siempre en la calle sabiendo quién sos",
      b: "Que nadie te reconozca jamás en ningún lado, ni siquiera tus vecinos",
    },
    challenge: "Mandale al otro un objeto que tengas en el bolsillo o en la cartera ahora.",
    fact: {
      text: "Hay una práctica japonesa llamada 'kintsugi' que consiste en reparar cerámica rota con oro líquido. La idea es que las grietas no se esconden: se resaltan. La pieza queda más valiosa después de rota que antes. Se desarrolló en el siglo XV cuando un shogun mandó a reparar un cuenco a China y se lo devolvieron mal arreglado. Buscando una alternativa más bella, los artesanos japoneses inventaron el kintsugi.",
      hook: "¿En qué cosas de la vida te parece que aplica esto? ¿Hay algo tuyo que sea más vos por estar 'roto'?",
    },
  },
  {
    date: "2026-05-26",
    wyr: {
      a: "Saber exactamente cuántas personas te aman en silencio",
      b: "Saber exactamente cuántas personas pensaron mal de vos en secreto",
    },
    challenge: "Foto del libro o pantalla que estás leyendo ahora.",
    fact: {
      text: "El cantante Nick Drake murió a los 26 años en 1974 prácticamente desconocido. Vendió menos de 5000 copias en vida. En 1999 una compañía usó su canción 'Pink Moon' en un comercial de Volkswagen y al día siguiente sus discos se agotaron en todo Estados Unidos. Hoy es considerado uno de los compositores ingleses más importantes del siglo XX.",
      hook: "¿Es triste o hermoso que un artista se vuelva famoso recién después de morir? ¿O es injusto y nada más?",
    },
  },
  {
    date: "2026-05-27",
    wyr: {
      a: "Que el bebé sepa siempre cuándo le mienten",
      b: "Que el bebé siempre pueda hacer reír a quien quiera",
    },
    challenge: "Mandale al otro tu emoji más usado del último mes (en captura, sin mandar el emoji).",
    fact: {
      text: "En la corte de Versalles del siglo XVIII las damas usaban pequeños lunares postizos hechos de tafetán negro. La posición del lunar en la cara era un código. Cerca del ojo significaba 'apasionada', en la mejilla 'coqueta', cerca de los labios 'discreta', en la frente 'majestuosa'. Las mujeres se cambiaban los lunares varias veces al día según con quién querían comunicarse.",
      hook: "Si hoy existiera un lenguaje secreto así, ¿lo usarías? ¿Cuál te quedaría hoy?",
    },
  },
  {
    date: "2026-05-28",
    wyr: {
      a: "Vivir tu vida ideal pero sabiendo que todo es un sueño y que vas a despertarte",
      b: "Vivir una vida común y corriente pero sabiendo con certeza que es real",
    },
    challenge: "Foto de algo que veas que tenga más de 50 años.",
    fact: {
      text: "El traje espacial original de la NASA fue cosido a mano por costureras de Playtex, la marca de corpiños. Las técnicas de costura de la lencería resultaron ser las únicas que daban la flexibilidad necesaria para los astronautas. Las mujeres que lo cosieron tenían que armarlo con tolerancias de 1/64 de pulgada, sin alfileres, porque cualquier perforación podía ser fatal en el espacio.",
      hook: "¿Cuántas cosas grandes de la historia se resolvieron con conocimientos que parecían no tener nada que ver?",
    },
  },
  {
    date: "2026-05-29",
    wyr: {
      a: "Que la persona que más te importó antes de mí siga existiendo en otra dimensión, feliz",
      b: "Que nunca haya existido del todo, ni siquiera en tu memoria",
    },
    challenge: "Mandale al otro la última foto de pareja que les sacaron.",
    fact: {
      text: "El Louvre originalmente fue una fortaleza medieval, después una residencia real, y recién a partir de la Revolución Francesa se convirtió en museo. La Mona Lisa fue robada en 1911 por un empleado italiano que la escondió en su placard durante dos años. Pablo Picasso fue interrogado como sospechoso. Cuando la recuperaron, era más famosa que antes del robo: hasta entonces no era 'la' obra del Louvre, era una más.",
      hook: "¿Qué otras obras de arte serían famosas hoy si las hubieran robado? ¿La fama es siempre por mérito, o muchas veces por accidente?",
    },
  },
  {
    date: "2026-05-30",
    wyr: {
      a: "Que el día que se case su hijo/a llueva torrencialmente",
      b: "Que sea un día perfectamente común, sin nada memorable del clima",
    },
    challenge: "Foto de tu ventana hoy.",
    fact: {
      text: "Existe un fenómeno climático llamado 'lluvia de sangre' que ocurre cada tantos años en distintas partes del mundo. Se llamó así durante siglos porque la gente creía que era un mal augurio. En realidad es polvo del Sahara mezclado con la lluvia, que tiñe todo de rojo óxido. Homero la mencionó en la Ilíada como signo de los dioses.",
      hook: "¿Cuántas cosas que la ciencia explica hoy seguirían siendo más interesantes si no las explicara?",
    },
  },
  {
    date: "2026-05-31",
    wyr: {
      a: "Que el bebé sea la mayor de tres hermanos",
      b: "Que sea hija única",
    },
    challenge: "Mandale al otro una foto de algo amarillo.",
    fact: {
      text: "El nombre del perfume Chanel N°5 viene literalmente del quinto frasco que le presentó el perfumista Ernest Beaux a Coco Chanel en 1921. Había hecho diez frascos numerados del 1 al 10 con distintas mezclas. Ella eligió el quinto y le dijo: 'Voy a lanzar mi colección el 5 de mayo, el quinto día del quinto mes, así que dejémosle ese número. Me trae suerte'. Es uno de los perfumes más vendidos de la historia.",
      hook: "¿Sos de creer en números de la suerte? ¿Cuál es el tuyo, si tenés?",
    },
  },
  {
    date: "2026-06-01",
    wyr: {
      a: "Que tu casa siempre huela a algo que adoras (un solo aroma fijo)",
      b: "Que cambie de aroma todos los días al azar entre cosas que te gustan",
    },
    challenge: "Foto del primer plato que hagas o comas hoy.",
    fact: {
      text: "Los Beatles tocaron en vivo en el techo del edificio de Apple Records el 30 de enero de 1969. Fue su último concierto juntos. Duró 42 minutos hasta que la policía les pidió que pararan por las quejas de los vecinos. Nadie sabía en ese momento que era la última vez. Ringo después dijo que durante todo el concierto pensó: 'Ojalá esto durara para siempre'.",
      hook: "¿Si supieras que algo es la última vez, lo disfrutarías más, o lo arruinarías por la presión?",
    },
  },
  {
    date: "2026-06-02",
    wyr: {
      a: "Tener un día entero solo, en cualquier lugar del mundo",
      b: "Tener un día entero con cualquier persona del mundo, en tu casa",
    },
    challenge: "Mandale al otro algo que escribiste alguna vez (nota vieja, mensaje, lo que sea).",
    fact: {
      text: "En 1888 una banda de música de un pueblo escocés llamado Forfar fue contratada para tocar en el funeral de un hombre que había muerto solo, sin familia. Cuando llegaron, encontraron que en realidad el hombre estaba bien, vivo y desayunando: alguien le había hecho una broma fingiendo su muerte. El hombre, conmovido, les pagó igual y les pidió que tocaran. Murió tres semanas después. Tocó la misma banda.",
      hook: "¿Te gustaría saber cómo te van a despedir? ¿O te da igual lo que pase después?",
    },
  },
  {
    date: "2026-06-03",
    wyr: {
      a: "Que el bebé herede tu peor defecto pero también tu mejor virtud",
      b: "Que no herede ninguno de los dos y construya los suyos desde cero",
    },
    challenge: "Foto de algo que tengas hace más de cinco años.",
    fact: {
      text: "Antonio Vivaldi escribió más de 500 conciertos. Murió en la pobreza en Viena, en 1741, y fue enterrado en una fosa común. Toda su obra desapareció después de su muerte. Recién en 1926 un monasterio italiano descubrió un tesoro escondido con la mayoría de sus partituras originales. Por dos siglos el mundo no escuchó casi nada de él. Hoy es uno de los compositores más tocados del planeta.",
      hook: "¿Cuántos artistas geniales se perdieron para siempre porque nadie encontró su 'monasterio'? ¿Cuántos hay en este momento que no conocemos?",
    },
  },
  {
    date: "2026-06-04",
    wyr: {
      a: "Que tu vida pasada en otra época haya sido tranquila y anónima",
      b: "Que haya sido caótica e histórica",
    },
    challenge: "Mandale al otro una palabra en otro idioma que te encanta cómo suena.",
    fact: {
      text: "El compositor John Cage estrenó en 1952 una pieza titulada '4'33\"'. Consiste en un pianista sentado frente al piano, sin tocar, durante exactamente cuatro minutos y treinta y tres segundos. La 'música' es el sonido del público, las toses, los crujidos de las sillas, el aire acondicionado. Cage decía que el silencio absoluto no existe.",
      hook: "¿Es música? ¿Es arte? ¿Es estafa? ¿Las tres?",
    },
  },
  {
    date: "2026-06-05",
    wyr: {
      a: "Tener un tatuaje invisible que solo vos podés ver, en el lugar y diseño que elijas",
      b: "Tener uno visible que todos ven, pero que cambia de diseño todos los días",
    },
    challenge: "Foto de algo que te parezca feo pero que te haga gracia.",
    fact: {
      text: "El término 'serendipia' fue inventado por el escritor inglés Horace Walpole en 1754, basándose en un cuento persa llamado 'Los tres príncipes de Serendip'. Los príncipes andaban perdidos por el mundo y siempre encontraban cosas que no estaban buscando, mejores que las que habían salido a buscar. Antes de Walpole, en inglés no existía una palabra para eso.",
      hook: "¿Cuál fue la mejor cosa que te pasó por accidente? ¿Cómo serían nuestras vidas si la buscáramos menos?",
    },
  },
  {
    date: "2026-06-06",
    wyr: {
      a: "Que el bebé sea increíblemente buena en algo manual (cocinar, dibujar, tocar un instrumento)",
      b: "Que sea increíblemente buena en algo intelectual (matemáticas, idiomas, escritura)",
    },
    challenge: "Mandale al otro la última foto donde aparezcas vos.",
    fact: {
      text: "Hay una catedral en Barcelona, la Sagrada Familia, que se empezó a construir en 1882 y todavía no está terminada. Su arquitecto, Gaudí, murió atropellado por un tranvía en 1926, sin verla completa. Estaba tan mal vestido y andrajoso que nadie lo reconoció. Lo llevaron a un hospital de pobres donde murió tres días después. Cuando supieron quién era, ya no había nada que hacer.",
      hook: "¿Te imaginás trabajar toda la vida en algo que nunca vas a ver terminado? ¿Por qué sí o por qué no?",
    },
  },
  {
    date: "2026-06-07",
    wyr: {
      a: "Una cena perfecta con tu pareja en un restaurant tres estrellas Michelin que te haga llorar de bien",
      b: "Una cena casera en pijama, los dos solos, en una noche de tormenta",
    },
    challenge: "Foto de tu mano izquierda hoy.",
    fact: {
      text: "El cuadro 'El grito' de Edvard Munch existe en cuatro versiones distintas hechas por el mismo Munch entre 1893 y 1910. Dos están pintadas, una en pastel, una en litografía. En 2012 una versión se vendió en 119 millones de dólares. En el reverso de una de las versiones, Munch escribió a lápiz una nota que recién se descubrió en 2020: 'Solo podría haber sido pintado por un loco'. Era él hablando de sí mismo.",
      hook: "¿Te llama más una obra cuando sabés que el artista estaba sufriendo? ¿O eso no debería importar?",
    },
  },
  {
    date: "2026-06-08",
    wyr: {
      a: "Que Fran ya sea una neurocirujana respetadísima a los 35",
      b: "Que el reconocimiento le llegue lentamente, en sus 50",
    },
    challenge: "Mandale al otro algo que veas y te haga pensar en la infancia.",
    fact: {
      text: "El club nocturno más legendario de Nueva York, Studio 54, funcionó solo 33 meses. De 1977 a 1980. Pasaron por ahí Mick Jagger, Andy Warhol, Diana Ross, Liza Minnelli, Truman Capote. Cerró cuando los dueños fueron presos por evasión fiscal. Encontraron un millón de dólares escondido en bolsas de basura adentro del techo del local.",
      hook: "¿Qué hace que algo dure poco pero se vuelva mítico, mientras otras cosas que duran décadas se olvidan?",
    },
  },
  {
    date: "2026-06-09",
    wyr: {
      a: "Tener una versión perfecta de tu memoria pero solo de los últimos 10 años",
      b: "Tener una memoria normal pero recordar perfectamente toda tu infancia",
    },
    challenge: "Foto de un par de zapatos cualquiera que veas hoy.",
    fact: {
      text: "El astrónomo Carl Sagan, antes de morir, pidió que la sonda Voyager 1, que ya estaba a 6 mil millones de kilómetros de la Tierra, se diera vuelta y sacara una última foto del planeta. La Tierra aparece como un punto azul pálido del tamaño de menos de un píxel. Sagan escribió un texto sobre esa imagen donde dice que cada guerra, cada amor, cada mártir, cada civilización ocurrió en ese punto.",
      hook: "¿Te hace sentir mejor o peor pensar que todo lo que importa cabe en un píxel?",
    },
  },
  {
    date: "2026-06-10",
    wyr: {
      a: "Que el bebé se parezca físicamente más a vos",
      b: "Que se parezca físicamente más a Fran",
    },
    challenge: "Mandale al otro tu foto preferida de la galería del último mes.",
    fact: {
      text: "Hay una flor llamada 'cadáver' (Amorphophallus titanum) que florece muy raramente, a veces cada 7 o 10 años. Cuando lo hace, su flor mide más de 3 metros, dura solo 24 a 48 horas, y huele exactamente a carne en descomposición para atraer escarabajos polinizadores. Los jardines botánicos transmiten en vivo cuando una está por florecer. Miles de personas hacen fila para olerla.",
      hook: "¿Por qué nos atrae ver/oler/conocer cosas desagradables? ¿Es curiosidad pura o algo más profundo?",
    },
  },
  {
    date: "2026-06-11",
    wyr: {
      a: "Vivir en un lugar donde nunca llueve",
      b: "Vivir en un lugar donde llueve la mitad del año",
    },
    challenge: "Foto de algo que se haya movido o cambiado en tu casa esta semana.",
    fact: {
      text: "El último mensaje del piloto Steve Fossett, que desapareció solo en avión sobre Nevada en 2007, fue una transmisión de radio común y corriente, nada raro. Su avión se estrelló en una zona montañosa imposible. Lo declararon muerto sin encontrarlo. Un año después, un excursionista encontró sus documentos a 100 km del lugar del accidente, sin explicación lógica posible. Recién entonces apareció el avión.",
      hook: "¿Cuántas cosas raras pasan en el mundo que después tienen una explicación aburrida? ¿Y cuántas nunca se explican y se olvidan?",
    },
  },
  {
    date: "2026-06-12",
    wyr: {
      a: "Que Fran y vos descubran un lugar nuevo del mundo cada mes",
      b: "Que vuelvan obsesivamente al mismo lugar cada año, hasta sentirlo casa",
    },
    challenge: "Mandale al otro tu última nota de voz no enviada (o una nueva si no tenés).",
    fact: {
      text: "El acueducto de Constantinopla fue construido por los romanos en el siglo IV. Funcionó durante más de 1500 años abasteciendo a la ciudad de agua. Sigue parcialmente intacto hoy en Estambul, atravesando la ciudad moderna. Algunos tramos pasan por encima de bares y restaurantes de Beyoğlu. La gente se sienta a tomar cerveza debajo de algo construido en el año 368.",
      hook: "¿Te impresiona o te resulta normal cuando algo tan viejo sigue funcionando? ¿Construimos hoy cosas pensadas para durar 1500 años?",
    },
  },
  {
    date: "2026-06-13",
    wyr: {
      a: "Que el día más importante de tu vida ya haya pasado",
      b: "Que el día más importante de tu vida sea dentro de 30 años",
    },
    challenge: "Foto del primer mensaje no leído que tengas.",
    fact: {
      text: "El compositor Tchaikovsky tenía pánico a que su cabeza se le cayera mientras dirigía una orquesta. Se sostenía la barbilla con la mano izquierda mientras dirigía con la derecha, en todos sus conciertos. Decía que estaba seguro de que en cualquier momento la cabeza iba a salir rodando. Era inteligente, brillante, exitoso. Y aún así.",
      hook: "Todos tenemos un miedo irracional. ¿Cuál es el tuyo? ¿Lo ocultaste o lo asumiste?",
    },
  },
  {
    date: "2026-06-14",
    wyr: {
      a: "Que en tu casa de Knightsbridge entre mucha luz natural pero haga frío",
      b: "Que sea cálida y abrigada pero un poco oscura",
    },
    challenge: "Mandale al otro tu pestaña abierta favorita ahora.",
    fact: {
      text: "Hay un escultor japonés del siglo XIII, Unkei, que hacía estatuas de Buda con ojos de cristal. Para 'darles vida' metía adentro de cada estatua un rollo de pergamino con oraciones, pelos, dientes humanos y a veces órganos pequeños conservados. Las estatuas siguen ahí, en templos. Las radiografías modernas confirmaron lo que había adentro. Algunas tienen 800 años.",
      hook: "¿Es arte sagrado o es macabro? ¿O justamente lo sagrado y lo macabro siempre estuvieron mezclados?",
    },
  },
  {
    date: "2026-06-15",
    wyr: {
      a: "Que el bebé nazca en Londres",
      b: "Que nazca en París",
    },
    challenge: "Foto de algo que te haga acordar a tu mamá o a tu papá.",
    fact: {
      text: "Existe una isla en Brasil, Ilha da Queimada Grande, donde viven entre 2000 y 4000 víboras venenosas (Bothrops insularis). Hay una víbora cada metro cuadrado. La isla está oficialmente prohibida para visitantes. Solo entran biólogos con permiso especial. Se calcula que el veneno es cinco veces más potente que el de cualquier víbora del continente. Si te muerde, la carne empieza a derretirse alrededor de la mordida.",
      hook: "¿Te da más curiosidad o más miedo? ¿Hay lugares del mundo a los que no irías ni gratis?",
    },
  },
  {
    date: "2026-06-16",
    wyr: {
      a: "Despertarte mañana hablando perfecto un idioma nuevo, el que vos elijas",
      b: "Despertarte mañana sabiendo tocar perfectamente un instrumento, el que vos elijas",
    },
    challenge: "Mandale al otro un audio de menos de 5 segundos.",
    fact: {
      text: "El último monje de un monasterio remoto en Bután, durante una visita en 2018, le confesó a un periodista que había vivido 40 años en silencio total y que extrañaba 'el sonido de su propia voz'. Cuando le preguntaron qué fue lo primero que dijo cuando rompió el voto, contestó: 'Pregunté qué hora era'.",
      hook: "Si pudieras pasar un año en silencio total, ¿qué pensás que cambiaría en vos? ¿Lo harías?",
    },
  },
  {
    date: "2026-06-17",
    wyr: {
      a: "Que el bebé sea muy creativa pero un poco caótica",
      b: "Que sea muy estructurada y organizada pero un poco rígida",
    },
    challenge: "Foto del lugar donde estás sentado/a ahora, sin moverte.",
    fact: {
      text: "Frida Kahlo tenía un mono araña como mascota llamado Fulang Chang, un loro que se llamaba Bonito, ciervos, perros itzcuintli y un cervatillo llamado Granizo. Pintó a casi todos en sus cuadros como hijos sustitutos: no podía tener hijos por las secuelas del accidente del colectivo. En su última pintura, hecha pocos días antes de morir, escribió: 'Viva la vida'. La firmó en la sandía.",
      hook: "¿Hay arte que conmueve más cuando sabés el contexto, o el arte tendría que sostenerse sin contexto?",
    },
  },
  {
    date: "2026-06-18",
    wyr: {
      a: "Heredar una casa enorme en el campo francés que cuesta una fortuna mantener",
      b: "Heredar un departamento más chico pero en el centro de París, sin gastos",
    },
    challenge: "Mandale al otro tu nota más vieja del celular.",
    fact: {
      text: "El primer poema de amor escrito que se conserva tiene más de 4000 años. Es de Sumeria, en escritura cuneiforme, escrito por una sacerdotisa para un rey llamado Shu-Sin. Empieza diciendo: 'Esposo, querido para mi corazón, tu belleza es dulce como la miel'. La tablilla está en un museo en Estambul.",
      hook: "¿Te imaginás escribir algo hoy que dentro de 4000 años alguien siga leyendo? ¿Qué dejarías?",
    },
  },
  {
    date: "2026-06-19",
    wyr: {
      a: "Tener una lista de las 100 personas que más te quisieron en la vida",
      b: "Tener una lista de las 100 personas a las que más quisiste",
    },
    challenge: "Foto de algo blanco.",
    fact: {
      text: "En el Renacimiento italiano, los pintores usaban un pigmento azul carísimo llamado 'lapislázuli' que venía de una sola mina en Afganistán. Era más caro que el oro. Por eso, en muchas pinturas religiosas, solo la Virgen María aparece pintada en azul: el cliente pagaba un extra para la 'capa azul'. Si veías un cuadro con mucha cantidad de azul, sabías que era una familia rica.",
      hook: "¿Hoy hay algo equivalente? ¿Alguna 'manera' de mostrar plata en el arte que dentro de 500 años va a parecer ingenua?",
    },
  },
  {
    date: "2026-06-20",
    wyr: {
      a: "Que tu casa siempre tenga música clásica de fondo, bajita",
      b: "Que siempre haya silencio absoluto, salvo cuando vos elijas poner música",
    },
    challenge: "Mandale al otro algo que te emocionó hoy, lo que sea.",
    fact: {
      text: "Existe una rara enfermedad llamada 'síndrome del acento extranjero'. Quien la sufre, después de un derrame o un golpe en la cabeza, empieza a hablar su idioma materno con acento de otro país. Hay una mujer noruega que después de un bombardeo en la Segunda Guerra empezó a hablar con acento alemán y la marginaron del pueblo. Una inglesa amaneció después de una operación hablando con acento chino, sin haber pisado China nunca.",
      hook: "¿Cuánto de lo que somos es el cerebro y cuánto la educación? ¿Te identificás con tu acento?",
    },
  },
  {
    date: "2026-06-21",
    wyr: {
      a: "Que el bebé sea muy parecida a uno de los dos",
      b: "Que sea una mezcla balanceada de ambos",
    },
    challenge: "Foto del primer color que veas al levantar la cabeza.",
    fact: {
      text: "El director Stanley Kubrick guardaba todos los recibos, todas las cartas, todas las facturas, todos los archivos de cada película que hacía. Cuando murió, su casa en Inglaterra contenía cajas con etiquetas como 'Entradas usadas en la escena del cine de La naranja mecánica' o 'Polvo de la alfombra del Overlook Hotel'. Su archivo personal pesa varias toneladas y todavía se está catalogando.",
      hook: "¿Sos de guardar o de tirar? ¿Te gustaría que alguien encuentre tus cosas dentro de 100 años?",
    },
  },
  {
    date: "2026-06-22",
    wyr: {
      a: "Que cada vez que abrís una puerta entrás a un lugar nuevo del mundo (al azar)",
      b: "Que cada vez que cerrás los ojos viajás 10 minutos a cualquier momento de tu pasado",
    },
    challenge: "Mandale al otro una foto vertical, no horizontal.",
    fact: {
      text: "Cuando Marie Curie murió en 1934, su cuerpo estaba tan radiactivo por sus años de investigación con el radio que la enterraron en un ataúd forrado en plomo. Sus cuadernos de laboratorio, sus recetas de cocina, hasta su libro favorito, siguen siendo radiactivos hoy y se conservan en cajas de plomo en la Biblioteca Nacional de Francia. Para consultarlos hay que firmar una autorización de exposición a la radiación.",
      hook: "¿Qué cosas estamos haciendo hoy con tecnología que dentro de 100 años se van a ver como 'jugar con fuego'?",
    },
  },
  {
    date: "2026-06-23",
    wyr: {
      a: "Vivir un solo día siendo otra persona del mundo, la que vos elijas",
      b: "Vivir un solo día siendo vos pero en otro siglo",
    },
    challenge: "Foto del rincón más feo de tu casa.",
    fact: {
      text: "El sándwich Earl Grey, el té más asociado con Inglaterra, no es de Inglaterra. La leyenda dice que se lo regaló un mandarín chino al primer ministro británico Charles Grey en el siglo XIX como agradecimiento por salvarle la vida al hijo. La aromatización con bergamota se le habría agregado para imitar el sabor del agua en la región del primer ministro. Casi nada de eso está documentado.",
      hook: "¿Cuántas tradiciones nacionales son en realidad invenciones recientes con buen marketing?",
    },
  },
  {
    date: "2026-06-24",
    wyr: {
      a: "Que Fran sea reconocida internacionalmente en su campo",
      b: "Que sea querida por todos sus pacientes pero anónima fuera de su hospital",
    },
    challenge: "Mandale al otro la cosa más vieja que tengas en la billetera o cartera.",
    fact: {
      text: "Hay una catedral en Sicilia, en Palermo, llamada Catacumbas de los Capuchinos. Adentro hay 8000 cuerpos momificados, vestidos con ropa de la época en que murieron. Los monjes los exhibían parados, agrupados por oficio: los abogados con los abogados, los doctores con los doctores, los niños con los niños. La momia más reciente es de Rosalia Lombardo, una nena que murió en 1920 y se conserva tan bien que parece dormida. Le dicen 'la Bella Durmiente de Palermo'.",
      hook: "¿Es macabro o tierno que una familia quisiera 'conservar' así a un hijo?",
    },
  },
  {
    date: "2026-06-25",
    wyr: {
      a: "Que el bebé ame tus mismas comidas",
      b: "Que ame las de Fran",
    },
    challenge: "Foto del pelo de alguien (puede ser tuyo).",
    fact: {
      text: "El primer perfume registrado de la historia fue creado por una mujer llamada Tapputi, en Mesopotamia, hace 3200 años. Su nombre figura en una tablilla cuneiforme como 'belu muraqqitu', maestra perfumista del palacio. Inventó el método de destilación con flores y agua que todavía se usa hoy, en su esencia. La industria del perfume nació de las manos de una mujer y durante siglos lo olvidó.",
      hook: "¿Cuántas cosas que damos por sentadas las inventaron mujeres a las que la historia borró?",
    },
  },
  {
    date: "2026-06-26",
    wyr: {
      a: "Vivir tu vida en orden cronológico pero olvidando lo que pasó",
      b: "Vivirla salteada pero recordando absolutamente todo",
    },
    challenge: "Mandale al otro una foto donde se vea solo una textura.",
    fact: {
      text: "El director japonés Akira Kurosawa, antes de filmar 'Ran' en 1985, pintó a mano cada uno de los 200 storyboards de la película. Eran cuadros completos, en acuarela, de cada plano. Hoy esos storyboards se exhiben en museos como obras de arte. Decía que cuando no podía conseguir financiación, los hacía igual, 'para no olvidarse de la película antes de poder hacerla'.",
      hook: "¿Hay algo que harías incluso si supieras que no vas a poder mostrarlo? ¿Qué?",
    },
  },
  {
    date: "2026-06-27",
    wyr: {
      a: "Que tu casa siempre tenga flores frescas (caras pero hermosas)",
      b: "Que siempre tenga libros nuevos sin estrenar (los que vos elijas)",
    },
    challenge: "Foto de un par de manos cualquiera, las que sea.",
    fact: {
      text: "La canción de cuna 'Ring around the rosie' tiene una teoría popular según la cual habla de la peste negra. 'A pocket full of posies' serían las hierbas para el olor, y 'we all fall down' la muerte. Es una historia hermosa pero falsa: se inventó en el siglo XX. La canción es del XIX, la peste fue del XIV. Aún así, se sigue contando como verdad en colegios de todo el mundo.",
      hook: "¿Por qué preferimos las explicaciones siniestras a las inocentes? ¿Hay algo en el cerebro que prefiere lo oscuro?",
    },
  },
  {
    date: "2026-06-28",
    wyr: {
      a: "Que sepan tu nombre 100 personas que vos respetás profundamente",
      b: "Que sepan tu nombre 10 millones de personas que vos no conocés",
    },
    challenge: "Mandale al otro la última cosa que copiaste y pegaste.",
    fact: {
      text: "En la corte de Versalles del siglo XVII, María Antonieta tenía un peluquero llamado Léonard. Era tan poderoso que los aristócratas tenían que pedirle turno con tres meses de anticipación. Diseñó peinados de un metro de alto que incluían barcos, jardines, hasta jaulas con pájaros vivos. Cuando estalló la Revolución, escapó a Rusia con todas las pelucas. Murió rico.",
      hook: "¿Te imaginás un mundo donde la moda fuera tan absurdamente teatral hoy? ¿Lo extrañás o no?",
    },
  },
  {
    date: "2026-06-29",
    wyr: {
      a: "Que el bebé hable primero en castellano",
      b: "Que hable primero en francés",
    },
    challenge: "Foto del cielo cuando esté oscuro hoy.",
    fact: {
      text: "Hay un manuscrito llamado Voynich, escrito en algún momento del siglo XV, que ningún criptógrafo del mundo logró descifrar. Tiene 240 páginas con dibujos de plantas que no existen, mapas astronómicos imposibles, y un idioma que nadie reconoce. Pasó por Rodolfo II de Bohemia, jesuitas, criptoanalistas de la Segunda Guerra. Hoy está en Yale. Lo siguen estudiando con inteligencia artificial. Sin éxito.",
      hook: "¿Te seduce más algo que se descifra o algo que se mantiene secreto para siempre?",
    },
  },
  {
    date: "2026-06-30",
    wyr: {
      a: "Saber con seguridad que en otra dimensión vos y la persona que querés se conocieron antes y se enamoraron también",
      b: "No saberlo nunca pero asumir que esta es la única vez",
    },
    challenge: "Mandale al otro algo que veas y te haga pensar en él/ella ahora.",
    fact: {
      text: "Existe un cementerio en una isla de Venecia, San Michele, donde está enterrada la familia Stravinsky, Diaghilev, Ezra Pound. La isla solo se accede por barco. Los venecianos llevan a sus muertos en góndolas negras especiales. Las góndolas funerarias son las únicas que pueden cruzar a horas restringidas. La gente local todavía paga para ir a poner flores y volver al continente en el mismo viaje.",
      hook: "¿Cómo te gustaría que fuera el lugar donde te recuerden? ¿O te da igual?",
    },
  },
  {
    date: "2026-07-01",
    wyr: {
      a: "Que tu vida tuviera una banda sonora pero los demás no la pueden oír",
      b: "Que todos puedan oír tu banda sonora pero vos no la elegís",
    },
    challenge: "Foto del lugar más cómodo de tu casa.",
    fact: {
      text: "En 1816 hubo un 'año sin verano' en Europa, causado por la erupción del volcán Tambora en Indonesia el año anterior. La ceniza tapó el sol durante meses. Fue tan oscuro y frío que se perdieron las cosechas y la gente moría de hambre. En esa atmósfera, en una casa cerca del lago Ginebra, Mary Shelley escribió Frankenstein y John Polidori escribió El vampiro, dos textos fundadores del terror moderno. Sin esa erupción, esos libros no existirían.",
      hook: "¿Cuántas obras grandes existen porque pasó algo terrible? ¿Y cuántas no llegaron a existir porque la vida fue demasiado tranquila?",
    },
  },
  {
    date: "2026-07-02",
    wyr: {
      a: "Tener una semana de vacaciones perfecta cada año pero sin poder repetir destino",
      b: "Volver al mismo lugar 50 años seguidos",
    },
    challenge: "Mandale al otro un screenshot del clima en la ciudad donde te gustaría estar mañana.",
    fact: {
      text: "Ludwig Wittgenstein, uno de los filósofos más importantes del siglo XX, escribió todo el Tractatus Logico-Philosophicus, su libro fundamental, mientras peleaba en el frente italiano de la Primera Guerra Mundial. Lo escribió en lápiz, en cuadernos militares, entre bombardeos. Decía que la guerra le dio el silencio que necesitaba para pensar. Cuando volvió, regaló toda la herencia que le había dejado su padre (millones) y se fue a trabajar de maestro de escuela rural.",
      hook: "¿Es posible pensar bien en la comodidad? ¿O hace falta algo de incomodidad para que la cabeza se aclare?",
    },
  },
  {
    date: "2026-07-03",
    wyr: {
      a: "Que el bebé tenga ojos del color de los tuyos",
      b: "Que tenga ojos del color de los de Fran",
    },
    challenge: "Foto de una silla vacía.",
    fact: {
      text: "El compositor Igor Stravinsky estrenó La consagración de la primavera en París en 1913. La música era tan disonante y la coreografía tan brutal que el público empezó a abuchear, después se peleó a las trompadas, y la policía tuvo que entrar al teatro. Algunos espectadores le tiraron objetos a la orquesta. Stravinsky se escapó por una ventana. Hoy esa obra es considerada una de las más importantes de la historia de la música.",
      hook: "¿Lo que te molesta de las cosas nuevas es que no las entendés, o que entendés que no las querés entender?",
    },
  },
  {
    date: "2026-07-04",
    wyr: {
      a: "Tener una memoria sensorial perfecta de cada plato de comida que comiste en tu vida",
      b: "Tener una memoria sensorial perfecta de cada beso de tu vida",
    },
    challenge: "Mandale al otro la última canción que escuchaste antes de leer esto.",
    fact: {
      text: "Hay una iglesia en Roma, Santa Maria della Concezione dei Cappuccini, decorada enteramente con los huesos de 4000 monjes capuchinos. Hay arañas hechas con vértebras, arcos hechos con pelvis, paredes de cráneos. En la última cripta hay un cartel que dice: 'Lo que ustedes son, nosotros fuimos. Lo que nosotros somos, ustedes serán'.",
      hook: "¿Es macabro, hermoso o las dos? ¿Qué te diría a vos un cartel así?",
    },
  },
  {
    date: "2026-07-05",
    wyr: {
      a: "Saber el día exacto en que vas a conocer a alguien que va a cambiarte la vida",
      b: "Saber el día exacto en que vas a perder a alguien importante",
    },
    challenge: "Foto del cuello de alguien (puede ser tuyo).",
    fact: {
      text: "En 1958 se descubrió en una cueva de Eslovenia un niño Neanderthal de 50.000 años enterrado con flores alrededor del cuerpo. Es la evidencia más antigua de un funeral con sentido simbólico. Antes de eso, se creía que enterrar con rituales era algo exclusivamente humano. Cambió todo lo que pensábamos sobre quiénes eran los Neanderthals.",
      hook: "¿Cuánto de lo que creemos que nos hace humanos es exclusivamente humano? ¿Y si no lo somos del todo?",
    },
  },
  {
    date: "2026-07-06",
    wyr: {
      a: "Que tu mejor amigo viva a 5 minutos de tu casa para siempre",
      b: "Que viva en cualquier lugar del mundo pero puedan teletransportarse a verse cuando quieran",
    },
    challenge: "Mandale al otro la última nota de voz que escuchaste.",
    fact: {
      text: "El violinista Niccolò Paganini era tan virtuoso en el siglo XIX que los rumores decían que había vendido su alma al diablo. Sus dedos tenían una flexibilidad anormal, se cree que tenía síndrome de Marfan. Cuando murió, la Iglesia Católica le negó el entierro por sus presuntas conexiones con lo satánico. Su cuerpo estuvo cinco años guardado en un sótano antes de ser enterrado. Cuentan que en algún momento alguien lo escuchó tocar desde la caja, pero esto último nunca se comprobó.",
      hook: "¿Qué hace que las leyendas se peguen a algunas personas y no a otras? ¿Es solo talento o algo más?",
    },
  },
  {
    date: "2026-07-07",
    wyr: {
      a: "Que Fran te lea en voz alta todas las noches",
      b: "Que cada noche bailen 5 minutos antes de dormir",
    },
    challenge: "Foto de la ropa que usaste hoy, doblada o tirada en la cama.",
    fact: {
      text: "El Tour de Francia tiene un premio que casi nadie conoce: el 'lanterne rouge', la linterna roja, que se le da al ciclista que termina último. Durante años el lanterne rouge se volvió tan famoso que algunos corredores lo perseguían intencionalmente: pedaleaban más despacio para llegar últimos, porque eso les garantizaba contratos publicitarios y entrevistas. La organización tuvo que cambiar las reglas para impedirlo.",
      hook: "¿Qué dice eso de la fama? ¿Cuántas formas hay de 'ganar' en la vida que no son las obvias?",
    },
  },
  {
    date: "2026-07-08",
    wyr: {
      a: "Tener una versión de tu vida en que tomaste todas las decisiones contrarias",
      b: "No saber nunca cómo hubiera sido",
    },
    challenge: "Mandale al otro un objeto que estés mirando ahora mismo, sin moverte.",
    fact: {
      text: "Existe un fenómeno musical llamado 'tritono' o 'diabolus in musica': una distancia específica entre dos notas que durante toda la Edad Media estuvo prohibida en la música religiosa porque se consideraba demoníaca. Era tan disonante que los compositores tenían que evitarla. Hoy es uno de los intervalos más usados en jazz, blues y rock. La intro de 'Black Sabbath' está construida sobre el tritono.",
      hook: "¿Lo que durante siglos sonó horrible, hoy nos parece interesante. ¿Eso pasa también con la moral?",
    },
  },
  {
    date: "2026-07-09",
    wyr: {
      a: "Que el bebé sea muy curiosa pero un poco miedosa",
      b: "Que sea muy valiente pero menos curiosa",
    },
    challenge: "Foto de algo escrito a mano que veas hoy.",
    fact: {
      text: "Audrey Hepburn pasó parte de su infancia bajo la ocupación nazi en Holanda. Su familia escondía judíos en su casa. Ella misma, a los 14 años, hacía de mensajera para la resistencia: llevaba notas escondidas en sus zapatos. Hubo un período en que comió tulipanes para no morir de hambre. Después de la guerra, los doctores le dijeron que las secuelas alimentarias podían afectar para siempre su capacidad de tener hijos.",
      hook: "¿Cuánta gente que admiramos cargó historias así, en silencio? ¿Cómo se construye una vida pública después de algo así?",
    },
  },
  {
    date: "2026-07-10",
    wyr: {
      a: "Vivir hasta los 80 con salud perfecta",
      b: "Vivir hasta los 100 pero los últimos 10 años con limitaciones físicas",
    },
    challenge: "Mandale al otro tu bebida más seguida en cafeterías.",
    fact: {
      text: "El primer barco transatlántico turístico que se hundió no fue el Titanic. Fue el SS Atlantic, en 1873, frente a las costas de Canadá. Murieron 535 personas. Fue olvidado casi por completo. El Titanic, 39 años después, no fue el peor desastre marítimo del momento (el Sultana, en el Mississippi en 1865, mató a más). Pero el Titanic se volvió mítico por una razón: tenía pasajeros famosos, prensa nueva, y se vendía como 'el barco que no podía hundirse'.",
      hook: "¿Por qué algunas tragedias se vuelven legendarias y otras se evaporan? ¿Es justicia, marketing, o azar?",
    },
  },
  {
    date: "2026-07-11",
    wyr: {
      a: "Que el bebé nazca en pleno invierno gris",
      b: "Que nazca en plena primavera con flores",
    },
    challenge: "Foto del último libro que tuviste en la mano.",
    fact: {
      text: "El compositor Henry Purcell, en el siglo XVII, escribió música tan triste que se decía que las mujeres lloraban en los conciertos hasta perder la conciencia. Cuando él mismo murió a los 36 años, su esposa pidió que sus propias composiciones fueran cantadas en su funeral. Sus alumnos las cantaron sin parar de llorar. Uno de ellos escribió en su diario que esa fue 'la primera vez que la música hizo más por la pena que la pena por la música'.",
      hook: "¿Hay algo más doloroso que escuchar una canción que conociste con alguien que ya no está? ¿O justamente eso es consuelo?",
    },
  },
  {
    date: "2026-07-12",
    wyr: {
      a: "Que tu vida en Londres sea exactamente como te la imaginás",
      b: "Que sea completamente distinta y mejor de lo que te imaginás, pero impredecible",
    },
    challenge: "Mandale al otro una foto del último regalo que recibiste o diste.",
    fact: {
      text: "En 1888 alguien dejó una carta firmada como 'Jack the Ripper' en la oficina de un periódico de Londres, reivindicando los asesinatos de Whitechapel. La carta es probablemente falsa, escrita por un periodista para vender más diarios. Pero el nombre 'Jack the Ripper' lo inventó esa carta. Antes de eso, los crímenes se llamaban 'los asesinatos de Whitechapel'. La leyenda más oscura del Londres victoriano nació de una mentira de marketing.",
      hook: "¿Cuántos mitos modernos empezaron como mentiras y se volvieron 'verdad' por repetición?",
    },
  },
  {
    date: "2026-07-13",
    wyr: {
      a: "Tener un día por mes donde podés desaparecer y nadie te busca",
      b: "Tener un día por mes donde alguien que querés mucho está obligado a estar disponible para vos",
    },
    challenge: "Foto de algo que te recuerde a un amigo (no a tu pareja).",
    fact: {
      text: "El idioma con la palabra más larga registrada es el alemán. La palabra es 'Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft' y significa 'Sociedad de funcionarios subalternos de la oficina principal de electricidad de la compañía de barcos a vapor del Danubio'. Tiene 79 letras. La inventó una empresa real en el siglo XIX y la usaba en su papelería oficial.",
      hook: "¿Hay ideas que solo se pueden expresar en algunos idiomas? ¿Hay sentimientos sin nombre en el tuyo?",
    },
  },
  {
    date: "2026-07-14",
    wyr: {
      a: "Que el bebé sea muy parecida a tu madre",
      b: "Que sea muy parecida a la madre de Fran",
    },
    challenge: "Mandale al otro algo que veas que tenga forma de corazón (lo que sea).",
    fact: {
      text: "El Día de la Bastilla, 14 de julio, conmemora la toma de la Bastilla en 1789. La fortaleza era una prisión política temida en toda Francia. Cuando los revolucionarios la asaltaron, esperaban liberar a cientos de presos. Adentro había siete personas: cuatro falsificadores, dos enfermos mentales, y un noble encarcelado por incesto. La revolución necesitaba un símbolo, y la Bastilla lo era, aunque por dentro estuviera casi vacía.",
      hook: "¿Importa más lo que algo es o lo que la gente cree que es?",
    },
  },
  {
    date: "2026-07-15",
    wyr: {
      a: "Saber escribir como tu escritor favorito",
      b: "Saber pintar como tu pintor favorito",
    },
    challenge: "Foto de la pared que tenés más cerca ahora.",
    fact: {
      text: "Hay un mito, repetido en todas las películas, de que los toros se enfurecen al ver el color rojo. Es falso: los toros son daltónicos al rojo. Lo que los enfurece es el movimiento del capote. Si el capote fuera azul o amarillo, harían lo mismo. La tradición del rojo es porque disimula la sangre del animal. La 'verdad' romántica del toro y el rojo no existe.",
      hook: "¿Cuántas otras cosas hermosas creés porque te las repitieron, no porque sean ciertas?",
    },
  },
  {
    date: "2026-07-16",
    wyr: {
      a: "Que el bebé sea como vos pero con la salud de Fran",
      b: "Que sea como Fran pero con la energía tuya",
    },
    challenge: "Mandale al otro un audio cantando 5 segundos de algo (lo que sea).",
    fact: {
      text: "El idioma sami, hablado por los pueblos indígenas del norte de Escandinavia, tiene más de 200 palabras distintas para describir la nieve, el hielo, y los renos. Hay una palabra para 'nieve sobre la cual un reno puede caminar', otra para 'hielo que cruje pero no se rompe', otra para 'reno macho con cuernos asimétricos en su tercer año'. Cuando esa lengua muera, esos conceptos van a desaparecer del mundo humano.",
      hook: "¿Qué pierde la humanidad cuando muere un idioma? ¿Algo concreto, o solo nostalgia?",
    },
  },
  {
    date: "2026-07-17",
    wyr: {
      a: "Que en Knightsbridge se sienta el ruido de Hyde Park todo el tiempo de fondo",
      b: "Que sea silencioso pero un poco aislado",
    },
    challenge: "Foto del primer animal que veas hoy (puede ser una mosca).",
    fact: {
      text: "El compositor Maurice Ravel sufrió un accidente en taxi en 1932 que le dañó el cerebro. A partir de ahí no pudo volver a componer nunca más, aunque escuchaba música perfectamente y reconocía sus propias obras. Su novela escrita 'tenía las palabras pero no la forma de escribirlas', según él. Murió cinco años después. Lo último que dijo en su vida fue: 'Tengo tanta música todavía adentro de la cabeza'.",
      hook: "¿Hay algo más cruel que tener el deseo intacto y la posibilidad rota? ¿Te asusta más perder el deseo o la capacidad?",
    },
  },
  {
    date: "2026-07-18",
    wyr: {
      a: "Conocer ahora a la persona con la que ibas a estar si no hubieras conocido a tu pareja",
      b: "No saber nunca quién hubiera sido",
    },
    challenge: "Mandale al otro tu cosa más vieja del placard.",
    fact: {
      text: "Hay una bodega en Francia, Domaine de la Romanée-Conti, donde una sola botella puede costar más de 20.000 euros. Producen muy pocas cantidades por año. La leyenda dice que durante la ocupación nazi, los dueños cubrieron las parras con tierra para hacer creer a los oficiales alemanes que el viñedo había muerto. Los nazis se llevaron botellas falsas que la familia había puesto en el sótano. Las parras reales sobrevivieron y siguen produciendo el mismo vino que se hacía hace 800 años.",
      hook: "¿Por qué nos gusta más el vino con historia que el vino sin historia? ¿Pasa también con las personas?",
    },
  },
  {
    date: "2026-07-19",
    wyr: {
      a: "Que el momento más feliz de tu vida ya haya pasado",
      b: "Que esté por venir, pero falte mucho",
    },
    challenge: "Foto de algo que esté cerca de tu cama.",
    fact: {
      text: "Marie Antoinette, antes de subir al cadalso en 1793, le pisó sin querer el pie al verdugo. Sus últimas palabras documentadas fueron: 'Pardonnez-moi, monsieur, je ne l'ai pas fait exprès'. ('Disculpe señor, no lo hice a propósito'). Tenía 37 años. Su muerte fue uno de los espectáculos públicos más grandes de la Revolución Francesa.",
      hook: "¿Hay algo más profundo que pedir disculpas en el último segundo? ¿Eso revela carácter o solo costumbre?",
    },
  },
  {
    date: "2026-07-20",
    wyr: {
      a: "Que tu casa esté siempre un poco desordenada pero llena de cosas con historia",
      b: "Que esté impecable y minimalista pero un poco impersonal",
    },
    challenge: "Mandale al otro un screenshot de tu app más usada esta semana.",
    fact: {
      text: "El compositor Alban Berg escondió en muchas de sus obras códigos secretos sobre una mujer con la que tuvo un romance prohibido. Dejaba sus iniciales 'H. F.' (Hanna Fuchs) cifradas en notas musicales. La obra entera 'Suite Lírica' resultó ser, en realidad, un mensaje encriptado a ella. Tardaron 50 años en descifrarlo. La esposa de Berg nunca lo supo.",
      hook: "¿Te molestaría descubrir mensajes secretos del pasado de tu pareja, o te darían curiosidad?",
    },
  },
  {
    date: "2026-07-21",
    wyr: {
      a: "Que el bebé hable como Fran cuando se enoja",
      b: "Que hable como vos cuando estás contenta/o",
    },
    challenge: "Foto del primer rincón que veas al despertar mañana.",
    fact: {
      text: "Salvador Dalí pintaba sus relojes blandos después de almorzar Camembert. Decía que ver el queso derretirse en el plato le dio la idea. Tenía un proceso muy raro: agarraba una llave en la mano, se sentaba en un sillón, cerraba los ojos. Cuando se quedaba dormido la llave se le caía y lo despertaba. En ese instante de medio sueño, dibujaba. Lo llamaba 'el método paranoico-crítico'.",
      hook: "¿Tu mejor idea siempre llega cuando estás haciendo otra cosa? ¿Cuál fue?",
    },
  },
  {
    date: "2026-07-22",
    wyr: {
      a: "Tener un mes entero solo, sin obligaciones, en cualquier ciudad del mundo",
      b: "Tener un mes entero con tu pareja, sin obligaciones, en una sola ciudad",
    },
    challenge: "Mandale al otro la foto que más miras del celular.",
    fact: {
      text: "En el Renacimiento, los astrónomos como Kepler hacían también horóscopos para reyes y nobles, no por superstición sino porque era la única manera de financiar su trabajo serio. Kepler escribió cartas burlándose de la astrología en privado, mientras cobraba muy bien por hacerla en público. Las leyes de Kepler del movimiento planetario, fundacionales para Newton, se descubrieron mientras él trataba de hacer un horóscopo más preciso para un duque alemán.",
      hook: "¿Cuántas verdades grandes nacieron de mentiras prácticas? ¿Es válido?",
    },
  },
  {
    date: "2026-07-23",
    wyr: {
      a: "Tener una conversación de una hora con tu yo de los 18 años",
      b: "Tener una conversación de una hora con tu yo de los 75",
    },
    challenge: "Foto de un pie cualquiera (puede ser tuyo).",
    fact: {
      text: "Hay una flor llamada Welwitschia mirabilis que crece solo en el desierto de Namibia. Una planta puede vivir 1500 a 2000 años. Tiene solo dos hojas en toda su vida, que crecen continuamente desde el centro y se rompen y deshilachan en los extremos. Una sola planta puede haber empezado a crecer cuando los romanos seguían en pie y todavía estar viva hoy.",
      hook: "¿Te parece más impresionante una vida muy larga o una vida muy intensa?",
    },
  },
];

export function getDayContent(date: Date): DayContent | null {
  const dateStr = date.toISOString().split("T")[0];
  return content.find((d) => d.date === dateStr) || null;
}

export function getAllDates(): string[] {
  return content.map((d) => d.date);
}

export function getContentByDate(dateStr: string): DayContent | null {
  return content.find((d) => d.date === dateStr) || null;
}
