var e=require("axios"),r=require("qs"),n=require("@apollo/client/core"),t=require("cross-fetch"),o=require("graphql-tag");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=/*#__PURE__*/i(e),u=/*#__PURE__*/i(r),c=/*#__PURE__*/i(t);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}function l(e){if("token"in e)return{Authorization:"Token "+e.token};if("key"in(r=e)&&"secret"in r)return{Authorization:"Key "+e.key+":"+e.secret};var r;if(function(e){return"username"in e&&"password"in e}(e)){if("undefined"==typeof btoa)throw Error("btoa is undefined. Are you in node environment?");return{Authorization:"Basic "+btoa(e.username+":"+e.password)}}throw new Error("Unkown DECAF API credentials type")}function f(e,r){return a.default.create({baseURL:""+e,responseType:"json",headers:s({"Content-Type":"application/json"},l(r)),paramsSerializer:function(e){return u.default.stringify(e,{arrayFormat:"repeat"})}})}function p(e,r){return a.default.create({baseURL:e+"/api",responseType:"json",headers:s({"Content-Type":"application/json"},l(r)),paramsSerializer:function(e){return u.default.stringify(e,{arrayFormat:"repeat"})}})}function y(e,r){return new n.ApolloClient({link:new n.HttpLink({uri:e+"/apis/microlot/v1/graphql",fetch:c.default,headers:l(r)}),cache:new n.InMemoryCache,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}}})}Object.defineProperty(exports,"gql",{enumerable:!0,get:function(){return o.gql}}),exports.buildDecafClient=function(e,r){return{bare:f(e,r),barista:p(e,r),microlot:y(e,r),credentials:r}};
//# sourceMappingURL=index.js.map