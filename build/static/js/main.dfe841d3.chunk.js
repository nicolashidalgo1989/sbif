(this.webpackJsonpcumplo=this.webpackJsonpcumplo||[]).push([[0],{12:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),c=t.n(l),o=(t(12),t(3)),i=t(4),s=t(6),m=t(5),u=(t(13),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).initRef=r.a.createRef(),e.endRef=r.a.createRef(),e.apiKey="9c84db4d447c80c74961a72245371245cb7ac15f",e.state={valores:[],status:null},e.calcularMaximo=function(){return Math.max.apply(Math,e.state.valores.map((function(e){return parseInt(e.Valor)})))},e.calcularMinimo=function(){return Math.min.apply(Math,e.state.valores.map((function(e){return parseInt(e.Valor)})))},e.calcularPromedio=function(){var a=0;return e.state.valores.forEach((function(e){a+=parseInt(e.Valor)})),parseInt(a/e.state.valores.length)},e.getValores=function(a){a.preventDefault();var t=e.initRef.current.value.split("-"),n=e.endRef.current.value.split("-"),r="https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/".concat(t[0],"/").concat(t[1],"/dias_i/").concat(t[2],"/").concat(n[0],"/").concat(n[1],"/dias_f/").concat(n[2],"?apikey=").concat(e.apiKey,"&formato=json");fetch(r).then((function(e){return e.json()})).then((function(a){e.setState({valores:a.Dolares,status:"success"})}))},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h1",{className:"title animate__fadeIn"},"Calcula el valor del d\xf3lar"),r.a.createElement("form",{className:"form animate__fadeIn",onSubmit:this.getValores,onChange:this.getValores},r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inicio"},"Desde:"),r.a.createElement("input",{type:"date",name:"inicio",ref:this.initRef})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"termino"},"Hasta:"),r.a.createElement("input",{type:"date",name:"termino",ref:this.endRef}))),r.a.createElement("input",{className:"btn",type:"submit",value:"Promediar"}))),r.a.createElement("div",{className:"col-sm-6"},"success"===this.state.status&&r.a.createElement("div",null,r.a.createElement("div",{className:"resultados animate__fadeIn"},r.a.createElement("h2",null,"Valor promedio : ",r.a.createElement("strong",null,this.calcularPromedio()," USD")),r.a.createElement("h2",null,"Valor m\xednimo : ",r.a.createElement("strong",null,this.calcularMaximo()," USD")),r.a.createElement("h2",null,"Valor m\xe1ximo : ",r.a.createElement("strong",null,this.calcularMinimo()," USD"))))))))}}]),t}(n.Component));var f=function(){return r.a.createElement("div",{class:"App"},r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.dfe841d3.chunk.js.map