import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider } from "thirdweb/react";
import {Provider} from "react-redux";
import { store } from './componets/store';
import { GoogleOAuthProvider } from "@react-oauth/google"


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
 
//     <ThirdwebProvider >
//     <Provider store={store}>
//     <App />
//     </Provider>
//     </ThirdwebProvider>
   
//   </React.StrictMode>
// );
root.render(
  <ThirdwebProvider>
    <GoogleOAuthProvider clientId='804423343303-81f5h6vftb38a5a6hgp1rj990t94c1f1.apps.googleusercontent.com'>
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </ThirdwebProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
