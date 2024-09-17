const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sign-DNcP9RfW.js","assets/index-CVGbB_rt.js","assets/index-CgP6FXoA.css","assets/sign-typed-data-DJ5v0zjb.js","assets/sign-transaction-CB7zLsgA.js","assets/send-transaction-CZWdV08K.js","assets/switch-chain-CNU_5WPJ.js"])))=>i.map(i=>d[i]);
import{cS as w,_ as o}from"./index-CVGbB_rt.js";function E(c,r){if(w(c.address)!==w(r))throw new Error(`Failed to validate account address (${c.address}), differs from ${r}`)}function m(c){const r=c.split(":"),p=Number.parseInt(r[1]??"0");if(r.length!==2||r[0]!=="eip155"||p===0||!p)throw new Error(`Invalid chainId ${c}, should have the format 'eip155:1'`);return p}async function T(c){const{wallet:r,walletConnectClient:p,thirdwebClient:u,event:{topic:h,id:l,params:{chainId:_,request:t}},handlers:a}=c,n=r.getAccount();if(!n)throw new Error("No account connected to provided wallet");let s;try{switch(t.method){case"personal_sign":{if(a!=null&&a.personal_sign)s=await a.personal_sign({account:n,params:t.params});else{const{handleSignRequest:e}=await o(async()=>{const{handleSignRequest:i}=await import("./sign-DNcP9RfW.js");return{handleSignRequest:i}},__vite__mapDeps([0,1,2]));s=await e({account:n,params:t.params})}break}case"eth_sign":{if(a!=null&&a.eth_sign)s=await a.eth_sign({account:n,params:t.params});else{const{handleSignRequest:e}=await o(async()=>{const{handleSignRequest:i}=await import("./sign-DNcP9RfW.js");return{handleSignRequest:i}},__vite__mapDeps([0,1,2]));s=await e({account:n,params:t.params})}break}case"eth_signTypedData":{if(a!=null&&a.eth_signTypedData)s=await a.eth_signTypedData({account:n,params:t.params});else{const{handleSignTypedDataRequest:e}=await o(async()=>{const{handleSignTypedDataRequest:i}=await import("./sign-typed-data-DJ5v0zjb.js");return{handleSignTypedDataRequest:i}},__vite__mapDeps([3,1,2]));s=await e({account:n,params:t.params})}break}case"eth_signTypedData_v4":{if(a!=null&&a.eth_signTypedData_v4)s=await a.eth_signTypedData_v4({account:n,params:t.params});else{const{handleSignTypedDataRequest:e}=await o(async()=>{const{handleSignTypedDataRequest:i}=await import("./sign-typed-data-DJ5v0zjb.js");return{handleSignTypedDataRequest:i}},__vite__mapDeps([3,1,2]));s=await e({account:n,params:t.params})}break}case"eth_signTransaction":{if(a!=null&&a.eth_signTransaction)s=await a.eth_signTransaction({account:n,params:t.params});else{const{handleSignTransactionRequest:e}=await o(async()=>{const{handleSignTransactionRequest:i}=await import("./sign-transaction-CB7zLsgA.js");return{handleSignTransactionRequest:i}},__vite__mapDeps([4,1,2]));s=await e({account:n,params:t.params})}break}case"eth_sendTransaction":{const e=m(_);if(a!=null&&a.eth_sendTransaction)s=await a.eth_sendTransaction({account:n,chainId:e,params:t.params});else{const{handleSendTransactionRequest:i}=await o(async()=>{const{handleSendTransactionRequest:d}=await import("./send-transaction-CZWdV08K.js");return{handleSendTransactionRequest:d}},__vite__mapDeps([5,1,2]));s=await i({account:n,chainId:e,thirdwebClient:u,params:t.params})}break}case"eth_sendRawTransaction":{const e=m(_);if(a!=null&&a.eth_sendRawTransaction)s=await a.eth_sendRawTransaction({account:n,chainId:e,params:t.params});else{const{handleSendRawTransactionRequest:i}=await o(async()=>{const{handleSendRawTransactionRequest:d}=await import("./send-raw-transaction-CcFfZG5y.js");return{handleSendRawTransactionRequest:d}},[]);s=await i({account:n,chainId:e,params:t.params})}break}case"wallet_addEthereumChain":{if(a!=null&&a.wallet_addEthereumChain)s=await a.wallet_addEthereumChain({wallet:r,params:t.params});else throw new Error("Unsupported request method: wallet_addEthereumChain");break}case"wallet_switchEthereumChain":{if(a!=null&&a.wallet_switchEthereumChain)s=await a.wallet_switchEthereumChain({wallet:r,params:t.params});else{const{handleSwitchChain:e}=await o(async()=>{const{handleSwitchChain:i}=await import("./switch-chain-CNU_5WPJ.js");return{handleSwitchChain:i}},__vite__mapDeps([6,1,2]));s=await e({wallet:r,params:t.params})}break}default:{const e=a==null?void 0:a[t.method];if(e)s=await e({account:n,chainId:m(_),params:t.params});else throw new Error(`Unsupported request method: ${t.method}`)}}}catch(e){s={code:typeof e=="object"&&e!==null&&"code"in e?e.code:500,message:typeof e=="object"&&e!==null&&"message"in e?e.message:"Unknown error"}}p.respond({topic:h,response:{id:l,jsonrpc:"2.0",result:s}})}const R=Object.freeze(Object.defineProperty({__proto__:null,fulfillRequest:T},Symbol.toStringTag,{value:"Module"}));export{R as s,E as v};
