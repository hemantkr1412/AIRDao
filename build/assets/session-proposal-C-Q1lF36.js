import{cP as b,cQ as E,cR as k}from"./index-CVGbB_rt.js";async function Q(s){var c,r;const{wallet:i,walletConnectClient:e,event:a,chains:t,onConnect:m}=s,d=i.getAccount();if(!d)throw new Error("No account connected to provided wallet");const o=(r=(c=a.verifyContext)==null?void 0:c.verified)==null?void 0:r.origin;o&&await A({origin:o,walletConnectClient:e});const n=await W({account:d,walletConnectClient:e,sessionProposal:a,chains:t});await b(n),i.subscribe("disconnect",()=>{E({session:n,walletConnectClient:e})}),m==null||m(n)}async function A({walletConnectClient:s,origin:i}){const e=await k();for(const a of e)a.origin===i&&await E({session:a,walletConnectClient:s})}async function W({account:s,walletConnectClient:i,sessionProposal:e,chains:a}){var o,n,c,r,w,f,v,l,u,g,N,h,S,y,$,C,q,x;if(!((o=e.params.requiredNamespaces)!=null&&o.eip155)&&!((n=e.params.optionalNamespaces)!=null&&n.eip155))throw new Error("No EIP155 namespace found in Wallet Connect session proposal");const t={chains:[...Array.from(new Set([...((w=(r=(c=e.params.requiredNamespaces)==null?void 0:c.eip155)==null?void 0:r.chains)==null?void 0:w.map(p=>`${p}:${s.address}`))??[],...((l=(v=(f=e.params.optionalNamespaces)==null?void 0:f.eip155)==null?void 0:v.chains)==null?void 0:l.map(p=>`${p}:${s.address}`))??[],...(a==null?void 0:a.map(p=>`eip155:${p.id}:${s.address}`))??[]]))],methods:[...((g=(u=e.params.requiredNamespaces)==null?void 0:u.eip155)==null?void 0:g.methods)??[],...((h=(N=e.params.optionalNamespaces)==null?void 0:N.eip155)==null?void 0:h.methods)??[]],events:[...((y=(S=e.params.requiredNamespaces)==null?void 0:S.eip155)==null?void 0:y.events)??[],...((C=($=e.params.optionalNamespaces)==null?void 0:$.eip155)==null?void 0:C.events)??[]]};return{topic:(await(await i.approve({id:e.id,namespaces:{eip155:{accounts:t.chains,methods:t.methods,events:t.events}}})).acknowledged()).topic,origin:((x=(q=e.verifyContext)==null?void 0:q.verified)==null?void 0:x.origin)||"Unknown origin"}}export{W as acceptSessionProposal,A as disconnectExistingSessions,Q as onSessionProposal};
