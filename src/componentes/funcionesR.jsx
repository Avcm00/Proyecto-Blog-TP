// Clase Blog
export class Blog {
  constructor(titulo, categoria, imagen, descripcion) {
    this.titulo = titulo;
    this.categoria = categoria;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.comentarios = [];
  }
}

// Clase ListBlog
export class ListBlog {
  constructor() {
    this.lista = [];
  }

  agregar(blog) {
    this.lista.push(blog);
  }

  quitar(titulo) {
    this.lista = this.lista.filter(blog => blog.titulo !== titulo);
  }

  buscar(titulo) {
    return this.lista.filter(blog => blog.titulo === titulo);
  }

  editar(titulo, nuevoBlog) {
    const index = this.lista.findIndex(blog => blog.titulo === titulo);
    if (index !== -1) {
      this.lista[index] = nuevoBlog;
    }
  }
}


// Reducir texto
export const truncate = (description, trunc) => {
  const words = description.split(" ");
  if (words.length > trunc) {
    return words.slice(0, trunc).join(" ") + "...";
  } else {
    return description;
  }
};

// Función para cargar blogs iniciales
export function blogscargados() {
  const listBlog = new ListBlog();

  const blog_1 = new Blog(
    "Conmebol abre expediente por el problema en el Uruguay vs. Colombia",
    "Deportes",
    "https://www.elcomercio.com/wp-content/uploads/2024/07/ENDRICK-PALMEIRAS-38-1024x683.jpg",
    `'Ante los actos de violencia ocurridos al término del partido entre las selecciones de Uruguay y Colombia, la Unidad Disciplinaria de la CONMEBOL ha decidido abrir un expediente para dilucidar la secuencia de hechos y las responsabilidades de los involucrados', informó el organismo.
Tras el triunfo por 1-0 de Colombia contra Uruguay, los jugadores uruguayos Darwin Núñez, Ronald Araújo y José María Giménez saltaron a las gradas y se pelearon con unos aficionados colombianos que, según la Celeste, tuvieron una actitud agresiva hacia sus familias.
'En víspera de la final de nuestra Copa América queremos ratificar y advertir que no se tolerará ninguna acción que empañe una fiesta mundial del fútbol, en la cual están involucrados los protagonistas y la afición que estará presente en el estadio en una final vista por cientos de millones de espectadores en todo el mundo', aseguró la CONMEBOL.
'Es inadmisible que un hecho como el ocurrido en esta ocasión, convierta la pasión en violencia. Por lo tanto, no se tolerará ninguna actitud que transgreda la competencia deportiva y el espectáculo más lindo del mundo que pertenece a toda la familia', concluyó.`
  );
  const blog_2 = new Blog(
    "Libros digitales o libros de papel ¿Qué prefieres?",
    "Tecnologia",
    "https://www.elcomercio.com/wp-content/uploads/2024/07/dia-libro-digital-1024x683.jpg",
    `La digitalización de los libros ha revolucionado radicalmente la forma en que accedemos y consumimos literatura desde el inicio del Proyecto Gutenberg en 1971. Desde entonces, los libros electrónicos han evolucionado considerablemente, con hitos como el primer ‘e-book’ comercial en 1981 y la popularización de novelas digitales como ‘Riding the Bullet’ de Stephen King en 2001.
    La introducción de la tinta electrónica ha mejorado significativamente la experiencia de lectura digital, popularizándola especialmente entre la juventud, y ha generado un debate entre quienes prefieren un libro físico o uno electrónico.\n
    Digitalización de los libros \n
    La digitalización de los libros comenzó en 1971 con el Proyecto Gutemberg del escritor y filántropo estadounidense Michael Hart. Este proyecto buscaba crear una biblioteca digital gratuita, con obras de autores clásicos como Dante y Shakespeare, según Xataka.\n
    Un libro digital es cualquier texto almacenado en formato digital y requiere programas lectores que pueden estar en computadoras, celulares o lectores de tinta electrónica.`
  );
  const blog_3 = new Blog(
    "¿Cuáles son los lugares en donde le pagan por vivir? Destinos, pasos y requisitos para empezar una nueva vida",
    "Viajes",
    "https://www.elcomercio.com/wp-content/uploads/2021/06/Screenshot_23-1-700x391.png",
    `
Si está pensando en irse al exterior, debe conocer la lista de lugares en donde le pagan por vivir.

De acuerdo al portal iProfesional, existen destinos en todo el mundo que quieren incrementar su población o renovarla con gente joven. Por lo tanto, implementaron planes para atraer gente y así convertirse en los sitios predilectos que ofrecen pago a quienes opten por vivir allí.

Sin embargo, no todo resulta tan sencillo, ya que para conseguir una residencia en estos lugares se requiere ciertos requisitos. iProfesional presenta una lista de los destinos, pasos y requisitos si está buscando mudarse a alguno de estos espacios.

**Lugares donde te pagan por vivir en Latinoamérica**

**Chile**

Vista de la ciudad Santiago de Chile, capital del país chileno. 
Según el portal Trabajar por el mundo, Chile busca convertirse en el centro de negocios de América del Sur. Para ello, desarrolló un programa por el que pagará alrededor de 45,000 pesos (USD 62.58) y ofrecerá una visa de trabajo de un año para presentar un negocio en este destino.

Además, ofrece mentores nacionales así como contactos comerciales para colaborar al crecimiento del negocio. A todo eso, le suma 100,000 pesos (USD 139) en beneficios, 500,000 pesos (USD 695) en vuelos y un crédito de 10,000 pesos (USD 139) en Amazon Web Services.

**Lugares donde le pagan por vivir en Europa**

**Países Bajos**

**Utrecht**

Imagen de Utrecht. 
Las personas que decidan mudarse a Utrecht, por ejemplo, podrán recibir hasta USD 920 mensuales si se establecen y emprenden algún proyecto laboral.

**Italia**

**Locana**

Locana, localidad de los Alpes italianos. 
Esta localidad de los Alpes italianos perdió a la mayoría de sus habitantes en los últimos 30 años: de 7,000 en los años 90, ahora son menos de 1,500 personas. El alcalde Giovanni Mattiet anunció que pagará USD 10,000 en tres años a las familias que se muden allí para vivir, siempre y cuando tengan un hijo y un salario mínimo de USD 6,500 anuales.

“Locana ofrece un estilo de vida saludable, buena comida y tradiciones todo el año”, asegura Mattiet.

**Molise**

Molise, localidad italiana. 
Molise, que es tan poco conocida que hasta los propios italianos bromean con que “no existe”, puso en marcha un plan para atraer habitantes. La localidad ofrece hasta USD 28,000 divididos en pagos de USD 800 al mes a quienes se instalen allí. Los requisitos son mudarse a uno de los municipios de la región que tengan menos de 2,000 habitantes y permanecer en ese lugar al menos tres años.

**Salemi**

Salemi, ubicado en la isla Sicilia. 
Ubicado en la isla Sicilia, vende casas a partir de un euro (USD 1.22) con el fin de repoblar la zona. Las viviendas, construidas en el siglo XVII, se encuentran en su mayoría en el casco histórico de Salemi y tienen como mínimo una superficie de 85 metros cuadrados. Se trata de construcciones con dos pisos y balcón incluido. Además, se encuentran a una hora de viaje de las playas de Marsala.

**Ciquefrondi**

Ciquefrondi, en la región de Calabria. 
Algo similar ocurre en Ciquefrondi, donde no hubo casos de covid-19 debido a la baja cantidad de habitantes. Es el último de los pueblos italianos en sumarse a la tendencia de vender casas a bajo costo para repoblar el área.

**Suiza**

**Albinen**

Invierno frío en Albinen. 
Este pueblo de tan solo 240 habitantes se ubica en medio de valles nevados y árboles centenarios. Ofrece hasta 70,000 euros (alrededor de USD 85,000) a familias de cuatro personas que deseen vivir allí por al menos 10 años, y USD 9,300 por cada hijo extra. Los postulantes deben tener menos de 45 años, construir o comprar una casa y demostrar que el inmueble no es para vacacionar. En caso de arrepentimiento, las personas tendrán que devolver todo el dinero recibido.

**Alemania**

**Ottenstein**

Ottenstein, municipio de Baja Sajonia. 
Este municipio de Baja Sajonia no paga por vivir, pero regala terrenos a familias con hijos que se muden a vivir allí y construyan una casa en tres años. Algo similar ocurre en varias ciudades de Italia, donde los gobiernos locales venden casas por 1 euro (USD 1.22) a personas que deseen residir allí y se comprometan a restaurarlas. Este es el único requisito, junto con un depósito de 3,000 euros (USD 3,650) reembolsable, una vez completadas las reformas acordadas.

**España**

**Ponga**

Ponga se encuentra en un valle verde rodeado de bosques. 
Este pueblo asturiano poco conocido tiene alrededor de 850 habitantes, de los cuales ni siquiera 100 son jóvenes. Para repoblar el sitio, entregan USD 3,500 a las parejas que vayan a vivir y otros USD 3,000 por cada hijo que tengan.

**Lugares donde le pagan por vivir en Norteamérica**

**Estados Unidos**

**Baltimore**

Baltimore, la ciudad con la quinta tasa de homicidios de Estados Unidos. 
Para atraer nuevos habitantes, ofrece USD 5,000 para comprar una nueva casa a través de una lotería dos veces al año. Además, la ciudad creó el programa “Vacants to Value”, que ofrece USD 10,000 para comprar una casa desocupada y arreglarla para habitarla.

**New Haven**

New Haven, ciudad de la costa Atlántica de EE.UU. 
Esta ciudad puede dar hasta USD 80,000 a nuevos residentes a través de un programa específico. El dinero se divide en USD 10,000 para la compra de una casa, USD 30,000 para renovaciones y USD 40,000 para matrículas de estudiantes en colegios del Estado. Las condiciones son vivir allí durante cinco años, no superar el 120% de los ingresos medios de New Haven y obtener un permiso de residencia.

**Tulsa**

Tulsa, municipalidad más grande de Oklahoma. 
Ofrece USD 10,000 a quienes se muden allí, con los requisitos de vivir en Tulsa al menos un año y tener al menos 18 años de edad.

**Cataratas del Niágara**

Cataratas del Niágara, frontera de Estados Unidos y Canadá. Foto: 
Estudiantes de cualquier país del mundo que residan dos años en este sector pueden recibir hasta USD 7,000 por año, unos USD 600 mensuales, a través del programa “Housing Incentive”.

**Vermont**

Vermont, ubicado al noreste de Estados Unidos.
Este estado tiene paisajes encantadores pero pocos habitantes. Para combatir el éxodo, ofrece USD 10,000 a trabajadores que se muden a Vermont a través del programa “Remote Worker Grant Program”. Tras seleccionar a 100 personas en 2019, se eligen 20 nuevas cada año. El único requisito es estar empleado por una empresa fuera de Vermont.

**Harmony**

Harmony se encuentra rodeada de naturaleza. 
Harmony paga hasta USD 12,000 a nuevos residentes para cubrir los costos de construcción de una casa. No hay requisitos de procedencia, edad o nivel económico.

**Canadá**

**Camden**

Camden es una localidad con pocos habitantes. 
Para reactivar su economía y atraer emprendedores, regala 2.8 hectáreas de tierra a quienes consigan crear 24 puestos de trabajo.

**Saskatchewan**

Saskatchewan, provincia del centro de Canadá. 
Esta provincia ofrece hasta USD 20,000 a estudiantes que se matriculen y se gradúen en programas universitarios locales a través del programa “Graduate Retention Program Application”. El dinero se distribuye en USD 3,000 (programa de un año), USD 6,500 (programa de dos o tres años), USD 15,000 (programa de tres años) y USD 20,000 (programa de cuatro años). Los graduados deben vivir y trabajar allí durante siete años después de recibir el dinero.

**Pipestone**

Pipestone, en la provincia de Manitoba. 
Este pueblo ofrece terrenos por USD 8 y una beca de USD 25,000 a nuevos habitantes. Las becas deben usarse para la construcción de una casa o un negocio.
`
  );
  const blog_4 = new Blog(
    "Se acercan las matrículas y traslados para el nuevo año lectivo en la Sierra-Amazonía",
    "Educacion",
    "https://www.elcomercio.com/wp-content/uploads/2024/07/matriculas-1024x683.jpg",
    `
Ya quedan pocos días para que empiecen los traslados de planteles fiscales. Este proceso arrancará el 16 de julio de 2024.

Las matrículas para estudiantes que deseen ingresar a instituciones educativas fiscales del régimen Sierra-Amazonía 2024-2025 serán el 13 de agosto.

**Traslados educativos y los detalles**
Los trámites se desarrollan de manera virtual a través de la página web: [https://juntos.educacion.gob.ec/](https://juntos.educacion.gob.ec/) donde hay información sobre cada proceso.
La asignación de cupos se da según la disponibilidad de la oferta educativa y la ubicación referencial del domicilio del estudiante.
Hay operadores telefónicos en todas las direcciones distritales para brindar atención y soporte a la comunidad educativa. En la web están los números de cada una.
La línea gratuita del Ministerio de Educación es 1800 338222, de lunes a viernes, de 08:00 a 17:00.
A partir del 2 de julio de 2024, las familias también tendrán la opción de consultar en línea en qué institución educativa fiscal se encuentra matriculado el estudiante.

**Las matrículas y los pasos**
El proceso de matrículas en la Sierra y Amazonía se lleva a cabo en línea y se debe incluir varios datos. Los estudiantes que no realizarán cambios de plantel pasan directamente al siguiente nivel sin necesidad de un trámite adicional.

**Los requisitos:**
- Correo electrónico del representante
- Número de contacto (celular o fijo)
- Número de identificación del estudiante (opcional)
- Número de identificación del representante (opcional)

**Los docentes y las siguientes fechas**
Este 12 de julio termina el año lectivo para los docentes. Las vacaciones para los profesores se extenderán hasta el 10 de agosto.

No obstante, el regreso de los maestros a las actividades será el 12 de agosto, para coordinar las actividades para el año lectivo 2024-2025.

Los estudiantes, en cambio, retornarán a las aulas el 2 de septiembre de 2024. Lo harán de forma escalonada, empezando por los alumnos de bachillerato.

**Novedades en el nuevo año lectivo**
En el nuevo año lectivo, los currículos tendrán cambios y se incorporarán varias materias:

- Cívica, ética e integridad
- Educación socioemocional
- Educación vial para la seguridad y movilidad sostenible
- Educación para el Desarrollo Sostenible
- Educación Financiera

En Cívica, según el Ministerio de Educación, el enfoque es fomentar la educación en derechos y en valores para la construcción de un tejido social basado en la convivencia armónica, inclusiva y de respeto.

Entre los aliados del proceso están la Mesa de Valores, Secretaría de Anticorrupción de la Presidencia y la Universidad Andina Simón Bolívar.
`
  );
  const blog_5 = new Blog(
    '‘Deadpool & Wolverine’: todo lo que se sabe sobre la nueva película de Marvel',
    'Entretenimiento',
    'https://www.elcomercio.com/wp-content/uploads/2024/07/deadpool-el-comercio-1-1024x683.jpg',
    `Según la sinopsis, un apático Wade Wilson ha dejado atrás su vida como Deadpool. Sin embargo, cuando una amenaza existencial pone en peligro su mundo, Wade debe volver a ponerse el traje.

A regañadientes, Deadpool busca la ayuda de un Wolverine igualmente reacio. Desde la sinopsis se avizora el humor característico que tendrá la cinta.

Dice Infobae que originalmente, el actor Ryan Reynolds (Deadpool) tenía tres ideas diferentes para la película antes de colaborar con Hugh Jackman (Wolverine).

Uno de los conceptos más sorprendentes que contempló fue una road movie de bajo presupuesto, con solo 5 a 6 millones de dólares.

Esta versión inicial no incluía efectos especiales y se centraba en un viaje. Aunque le parecía una idea divertida, no evolucionó.

El director Shawn Levy no quería dirigir ‘Deadpool & Wolverine’
Fue el actor Hugh Jackman quien sugirió al director Shawn Levy que trabajaría con su amigo Ryan Reynolds, una colaboración que ya había resultado exitosa en las películas ‘Free Guy: tomando el control’ y ‘El proyecto Adam’, señala el medio.

Aunque inicialmente no estaba interesado en dirigir ‘Deadpool 3’, la idea de traer de vuelta a Jackman como Wolverine cambió la perspectiva del cineasta.

Jackman, después de hacer ‘Logan‘, tuvo una “epifanía” al ver ‘Deadpool 2‘, recoge el medio, y sintió que aún tenía más que ofrecer como Wolverine. Llamó a Reynolds para proponerle su regreso, lo que llevó a Levy a reevaluar su posición sobre la película.

Con el respaldo de Levy, Reynolds y Jackman, ‘Deadpool 3’ evolucionó de una modesta road movie a una superproducción de Marvel Studios. Este retorno de Jackman fue clave para transformar la película y ver su potencial.`
  )
  

  listBlog.agregar(blog_1);
  listBlog.agregar(blog_2);
  listBlog.agregar(blog_3);
  listBlog.agregar(blog_4);
  listBlog.agregar(blog_5);


  return listBlog;
}
