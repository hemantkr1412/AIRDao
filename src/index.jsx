import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MetaMaskProvider } from "@metamask/sdk-react"
import { ThirdwebProvider } from "thirdweb/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "Example React UI Dapp",
          url: window.location.href
        },
        infuraAPIKey: "210f27d3fbea4f8689fadcc8a6c5d048"
        // Other options.
      }}> */}
    <ThirdwebProvider >
    <App />
    </ThirdwebProvider>
    {/* </MetaMaskProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
