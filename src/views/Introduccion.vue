<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-rosa.p-4.mb-4
          span En el mundo actual, comprender los trastornos del aprendizaje, como la dislexia, la disgrafía y la discalculia, se ha vuelto fundamental para la educación inclusiva y el bienestar de los estudiantes. Esta unidad se enfoca en explorar no solo la naturaleza de estos trastornos, sino también su relación intrínseca con el desarrollo cerebral y su impacto en entornos educativos. Adicionalmente, se abordará el Trastorno por Déficit de Atención e Hiperactividad (TDAH) y sus implicaciones neuropsicológicas, así como las estrategias de intervención que pueden implementarse en contextos educativos para apoyar a los alumnos que enfrentan estas dificultades.
        span Al finalizar esta unidad, los estudiantes serán capaces de identificar y comprender los trastornos del aprendizaje desde su base neuropsicológica, evaluar las estrategias de intervención neuropsicológica para tratar los trastornos del aprendizaje, así como proponer intervenciones neuropsicológicas adaptadas a diferentes trastornos del aprendizaje.	
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-verde.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-2.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 La importancia de estos trastornos trasciende el ámbito académico; afectan directamente la vida de muchos estudiantes y su futuro profesional. Por ejemplo, al entender cómo un estudiante con dislexia aprende de manera diferente, los educadores pueden adaptar sus métodos de enseñanza para maximizar el potencial de cada alumno. Igualmente, conocer las implicaciones del TDAH puede proporcionar herramientas para mejorar la atención y el rendimiento en el aula.
    
    


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
