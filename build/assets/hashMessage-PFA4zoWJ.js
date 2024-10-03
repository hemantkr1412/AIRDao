import{dh as e,di as i,dj as a,Q as o}from"./index-DHJPliKI.js";const c=`Ethereum Signed Message:
`;function u(t,n){const r=typeof t=="string"?e(t):t.raw instanceof Uint8Array?t.raw:i(t.raw),s=e(`${c}${r.length}`);return a(o([s,r]),n)}export{u as hashMessage};
