<img src="https://nuwe.io/_next/image?url=%2Flogo_color.png&w=64&q=75"/>


# Nuwe Summer League 💻

El repositorio contiene el proyecto para la Summer League de Nuwe. Está hecho en **React** con **Typescript**, creado con `create-react-app`. Para estilos se uso `Sass`. Este primer reto se basa en cómo se ve el perfil del usuario en NUWE. 

El proyecto se encuentra hosteado en **Netlify**

## Week #2 ⛱

Para el reto de la semana 2 se pedía introducir los **cromos** de usuario a la aplicación. 

### More about this week's project 🤓

<img src="https://github.com/judithmg/nuwe-summer-1/blob/main/public/images/cromo.png?raw=true"/>

Cuando el usuario clica el botón de `VER NUWE NFT` se abre una ventana modal en la que se puede ver la tarjeta mini y el cromo. La parte frontal del cromo contiene la información básica del usuario, y la trasera, el código QR auto-generado para cada usuario. Si se escanea dicho código, se podrá acceder al cromo del usuario. 

Para generar esta ventana modal se ha utilizado `ReactDOM.createPortal`:

- Normalmente, cuando retornas un elemento del método de render de un componente, este se monta en el DOM como un elemento hijo del nodo padre más cercano. En algunos casos, como en el presente, es más útil insertar un hijo en una ubicación diferente en el DOM. 

```
{
  return ReactDOM.createPortal(
    {children}, 
    domNode
  );
}
```

- Esto permite que el elemento 'salga' visualmente de su contenedor, y que gracias a las propiedades `z-index` se muestre por encima de todo el contenido de la aplicación. 


### Libraries added 📚

Los paquetes que se han introducido esta semana han sido:

- **qrcode.react** para crear el código QR, que redirige a https://nuwe-summer1.netlify.app/{nombre-del-usuario}
- **react-card-flip** para la animación al girar el cromo, que tiene parte delantera y trasera
- **react-icons** para añadir el icono del botón de girar el cromo
- **react-router-dom** para añadir las rutas

### Changes on project structure

Se han añadido nuevas carpetas al proyecto, tratando siempre de mantener una estructura limpia

- `hooks` con el hook `useModal` para la creación de ventanas modales
- `routes` con la ruta principal del proyecto
- `utils` con la función que crea la URL al perfil del usuario



## Folder structure 📁
```
public/
src/
├───assets      
│   ├───icons   
│   └───images  
├───components  
├───constants
├───hooks
├───pages
├───redux
├───routes
├───styles
├───types
└───utils
```
## Live preview 📳

[Click here to go to the deployed site](https://nuwe-summer1.netlify.app)

## Sonar report ☀

<img src="https://github.com/judithmg/nuwe-summer-1/blob/main/public/images/sonar.png?raw=true"/>

En caso de querer generar un reporte con sonar-scanner, crea un archivo `sonar-project.properties` con el siguiente código:

```
# must be unique in a given SonarQube instance
sonar.projectKey=my:project

# --- optional properties ---

# defaults to project key
#sonar.projectName=My project
# defaults to 'not provided'
#sonar.projectVersion=1.0
 
# Encoding of the source code. Default is default system encoding
#sonar.sourceEncoding=UTF-8
```

## Libraries used 📚

- **`redux`** para gestionar el estado de la app (usuarios por el momento)
- **`styled-components`** para crear componentes reutilizables
- **`@nivo/core`** para crear gráficas
- **`eslint`** como linter, para analizar el código y solucionar problemas

## More about this project 🤓

- Toda la información sobre el usuario sigue el siguiente modelo:

```
interface User {
  name: string;
  mail: string;
  phone: string;
  position: string;
  location: string;
  description: string;
  github: string;
  linkedin: string;
  jobLocation: string;
  jobDesc: string;
  jobSalary: {
    min: number;
    max: number;
  };
  jobTravel: boolean;
  jobRemote: boolean;
  jobWhen: string;
  stack: string[];
  hardSkills: {
    type: string;
    points: number;
  }[];
  softSkills: {
    type: string;
    points: number;
  }[];
  otherValidated: {
    type: mapType;
    points: number;
  }[];
}
```

Como para esta parte del reto no se requiere de backend, los datos del usuario `default` se encuentran en `src/constants/defaultUser.ts`

- Las constantes de texto se encuentran en `src/constants/text`

Esto facilita el poder cambiar más fácilmente los textos, títulos etc en el proyecto, y en caso de querer añadir traducciones a la web facilitaría el proceso.

- Toda la lógica de `redux` se encuentra en `src/redux`. Se usa el selector `reselect` que permite el fácil manejo de redux, de forma que se guarda el mínimo `state` posible.


## Run this project 🏃‍♀️

```
git clone https://github.com/judithmg/nuwe-summer-1
cd nuwe-summer-1
npm install
```

To run the project, use
```
npm start
```

Project will run in http://localhost:3000 if available, otherwise check your terminal.

## Author 👩‍💻

- Judith Martínez (judithmg)
