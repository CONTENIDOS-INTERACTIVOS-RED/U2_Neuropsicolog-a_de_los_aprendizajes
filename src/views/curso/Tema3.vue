<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Intervención'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") El abordaje de los trastornos del aprendizaje en contextos educativos requiere de una intervención integral, personalizada e interdisciplinaria. Cada estudiante presenta características y necesidades únicas, por lo que es esencial implementar estrategias adaptadas que potencien su desarrollo académico y emocional.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

    p.text-bold.mb-4 Las principales características de la intervención educativa son: 

    .row.position-relative.mb-5.py-4.bg-morado.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Evaluación integral
              p Identificación temprana mediante herramientas diagnósticas, realizada por un equipo interdisciplinario para obtener una visión completa del estudiante.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Adaptaciones curriculares
              p Incluye modificaciones de contenido (simplificación de textos, materiales visuales) y ajustes metodológicos (aprendizaje activo, ejemplos prácticos).
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Intervenciones individualizadas
              p Plan educativo individualizado (PEI) y tutorías personalizadas diseñadas según las necesidades del estudiante.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Uso de tecnología
              p  Aplicaciones educativas, software especializado, calendarios digitales y herramientas de planificación para apoyar al estudiante.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Apoyo psicológico
              p Desarrollo de habilidades socioemocionales mediante terapia y creación de un entorno donde los estudiantes se sientan valorados y comprendidos.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Formación y sensibilización
              p Capacitación a docentes y familias sobre trastornos del aprendizaje y promoción de empatía en el aula para un entorno inclusivo.

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        .bg-rosa.p-4.mb-4
          span Las <b>intervenciones individuales</b> permiten atender necesidades específicas, mientras que las <b>intervenciones grupales</b> promueven habilidades sociales y el aprendizaje colaborativo. Este enfoque integral fomenta el progreso académico y fortalece la autoestima de los estudiantes.
        span La intervención en trastornos del aprendizaje exige un compromiso constante por parte de los educadores, familiares y especialistas. Solo a través de estrategias personalizadas, el uso de recursos tecnológicos, el apoyo psicológico y la formación de un entorno inclusivo, se puede garantizar el máximo desarrollo del potencial de cada estudiante.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
    
    .row.mb-5
      .d-flex.align-items-center
        .d-flex.align-items-center.bg-verde.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-60.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 El seguimiento continuo y la colaboración interdisciplinaria son esenciales para crear una cultura educativa que valore las diferencias individuales, fomente la resiliencia y contribuya al bienestar emocional y social de los niños, estableciendo las bases para un futuro más equitativo e inclusivo.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/128920") Tchang Sánchez, A., et al. (2020). Todo lo que necesitas saber sobre el TDAH en la etapa de aprendizaje. LA LEY.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/41237") Valdés Velázquez, A. (2015). Trastorno por déficit de atención y/o hiperactividad. Editorial Digital UNID.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://dialnet.unirioja.es/servlet/libro?codigo=322002") Miranda Casas, A. (1999). El niño hiperactivo (TDA-H): intervención en el aula. Universitat Jaume I.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/229401") Fau, M. E. (2023). Técnicas de estudio para personas con dislexia. La Bisagra.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/153530") Outón Oviedo, P. (2007). Programas de intervención con disléxicos. Editorial CEPE.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/podcast-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://open.spotify.com/episode/44YKRdIdrTcgTMByOka9Yo") Vásquez, D. (2022). Estrategia educativa [Podcast]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

    .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario='cuestionario'/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Dislexia e Inteligencias Múltiples',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál de las siguientes es una posible causa de la dislexia?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hogar disfuncional', esCorrecta: false },
            { id: 'b', texto: 'Carga genética', esCorrecta: true },
            { id: 'c', texto: 'Problemas de atención', esCorrecta: false },
            {
              id: 'd',
              texto: 'Impactos en las estructuras cerebrales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de inteligencia permite a una persona entender sus propias emociones?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Inteligencia lógica', esCorrecta: false },
            { id: 'b', texto: 'Inteligencia interpersonal', esCorrecta: false },
            { id: 'c', texto: 'Inteligencia intrapersonal', esCorrecta: true },
            { id: 'd', texto: 'Inteligencia espacial', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Los niños con dislexia no pueden ser inteligentes.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Martin está presentando síntomas con dificultades para procesar el lenguaje, por lo cual creen que puede tener dislexia. Esto es:',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'La teoría de las inteligencias múltiples fue formulada por el psicólogo Sigmund Freud.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
