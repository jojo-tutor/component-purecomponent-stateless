(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a(2),r=a(3),c=a(5),s=a(4),u=a(6),m=a(0),i=a.n(m),o=a(8),p=a.n(o),d=0,E=0,v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,u=new Array(r),m=0;m<r;m++)u[m]=arguments[m];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(u)))).state={age:"",inputValue:""},a.updateAge=function(e){e.preventDefault(),E+=1,a.setState(function(e){return{age:e.inputValue}})},a.updateInputValue=function(e){var t=e.target,l=t.id,r=t.value;E+=1,a.setState(Object(n.a)({},l,r))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){d+=1;var e=JSON.stringify(this.props,null,4),t=JSON.stringify(this.state,null,4);return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"title"},"React.Component"),i.a.createElement("div",{className:"subtitle"},"(Child 2)"),i.a.createElement("div",{className:"group"},i.a.createElement("form",{autoComplete:"off",onSubmit:this.updateAge},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"inputValue"},"Age: "),i.a.createElement("input",{id:"inputValue",type:"number",onChange:this.updateInputValue})),i.a.createElement("button",{type:"submit"},"Update Age"))),i.a.createElement("div",{className:"group"},i.a.createElement("div",{className:"group-label"},"setStateCount"),i.a.createElement("pre",{className:"count"},E)),i.a.createElement("div",{className:"group"},i.a.createElement("div",{className:"group-label"},"renderCount"),i.a.createElement("pre",{className:"count"},d)),i.a.createElement("div",{className:"group"},i.a.createElement("div",{className:"group-label"},"this.props"),i.a.createElement("pre",null,e)),i.a.createElement("div",{className:"group"},i.a.createElement("div",{className:"group-label"},"this.state"),i.a.createElement("pre",null,t)))}}]),t}(i.a.Component),g=0,N=0,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,u=new Array(r),m=0;m<r;m++)u[m]=arguments[m];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(u)))).state={age:"",inputValue:""},a.updateAge=function(e){e.preventDefault(),N+=1,a.setState(function(e){return{age:e.inputValue}})},a.updateInputValue=function(e){var t=e.target,l=t.id,r=t.value;N+=1,a.setState(Object(n.a)({},l,r))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){g+=1;var e=JSON.stringify(this.props,null,4),t=JSON.stringify(this.state,null,4);return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"title"},"React.PureComponent"),i.a.createElement("div",{className:"subtitle"},"(Child 1)"),i.a.createElement("div",{className:"group"},i.a.createElement("form",{autoComplete:"off",onSubmit:this.updateAge},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"inputValue"},"Age: "),i.a.createElement("input",{id:"inputValue",type:"number",onChange:this.updateInputValue})),i.a.createElement("button",{type:"submit"},"Update Age"))),i.a.createElement("div",{className:"group"},i.a.createElement("div",{className:"group-label"},"setStateCount"),i.a.createElement("pre",{className:"count"},N)),i.a.createElement("div",{className:"group"},i.a.createElement("div",{className:"group-label"},"renderCount"),i.a.createElement("pre",{className:"count"},g)),i.a.createElement("div",{className:"group"},i.a.createElement("div",{className:"group-label"},"this.props"),i.a.createElement("pre",null,e)),i.a.createElement("div",{className:"group"},i.a.createElement("div",{className:"group-label"},"this.state"),i.a.createElement("pre",null,t)))}}]),t}(i.a.PureComponent),b=0,f=function(e){b+=1;var t=JSON.stringify(e,null,4);return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"title"},"Stateless Component"),i.a.createElement("div",{className:"subtitle"},"(Child 3)"),i.a.createElement("div",{className:"group empty"}),i.a.createElement("div",{className:"group empty"}),i.a.createElement("div",{className:"group"},i.a.createElement("div",{className:"group-label"},"renderCount"),i.a.createElement("pre",{className:"count"},b)),i.a.createElement("div",{className:"group"},i.a.createElement("div",{className:"group-label"},"props"),i.a.createElement("pre",null,t)),i.a.createElement("div",{className:"group empty"}))},y=(a(15),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,u=new Array(r),m=0;m<r;m++)u[m]=arguments[m];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(u)))).state={name:"",inputValue:""},a.updateName=function(e){e.preventDefault(),a.setState(function(e){return{name:e.inputValue}})},a.updateInputValue=function(e){var t=e.target,l=t.id,r=t.value;a.setState(Object(n.a)({},l,r))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.name,t=JSON.stringify(this.state,null,4);return i.a.createElement("div",{className:"parent"},i.a.createElement("div",{className:"title"},"Parent"),i.a.createElement("div",{className:"section parent"},i.a.createElement("div",{className:"group"},i.a.createElement("form",{autoComplete:"off",onSubmit:this.updateName},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"inputValue"},"Name: "),i.a.createElement("input",{id:"inputValue",type:"text",onChange:this.updateInputValue})),i.a.createElement("button",{type:"submit"},"Update Name"))),i.a.createElement("div",{className:"group last"},i.a.createElement("div",{className:"group-label"},"this.state"),i.a.createElement("pre",null,t))),i.a.createElement("div",{className:"children"},i.a.createElement(h,{name:e}),i.a.createElement(v,{name:e}),i.a.createElement(f,{name:e})),i.a.createElement("div",{className:"note"},'*** Take note on the Child 1 (React.PureComponent), eventhough we did not change the "Age" input and we press many times the "Update Age" button, the "setStateCount" is still incremented but does not reflect in the browser since there is no re-render, for it to display the latest value, we need to change the age.'))}}]),t}(i.a.Component)),O=document.getElementById("root");p.a.render(i.a.createElement(y,null),O)},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.91cff1dc.chunk.js.map