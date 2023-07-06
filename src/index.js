import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import store from "./Assets/Screens/reduxTodo/store";
// import { Provider } from "react-redux";

// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { compose, createStore } from '@reduxjs/toolkit'
// import reducer from './Assets/Screens/reduxCounter/reducer'

// let store = createStore(reducer,compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
//   ),)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <Auth0Provider
//                 domain="dev-j4h1yo20jp0km4vr.us.auth0.com"
//                 clientId="7XdqLIX0zUqQkD3jEuBbSehO5U0Qo5cN"
//                 authorizationParams={{
//                     redirect_uri: window.location.origin
//                 }}
//             >
//                 <App />
//             </Auth0Provider>
//         </BrowserRouter>
//     </Provider>
// );