import r from"axios";import e from"qs";import{ApolloClient as n,HttpLink as o,InMemoryCache as t}from"@apollo/client/core";import i from"cross-fetch";export{gql}from"graphql-tag";function a(){return a=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])}return r},a.apply(this,arguments)}function c(r){if("token"in r)return{Authorization:`Token ${r.token}`};if("key"in(e=r)&&"secret"in e)return{Authorization:`Key ${r.key}:${r.secret}`};var e;if(function(r){return"username"in r&&"password"in r}(r)){if("undefined"==typeof btoa)throw Error("btoa is undefined. Are you in node environment?");return{Authorization:`Basic ${btoa(r.username+":"+r.password)}`}}throw new Error("Unkown DECAF API credentials type")}function s(n,o){return r.create({baseURL:`${n}`,responseType:"json",headers:a({"Content-Type":"application/json"},c(o)),paramsSerializer:r=>e.stringify(r,{arrayFormat:"repeat"})})}function p(n,o){return r.create({baseURL:`${n}/api`,responseType:"json",headers:a({"Content-Type":"application/json"},c(o)),paramsSerializer:r=>e.stringify(r,{arrayFormat:"repeat"})})}function u(r,e){return new n({link:new o({uri:`${r}/apis/microlot/v1/graphql`,fetch:i,headers:c(e)}),cache:new t,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}}})}function f(r,e){return{bare:s(r,e),barista:p(r,e),microlot:u(r,e),credentials:e}}export{f as buildDecafClient};
//# sourceMappingURL=index.modern.mjs.map
