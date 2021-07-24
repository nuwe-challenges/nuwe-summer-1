<img src="https://nuwe.io/_next/image?url=%2Flogo_color.png&w=64&q=75"/>


# Nuwe Summer League 💻

El repositorio contiene el proyecto para la Summer League de Nuwe. Está hecho en **React** con **Typescript**, creado con `create-react-app`. Para estilos se uso `Sass`. Este primer reto se basa en cómo se ve el perfil del usuario en NUWE. 

El proyecto se encuentra hosteado en **Netlify**


## Folder structure 📁
```
public/
src/
├───assets      
│   ├───icons   
│   └───images  
├───components  
├───constants
├───pages
├───redux
├───styles
└───types
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
