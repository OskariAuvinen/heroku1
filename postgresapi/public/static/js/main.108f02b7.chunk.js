(this.webpackJsonpnasavk=this.webpackJsonpnasavk||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),c=n.n(r),u=(n(10),n(4)),o=n(1);function i(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("h2",null,"Tervetuloa NasaApiin"),l.a.createElement("p",null,"Tervetuloa",l.a.createElement("br",null),n,l.a.createElement("br",null),l.a.createElement("input",{value:n,placeholder:"Sy\xf6t\xe4 nimi",onChange:function(e){return r(e.target.value)}})))}function s(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([{planetName:"Maa",planetid:0}]),i=Object(o.a)(c,2),s=i[0],f=i[1];return l.a.createElement("div",null,l.a.createElement("ul",null,s.map((function(e,t){return l.a.createElement("li",null,e.planetName)}))),l.a.createElement("input",{value:n,placeholder:"Sy\xf6t\xe4 Planeetan nimi",onChange:function(e){return r(e.target.value)}}),l.a.createElement("input",{type:"submit",value:"Lis\xe4\xe4",onClick:function(){f([].concat(Object(u.a)(s),[{planetName:n,planetid:s.length+1}])),r(""),console.log(s)}}))}function f(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://api.nasa.gov/planetary/apod?api_key=zxRBp0T37f3A5yqQFS8uYwfRsSgl1Cg2DRfAla6H").then((function(e){return e.json()})).then((function(e){return r(e.hdurl)}))}),[]),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("img",{src:n,alt:"FetchNasaData"})))}n(11);function m(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://api.nasa.gov/planetary/apod?api_key=zxRBp0T37f3A5yqQFS8uYwfRsSgl1Cg2DRfAla6H").then((function(e){return e.json()})).then((function(e){return r(e.explanation)}))}),[]),l.a.createElement("div",null,n)}function p(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://api.nasa.gov/planetary/apod?api_key=zxRBp0T37f3A5yqQFS8uYwfRsSgl1Cg2DRfAla6H").then((function(e){return e.json()})).then((function(e){return r(e.title)}))}),[]),l.a.createElement("h1",null,n)}var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement("h4",null,"Planeetta Bongaus Lista: "),l.a.createElement(s,null),l.a.createElement("br",null),l.a.createElement(m,null),l.a.createElement("br",null),l.a.createElement(p,null),l.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.108f02b7.chunk.js.map