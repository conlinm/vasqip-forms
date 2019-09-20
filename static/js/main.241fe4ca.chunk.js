(window["webpackJsonpvasqip-forms"]=window["webpackJsonpvasqip-forms"]||[]).push([[0],{33:function(e,a,t){e.exports=t(63)},38:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),o=t.n(r),c=(t(38),t(12)),s=t(11),i=(t(39),t(2)),m=t(3),p=t(6),d=t(4),u=t(5),b=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},l.a.createElement(c.b,{to:"/",className:"navbar-brand"},"VASQIP"),l.a.createElement("div",{className:"collpase navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"navbar-item"},l.a.createElement(c.b,{to:"/",className:"nav-link"},"Case List")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(c.b,{to:"/cardiac",className:"nav-link"},"Cardiac Form")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(c.b,{to:"/non-cardiac",className:"nav-link"},"Non-Cardiac Form")))))}}]),a}(n.Component),y=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"You are on the Case List component."))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"You are on the Edit Data Entry component."))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"You are on the Cardiac Form component."))}}]),a}(n.Component),v=t(32),f=t(13),g=(t(45),l.a.createContext()),N={diabetes:["1=no","2=diet","3=oral +/- non-insulation injection","4=insulin"],tobacco:["1=never","2=non in 12 months","3=cigs only","4=other (no cigs)","5=cigs + other"],tobaccoTime:["1=w/in 2 wks","2=2wks-3 mos","3=3-12 mos","NA"],drugScreening:["1=not done","2=negative result","3=positive NOT Rx","4=pos Rx"],dyspnea:["1=no","2=mod exertion","3=at rest"],sleepApnea:["1= none level 1","2= suspicion level 2","3= confirmed level 3"],sleepApneaCompliance:["1= nightly","2= \u22654x per wk","3= <4x/wk","4= not documented"],functionalHealthStatus:["1= independent","2= partially dependent","3= totally dependent"],currentResidence:["1= home","2= acute care facility","3= long term care","4= homeless","5= unknown"],ambulationDevice:["1= ambulates w/o device","2= ambulates w/ cane or walker","3= uses manual WC indepen.","4= does not ambulate or use manual WC indepen."],chf:["0= N card dx, CHF, or sx","1= Y card dx/chf, N sx","2= Y card dx/chf, Y mild sx","3= Y card dx/chf, Y marked sx","4= Y card dx/chf, Y sx at rest","5 = N card dx/chf, sx unknown","6= Y card dx/chf, sx unknown"],priorMi:["0= no","1= yes \u2264 7 days preop","2= yes >7 days-6 mos preop","4= yes >6 mo preop","5= unknown"],pci:["1= none","2= w/in <12 hrs of OR","3= >12hr-7d","4= >7d","5= unknown"],priorHeartSurgery:["0=none","1= CABG only","2= valve only","3= CABG/valve","4= other","5= CABG/ other","6= unknown"],anginaSeverity:["N = none","I = class I","II = class II","III = class III","IV = class IV","U = unknown"],anginaTimeframe:["1= no angina","2= w/in 14 days","3= 15-30 days","4= unknown"],hypertension:["1=No","2=Yes w/o med","3=Yes w/ med","4=unknown"],pad:["1= No","2= Yes w/o angi, revasc, amp","3= Yes, w/ hx angi, revasc, amp"],carotidObstruction:["0= no CVD","1= yes, no surg repair","2= yes, prior repair"],hxOfCvd:["0= no CVD","1= hx of TIAs","2= CVA/stroke - NO deficit","3= CVA/stroke - w/ deficit"],impairedCog:["0= none - no impairment","1= yes - doc'd hx","2= yes - doc'd & declining","3= no doc"],bleedingRisk:["Yes = bleeding risk med not dc'd","No = no bleeding risk from med"],chemo:["1= no chemo","2= w/in 30 d","3= 31-90 d"],sepsis:["N=none","2=sepsis","3=sepsis shock"],priorSurgeries:["1","2","3","4","5","6= >5"]},O=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,this.props.label),l.a.createElement("select",{name:this.props.label,ref:"userInput",required:!0,className:"form-control",onChange:this.context},N[this.props.options].map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))))}}]),a}(n.Component),C=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,this.props.label),l.a.createElement("input",{type:"text",className:"form-control",name:this.props.label,placeholder:this.props.placeholder,onChange:this.context}))}}]),a}(n.Component),k=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,this.props.label),l.a.createElement("select",{name:this.props.label,ref:"userInput",required:!0,className:"form-control",onChange:this.context},l.a.createElement("option",{key:"Yes",value:"Yes"},"Yes"),l.a.createElement("option",{key:"No",value:"No"},"No")))}}]),a}(n.Component);C.contextType=g,O.contextType=g,k.contextType=g;var w=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(p.a)(this,Object(d.a)(a).call(this,e))).formGroups=[],t.formData={},t.onChangeUsername=t.onChangeUsername.bind(Object(f.a)(t)),t.onChangeFormData=t.onChangeFormData.bind(Object(f.a)(t)),t.onSubmit=t.onSubmit.bind(Object(f.a)(t)),t.state={username:"",date:new Date,caseNumber:""},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeFormData",value:function(e){console.dir(this.formGroups),console.dir(this.formData)}},{key:"onSubmit",value:function(e){e.preventDefault();var a=Object(v.a)(document.getElementsByClassName("form-group")),t={username:this.state.username,date:this.state.date,formData:{}};a.map((function(e){t.formData[e.children[1].name]=e.children[1].value})),console.log(t)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"VASQIP Non-Cardiac Data Form"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement(g.Provider,{value:this.onChangeFormData},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card-header"},"General"),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(C,{label:"Height",type:"text",placeholder:"in inches"})),l.a.createElement("div",{className:"col"},l.a.createElement(C,{label:"Weight",type:"text",placeholder:"in lbs"}))),l.a.createElement(O,{label:"DM long-term",type:"select",options:"diabetes"}),l.a.createElement(O,{label:"Diabetes 2 wks pre-op",type:"select",options:"diabetes"}),l.a.createElement(O,{label:"Tobacco use",type:"select",options:"tobacco"}),l.a.createElement(O,{label:"Tobacco timeframe",type:"select",options:"tobaccoTime"}),l.a.createElement(k,{label:"ETOH > 2 drinks w/in 2 wks",type:"boolean"}),l.a.createElement(O,{label:"Positive drug screening",type:"select",options:"drugScreening"}),l.a.createElement(O,{label:"Dyspnea",type:"select",options:"dyspnea"}),l.a.createElement(O,{label:"Sleep apnea",type:"select",options:"sleepApnea"}),l.a.createElement(O,{label:"Sleep apnea - compliance",type:"select",options:"sleepApneaCompliance"}))),l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card-header"},"Pulmonary, Hepatobiliary, GI"),l.a.createElement("div",{className:"card-body"},l.a.createElement(k,{label:"Vent dependent w/in 48 hrs pre-op",type:"boolean"}),l.a.createElement(k,{label:"Severe COPD",type:"boolean"}),l.a.createElement(k,{label:"Current pneumonia",type:"boolean"}),l.a.createElement(k,{label:"Ascites",type:"boolean"}),l.a.createElement(k,{label:"Esophageal varices",type:"boolean"}))),l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card-header"},"Cardiac"),l.a.createElement("div",{className:"card-body"},l.a.createElement(O,{label:"CHF",type:"select",options:"chf"}),l.a.createElement(O,{label:"Prior MI",type:"select",options:"priorMi"}),l.a.createElement(O,{label:"PCI",type:"select",options:"pci"}),l.a.createElement(O,{label:"Prior heart surgery",type:"select",options:"priorHeartSurgery"}),l.a.createElement(O,{label:"Angina Severity",type:"select",options:"anginaSeverity"}),l.a.createElement(O,{label:"Angina timeframe",type:"select",options:"anginaTimeframe"}),l.a.createElement(O,{label:"Hypertension",type:"select",options:"hypertension"})))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card-header"},"Vascular"),l.a.createElement("div",{className:"card-body"},l.a.createElement(O,{label:"PAD",type:"select",options:"pad"}),l.a.createElement(k,{label:"Rest pain / gangrene",type:"boolean"}))),l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card-header"},"Renal"),l.a.createElement("div",{className:"card-body"},l.a.createElement(k,{label:"ARF",type:"boolean"}),l.a.createElement(k,{label:"Dialysis - requires or is on",type:"boolean"}))),l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card-header"},"CNS"),l.a.createElement("div",{className:"card-body"},l.a.createElement(k,{label:"Impaired sensorium",type:"boolean"}),l.a.createElement(k,{label:"Coma",type:"boolean"}),l.a.createElement(k,{label:"Hemiplegia/hemiparesis",type:"boolean"}),l.a.createElement(O,{label:"Carotid artery obstruction",type:"select",options:"carotidObstruction"}),l.a.createElement(O,{label:"Hx of CVD events",type:"select",options:"hxOfCvd"}),l.a.createElement(k,{label:"Tumor involving CNS",type:"boolean"}),l.a.createElement(O,{label:"Impaired cognitive function",type:"select",options:"impairedCog"}))),l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card-header"},"Nutritional/Immune,Other"),l.a.createElement("div",{className:"card-body"},l.a.createElement(k,{label:"Disseminated cancer",type:"boolean"}),l.a.createElement(k,{label:"Open wound w/ or w/o infection",type:"boolean"}),l.a.createElement(k,{label:"Steroid use for chronic condition",type:"boolean"}),l.a.createElement(k,{label:">10% wt loss w/in 6 mos",type:"boolean"}),l.a.createElement(k,{label:"Bleeding disorder",type:"boolean"}),l.a.createElement(O,{label:"Bleeding risk due to medication",type:"select",options:"bleedingRisk"}),l.a.createElement(k,{label:">4 unites RBCs w/in 72hrs of surgery",type:"boolean"}),l.a.createElement(O,{label:"Chemo w/in 90d",type:"select",options:"chemo"}),l.a.createElement(k,{label:"Radiotherapy w/in 90d",type:"boolean"}),l.a.createElement(O,{label:"Sepsis w/in 48hrs of surgery",type:"select",options:"sepsis"}),l.a.createElement(k,{label:"Pregnancy Status",type:"boolean"}),l.a.createElement(k,{label:"Hx of cancer diagnosis",type:"boolean"}),l.a.createElement(k,{label:"Hx of radiation therapy to planned surgical field",type:"boolean"}),l.a.createElement(O,{label:"# of prior surgeries in same operative field",type:"select",options:"priorSurgeries"}))))),l.a.createElement("div",{className:""},l.a.createElement("input",{type:"submit",value:"Save",className:"btn btn-primary"})),l.a.createElement("div",{className:""},l.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary"})))))}}]),a}(n.Component);var j=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(b,null),l.a.createElement("br",null),l.a.createElement(s.a,{path:"/",exact:!0,component:y}),l.a.createElement(s.a,{path:"/edit/:id",exact:!0,component:E}),l.a.createElement(s.a,{path:"/cardiac",exact:!0,component:h}),l.a.createElement(s.a,{path:"/non-cardiac",exact:!0,component:w})))};o.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.241fe4ca.chunk.js.map