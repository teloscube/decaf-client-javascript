var e=require("axios"),r=require("qs"),n=require("@apollo/client/core"),t=require("cross-fetch");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=/*#__PURE__*/o(e),a=/*#__PURE__*/o(r),u=/*#__PURE__*/o(t);function c(){return c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},c.apply(this,arguments)}function s(e){if("token"in e)return{Authorization:"Token "+e.token};if("key"in(r=e)&&"secret"in r)return{Authorization:"Key "+e.key+":"+e.secret};var r;if(function(e){return"username"in e&&"password"in e}(e)){if("undefined"==typeof btoa)throw Error("btoa is undefined. Are you in node environment?");return{Authorization:"Basic "+btoa(e.username+":"+e.password)}}throw new Error("Unkown DECAF API credentials type")}function f(e,r){return i.default.create({baseURL:""+e,responseType:"json",headers:c({"Content-Type":"application/json"},s(r)),paramsSerializer:function(e){return a.default.stringify(e,{arrayFormat:"repeat"})}})}function l(e,r){return i.default.create({baseURL:e+"/api",responseType:"json",headers:c({"Content-Type":"application/json"},s(r)),paramsSerializer:function(e){return a.default.stringify(e,{arrayFormat:"repeat"})}})}function p(e,r){return new n.ApolloClient({link:new n.HttpLink({uri:e+"/apis/microlot/v1/graphql",fetch:u.default,headers:s(r)}),cache:new n.InMemoryCache,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}}})}exports.buildDecafClient=function(e,r){return{bare:f(e,r),barista:l(e,r),microlot:p(e,r),credentials:r}};
//# sourceMappingURL=index.cjs.map
