export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '2',
    tituloUnidad:
      'Trastornos del Aprendizaje desde una Perspectiva Neuropsicológica',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Dislexia, disgrafía, discalculia y su relación con el desarrollo cerebral.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Dislexia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Disgrafía',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Discalculia',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'TDHA: Trastorno por déficit de atención e hiperactividad.',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Intervención',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'American Psychological Association [APA]. (2014). Manual de diagnóstico y estadístico de los trastornos mentales (DSM-5).',
      link: '',
    },
    {
      referencia:
        'Fernández Baroja, F., Llopis Paret, A. M., & Pablo Marco, C. (2012). Discalculia escolar. Editorial CEPE.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/153554?page=206',
    },
    {
      referencia:
        'Gardner, H. (1994). Estructuras de la mente: la teoría de las inteligencias múltiples. Fondo de Cultura Económica Argentina.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/110041?page=13',
    },
    {
      referencia:
        'Miranda Casas, A. (1999). El niño hiperactivo (TDA-H): intervención en el aula: un programa de formación para profesores. Universitat Jaume I.',
      link:
        'https://books.google.co.id/books?id=-X2JeoHmuI0C&printsec=frontcover&hl=es&source=gbs_vpt_read#v=onepage&q&f=false',
    },
    {
      referencia:
        'Outón Oviedo, P. (2007). Programas de intervención con disléxicos: diseño, implementación y evaluación. Editorial CEPE.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/153530?page=25',
    },
    {
      referencia:
        'Teruel Romero, J. & Latorre Latorre, Á. (2015). Dificultades de aprendizaje: intervención en dislexia y discalculia. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49080?page=16',
    },
  ],
  glosario: [
    {
      referencia:
        'American Psychological Association [APA]. (2014). Manual de diagnóstico y estadístico de los trastornos mentales (DSM-5).',
      link: '',
    },
    {
      referencia:
        'Fernández Baroja, F., Llopis Paret, A. M., & Pablo Marco, C. (2012). Discalculia escolar. Editorial CEPE.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/153554?page=206',
    },
    {
      referencia:
        'Gardner, H. (1994). Estructuras de la mente: la teoría de las inteligencias múltiples. Fondo de Cultura Económica Argentina.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/110041?page=13',
    },
    {
      referencia:
        'Miranda Casas, A. (1999). El niño hiperactivo (TDA-H): intervención en el aula: un programa de formación para profesores. Universitat Jaume I.',
      link:
        'https://books.google.co.id/books?id=-X2JeoHmuI0C&printsec=frontcover&hl=es&source=gbs_vpt_read#v=onepage&q&f=false',
    },
    {
      referencia:
        'Outón Oviedo, P. (2007). Programas de intervención con disléxicos: diseño, implementación y evaluación. Editorial CEPE.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/153530?page=25',
    },
    {
      referencia:
        'Teruel Romero, J. & Latorre Latorre, Á. (2015). Dificultades de aprendizaje: intervención en dislexia y discalculia. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49080?page=16',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
