import{di as e,dj as i,dk as a,Q as o}from"./index-BKdoT7YN.js";const c=`Ethereum Signed Message:
`;function u(t,n){const r=typeof t=="string"?e(t):t.raw instanceof Uint8Array?t.raw:i(t.raw),s=e(`${c}${r.length}`);return a(o([s,r]),n)}export{u as hashMessage};
