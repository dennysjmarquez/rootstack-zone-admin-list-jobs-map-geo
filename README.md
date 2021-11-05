# Sistema de geolocalización de tareas de campo que incluye un módulo de autenticación


1. Manejo de los React Hooks, useEffect(), useState() and React.memo para evitar el renderizado innecesario de algunos componentes hijos.
   </br></br>
2. Creación de un sistema centralizado para el manejo de las peticiones a la Api con fetch y el envió del token en las cabeceras de las peticiones.
   </br></br>
3. Creación de un sistema para el manejo de forma segura el almacenamiento de los tokens en el storage del browser agregándole una capa extra de seguridad al JWR.
   </br></br>
4. Creación de un sistema que valida el tiempo de expiración del token y un sistema para proteger las rutas que son sensibles, mediante la creación de un HOC.
   </br></br>
5. Implementación de Matarial UI, MUI: The React component library you always wanted para los components.
   </br></br>
6. Implementación de Redux y Redux thunk para el manejo de la data.
   </br></br>
7. Creación de una data Table con enlace directo a la ubicación en un mapa.
   </br></br>
8. Relleno del mapa con los marker según la data obtenida, coloreo de un único color en cada marker de la data, esto facilita la asociación del job de la tabla con el pin del mapa.
   </br></br>
9. Funcionalidad extra al hacer clic en el botón “ubicar en el mapa” del job en la tabla se va directo al punto en el mapa centrando la vista en el pin.
   </br></br>
10. Detección de la ubicación del usuario.
    </br></br>
11. Paginación de la data en el Data Table.
    </br></br>

## DEMO [https://dennysjmarquez.github.io/rootstack-zone-admin-list-jobs-map-geo/demo](https://dennysjmarquez.github.io/rootstack-zone-admin-list-jobs-map-geo/demo)

---

** ENV - Environment

REACT_APP_URL_BASE=

REACT_APP_MAP_KEY=

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
