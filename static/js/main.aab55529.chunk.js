(this["webpackJsonpcoronavirus-tracker"]=this["webpackJsonpcoronavirus-tracker"]||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),l=a.n(r),o=a(28),s=a(7),i=(a(36),a(5)),u=a(11),m=a.n(u);function d(e){var t=e.title,a=e.value;return c.a.createElement("div",{className:"div-globalinfo-box-item"},c.a.createElement("h4",{className:"global-info-value"},parseInt(a).toLocaleString()),c.a.createElement("span",{className:"global-info-title"},t.replace(/_/g," ").toUpperCase()))}function v(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){m.a.get("https://thevirustracker.com/free-api?global=stats").then((function(e){var t=e.data.results[0],a=t.total_cases,n=t.total_recovered,c=t.total_deaths,l=t.total_new_cases_today,o=t.total_new_deaths_today;r({cases:a,recovered:n,deaths:c,cases_today:l,deaths_today:o})})).catch((function(e){return console.log(e)}))}),[]),c.a.createElement("div",{className:"div-globalinfo-box"},void 0===a.cases?c.a.createElement("h4",null,"Loading informations..."):Object.entries(a).map((function(e){return c.a.createElement(d,{title:e[0],value:e[1]})})))}var E=a(12),f=a(13);function h(e){var t=e.title,a=e.total_cases,n=e.total_recovered,r=e.total_deaths,l=e.total_new_cases_today,o=e.total_new_deaths_today,s=e.total_active_cases,i=e.total_serious_cases;return c.a.createElement("div",{className:"country-info-box"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"country-info-box-inside"},c.a.createElement("div",{className:"country-info-div"},c.a.createElement("h3",null,parseInt(a).toLocaleString()),c.a.createElement("span",null,"Total cases")),c.a.createElement("div",{className:"country-info-div"},c.a.createElement("h3",null,parseInt(n).toLocaleString()),c.a.createElement("span",null,"Total recovered")),c.a.createElement("div",{className:"country-info-div"},c.a.createElement("h3",null,parseInt(r).toLocaleString()),c.a.createElement("span",null,"Total deaths")),c.a.createElement("div",{className:"country-info-div"},c.a.createElement("h3",null,parseInt(l).toLocaleString()),c.a.createElement("span",null,"New cases today")),c.a.createElement("div",{className:"country-info-div"},c.a.createElement("h3",null,parseInt(o).toLocaleString()),c.a.createElement("span",null,"New deaths today")),c.a.createElement("div",{className:"country-info-div"},c.a.createElement("h3",null,parseInt(s).toLocaleString()),c.a.createElement("span",null,"Total active cases")),c.a.createElement("div",{className:"country-info-div"},c.a.createElement("h3",null,parseInt(i).toLocaleString()),c.a.createElement("span",null,"Total serious cases"))))}function p(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),o=Object(i.a)(l,2),s=o[0],u=o[1],d=Object(n.useState)(!1),v=Object(i.a)(d,2),p=v[0],b=v[1],_=Object(n.useState)(""),g=Object(i.a)(_,2),N=g[0],y=g[1];Object(n.useEffect)((function(){m.a.get("https://thevirustracker.com/free-api?countryTotals=ALL").then((function(e){var t=0,a=Object.values(Object(E.a)({},e.data.countryitems[0])).map((function(e){return t<e.total_cases&&(t=e.total_cases),Object(E.a)({},e)}));r(a),u(t)})).catch((function(e){return console.log(e)}))}),[]);return p?c.a.createElement(h,N):c.a.createElement("div",{className:"map-box"},c.a.createElement(f.SvgLoader,{path:"/coronavirus-tracker/globalMap.svg",id:"map"},c.a.createElement(f.SvgProxy,{selector:"path",fill:"#6f6f6f",strokeWidth:"1",stroke:"#222"}),Object.values(a).map((function(e){if(e.ourid){var t=function(e){if(0!==s){if(e<10)return"rgb( 255, 250, 245)";if(e<1e3)return"rgb( 255, 200, 195)";var t=Math.trunc(100*e/s),a=(100-t)/100*(100+2*t),n=Math.trunc(245*t/100+a);return"rgb( 255, ".concat(250-n,", ").concat(245-n,")")}}(e.total_cases);return c.a.createElement(f.SvgProxy,{key:e.ourid,className:"svg-map",id:e.code,selector:"#".concat(e.code),fill:t,onClick:function(){return function(e){y(e),b(!0)}(e)}})}}))))}var b=a(9);function _(e){var t=e.title,a=e.total_cases,n=e.total_recovered,r=e.total_deaths,l=e.percent_recovered,o=e.percent_deaths;return c.a.createElement("tr",null,c.a.createElement("td",null,t),c.a.createElement("td",null,parseInt(a).toLocaleString()),c.a.createElement("td",{className:"td_recovered"},parseInt(n).toLocaleString()),c.a.createElement("td",{className:"td_recovered"},l.toFixed(2)),c.a.createElement("td",{className:"td_death"},parseInt(r).toLocaleString()),c.a.createElement("td",{className:"td_death"},o.toFixed(2)))}function g(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),s=o[0],u=o[1];Object(n.useEffect)((function(){m.a.get("https://thevirustracker.com/free-api?countryTotals=ALL").then((function(e){var t=Object.values(Object(E.a)({},e.data.countryitems[0])).map((function(e){var t=e.total_cases,a=e.total_deaths,n=e.total_recovered/t*100,c=a/t*100;return n=n||0,c=c||0,Object(E.a)({},e,{percent_deaths:c,percent_recovered:n})}));r(t)})).catch((function(e){return console.log(e)}))}),[]);var d=function(e){var t,n,c,l=(t=a,n=e.target.id,c=s,Object.values(t).sort((function(e,t){return c?e[n]>t[n]?1:t[n]>e[n]?-1:0:e[n]<t[n]?1:t[n]<e[n]?-1:0})));u(!s),r(l)};return c.a.createElement("div",{className:"div-countries"},c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",{id:"title",onClick:d},c.a.createElement(b.a,{className:"icon"}),"Country"),c.a.createElement("th",{id:"total_cases",onClick:d},c.a.createElement(b.a,{className:"icon"}),"Cases"),c.a.createElement("th",{id:"total_recovered",onClick:d},c.a.createElement(b.a,{className:"icon"}),"Recovered"),c.a.createElement("th",{id:"percent_recovered",onClick:d},c.a.createElement(b.a,{className:"icon"}),"%"),c.a.createElement("th",{id:"total_deaths",onClick:d},c.a.createElement(b.a,{className:"icon"}),"Deaths"),c.a.createElement("th",{id:"percent_deaths",onClick:d},c.a.createElement(b.a,{className:"icon"}),"%")),c.a.createElement("tbody",null,Object.values(a).map((function(e){return e.ourid?c.a.createElement(_,Object.assign({key:e.ourid},e)):null})))))}function N(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement(p,null),c.a.createElement(g,null))}function y(){return c.a.createElement("div",{className:"footer"},c.a.createElement("h4",null,"Created by Fabio Henrique Albiero"),c.a.createElement("p",null,"Used ",c.a.createElement("a",{href:"https://thevirustracker.com"},"thevirustracker.com")," API to bring the informations in real time"))}var O=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"CORONAVIRUS TRACKER"),c.a.createElement(s.a,{exact:!0,path:"/coronavirus-tracker",component:N}),c.a.createElement(s.a,{exact:!0,path:"/",component:N}),c.a.createElement(s.a,{exact:!0,path:"/country",component:h}),c.a.createElement(y,null)))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.aab55529.chunk.js.map