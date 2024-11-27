"use strict";(self.webpackChunkownrecipes_web=self.webpackChunkownrecipes_web||[]).push([[749],{6985:(e,t,s)=>{s.d(t,{DW:()=>x,qJ:()=>y,l6:()=>v});var r=s(5043),n=s(3722),i=s(3626),o=s(8211),a=s(2364),l=s(1742),c=s(4011),h=s(107),d=s(824),u=s(8563),p=s(579);const m=(0,i.YK)({no_options:{id:"select.no_options",description:"Info text when opening a select dropdown with no options.",defaultMessage:"No options"}});function g(e,t){return Array.isArray(t)?e.filter((e=>t.includes(e.value))):null!==(s=e.find((e=>e.value===t)))&&void 0!==s?s:"";var s}class f extends h.A{constructor(){super(...arguments),this.ref=(0,r.createRef)(),this.handleChange=e=>{var t,s,r,n;!0===this.props.isMulti?null===(t=(s=this.props).onChange)||void 0===t||t.call(s,this.props.name,e.map((e=>e.value))):null===(r=(n=this.props).onChange)||void 0===r||r.call(n,this.props.name,null===e||void 0===e?void 0:e.value)}}focus(){return!(null==this.ref||!this.ref.current)&&(this.ref.current.focus(),!0)}render(){const{value:e,data:t,onChange:s,name:r,style:i,tooltip:o,readOnly:l,disabled:c,label:h,className:f,helpText:v,errors:b,meta:x,..._}=this.props,y=g(null!==t&&void 0!==t?t:[],e);return(0,p.jsx)(n.A.Group,{...this.getGroupProps(),className:this.getFormGroupClassNames(),style:i,children:(0,p.jsxs)(d.A,{condition:null!=o,render:e=>(0,p.jsx)(u.A,{id:`${r}-tooltip`,tooltip:o,children:e}),children:[this.getLabel({htmlFor:`${r}-input`}),this.getHelpText(),this.getErrorMessage(),(0,p.jsx)(a.Ay,{inputId:`${r}-input`,name:r,value:y,options:t,noOptionsMessage:()=>this.props.intl.formatMessage(m.no_options),isDisabled:l||c,onChange:this.handleChange,className:"react-select-container",classNamePrefix:"creatable-select",placeholder:"",..._,ref:this.ref})]})})}}const v=(0,o.Ay)(f,{forwardRef:!0});class b extends h.A{constructor(e){super(e),this.ref=(0,r.createRef)(),this.handleChange=e=>{var t,s;null===(t=(s=this.props).onChange)||void 0===t||t.call(s,this.props.name,null===e||void 0===e?void 0:e.value)},this.handleLoadOptions=(e,t)=>e?this.props.loadOptions(e).then((e=>(this.setState({data:e}),e))):t([]),this.state={data:void 0}}focus(){return!(null==this.ref||!this.ref.current)&&(this.ref.current.focus(),!0)}render(){var e;const{onChange:t,name:s,value:r,initialValueLabel:i,style:o,tooltip:a,readOnly:l,disabled:h,label:g,className:f,helpText:v,errors:b,meta:x,loadOptions:_,...y}=this.props;let j=null===(e=this.state.data)||void 0===e?void 0:e.find((e=>e.value===r));return r&&i&&null==this.state.data&&(j={value:r,label:i}),(0,p.jsx)(n.A.Group,{...this.getGroupProps(),className:this.getFormGroupClassNames(),style:o,children:(0,p.jsxs)(d.A,{condition:null!=a,render:e=>(0,p.jsx)(u.A,{id:`${s}-tooltip`,tooltip:a,children:e}),children:[this.getLabel({htmlFor:`${s}-input`}),this.getHelpText(),this.getErrorMessage(),(0,p.jsx)(c.A,{inputId:`${s}-input`,name:s,value:j,loadOptions:this.handleLoadOptions,isDisabled:l||h,onChange:this.handleChange,className:"react-select-container",classNamePrefix:"creatable-select",placeholder:"",noOptionsMessage:()=>this.props.intl.formatMessage(m.no_options),...y,ref:this.ref})]})})}}const x=(0,o.Ay)(b,{forwardRef:!0}),_=e=>!!e;class y extends h.A{constructor(e){super(e),this.ref=(0,r.createRef)(),this.handleChange=e=>{if(this.props.onChange){const t=null!=e&&Array.isArray(e)?e.map((e=>e.value)):null===e||void 0===e?void 0:e.value;this.props.onChange(this.props.name,t)}},this.handleCreate=e=>{const t={value:e,label:e};this.setState((e=>({options:[...e.options,t]})),(()=>{if(this.props.isMulti){var s,r;const t=g((null!==(s=this.props.data)&&void 0!==s?s:[]).concat(this.state.options),[...null!==(r=this.props.value)&&void 0!==r?r:[],e]);this.handleChange(t)}else this.handleChange(t)}))},this.state={options:[]}}static getDerivedStateFromProps(e,t){if(null==e.data||0===e.data.length||0===t.options.length)return t;const s=e.data.map((e=>e.value)),r=[...t.options];for(let n=r.length-1;n>=0;--n)s.includes(r[n].value)&&r.splice(n,1);return t.options.length===r.length?t:{...t,options:r}}focus(){return!(null==this.ref||!this.ref.current)&&(this.ref.current.focus(),!0)}render(){const{value:e,data:t,onChange:s,name:r,style:i,tooltip:o,readOnly:a,disabled:c,label:h,className:m,helpText:f,errors:v,meta:b,...x}=this.props,y=(null!==t&&void 0!==t?t:[]).concat(this.state.options),j=g(y,e);return(0,p.jsx)(n.A.Group,{...this.getGroupProps(),className:this.getFormGroupClassNames(),style:i,children:(0,p.jsxs)(d.A,{condition:null!=o,render:e=>(0,p.jsx)(u.A,{id:`${r}-tooltip`,tooltip:o,children:e}),children:[this.getLabel({htmlFor:`${r}-input`}),this.getHelpText(),this.getErrorMessage(),(0,p.jsx)(l.A,{inputId:`${r}-input`,onChange:this.handleChange,isValidNewOption:_,onCreateOption:this.handleCreate,isClearable:!0,value:j,isDisabled:a||c,className:"react-select-container",classNamePrefix:"creatable-select",options:y,placeholder:"",...x,ref:this.ref})]})})}}},8591:(e,t,s)=>{s.d(t,{A:()=>p});var r=s(5043),n=s(3519),i=s(6971),o=s(8139),a=s.n(o),l=s(7629),c=s(5838),h=s(4949),d=s(579);function u(e){var t,s;const r=e.startsWith(null!==(t=(0,c._$)("PUBLIC_URL"))&&void 0!==t?t:"")?e.substring((null!==(s=(0,c._$)("PUBLIC_URL"))&&void 0!==s?s:"").length):e,n=r.startsWith("/"),i=r.endsWith("/");return r.substring(n?1:0,i?r.length-1:void 0)}const p=e=>{let{title:t,id:s,state:o,className:p,children:m}=e;const g=(0,i.Zp)(),f=(0,i.zy)(),v=null===o||void 0===o?void 0:o.meta.error,b=(0,r.useContext)(l.A);return(0,r.useEffect)((()=>{document.title=(null!=t&&t.length>0?`${t} | `:"")+"OwnRecipes"}),[t]),(0,r.useEffect)((()=>{if(v&&null==s){const e=(0,c.hp)("/NotFound");g(e)}}),[s,v]),(0,d.jsx)(n.A,{id:"main-container",as:"main",className:a()(u(f.pathname),p),style:{marginTop:`${b.toolbarHeight}px`},children:(0,d.jsx)(h.A,{verbose:!0,printStack:!0,children:m})})}},6957:(e,t,s)=>{s.d(t,{A:()=>C});var r=s(7775),n=s(5043),i=s(3626),o=s(97),a=s(3367),l=s(6631),c=s(5544),h=s(8824),d=s(6971);function u(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const{navigator:s}=(0,n.useContext)(d.jb);(0,n.useEffect)((()=>{if(!t)return;const r=s.block((t=>{const s={...t,retry(){r(),t.retry()}};e(s)}));return r}),[s,e,t])}((0,n.useCallback)((t=>{window.confirm(e)&&t.retry()}),[e]),t)}var p=s(579);const m=(0,i.YK)({navigation_warning:{id:"navigationprompt.warning",description:"Prompt displayed when navigating on a dirty page (unsaved changes).",defaultMessage:"You have unsaved changed. If you continue, those change may be lost."}}),g=e=>{let{isDirty:t}=e;const{formatMessage:s}=(0,o.A)(),r=(0,n.useMemo)((()=>s(m.navigation_warning)),[s]),i=u(r,t);return(0,p.jsxs)(p.Fragment,{children:[t&&(0,p.jsx)(h.R,{onBeforeunload:()=>r}),i]})};var f=s(2521),v=s(9593);const b=(0,i.YK)({form_errors_title:{id:"status.form_errors_title",description:"Title for the form error box.",defaultMessage:"The form contains an error."},form_errors_alert:{id:"status.form_errors_alert",description:"Alert text for the form error box.",defaultMessage:"Please fix the described error(s) and continue."},form_errors_table_heading_error:{id:"status.form_errors_table_heading_error",description:"The form-errors will be displayed as table, with an error column. This is the column's title.",defaultMessage:"Error"},form_errors_table_heading_message:{id:"status.form_errors_table_heading_message",description:"The form-errors will be displayed as table, with a message column. This is the column's title.",defaultMessage:"Message"},save_success:{id:"status.save_success",description:"Toast for successfully saved form.",defaultMessage:"Changes saved."}});function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\n",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";return e.map((e=>e.trim())).map((e=>e.endsWith(".")||e.endsWith("!")||e.endsWith("?")?e:`${e}${s}`)).join(t)}const _=e=>{var t,s;let{name:r,err:n}=e;const i=(0,o.A)(),c=null!==(t=null===(s=document.querySelector(`[data-api-field="${r}"] > label`))||void 0===s?void 0:s.textContent)&&void 0!==t?t:r,h=a.A(n).map((e=>(0,l.HJ)(i,e)||e.message));return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:c}),(0,p.jsx)("td",{children:x(h)})]})};const y=e=>{let{errors:t}=e;const{formatMessage:s}=(0,o.A)(),r=(0,n.useMemo)((()=>null!=t?function(e){const t=Object.entries(e).filter((e=>{let[t]=e;return!t.startsWith("_")}));return Object.fromEntries(t)}(t):void 0),[t]),i=(0,n.useMemo)((()=>{if(null==r||0===Object.keys(r).length)return[];const e=[];return Object.keys(r).forEach((t=>{const s=r[t];e.push((0,p.jsx)(_,{name:t,err:s},t))})),e}),[r]);if(null==r||0===Object.keys(r).length)return null;const a=(0,p.jsxs)("table",{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:s(b.form_errors_table_heading_error)}),(0,p.jsx)("th",{children:s(b.form_errors_table_heading_message)})]})}),(0,p.jsx)("tbody",{children:i})]});return(0,p.jsxs)(c.A,{severity:"danger",className:"form-errors",title:s(b.form_errors_title),children:[a,(0,p.jsx)(f.A,{className:"alert-post-message",children:s(b.form_errors_alert)})]})},j=e=>{let{dirty:t,submitting:s,errors:r,onSubmitSuccess:i}=e;const{formatMessage:a}=(0,o.A)(),l=(0,n.useRef)(!1),[c,h]=(0,n.useState)(!1);(0,n.useEffect)((()=>{!0===l.current&&!1===s&&null==r&&(h(!0),null===i||void 0===i||i()),l.current=s}),[s]),(0,n.useEffect)((()=>{t&&c&&h(!1)}),[t]);const d=(0,n.useCallback)((()=>{h(!1)}),[]);return(0,p.jsx)(v.A,{show:c,variant:"success",anchorOrigin:{horizontal:"center",vertical:"bottom"},onClose:d,children:a(b.save_success)})},A=e=>{let{dirty:t,submitting:s,errors:r,onSubmitSuccess:n}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{isDirty:t}),(0,p.jsx)(y,{errors:r}),(0,p.jsx)(j,{dirty:t,submitting:s,onSubmitSuccess:n,errors:r})]})},C=e=>{let{onSubmitSuccess:t}=e;return(0,p.jsx)(r.Pc,{subscription:{dirty:!0,submitting:!0,submitErrors:!0},children:e=>{let{dirty:s,submitting:r,submitErrors:n}=e;return(0,p.jsx)(A,{dirty:s,submitting:r,errors:n,onSubmitSuccess:t})}})}},9593:(e,t,s)=>{s.d(t,{A:()=>h});var r=s(5043),n=s(1089),i=s(8139),o=s.n(i),a=s(6308),l=s(579);function c(e){return 0===e.length?"":1===e.length?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1)}const h=(0,r.forwardRef)(((e,t)=>{let{show:s,autoHide:r=6e3,variant:i,anchorOrigin:h,onClose:d,children:u,className:p,...m}=e;const g=null!=h?`Toast-anchorOrigin${c(h.vertical)}${c(h.horizontal)}`:void 0;return(0,l.jsx)(n.A,{show:s,delay:r,autohide:r>0,className:o()("simple-toast",p,g,{success:"success"===i}),onClose:d,...m,ref:t,children:(0,l.jsx)(n.A.Header,{closeButton:null!=d,children:(0,l.jsxs)(l.Fragment,{children:["success"===i&&(0,l.jsx)("div",{className:"toast-icon",children:(0,l.jsx)(a.A,{icon:"check",variant:"light",size:"2x"})}),(0,l.jsx)("span",{className:"toast-title",children:u})]})})})}))},7772:(e,t,s)=>{s.d(t,{M:()=>a});var r=s(5043),n=s(8139),i=s.n(n),o=s(579);const a=(0,r.forwardRef)(((e,t)=>{let{position:s="start",children:r,className:n,...a}=e;return(0,o.jsx)("div",{className:i()("toolbar",n,{[s]:s}),...a,ref:t,children:r})}))},3306:(e,t,s)=>{s.d(t,{B8:()=>u,Hh:()=>h,cL:()=>m,cX:()=>d,uC:()=>c,uv:()=>p});var r=s(1948),n=s(6746),i=s(6847),o=s(5386),a=s(9140),l=s(7473);const c=e=>({...(0,o.OS)(l.p2,i.h.GET_SUCCESS),payload:e}),h=e=>t=>{t({...(0,o.OS)(l.p2,i.h.GET_START)}),(0,r.Ay)().get(`${n.U.recipe}${e}/`).then((e=>{t(c((0,l.sE)(e.body)))})).catch((e=>t((0,a.H4)(e,l.p2))))},d=(e,t)=>s=>{s({...(0,o.OS)(l.p2,i.h.DELETE_START)}),(0,r.Ay)().delete(`${n.U.recipe}${t}/`).then((()=>{s({...(0,o.OS)(l.p2,l.Ei.RECIPE_DELETE),payload:{id:e}})})).catch((e=>s((0,a.H4)(e,l.p2))))},u=(e,t)=>s=>{s({...(0,o.OS)(l.p2,l.Ei.RECIPE_INGREDIENT_SERVINGS_UPDATE),payload:{recipeSlug:e,customServings:t}})},p=e=>t=>{t({...(0,o.OS)(l.p2,i.h.PRELOAD),payload:e})},m=()=>e=>{e({...(0,o.OS)(l.p2,i.h.RESET)})}}}]);
//# sourceMappingURL=749.97403e6b.chunk.js.map