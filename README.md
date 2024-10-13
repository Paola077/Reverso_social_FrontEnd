#  REVERSO SOCIAL - Frontend

## Descripción General 👭 💪

Este proyecto, desarrollado como parte del programa pedagógico de Factoria F5, es un proyecto final creado en colaboración con un cliente real.   
La plataforma promueve la igualdad de género y el empoderamiento de las mujeres mediante dos enfoques principales: Planes de Igualdad y FEMsenior.

Planes de Igualdad:
Dirigido a cargos políticos, sindicales, administraciones públicas y empresas privadas. Este módulo tiene como objetivo eliminar todas las formas de discriminación basadas en sexo, género, orientación sexual, origen, religión o clase social, ofreciendo recursos y herramientas para fomentar la igualdad en diversos ámbitos.

FEMsenior:
FEMsenior es una comunidad creada para mujeres de 50 años o más, con el fin de desafiar los estereotipos relacionados con la edad. Este espacio permite a las usuarias compartir experiencias, participar en eventos, y acceder a oportunidades de empleo y recursos que destacan el poder de la edad como fuente de fortaleza.

La plataforma permite:

- Crear, editar y eliminar eventos: Las administradoras y Femsenior pueden gestionar las distintas secciones tales como son los eventos, los servicios, empleo y recursos desde su creación hasta su eliminación.   
- Acceder a recursos y participación activa: Las usuarias pueden explorar y aprovechar los recursos disponibles, incluyendo mentorías que ofreceran las FemSenior, formaciones y los recursos que se compartan en la comunidad.   
- Unirse a una comunidad activa: La comunidad facilita la colaboración y el apoyo entre mujeres de distintas edades y trasfondos, ofreciendo un espacio para mentorías, participación en servicios y acceso a herramientas tales como una sección de empleo donde podrán 
  subir sus currículumns para que promuevan su desarrollo personal y profesional.   
- Este proyecto invita a mujeres y entidades comprometidas con la igualdad a colaborar en la construcción de un futuro más equitativo.

![image](https://github.com/user-attachments/assets/53e052ac-0ded-4837-afa7-feabf22542f2)


## Características Principales 🚀

**Gestión de Planes de Igualdad**:

- Formulario de colabora
- Formulario de peticiones
- Información sobre servicios y proyectos.
  
**Gestión de Femsenior**:

- Creación de nuevas entradas de eventos, servicios, empleo y recursos.
- Edición de los eventos, servicios, empleo y recursos existentes.
- Eliminación de eventos, servicios, empleo y recursos.
- Visualización detallada con la información de cada evento.
- Suscripción a los eventos.
- Restricción de las acciones de creación, edición y eliminación para users solo pueden gestionarlo FemSenior y Admin autenticadas.
- Autentificación de usuarios
- Calendario de eventos
- Filtro de busqueda de la comunidad Femsenior
- Formulario de colabora
- Formulario de peticiones

**Diseño Responsivo**:
- La interfaz está optimizada para dispositivos móviles y escritorios, garantizando una experiencia de usuario adaptable y accesible.
  
## Tecnologías Utilizadas 🛠️

- **[React](https://es.react.dev/)**: Framework de frontend.
- **[Axios](https://axios-http.com/es/docs/intro)**: Cliente HTTP para realizar solicitudes al backend.
- **[React Router](https://reactrouter.com/en/main)**: Manejo de rutas y navegación en la aplicación.
- **[React Query](https://www.npmjs.com/package/react-query)**: Para consultas Api.
- **[HTML5](https://www.w3schools.com/html/) Y [SCSS](https://sass-lang.com/)**: Estilización avanzada con SASS.
- **[Cloudinary](https://cloudinary.com/)**: Servicio para subir y gestionar archivos en la nube.
- **[EmailJs](https://www.emailjs.com/)**: Gestionar los formularios.
- Otros..

## Arquitectura del Proyecto 🗂️

Este proyecto sigue una arquitectura basada en componentes, donde la interfaz de usuario se divide en módulos independientes y reutilizables.   
Cada componente cumple con una función específica y está organizado de manera lógica, lo que facilita su mantenimiento y escalabilidad.   
Esta arquitectura permite un desarrollo modular, ya que cada parte de la aplicación, como botones, formularios o secciones, se encapsula en su propio componente.   
Esta estructura favorece la reutilización y asegura una experiencia de desarrollo más eficiente y estructurada.

```
├── public              # Archivos públicos y estáticos
│ ├── icons             # Iconos usados en la aplicación
│ └── images            # Imágenes de uso general
├── src                 # Código fuente principal
│ ├── components        # Componentes reutilizables
│ │ ├── buttons         # Componentes de botones (e.g., RequestButton.jsx)
│ │ ├── calendar        # Componente de calendario
│ │ ├── cards           # Tarjetas de información
│ │ ├── carousel        # Componente de carrusel
│ │ ├── footer          # Pie de página
│ │ ├── forms           # Formularios
| | ├── inputs          # Inputs
│ │ ├── intro           # Componentes de introducción
│ │ ├── modal           # Ventanas modales
│ │ ├── navbar          # Barra de navegación
│ │ ├── sections        # Secciones de la aplicación
│ │ └── tabs            # Componentes de pestañas
│ ├── config            # Configuraciones generales
│ ├── context           # Manejo de estados globales (React Context)
│ ├── layout            # Componentes de diseño y estructura
│ ├── pages             # Páginas principales de la aplicación
│ ├── routes            # Definición de rutas y navegación
│ ├── scss              # Estilos globales en SCSS
│ └── services          # Lógica de interacción con la API
├── .gitignore          # Archivos y carpetas ignorados por Git
├── README.md           # Documentación del proyecto
├── eslint.config.js    # Configuración de ESLint
├── index.html          # Archivo HTML de entrada
├── package-lock.json   # Control de versiones de dependencias
├── package.json        # Dependencias y scripts del proyecto
└── vite.config.js      # Configuración del bundler Vite
 ```
### Descripción de Carpetas 🗂️

- **public**: Archivos estáticos y públicos, como iconos e imágenes.
- **src/components**: Componentes de interfaz, cada uno con sus subcomponentes y estilos.
- **config**: Configuración general del proyecto.
- **context**: Define contextos para el manejo de estados globales.
- **layout**: Componentes de estructura para el diseño global.
- **pages**: Páginas de la aplicación que representan vistas completas.
- **routes**: Definición de rutas y lógica de navegación.
- **scss**: Estilos SCSS organizados para una mejor mantenibilidad.
- **services**: Funciones para la interacción con el backend/API.

## Guía de Instalación 🧑‍💻

Clonar este repositorio:

git clone (https://github.com/Paola077/Reverso_social_FrontEnd.git)

Navegar al directorio del proyecto:

```
cd Reverso_social_FrontEnd
```

Instalar las dependencias:

```
npm install
```

Iniciar el servidor de desarrollo:

```
npm run dev
```

## Contribución 🤝

Las contribuciones son bienvenidas. Para colaborar, sigue estos pasos:

- Haz un fork del proyecto.
  
Crea una nueva rama para tu funcionalidad:

```
git checkout -b feature/nueva-funcionalidad
```
Realiza tus cambios y haz un commit:

```
git commit -m 'Añadir nueva funcionalidad'
```

Sube tus cambios a la rama:

```
git push origin feature/nueva-funcionalidad
```
Abre un Pull Request para que podamos revisar tus cambios.

## Integración con Backend 🔗

Este proyecto está diseñado para funcionar junto con una API backend. Para obtener detalles sobre la configuración del backend y los endpoints disponibles, consulta el README del [Backend README.](https://github.com/Deiximar/reversosocial.git)

Autoras ✒️

- [**Ziortza**](https://github.com/indiakka) 
- [**Cristina**](https://github.com/CrisZDE)
- [**Paola**](https://github.com/Paola077)
- [**Mabel**](https://github.com/MabelZar)
- [**Laura**](https://github.com/Lauraa23)
- [**Deiximar**](https://github.com/Deiximar)
- [**Carolina**](https://github.com/CarolBV)
