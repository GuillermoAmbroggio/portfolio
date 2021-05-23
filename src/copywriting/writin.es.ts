export const writingES = {
  menuTop: {
    home: "Inicio",
    about: "Sobre mi",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    name: "Guillermo Ambroggio",
    my: "Soy",
    title1: "Ingeniero",
    title2: "Desarrollador",
  },
  download: "Descargar",
  about: {
    title: "SOBRE MI",
    intro:
      "Graduado de Ingeniería Civil y desarrollador Full Stack, desarrollo aplicaciones React y React Native, tambien desarrollo APIs con Express.js & Node.js usando TypeScript o JavaScript. Soy un apasionado de inversiones en criptomonedas y en el mercado bursatil.",
    subtitle: "Full Stack Developer & Ingeniero Civil",
    birthdayTitle: "Cumpleaños: ",
    birthday: "21 Junio 1994",
    ageTitle: "Edad: ",
    age: "26",
    educationTitle: "Educación: ",
    education: "Universitario",
    cityTitle: "Ciudad: ",
    city: "Cordoba, Argentina",
    emailTitle: "Correo: ",
    email: "guillermoambroggio@gmail.com",
    personalInfo:
      "Filosofía de vida siempre positivo, creo en que trabajar la mente produce grandes beneficios y que todo lo que quieras lo puedes conseguir si te esfuerzas y enfocas en ello. Me gusta meditar y hacer mucho ejercicio físico.",
  },
  skills: {
    title: "HABILIDADES",
  },
  resume: {
    title: "CURRICULUM",
    education: {
      title: "Educación: ",
      1: {
        title: "Full Stack Developer",
        period: "2020-2020",
        institution: "Henry",
        description: "Bootcamp intensivo de JavaScript, +600 horas en 4 meses.",
      },
      2: {
        title: "Ingeniero Civil",
        period: "2013-2019",
        institution: "Universidad Nacional del Nordeste, Argentina",
      },
    },
    professionalExperiencie: {
      title: "Experiencia Laboral: ",
      1: {
        title: "Vitau (YC Company)",
        period: "SEP 2020 - PRESENTE",
        institution: "Farmacia digital - Monterrey, Mexico.",
        description:
          "Desarrollo de aplicaciones front-end para comercio electrónico.",
      },
      2: {
        title: "Direccion Nacional de Vialidad",
        period: "JUN 2019 - NOV 2020",
        institution: "Empresa estatal - Argentina.",
        description1:
          "Supervisar trabajos de bacheo, pavimentación y repavimentación.",
        deescription2:
          "Ensayos de laboratorio de hormigones y suelos naturales.",
      },
    },
  },
  projects: {
    title: "PROYECTOS",
    projectsDetails: {
      category: "Categoria: ",
      client: "Cliente: ",
      date: "Fecha del Proyecto: ",
    },
    Myprojects: [
      {
        id: 1,
        title: "Ten Shop - Comercio electronico",
        category: "Web",
        client: "Henry",
        date: "Julio, 2020",
        url: {
          title: "Ten Shop",
          url: "https://github.com/GuillermoAmbroggio/TenShop",
        },
        description: {
          title: "Descripción",
          content:
            "Este es el primer proyecto que desarrollé como programador, formó parte del trabajo final del curso Full Stack Developer en Henry.",
        },
      },
      {
        id: 2,
        title: "Vitau - Comercio electronico",
        category: "App",
        client: "Vitau.mx",
        date: "Marzo, 2021",
        url: {
          title: "Vitau App - PlayStore",
          url:
            "https://play.google.com/store/apps/details?id=mx.vitau.androidvitau",
          title2: "Vitau App - AppStore",
          url2:
            "https://apps.apple.com/mx/app/vitau-farmacia-digital/id1560696284",
        },
        description: {
          title: "Descripción",
          content:
            "Aplicacion desarrollada con React Native, Typescript, no puedo compartir el repositorio privado de la empresa, pero si la quieres probar puedes descargartela desde PlayStore para android, o AppStore para Ios.",
        },
      },
      {
        id: 3,
        title: "Top Gif",
        category: "Web",
        client: "Propio",
        date: "Agosto, 2020",
        url: {
          title: "Top Gif - Web",
          title2: "Top Gif - GitHub",
          url2: "https://github.com/GuillermoAmbroggio/TopGifs",
          url: "https://topgifs.vercel.app/",
        },
        description: {
          title: "Descripción",
          content:
            "Este proyecto consume los mejores gif de la api de Gipsy y los muestra, en el se puede editar la cantidad de gif y buscar gif por temas.",
        },
      },
    ],
  },
  contact: {
    title: "CONTACTO",
    location: {
      title: "Locación",
      info: "Cordoba, Argentina, CP 5000.",
    },
    email: {
      title: "Email",
      info: "guillermoambroggio@gmail.com",
    },
    linkedin: {
      title: "Linkedin",
      info: "/in/guillermoambroggio/",
    },
    form: {
      name: "Tu Nombre",
      email: "Tu Correo",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar Mensaje",
      errorsInputs: {
        required: "Este campo es requerido.",
        email: "Ingrese un correo valido.",
        message: "Mensaje demasiado corto.",
        minLong: "Debe tener 3 caracteres como mínimo",
      },
      successMessage:
        "He recivido tu mensaje, te contestaré en breve, gracias!",
      errorMessage: "Ocurrio un error, por favor inténtelo mas tarde.",
    },
  },
  footer: {
    made: "Hecho con",
    by: "por",
    text: "Gracias por tu visita, espero que te haya gustado, saludos!",
  },
};

export default writingES;
