module.exports = function () {
  var data = {
    Perfil_Empresa: [
      {
        id_Empresa:1,
        nombre_Empresa: "Interbank",
        descripcion_Empresa: "Banco importante del Perú",
        correo_Empresa:"interbank@gmail.com",
      },
      {
        id_Empresa:2,
        nombre_Empresa: "BBVA",
        descripcion_Empresa: "Banco importante del Perú",
        correo_Empresa:"bbva@gmail.com",
      },
      {
        id_Empresa:3,
        nombre_Empresa: "BCP",
        descripcion_Empresa: "Banco importante del Perú",
        correo_Empresa:"bcp@gmail.com",
      },
      {
        id_Empresa:4,
        nombre_Empresa: "UPC",
        descripcion_Empresa: "Intitución educativa de estudios superiores",
        correo_Empresa:"upc@gmail.com",
      }
    ],
    Requisitos: [
        {
          id_Requisitos:1,
          Requisito: "Autodidacta, Ingeniero de Software, Ingeniero de Sistemas",
        },
        {
          id_Requisitos:2,
          Requisito: "Autodidacta, Comunicaciones, Lider",
        },
        {
          id_Requisitos:3,
          Requisito: "Autodidacta, Lider, Ingeniero de Software, Ingeniero de Sistemas",
        },
        {
          id_Requisitos:4,
          Requisito: "Autodidacta, Ingeniero de Software, Ingeniero de Sistemas",
        }
      ],
    Usuario: [
        {
          id_Usuario:1,
          DNI_Usuario: 72400476,
          Usuario_Usuario:"PedroFin",
          Nombre_Usuario:"José Portocarrero",
          Correo_Usuario:"pedrofin@gmail.com",
          Contrasena_Usuario:"pedrofin123",
          Tipo_Usuario:"admin",
          key:"gd56hhi1q853mavgf245",
        },
        {
            id_Usuario:2,
            DNI_Usuario: 72740496,
            Usuario_Usuario:"MariaFer",
            Nombre_Usuario:"Maria Fernadez",
            Correo_Usuario:"mariaFer@gmail.com",
            Contrasena_Usuario:"MariaFer3155",
            Tipo_Usuario:"estudiante",
            key:"", //null
        },
        {
            id_Usuario:3,
            DNI_Usuario: 72400270,
            Usuario_Usuario:"AdolfoMur",
            Nombre_Usuario:"Adolfo Muros",
            Correo_Usuario:"adolfoMur@gmail.com",
            Contrasena_Usuario:"AdolfoMur_741",
            Tipo_Usuario:"estudiante",
            key:"", //null
        },
        {
            id_Usuario:4,
            DNI_Usuario: 72405976,
            Usuario_Usuario:"AnaCon",
            Nombre_Usuario:"Ana Contreras",
            Correo_Usuario:"anaCon@gmail.com",
            Contrasena_Usuario:"AnaCon864",
            Tipo_Usuario:"reclutador",
            key:"", //null
        }
      ],
    Institucion_Educativa: [
        {
          id_Institucion:1,
          nombre_Institucion: "Universidad Peruana de Ciencias Aplicadas",
        },
        {
          id_Institucion:2,
          nombre_Institucion: "Universidad Nacional de Ingeniería",
        },
        {
          id_Institucion:3,
          nombre_Institucion: "Universidad Nacional Mayor de San Marcos",
        },
        {
          id_Institucion:4,
          nombre_Institucion: "Universidad de Ingeniería y Tecnología",
        }
      ],
    Carreras: [
        {
          id_Carrera:1,
          nombre_Carrera: "Ingeniería de Sistemas de Información",
        },
        {
          id_Carrera:2,
          nombre_Carrera: "Ingeniería de Software",
        },
        {
          id_Carrera:3,
          nombre_Carrera: "Ciencias de la Computación",
        },
        {
          id_Carrera:4,
          nombre_Carrera: "Ingeniería Mecatrónica",
        }
      ],
    Calificacion: [
        {
          id_Calificacion:1,
          id_Estudiante: 3,
          Calificacion: 4, //de 1-5
        },
        {
          id_Calificacion:2,
          id_Estudiante: 3,
          Calificacion: 5, //de 1-5
        },
        {
          id_Calificacion:3,
          id_Estudiante: 2,
          Calificacion: 2, //de 1-5
        },
        {
          id_Calificacion:4,
          id_Estudiante: 2,
          Calificacion: 3, //de 1-5
        }
      ],
  }
  return data
}