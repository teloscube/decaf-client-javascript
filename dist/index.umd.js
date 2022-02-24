!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("axios"),require("qs"),require("@apollo/client/core"),require("cross-fetch"),require("graphql-tag")):"function"==typeof define&&define.amd?define(["exports","axios","qs","@apollo/client/core","cross-fetch","graphql-tag"],r):r((e||self).decafClient={},e.axios,e.qs,e.core,e.crossFetch,e.graphqlTag)}(this,function(e,r,n,t,o,i){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=/*#__PURE__*/a(r),u=/*#__PURE__*/a(n),s=/*#__PURE__*/a(o);function f(){return f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},f.apply(this,arguments)}function l(e){if("token"in e)return{Authorization:"Token "+e.token};if("key"in(r=e)&&"secret"in r)return{Authorization:"Key "+e.key+":"+e.secret};var r;if(function(e){return"username"in e&&"password"in e}(e)){if("undefined"==typeof btoa)throw Error("btoa is undefined. Are you in node environment?");return{Authorization:"Basic "+btoa(e.username+":"+e.password)}}throw new Error("Unkown DECAF API credentials type")}function p(e,r){return c.default.create({baseURL:""+e,responseType:"json",headers:f({"Content-Type":"application/json"},l(r)),paramsSerializer:function(e){return u.default.stringify(e,{arrayFormat:"repeat"})}})}function d(e,r){return c.default.create({baseURL:e+"/api",responseType:"json",headers:f({"Content-Type":"application/json"},l(r)),paramsSerializer:function(e){return u.default.stringify(e,{arrayFormat:"repeat"})}})}function y(e,r){return new t.ApolloClient({link:new t.HttpLink({uri:e+"/apis/microlot/v1/graphql",fetch:s.default,headers:l(r)}),cache:new t.InMemoryCache,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}}})}Object.defineProperty(e,"gql",{enumerable:!0,get:function(){return i.gql}}),e.buildDecafClient=function(e,r){return{bare:p(e,r),barista:d(e,r),microlot:y(e,r),credentials:r}}});
//# sourceMappingURL=index.umd.js.map
