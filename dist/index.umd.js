!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("axios"),require("qs"),require("@apollo/client/core"),require("cross-fetch")):"function"==typeof define&&define.amd?define(["exports","axios","qs","@apollo/client/core","cross-fetch"],r):r((e||self).decafClient={},e.axios,e.qs,e.core,e.crossFetch)}(this,function(e,r,n,t,o){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=/*#__PURE__*/i(r),c=/*#__PURE__*/i(n),s=/*#__PURE__*/i(o);function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(this,arguments)}function f(e){if("token"in e)return{Authorization:"Token "+e.token};if("key"in(r=e)&&"secret"in r)return{Authorization:"Key "+e.key+":"+e.secret};var r;if(function(e){return"username"in e&&"password"in e}(e)){if("undefined"==typeof btoa)throw Error("btoa is undefined. Are you in node environment?");return{Authorization:"Basic "+btoa(e.username+":"+e.password)}}throw new Error("Unkown DECAF API credentials type")}function l(e,r){return a.default.create({baseURL:""+e,responseType:"json",headers:u({"Content-Type":"application/json"},f(r)),paramsSerializer:function(e){return c.default.stringify(e,{arrayFormat:"repeat"})}})}function p(e,r){return a.default.create({baseURL:e+"/api",responseType:"json",headers:u({"Content-Type":"application/json"},f(r)),paramsSerializer:function(e){return c.default.stringify(e,{arrayFormat:"repeat"})}})}function d(e,r){return new t.ApolloClient({link:new t.HttpLink({uri:e+"/apis/microlot/v1/graphql",fetch:s.default,headers:f(r)}),cache:new t.InMemoryCache,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}}})}e.buildDecafClient=function(e,r){return{bare:l(e,r),barista:p(e,r),microlot:d(e,r),credentials:r}}});
//# sourceMappingURL=index.umd.js.map
