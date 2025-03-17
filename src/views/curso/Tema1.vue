<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Dislexia, disgrafía, discalculia y su relación con el desarrollo cerebral.'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-4.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La neuropsicología del aprendizaje busca comprender cómo el cerebro procesa la información y cómo ciertas alteraciones pueden dificultar este proceso. Trastornos como la dislexia, la disgrafía y la discalculia presentan retos únicos para el desarrollo cognitivo, exigiendo abordajes integrales que combinen estrategias neurobiológicas, psicológicas, pedagógicas y ocupacionales.
        p.mb-0  Durante la infancia, etapa clave en el desarrollo humano, estas dificultades pueden influir significativamente en el aprendizaje. Este periodo se caracteriza por una alta plasticidad cerebral, lo que permite que una intervención temprana, basada en diagnósticos adecuados, facilite la superación de obstáculos y potencie habilidades a través de métodos adaptativos y herramientas alternativas.

    
    h2 El giro de la educación y las inteligencias múltiples
    .row.mb-4
      .col-12.col-xl-9(data-aos="fade-right")
        p.mb-4 La educación ha experimentado transformaciones significativas, motivadas por investigaciones recientes y el acceso masivo a información. Entre estos avances, destaca la teoría de las inteligencias múltiples de Howard Gardner, que redefine el concepto de inteligencia como un conjunto de habilidades diversas e independientes. Según Gardner (1994), la inteligencia se entiende como “la capacidad de resolver problemas o crear productos valiosos en uno o más contextos culturales.
        p.text-bold.mb-4 A continuación, se presentan las inteligencias múltiples identificadas por Gardner:
      .col-3.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Lingüística")
            p Capacidad para usar el lenguaje de manera eficaz, común en escritores, poetas y oradores.
          .div(titulo="Lógico-matemática")
            p Habilidad para razonar, realizar cálculos y detectar patrones, característica de matemáticos y científicos.
          .div(titulo="Espacial")
            p Destreza para visualizar y manipular imágenes y espacios, propia de arquitectos y artistas.
          .div(titulo="Musical")
            p Sensibilidad para percibir y crear formas musicales, común en músicos y compositores.
    .row.mb-5
      .col-12.col-lg-7.col-xl-8(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Corporal-cinestésica")
            p Habilidad para usar el cuerpo de manera precisa, evidente en atletas y bailarines.
          .div(titulo="Interpersonal")
            p Capacidad para relacionarse eficazmente con los demás, destacada en líderes y educadores.
          .div(titulo="Intrapersonal")
            p Comprensión profunda de uno mismo, sus emociones y motivaciones, característica de psicólogos y filósofos.
          .div(titulo="Naturalista")
            p Aptitud para identificar y clasificar elementos naturales, propia de biólogos y ambientalistas.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

    p.mb-4 Las dificultades en el desarrollo cerebral no deben interpretarse como una ausencia de inteligencia o habilidades. Por el contrario, estas representan oportunidades para explorar y desarrollar otras capacidades. En este sentido, es fundamental revisar las estrategias pedagógicas, fomentando una educación inclusiva que se adapte a las necesidades individuales y potencie las habilidades de cada estudiante desde una perspectiva integral y renovada.


    .row.bg-verde.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

        .col-12.col-xl-7.col-xxl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Las múltiples inteligencias 
          p.mb-5 Se invita a profundizar sobre las teorías múltiples a través del texto de Macías (2066) el cual genera un análisis reflexivo acerca de las múltiples inteligencias. Ya que plantea como la nueva visión de la inteligencia permite reivindicar la condición humana en relación con la capacidad de cognición.  
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://elibro.net/es/ereader/tecnologicadeloriente/6138?page=1 " target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/link-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Sitio web.</strong> las teorías múltiples a través del texto de Macías (2066)   

    .row.mb-4
      .col-12.col-xl-10(data-aos="fade-right")
        span Después de este breve análisis inicial sobre las inteligencias, se procederá a realizar una exploración más detallada de los tres trastornos mencionados: (dislexia, disgrafía y discalculia). Cada uno de estos trastornos presentan características específicas y afectan a las personas de diversas maneras, no solo en el ámbito académico, sino también en la vida cotidiana. En esta profundización, se analizarán sus causas, síntomas y las estrategias de diagnóstico.
      .col-2.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Dislexia


    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-rosa-claro.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") La <b>dislexia</b> es un trastorno del aprendizaje que afecta principalmente la habilidad para leer y escribir, y está intrínsecamente relacionada con el desarrollo cerebral, la comunicación y el lenguaje. Para entenderla, es fundamental explorar cómo el cerebro procesa la información, las características del lenguaje y las estructuras cerebrales involucradas. 
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')


    p.mb-4 La dislexia se define como: "un trastorno manifestado por la dificultad para aprender a leer, a pesar de instrucción convencional, inteligencia adecuada y oportunidades socioculturales" (Outón, 2007). Existen dos tipos principales:

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Dislexia fonológica
                p.text-small.px-4.text-center.pb-2 Dificultad para conectar sonidos con letras, afectando la decodificación de palabras.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Dislexia superficial
                p.text-small.px-4.text-center.pb-2 Problemas con palabras irregulares que no siguen reglas comunes de pronunciación.

    p.mb-4 A continuación, se presentan las principales características de la dislexia en diversas áreas:

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Lectura")
            p Lectura lenta, dificultad para reconocer palabras, omisión o sustitución de letras.
          .div(titulo="Escritura")
            p Errores ortográficos frecuentes, escritura desorganizada o ilegible, dificultad para organizar ideas.
          .div(titulo="Comprensión")
            p Problemas para entender textos, dificultad para recordar información leída, poca retención de secuencias o listas.
          .div(titulo="Habilidad del lenguaje")
            p Dificultad para expresar ideas, problemas para seguir instrucciones orales.

    h2 Relación con el desarrollo cerebral

    .row.bg-verde.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex

        .row
          .col-10.col-xl-5.mx-auto(data-aos="fade-right")
            p.mb-4 La dislexia está vinculada a ciertas áreas del hemisferio izquierdo del cerebro, como:
            ol.lista-ol--cuadro
              li.d-flex(data-aos="fade-up")
                .lista-ol--cuadro__vineta.bg-rosa-oscuro
                  span 1
                p.mb-0 <b>Área parieto-temporal:</b> procesamiento fonológico.
              li.d-flex(data-aos="fade-up")
                .lista-ol--cuadro__vineta.bg-rosa-oscuro
                  span 2
                p.mb-0  <b>Área occipito-temporal:</b> reconocimiento visual de palabras.
              li.d-flex(data-aos="fade-up")
                .lista-ol--cuadro__vineta.bg-rosa-oscuro
                  span 3
                p.mb-0 <b>Circunvolución frontal izquierda superior:</b> articulación y fluidez verbal.
          .col-4.mx-auto.d-none.d-xl-block(data-aos="fade-left")
            img.h-100(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
    p.mb-4 Estudios indican que en estas regiones se presenta una actividad reducida, y en algunos casos, una predisposición genética vinculada al cromosoma 15.

    p.text-bold.mb-4 A continuación, se presentan las posibles causas identificadas:

    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="38%" y="37%" numero="+")
        .h5.mb-2 Neurológica
        p Alteraciones en las áreas cerebrales responsables del lenguaje y la lectura.
      .tarjeta.bg-white.p-4(x="56%" y="48%" numero="+")
        .h5.mb-2 Genética
        p Carga hereditaria relacionada con alteraciones en genes específicos (e.g., cromosoma 15). 
      .tarjeta.bg-white.p-4(x="42%" y="58%" numero="+")
        .h5.mb-2 Auditiva
        p Dificultades en el procesamiento de sonidos, que impactan la comprensión auditiva.

    h2 Impacto en la salud mental

    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-16.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Frustración y ansiedad
              p.px-1.text-small.mb-0.d-flex.text-center Dificultades en el aprendizaje pueden generar sentimientos de inferioridad.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-17.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Exclusión social
              p.px-1.text-small.mb-0.d-flex.text-center Burlas o rechazo pueden llevar a problemas de adaptación social.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Círculo emocional negativo
              p.px-1.text-small.mb-0.d-flex.text-center Deterioro en la autoimagen, relaciones interpersonales y bienestar general.

        .row.mb-4
          .col-2.d-none.d-xl-block(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
          .col-12.col-xl-10(data-aos="fade-left")
            p.text-bold.mb-4 La dislexia no afecta la inteligencia, pero sí puede influir significativamente en la autoestima y la salud emocional del niño:

            span Es esencial reconocer que la dislexia no define la capacidad intelectual de una persona. Muchas personas con dislexia son altamente creativas y resilientes, pero requieren estrategias y apoyos específicos para superar los desafíos asociados. Ante sospechas de dislexia, es crucial buscar evaluaciones profesionales para implementar intervenciones adecuadas que potencien las habilidades del niño y garanticen su bienestar integral.
        
        #t_1_2.titulo-segundo
          div.d-flex
            span.me-3 1.2  
            h2 Disgrafía

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-20.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La <b>disgrafía</b> es un trastorno del aprendizaje que afecta la habilidad para escribir de manera legible y coherente. Está relacionada con dificultades en la motricidad fina y en el proceso de organización de pensamientos para plasmarlos en palabras. Para comprender este trastorno, es fundamental analizar primero el concepto y los procesos involucrados en la escritura.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')  

    h2 La escritura y su desarrollo
    p.mb-4 La escritura es el sistema de representación gráfica del lenguaje, utilizado para expresar pensamientos, ideas y emociones de forma duradera. Se presenta en diversas formas, como la prosa, poesía y ensayos, y es clave para la comunicación y el aprendizaje.

    p.text-bold.mb-4 Los tipos de escritura son: 

    .bg-fondo-3.bg-full-width
      .px-5.pb-md-3.py-4

        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.p-3.bg-verde.rounded-8px
              img.pe-2(src='@/assets/curso/unidad/img-22.svg', style="width: 80px")
              .d-flex.flex-column
                p.text-bold.mb-4 Escritura copiada

                p.px-1.text-small.mb-0.d-flex Reproducir un texto modelo para aprender estructuras y desarrollar habilidades motoras.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.p-3.bg-verde.rounded-8px
              img.pe-2(src='@/assets/curso/unidad/img-23.svg', style="width: 80px")
              .d-flex.flex-column
                p.text-bold.mb-4 Dictado

                p.px-1.text-small.mb-0.d-flex Transcribir un texto leído en voz alta, trabajando atención, memoria y ortografía.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.p-3.bg-verde.rounded-8px
              img.pe-2(src='@/assets/curso/unidad/img-24.svg', style="width: 80px")
              .d-flex.flex-column
                p.text-bold.mb-4 Escritura espontánea

                p.px-1.text-small.mb-0.d-flex Escribir libremente, fomentando la creatividad y la expresión personal.

        h2 Desarrollo de la escritura en la infancia 
        p.mb-4 La adquisición de la escritura comienza con el desarrollo de habilidades motoras finas, esenciales para la formación de letras y palabras. Este proceso se inicia con hitos tempranos de coordinación motriz:

        p.mb-3 <strong>Tabla 1.</strong> Hitos tempranos de coordinación motriz

        .row.mb-4
          .col-3.d-none.d-xl-block(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
          .col-12.col-xl-9(data-aos="fade-left")

            .tabla-a.mb-5
              table
                thead
                  tr.bg-morado
                    th(width="35%") Edad
                    th.text-center Hito del desarrollo
                tbody
                  tr
                    td.border-right.text-bold Hito del desarrollo
                    td Localiza visualmente un objeto e intenta mover las manos hacia él.
                  tr
                    td.border-right.text-bold Cuatro meses
                    td Aproximación al objeto mediante movimientos de todo el brazo.
                  tr
                    td.border-right.text-bold Ocho meses
                    td Desarrollo de la prensión fina mediante la intervención del dedo pulgar.
                  tr
                    td.border-right.text-bold Final del primer año
                    td Apertura voluntaria de la mano para soltar objetos; inicio del reconocimiento táctil.

    p.mb-4 El agarre en pinza y la coordinación motriz fina, que se desarrollan alrededor de los 9 meses, son fundamentales para la escritura.
    h2 Entendiendo la disgrafía 

    .row.bg-verde.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex

        .row
          .col-10.col-xl-5.mx-auto(data-aos="fade-right")
            p.mb-4 La disgrafía afecta tanto la motricidad fina como la capacidad de organizar y expresar pensamientos a través de la escritura. Sus principales características incluyen:
            ol.lista-ol--cuadro
              li.d-flex(data-aos="fade-up")
                .lista-ol--cuadro__vineta.bg-rosa-oscuro
                  span 1
                p.mb-0 Escritura desordenada e ilegible.
              li.d-flex(data-aos="fade-up")
                .lista-ol--cuadro__vineta.bg-rosa-oscuro
                  span 2
                p.mb-0 Dificultades para seguir reglas gramaticales y de puntuación.
              li.d-flex(data-aos="fade-up")
                .lista-ol--cuadro__vineta.bg-rosa-oscuro
                  span 3
                p.mb-0 Problemas para organizar ideas en la escritura.
              li.d-flex(data-aos="fade-up")
                .lista-ol--cuadro__vineta.bg-rosa-oscuro
                  span 4
                p.mb-0 Fatiga o frustración al escribir.
          .col-5.mx-auto.d-none.d-xl-block(data-aos="fade-left")
            img.h-100(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')


    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        p.mb-4 Las causas son: 
        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Genéticas y neurológicas  
                p.text-small.px-4.text-center.pb-2 Anormalidades en ciertas áreas del cerebro relacionadas con el control motor y la coordinación.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Evolutivas
                p.text-small.px-4.text-center.pb-2 Retrasos en el desarrollo de habilidades motrices finas.

    p.mb-4 A continuación, se describen las principales características de la disgrafía:

    .row.position-relative.mb-5.py-4.bg-morado.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Motricidad fina
              p Dificultad para formar letras y palabras de manera precisa.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-up")
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Organización
              p Problemas para estructurar ideas coherentemente en un texto.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-up")
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Ortografía y gramática
              p Errores frecuentes en reglas ortográficas y gramaticales.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Escritura legible
              p Textos desordenados o ilegibles que dificultan la comprensión.
    
    h2 Diferencias con la dislexia
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p.mb-4  Aunque comparten similitudes, como su origen neurológico y síntomas, la dislexia afecta el lenguaje y la lectura, mientras que la disgrafía impacta directamente la escritura.
        .d-flex.align-items-start.bg-rosa.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-33.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La disgrafía evidencia las complejidades del desarrollo de habilidades motoras y cognitivas. Este trastorno resalta la importancia de la detección temprana y de enfoques educativos inclusivos. Promover ambientes comprensivos y adaptativos permite garantizar que todos los niños, independientemente de sus desafíos, puedan expresarse de manera efectiva y desarrollar su potencial al máximo.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')  


    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 Discalculia

    .row.mb-4
      .col-12.col-xl-10(data-aos="fade-right")
        span La <b>discalculia</b> es un trastorno del aprendizaje que afecta la comprensión y el manejo de conceptos matemáticos básicos. Este trastorno se manifiesta a través de dificultades significativas en el procesamiento numérico y el razonamiento matemático, limitando la capacidad del individuo para realizar operaciones aritméticas y resolver problemas cotidianos.
      .col-2.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    h2 Conceptos matemáticos básicos
    p.mb-4 Para comprender la relación entre la discalculia y las matemáticas, es esencial identificar algunos conceptos fundamentales:

    .row.mb-5
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Numeración")
            p Incluye el entendimiento de cantidades, el sistema decimal y la escritura de números.
          .div(titulo="Operaciones matemáticas")
            p.mb-1 Procesos básicos realizados sobre números para obtener resultados.
            .row.ps-4
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Suma (+): añadir dos o más números. 
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Resta (−): sustraer un número de otro.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Multiplicación (×): sumar un número repetidamente.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 División (÷): repartir un número en partes iguales.
          .div(titulo="Resolución de problemas:")
            p.mb-1  Comprender y plantear soluciones a situaciones que involucran matemáticas.
            .row.ps-4
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Problemas de cambio: implican transformaciones en el tiempo (e.g., "tenía cinco manzanas     y regalé dos, ¿cuántas tengo?").
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Problemas de combinación: operaciones estáticas que suman elementos (e.g., "Juan tiene tres manzanas y Ana dos, ¿cuántas tienen en total?").

    h2 Clasificación de la discalculia
    p.mb-4 Diferentes autores han propuesto clasificaciones de la discalculia para describir las áreas específicas afectadas:
    p.mb-3 <strong>Tabla 2. </strong> Clasificación por clases 

    .row.mb-4
      .col-12.col-xl-9(data-aos="fade-right")

        .tabla-a.mb-5
          table
            caption <b>Nota.</b> Adaptado de Fernández et al. (2012)
            thead
              tr.bg-morado
                th(width="35%") Tipo
                th.text-center Descripción
            tbody
              tr
                td.border-right.text-bold Discalculia de desarrollo
                td Dificultades en la comprensión de conceptos básicos y procedimientos inmaduros.
              tr
                td.border-right.text-bold Discalculia de cálculo
                td Problemas con la memoria semántica para recuperar datos numéricos; de origen genético.
              tr
                td.border-right.text-bold Discalculia visoespacial
                td Dificultad para comprender la estructura de los números en base 10.
      .col-3.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')

    p.mb-3 <strong>Tabla 3. </strong> Clasificación por tipos 

    .row.mb-4
      .col-3.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
      .col-12.col-xl-9(data-aos="fade-left")

        .tabla-a.mb-5
          table
            caption <b>Nota.</b> Adaptado de Teruel & Latorre (2015)
            thead
              tr.bg-morado
                th(width="35%") Tipo
                th.text-center Descripción
            tbody
              tr
                td.border-right.text-bold Verbal
                td Dificultades para comprender términos matemáticos y sus relaciones.
              tr
                td.border-right.text-bold Practognóstica
                td Problemas para manipular objetos y comparar tamaños y cantidades.
              tr
                td.border-right.text-bold Lexical
                td Incapacidad para leer símbolos numéricos.
              tr
                td.border-right.text-bold Gráfica
                td Dificultades para escribir símbolos matemáticos.
              tr
                td.border-right.text-bold Ideognóstica
                td Baja habilidad para comprender conceptos y realizar cálculos mentales.
              tr
                td.border-right.text-bold Operacional
                td Dificultades para realizar operaciones matemáticas básicas.

      
    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        
        h2 Manifestaciones y características de la discalculia
        p.mb-4 Los individuos con discalculia presentan las siguientes dificultades:

        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3.bg-verde.rounded-8px
              img.pe-2(src='@/assets/curso/unidad/img-39.svg', style="width: 80px")
              .d-flex.flex-column
                p.px-1.text-small.mb-0.d-flex Elevado número de errores en cálculos aritméticos, especialmente con números grandes.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3.bg-verde.rounded-8px
              img.pe-2(src='@/assets/curso/unidad/img-40.svg', style="width: 80px")
              .d-flex.flex-column
                p.px-1.text-small.mb-0.d-flex Limitada capacidad para almacenar y recuperar resultados matemáticos en la memoria.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3.bg-verde.rounded-8px
              img.pe-2(src='@/assets/curso/unidad/img-41.svg', style="width: 80px")
              .d-flex.flex-column
                p.px-1.text-small.mb-0.d-flex Problemas con la alineación de números y la comprensión del valor posicional.

        h2 Estructuras cerebrales implicadas
        p.mb-4 La discalculia está asociada con alteraciones en áreas específicas del cerebro:
        
        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Hemisferio derecho
                p.text-small.px-4.text-center.pb-2 Responsable de la alineación de números, el manejo del valor numérico y la resolución de problemas.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Hemisferio izquierdo
                p.text-small.px-4.text-center.pb-2 Participa en la lectura, escritura de números y solución verbal de problemas aritméticos.

    p.mb-4 Ambos hemisferios deben colaborar para realizar cálculos matemáticos efectivos, lo que resalta la complejidad de las habilidades cognitivas involucradas en la matemática.

    .row.mb-4
      .col-12.col-xl-10(data-aos="fade-right")
        h2 Impacto en la vida cotidiana
        span La discalculia afecta no solo el desempeño académico, sino también la confianza en las habilidades matemáticas de los individuos. Estas dificultades pueden influir en actividades cotidianas como manejar dinero, calcular distancias o planificar horarios, limitando la independencia y las oportunidades laborales.
      .col-2.ms-auto.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rosa.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-45.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Es crucial implementar estrategias educativas adaptativas que incluyan herramientas tecnológicas, material visual y refuerzo continuo para ayudar a los estudiantes con discalculia a superar sus desafíos y desarrollar su potencial.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/248473") Ahumada Méndez, L. S. (2023). Dificultades del aprendizaje: una mirada desde el aula. Fondo Editorial Universidad Cooperativa de Colombia.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/153554") Fernández Baroja, F., Llopis Paret, A. M. & Pablo Marco, C. (2012). Discalculia escolar. Editorial CEPE.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/110041") Gardner, H. (1994). Estructuras de la mente: la teoría de las inteligencias múltiples. Fondo de Cultura Económica Argentina.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/vyZnvgvgm5c") Fernandez, M. (2020). Trastornos del NEURODESARROLLO. Claves para padres, educadores y profesionales sanitarios [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/podcast-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://open.spotify.com/episode/1LgJHdgMVIm1K9MlLvfrgA") Cerebros en construcción. (2024). Dislexia, disgrafía, discalculia Entendiendo los retos del aprendizaje [Podcast]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
