(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={navItem:"HeaderNavigation_navItem__rLRgH",navItemLink:"HeaderNavigation_navItemLink__3bElF",navItemLinkActive:"HeaderNavigation_navItemLinkActive__2iM6s"}},,,,function(e,t,a){e.exports={wrapper:"ListItem_wrapper__1OfYk",appear:"ListItem_appear__31egq",image:"ListItem_image__3jq-L",imageNone:"ListItem_imageNone__VlF_B",description:"ListItem_description__3LIPb",button:"ListItem_button__3iV72",closeButton:"ListItem_closeButton__2OXFj"}},function(e,t,a){e.exports={formItem:"Input_formItem__3YHjH",formItemBar:"Input_formItemBar__2i33U",label:"Input_label__PXQaK",input:"Input_input__3lf-H",textarea:"Input_textarea__2vUao"}},,,,,,,,function(e,t,a){e.exports={wrapper:"Form_wrapper__30Vrb",form:"Form_form__2EhfF",formOptions:"Form_formOptions__1FYQk"}},,,function(e,t,a){e.exports={button:"Button_button__1Dgcm",secondary:"Button_secondary__2Rxvj"}},function(e,t,a){e.exports={noItems:"ListWrapper_noItems__3ux3k"}},,,function(e,t,a){e.exports={wrapper:"Header_wrapper__2J9Ho",wrapperImage:"Header_wrapperImage__d9noM"}},function(e,t,a){e.exports={wrapper:"Modal_wrapper__2Mx4B",classButton:"Modal_classButton__2woqM"}},function(e,t,a){e.exports={classInput:"RadioButton_classInput__k-tyx",classLabel:"RadioButton_classLabel__WrsXC"}},,,function(e,t,a){e.exports={title:"Title_title__1s8BW"}},,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(31),i=a.n(c),s=a(8),o=a(14),l=a(15),p=a(16),d=a(18),m=a(17),u=r.a.createContext(),j=a(10),h=a(2),b=a(19),x=a(23),O=a.n(x),g=a(0),_=function(e){var t=e.children,a=e.href,n=e.secondary,r=Object(b.a)(e,["children","href","secondary"]),c=n?O.a.secondary:O.a.button;return Object(g.jsx)(g.Fragment,{children:a?Object(g.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:c,children:t}):Object(g.jsx)("button",Object(s.a)(Object(s.a)({className:c},r),{},{children:t}))})},f=a(11),v=a.n(f),w=a(32),I=a.n(w),k=function(e){var t=e.children;return Object(g.jsx)("h2",{className:I.a.title,children:t})},N=function(e){var t=e.image,a=e.title,n=e.description,r=e.link,c=e.type,i=t?"img":"div";return Object(g.jsx)(u.Consumer,{children:function(e){return Object(g.jsxs)("li",{className:v.a.wrapper,children:[t&&Object(g.jsx)(i,{src:t,className:t?v.a.image:v.a.imageNone,alt:a}),Object(g.jsxs)("div",{children:[Object(g.jsx)(k,{children:a}),Object(g.jsx)("p",{className:v.a.description,children:n}),r&&Object(g.jsx)(_,{href:r,children:"visit twitter page"})]}),Object(g.jsx)("button",{className:v.a.closeButton,onClick:function(){return e.removeItem(c,a)}})]})}})};N.defaultProps={image:null,link:null};var y=N,C=a(24),L=a.n(C),M=function(e){var t=e.items,a=e.type;return Object(g.jsx)(g.Fragment,{children:t.length?Object(g.jsx)("ul",{className:L.a.wrapper,children:t.map((function(e){return Object(g.jsx)(y,Object(s.a)({type:a},e),e.title)}))}):Object(g.jsx)("h1",{className:L.a.noItems,children:"There's nothing here yet, please add some items!"})})},F=function(){return Object(g.jsx)(u.Consumer,{children:function(e){return Object(g.jsx)(M,{items:e.article,type:"article"})}})},B=function(){return Object(g.jsx)(u.Consumer,{children:function(e){return Object(g.jsx)(M,{items:e.note,type:"note"})}})},R=function(){return Object(g.jsx)(u.Consumer,{children:function(e){return Object(g.jsx)(M,{items:e.twitter,type:"twitter"})}})},S=a(7),H=a.n(S),A=function(){return Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{className:H.a.wrapper,children:[Object(g.jsx)("li",{className:H.a.navItem,children:Object(g.jsx)(j.b,{exact:!0,activeClassName:H.a.navItemLinkActive,className:H.a.navItemLink,to:"/",children:"twitter"})}),Object(g.jsx)("li",{className:H.a.navItem,children:Object(g.jsx)(j.b,{activeClassName:H.a.navItemLinkActive,className:H.a.navItemLink,to:"/articles",children:"articles"})}),Object(g.jsx)("li",{className:H.a.navItem,children:Object(g.jsx)(j.b,{activeClassName:H.a.navItemLinkActive,className:H.a.navItemLink,to:"/notes",children:"notes"})})]})})},q=a(27),T=a.n(q),P=a.p+"static/media/logo.6af430ae.svg",E=function(e){var t=e.openModalFn;return Object(g.jsxs)("header",{className:T.a.wrapper,children:[Object(g.jsx)("img",{className:T.a.wrapperImage,src:P,alt:"FavNote logo"}),Object(g.jsx)(A,{}),Object(g.jsx)(_,{onClick:t,secondary:!0,children:"new item"})]})},D=a(28),J=a.n(D),W=a(20),z=a.n(W),U=a(12),V=a.n(U),X=function(e){var t=e.tag,a=(e.text,e.name),n=e.label,r=e.maxLength,c=e.required,i=Object(b.a)(e,["tag","text","name","label","maxLength","required"]);return Object(g.jsxs)("div",{className:V.a.formItem,children:[Object(g.jsx)(t,Object(s.a)({className:"textarea"===t?V.a.textarea:V.a.input,type:"text",name:a,id:a,placeholder:" ",required:c,maxLength:r},i)),Object(g.jsx)("label",{className:V.a.label,htmlFor:a,children:n}),Object(g.jsx)("div",{className:V.a.formItemBar})]})};X.defaultProps={required:!0,tag:"input",maxLength:200};var Y=X,G=a(29),K=a.n(G),Q=function(e){var t=e.id,a=e.checked,n=e.changeFn,r=e.children;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{className:K.a.classInput,id:t,type:"radio",checked:a,onChange:n}),Object(g.jsx)("label",{className:K.a.classLabel,for:t,children:r})]})},Z="twitter",$="article",ee="note",te={twitter:"favorite twitter account",article:"Article",note:"Note"},ae=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={type:Z,title:"",link:"",image:"",description:""},e.handleRadioButtonChange=function(t){return e.setState({type:t})},e.handleInputChange=function(t){e.setState({[t.target.name]:t.target.value})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.state.type;return Object(g.jsx)(u.Consumer,{children:function(a){return Object(g.jsxs)("div",{className:z.a.wrapper,children:[Object(g.jsxs)(k,{children:["Add new ",te[t]]}),Object(g.jsxs)("form",{autoComplete:"off",className:z.a.form,onSubmit:function(t){return a.addItem(t,e.state)},children:[Object(g.jsxs)("div",{className:z.a.formOptions,children:[Object(g.jsx)(Q,{id:Z,checked:t===Z,changeFn:function(){return e.handleRadioButtonChange(Z)},children:"Twitter"}),Object(g.jsx)(Q,{id:$,checked:t===$,changeFn:function(){return e.handleRadioButtonChange($)},children:"Article"}),Object(g.jsx)(Q,{id:ee,checked:t===ee,changeFn:function(){return e.handleRadioButtonChange(ee)},children:"Note"})]}),Object(g.jsx)(Y,{onChange:e.handleInputChange,value:e.state.title,name:"title",label:t===Z?"Twitter Name":"Title"}),t!==ee?Object(g.jsx)(Y,{onChange:e.handleInputChange,value:e.state.link,name:"link",label:t===Z?"Twitter Link":"Link"}):null,t===Z?Object(g.jsx)(Y,{onChange:e.handleInputChange,value:e.state.image,name:"image",label:"Image",required:!1}):null,Object(g.jsx)(Y,{onChange:e.handleInputChange,value:e.state.description,tag:"textarea",name:"description",label:"Description"}),Object(g.jsx)(_,{children:"add bew item"})]})]})}})}}]),a}(r.a.Component),ne=function(e){var t=e.closeModalFn;return Object(g.jsxs)("div",{className:J.a.wrapper,children:[Object(g.jsx)("button",{className:J.a.classButton,onClick:t}),Object(g.jsx)(ae,{})]})},re={twitter:[{title:"Ryan Florence",link:"https://twitter.com/ryanflorence",image:"https://pbs.twimg.com/profile_images/1344410501309030403/L2rNpO6h_400x400.jpg",description:"Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting."},{title:"Michael Jackson",link:"https://twitter.com/mjackson",image:"https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg",description:"Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari."},{title:"Kent C. Dodds",link:"https://twitter.com/kentcdodds",image:"https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg",description:"Making software development more accessible \xb7 Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 \xb7 @PayPalEng @eggheadio @FrontendMasters \xb7 #JS"}],article:[{title:"React",link:"https://pl.reactjs.org",description:"React javascriptowa biblioteka s\u0142u\u017c\u0105ca do tworzenia interfejs\xf3w u\u017cytkownika."},{title:"react-router-dom",link:"https://reactrouter.com/web/guides/quick-start",description:"To get started with React Router in a web app, you\u2019ll need a React web app"},{title:"AppContext",link:"https://reactjs.org/docs/context.html",description:"Context provides a way to pass data through the component tree without having to pass props down manually at every level"}],note:[{title:"W\u0142asna aplikacja",description:"Pierwsza w\u0142asna aplikacja stworzona na podstawie kursu https://eduweb.pl/programowanie-i-www/reactjs/react-od-podstaw"}]},ce=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={twitter:Object(o.a)(re.twitter),article:Object(o.a)(re.article),note:Object(o.a)(re.note),isModalOpen:!1},e.addItem=function(t,a){t.preventDefault(),e.setState((function(e){return{[a.type]:[].concat(Object(o.a)(e[a.type]),[a])}})),e.closeModal()},e.removeItem=function(t,a){var n=e.state[t],r=n.map((function(e){return e.title})).indexOf(a);n.splice(r,1),e.setState((function(e){return{[t]:n}}))},e.openModal=function(){e.setState({isModalOpen:!0})},e.closeModal=function(){e.setState({isModalOpen:!1})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.isModalOpen,t=Object(s.a)(Object(s.a)({},this.state),{},{addItem:this.addItem,removeItem:this.removeItem,closeModal:this.closeModal});return Object(g.jsx)(j.a,{children:Object(g.jsxs)(u.Provider,{value:t,children:[Object(g.jsx)(E,{openModalFn:this.openModal}),Object(g.jsxs)(h.c,{children:[Object(g.jsx)(h.a,{exact:!0,path:"/",component:R}),Object(g.jsx)(h.a,{path:"/articles",component:F}),Object(g.jsx)(h.a,{path:"/notes",component:B})]}),e&&Object(g.jsx)(ne,{closeModalFn:this.closeModal})]})})}}]),a}(r.a.Component);a(44);i.a.render(Object(g.jsx)(ce,{}),document.getElementById("root"))}],[[45,1,2]]]);
//# sourceMappingURL=main.782a2fad.chunk.js.map