"use strict";(self.webpackChunkownrecipes_web=self.webpackChunkownrecipes_web||[]).push([[934],{2437:(e,s,t)=>{t.d(s,{A:()=>o});var a=t(5043),i=t(4282),r=(t(4589),t(824)),n=t(8563),l=t(579);const o=(0,a.forwardRef)(((e,s)=>{let{id:t,tooltip:a,tooltipPlacement:o,children:d,...c}=e;return(0,l.jsx)(r.A,{condition:Boolean(a),render:e=>(0,l.jsx)(n.A,{id:`${t}-tooltip`,tooltip:a,placement:o,children:e}),children:(0,l.jsx)(i.A,{id:t,"aria-label":a||void 0,"aria-describedby":void 0,...c,ref:s,children:d})})}))},6985:(e,s,t)=>{t.d(s,{DW:()=>b,qJ:()=>y,l6:()=>v});var a=t(5043),i=t(3722),r=t(3626),n=t(8211),l=t(2364),o=t(1742),d=t(4011),c=t(107),h=t(824),p=t(8563),u=t(579);const g=(0,r.YK)({no_options:{id:"select.no_options",description:"Info text when opening a select dropdown with no options.",defaultMessage:"No options"}});function m(e,s){return Array.isArray(s)?e.filter((e=>s.includes(e.value))):null!==(t=e.find((e=>e.value===s)))&&void 0!==t?t:"";var t}class f extends c.A{constructor(){super(...arguments),this.ref=(0,a.createRef)(),this.handleChange=e=>{var s,t,a,i;!0===this.props.isMulti?null===(s=(t=this.props).onChange)||void 0===s||s.call(t,this.props.name,e.map((e=>e.value))):null===(a=(i=this.props).onChange)||void 0===a||a.call(i,this.props.name,null===e||void 0===e?void 0:e.value)}}focus(){return!(null==this.ref||!this.ref.current)&&(this.ref.current.focus(),!0)}render(){const{value:e,data:s,onChange:t,name:a,style:r,tooltip:n,readOnly:o,disabled:d,label:c,className:f,helpText:v,errors:x,meta:b,...C}=this.props,y=m(null!==s&&void 0!==s?s:[],e);return(0,u.jsx)(i.A.Group,{...this.getGroupProps(),className:this.getFormGroupClassNames(),style:r,children:(0,u.jsxs)(h.A,{condition:null!=n,render:e=>(0,u.jsx)(p.A,{id:`${a}-tooltip`,tooltip:n,children:e}),children:[this.getLabel({htmlFor:`${a}-input`}),this.getHelpText(),this.getErrorMessage(),(0,u.jsx)(l.Ay,{inputId:`${a}-input`,name:a,value:y,options:s,noOptionsMessage:()=>this.props.intl.formatMessage(g.no_options),isDisabled:o||d,onChange:this.handleChange,className:"react-select-container",classNamePrefix:"creatable-select",placeholder:"",...C,ref:this.ref})]})})}}const v=(0,n.Ay)(f,{forwardRef:!0});class x extends c.A{constructor(e){super(e),this.ref=(0,a.createRef)(),this.handleChange=e=>{var s,t;null===(s=(t=this.props).onChange)||void 0===s||s.call(t,this.props.name,null===e||void 0===e?void 0:e.value)},this.handleLoadOptions=(e,s)=>e?this.props.loadOptions(e).then((e=>(this.setState({data:e}),e))):s([]),this.state={data:void 0}}focus(){return!(null==this.ref||!this.ref.current)&&(this.ref.current.focus(),!0)}render(){var e;const{onChange:s,name:t,value:a,initialValueLabel:r,style:n,tooltip:l,readOnly:o,disabled:c,label:m,className:f,helpText:v,errors:x,meta:b,loadOptions:C,...y}=this.props;let A=null===(e=this.state.data)||void 0===e?void 0:e.find((e=>e.value===a));return a&&r&&null==this.state.data&&(A={value:a,label:r}),(0,u.jsx)(i.A.Group,{...this.getGroupProps(),className:this.getFormGroupClassNames(),style:n,children:(0,u.jsxs)(h.A,{condition:null!=l,render:e=>(0,u.jsx)(p.A,{id:`${t}-tooltip`,tooltip:l,children:e}),children:[this.getLabel({htmlFor:`${t}-input`}),this.getHelpText(),this.getErrorMessage(),(0,u.jsx)(d.A,{inputId:`${t}-input`,name:t,value:A,loadOptions:this.handleLoadOptions,isDisabled:o||c,onChange:this.handleChange,className:"react-select-container",classNamePrefix:"creatable-select",placeholder:"",noOptionsMessage:()=>this.props.intl.formatMessage(g.no_options),...y,ref:this.ref})]})})}}const b=(0,n.Ay)(x,{forwardRef:!0}),C=e=>!!e;class y extends c.A{constructor(e){super(e),this.ref=(0,a.createRef)(),this.handleChange=e=>{if(this.props.onChange){const s=null!=e&&Array.isArray(e)?e.map((e=>e.value)):null===e||void 0===e?void 0:e.value;this.props.onChange(this.props.name,s)}},this.handleCreate=e=>{const s={value:e,label:e};this.setState((e=>({options:[...e.options,s]})),(()=>{if(this.props.isMulti){var t,a;const s=m((null!==(t=this.props.data)&&void 0!==t?t:[]).concat(this.state.options),[...null!==(a=this.props.value)&&void 0!==a?a:[],e]);this.handleChange(s)}else this.handleChange(s)}))},this.state={options:[]}}static getDerivedStateFromProps(e,s){if(null==e.data||0===e.data.length||0===s.options.length)return s;const t=e.data.map((e=>e.value)),a=[...s.options];for(let i=a.length-1;i>=0;--i)t.includes(a[i].value)&&a.splice(i,1);return s.options.length===a.length?s:{...s,options:a}}focus(){return!(null==this.ref||!this.ref.current)&&(this.ref.current.focus(),!0)}render(){const{value:e,data:s,onChange:t,name:a,style:r,tooltip:n,readOnly:l,disabled:d,label:c,className:g,helpText:f,errors:v,meta:x,...b}=this.props,y=(null!==s&&void 0!==s?s:[]).concat(this.state.options),A=m(y,e);return(0,u.jsx)(i.A.Group,{...this.getGroupProps(),className:this.getFormGroupClassNames(),style:r,children:(0,u.jsxs)(h.A,{condition:null!=n,render:e=>(0,u.jsx)(p.A,{id:`${a}-tooltip`,tooltip:n,children:e}),children:[this.getLabel({htmlFor:`${a}-input`}),this.getHelpText(),this.getErrorMessage(),(0,u.jsx)(o.A,{inputId:`${a}-input`,onChange:this.handleChange,isValidNewOption:C,onCreateOption:this.handleCreate,isClearable:!0,value:A,isDisabled:l||d,className:"react-select-container",classNamePrefix:"creatable-select",options:y,placeholder:"",...b,ref:this.ref})]})})}}},2934:(e,s,t)=>{t.r(s),t.d(s,{SettingsDialog:()=>j,default:()=>M});var a=t(5043),i=t(3626),r=t(97),n=t(8602),l=t(8628),o=t(1072),d=t(9757),c=t(3227),h=t(962),p=t(5386),u=t(8479),g=t(6985),m=t(8139),f=t.n(m),v=t(2437),x=t(8771),b=t(5838),C=t(579);const y=(0,i.YK)({language_settings:{id:"settings.language.heading",description:"Group heading for language settings",defaultMessage:"Language"},display_language:{id:"settings.language.display",description:"Display language setting",defaultMessage:"Display language"}}),A=(0,i.YK)({misc_settings:{id:"settings.miscellaneous.heading",description:"Group heading for miscellaneous settings",defaultMessage:"Miscellaneous"},recipe_discovery:{id:"settings.miscellaneous.recipe_discovery",description:"Disable recipe discovery checkbox",defaultMessage:"Recipe discovery"},recipe_discovery_tooltip:{id:"settings.miscellaneous.recipe_discovery_tooltip",description:"Disable recipe discovery checkbox tooltip",defaultMessage:"If unchecked, the homepage and recipe page won't display recipe suggestions."}}),N=(0,i.YK)({theme_settings:{id:"settings.theme.heading",description:"Group heading for theme settings",defaultMessage:"Theme mode"},theme_mode_dark:{id:"theme.mode.dark",description:"Dark mode",defaultMessage:"Dark"},theme_mode_light:{id:"theme.mode.light",description:"Light mode",defaultMessage:"Light"}}),j=e=>{let{show:s,onClose:t}=e;const i=(0,r.A)(),n=(0,p.wA)(),l=(0,p.d4)((e=>e.settings)),o=(0,a.useCallback)((e=>{n(c.zr(e))}),[]),d=(0,a.useCallback)((e=>{n(c.v2(e))}),[]),u=(0,a.useCallback)((e=>{n(c.R0(e))}),[]);return(0,C.jsxs)(h.A,{show:s,title:i.messages["nav.accountmenu.settings"],onClose:t,size:"sm",className:"settings",noCloseButton:!0,children:[(0,C.jsx)(R,{settings:l,onChangeTheme:u}),(0,C.jsx)(_,{settings:l,onChangeLanguage:d}),(0,C.jsx)(w,{settings:l,onChangeDisableRecipeDiscovery:o})]})},_=e=>{let{settings:s,onChangeLanguage:t}=e;const{formatMessage:i}=(0,r.A)(),n=(0,a.useCallback)((e=>{s.language!==e&&t(e)}),[t,s.language]),l=Object.values(u.sw).map((e=>({value:e,label:(0,u.z0)(e)["1.display_name"]})));return(0,C.jsxs)("fieldset",{children:[(0,C.jsx)("legend",{children:i(y.language_settings)}),(0,C.jsx)(g.l6,{name:"language",label:i(y.display_language),value:s.language,data:l,onChange:(e,s)=>{n(s)}})]})};const R=e=>{let{settings:s,onChangeTheme:t}=e;const{formatMessage:i}=(0,r.A)(),c=(0,a.useCallback)((e=>{s.themeMode!==e&&t(e)}),[t,s.themeMode]),h=[d.lG.LIGHT,d.lG.DARK].map((e=>{return(0,C.jsx)(n.A,{children:(0,C.jsx)(l.A,{className:f()({active:s.themeMode===e}),children:(0,C.jsxs)(v.A,{id:`settings-theme-button-${e}`,type:"button",variant:"transparent","aria-current":s.themeMode===e,onClick:()=>c(e),children:[(0,C.jsx)(l.A.Img,{variant:"top",src:(t=e,(0,b.sF)(t===d.lG.DARK?"/images/DarkMode.png":"/images/LightMode.png"))}),(0,C.jsx)(l.A.Title,{children:i(N[`theme_mode_${e}`])})]})})},e);var t}));return(0,C.jsxs)("fieldset",{children:[(0,C.jsx)("legend",{children:i(N.theme_settings)}),(0,C.jsx)(o.A,{xs:2,children:h})]})},w=e=>{let{settings:s,onChangeDisableRecipeDiscovery:t}=e;const{formatMessage:i}=(0,r.A)(),n=(0,a.useCallback)((e=>{s.disableRecipeDiscovery!==e&&t(e)}),[t,s.disableRecipeDiscovery]),l=(0,b._$)("REACT_APP_DISABLE_RECIPE_DISCOVERY"),o=(0,b.gw)("REACT_APP_DISABLE_RECIPE_DISCOVERY",!1);return(0,C.jsxs)("fieldset",{children:[(0,C.jsx)("legend",{children:i(A.misc_settings)}),(0,C.jsx)(x.A,{name:"recipe_discovery",label:i(A.recipe_discovery),tooltip:i(A.recipe_discovery_tooltip),value:(null==l||!1!==o)&&!s.disableRecipeDiscovery,readOnly:null!=l&&!1===o,onChange:(e,s)=>{n(!s)}})]})},M=j},8628:(e,s,t)=>{t.d(s,{A:()=>k});var a=t(8139),i=t.n(a),r=t(5043),n=t(7852),l=t(579);const o=r.forwardRef(((e,s)=>{let{className:t,bsPrefix:a,as:r="div",...o}=e;return a=(0,n.oU)(a,"card-body"),(0,l.jsx)(r,{ref:s,className:i()(t,a),...o})}));o.displayName="CardBody";const d=o,c=r.forwardRef(((e,s)=>{let{className:t,bsPrefix:a,as:r="div",...o}=e;return a=(0,n.oU)(a,"card-footer"),(0,l.jsx)(r,{ref:s,className:i()(t,a),...o})}));c.displayName="CardFooter";const h=c;var p=t(1778);const u=r.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,as:o="div",...d}=e;const c=(0,n.oU)(t,"card-header"),h=(0,r.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,l.jsx)(p.A.Provider,{value:h,children:(0,l.jsx)(o,{ref:s,...d,className:i()(a,c)})})}));u.displayName="CardHeader";const g=u,m=r.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,variant:r,as:o="img",...d}=e;const c=(0,n.oU)(t,"card-img");return(0,l.jsx)(o,{ref:s,className:i()(r?`${c}-${r}`:c,a),...d})}));m.displayName="CardImg";const f=m,v=r.forwardRef(((e,s)=>{let{className:t,bsPrefix:a,as:r="div",...o}=e;return a=(0,n.oU)(a,"card-img-overlay"),(0,l.jsx)(r,{ref:s,className:i()(t,a),...o})}));v.displayName="CardImgOverlay";const x=v,b=r.forwardRef(((e,s)=>{let{className:t,bsPrefix:a,as:r="a",...o}=e;return a=(0,n.oU)(a,"card-link"),(0,l.jsx)(r,{ref:s,className:i()(t,a),...o})}));b.displayName="CardLink";const C=b;var y=t(4488);const A=(0,y.A)("h6"),N=r.forwardRef(((e,s)=>{let{className:t,bsPrefix:a,as:r=A,...o}=e;return a=(0,n.oU)(a,"card-subtitle"),(0,l.jsx)(r,{ref:s,className:i()(t,a),...o})}));N.displayName="CardSubtitle";const j=N,_=r.forwardRef(((e,s)=>{let{className:t,bsPrefix:a,as:r="p",...o}=e;return a=(0,n.oU)(a,"card-text"),(0,l.jsx)(r,{ref:s,className:i()(t,a),...o})}));_.displayName="CardText";const R=_,w=(0,y.A)("h5"),M=r.forwardRef(((e,s)=>{let{className:t,bsPrefix:a,as:r=w,...o}=e;return a=(0,n.oU)(a,"card-title"),(0,l.jsx)(r,{ref:s,className:i()(t,a),...o})}));M.displayName="CardTitle";const D=M,P=r.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,bg:r,text:o,border:c,body:h=!1,children:p,as:u="div",...g}=e;const m=(0,n.oU)(t,"card");return(0,l.jsx)(u,{ref:s,...g,className:i()(a,m,r&&`bg-${r}`,o&&`text-${o}`,c&&`border-${c}`),children:h?(0,l.jsx)(d,{children:p}):p})}));P.displayName="Card";const k=Object.assign(P,{Img:f,Title:D,Subtitle:j,Body:d,Link:C,Text:R,Header:g,Footer:h,ImgOverlay:x})}}]);
//# sourceMappingURL=934.e0616c25.chunk.js.map