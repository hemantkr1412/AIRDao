const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/web-connector-VJHda_D4.js","assets/index-CVGbB_rt.js","assets/index-CgP6FXoA.css","assets/sign-login-payload-BS5pcbMU.js","assets/oauth-Dfu-Xjzn.js","assets/eth_sendRawTransaction-DPdnXbFR.js"])))=>i.map(i=>d[i]);
import{aw as i,cw as s,_ as u}from"./index-CVGbB_rt.js";async function a(e,t){return s(e,async r=>{const{InAppWebConnector:n}=await u(async()=>{const{InAppWebConnector:o}=await import("./web-connector-VJHda_D4.js");return{InAppWebConnector:o}},__vite__mapDeps([0,1,2,3,4,5]));return new n({client:r,ecosystem:t})},t)}async function c(e){const{client:t}=e,n=await(await a(t)).getUser();switch(n.status){case i.LOGGED_IN_WALLET_INITIALIZED:return n}}async function p(e){const t=await c(e);if(t&&"email"in t.authDetails)return t.authDetails.email}async function f(e){const t=await c(e);if(t&&"phoneNumber"in t.authDetails)return t.authDetails.phoneNumber}async function h(e){return(await a(e.client,e.ecosystem)).preAuthenticate(e)}export{c as getAuthenticatedUser,p as getUserEmail,f as getUserPhoneNumber,h as preAuthenticate};
