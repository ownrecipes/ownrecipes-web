"use strict";(self.webpackChunkownrecipes_web=self.webpackChunkownrecipes_web||[]).push([[289],{2235:(e,t,a)=>{a.d(t,{A:()=>f});var s=a(5043),n=a(1318),r=a(8602),i=a(8628),o=a(1072),l=a(8139),c=a.n(l),d=a(97),u=a(6308),m=a(5838),h=a(5456),p=a(579);const g=[{tag:"easy",icon:"bar-chart",variant:"light"},{tag:"vegetarian",icon:"tree",variant:"light"},{tag:"vegan",icon:"tree",variant:"filled"}],v=e=>{let{recipe:t}=e;const a=(0,d.A)(),n=(0,s.useMemo)((()=>{if(!t.oTags)return[];const e=[],s={...t.oTags};return s.vegetarian&&s.vegan&&delete s.vegetarian,g.forEach((n=>{null!==s&&void 0!==s&&s[n.tag]&&e.push((0,p.jsxs)(h.A,{children:[(0,p.jsx)(u.A,{icon:n.icon,variant:n.variant}),(0,m.yW)(a,"tag.",n.tag)]},`${t.id}-${n.tag}`))})),e}),[t.oTags,a.locale]);return 0===n.length?null:(0,p.jsx)("div",{className:"tags-list",children:n})};var _=a(933),x=a(8563);function A(e){var t;if(e.photoThumbnail)return null!==(t=e.photoThumbnail)&&void 0!==t?t:(0,m.P)();{const t=["fish","fried-eggs","pizza","soup","steak"],a=Math.abs(function(e){let t=0;for(let a=0;a<e.length;++a)t=(t<<5)-t+e.charCodeAt(a),t&=t;return t}(e.title));return(0,m.sF)(`/images/${t[a%5]}.jpg`)}}const f=e=>{let{data:t,lg:a=4,onOpenRecipe:l}=e;const d=(0,s.useMemo)((()=>(0,m.P)()),[]),u=(0,s.useMemo)((()=>({background:`url(${d}) 100% center / cover`})),[d]),h=null===t||void 0===t?void 0:t.map((e=>{const t=(0,m.hp)(`/recipe/${e.slug}`);return(0,p.jsx)(r.A,{children:(0,p.jsxs)(i.A,{className:c()("recipe",e.className),children:[e.header&&(0,p.jsx)(i.A.Header,{children:e.header}),(0,p.jsxs)(n.N_,{to:t,onClick:()=>l(e),children:[(0,p.jsx)(i.A.Img,{variant:"top",src:A(e),alt:"",style:u}),(0,p.jsx)(_.A,{stars:e.rating,count:e.ratingCount,collapsed:!0}),(0,p.jsx)(i.A.Title,{as:"h3",children:(0,p.jsx)(x.A,{id:e.slug,tooltip:e.title,placement:"bottom",className:"card-title-tooltip",children:e.title})}),e.oTags&&(0,p.jsx)(v,{recipe:e}),(0,p.jsx)(i.A.Text,{children:e.info})]}),e.footer&&(0,p.jsx)(i.A.Footer,{children:e.footer})]})},e.key||e.id)}));return(0,p.jsx)(o.A,{xs:1,sm:2,lg:a,className:"g-3 recipes-list",children:h})}},2437:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(5043),n=a(4282),r=(a(4589),a(824)),i=a(8563),o=a(579);const l=(0,s.forwardRef)(((e,t)=>{let{id:a,tooltip:s,tooltipPlacement:l,children:c,...d}=e;return(0,o.jsx)(r.A,{condition:Boolean(s),render:e=>(0,o.jsx)(i.A,{id:`${a}-tooltip`,tooltip:s,placement:l,children:e}),children:(0,o.jsx)(n.A,{id:a,"aria-label":s||void 0,"aria-describedby":void 0,...d,ref:t,children:c})})}))},6641:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(7367),n=a(579);const r=e=>{let{message:t}=e;return(0,n.jsxs)("div",{className:"spinner",children:[t&&(0,n.jsx)("span",{className:"h3 no-results",children:t}),(0,n.jsx)(s.A,{})]})}},7062:(e,t,a)=>{a.d(t,{A:()=>$});var s=a(5043),n=a(3626),r=a(97),i=a(3722),o=a(1072),l=a(8602),c=a(7775),d=a(6178),u=a.n(d),m=a(3287),h=a(5386),p=a(7341),g=a(962),v=a(6957),_=a(5852),x=a(6631),A=a(6985),f=a(579);const S=(0,s.forwardRef)(((e,t)=>{let{parse:a,format:s,name:n,required:i,onChange:o,onFocus:l,onBlur:d,...u}=e;const m=(0,r.A)();return(0,f.jsx)(c.D0,{name:n,validate:i?x.yt:void 0,validateFields:[],format:s,parse:a,children:e=>(0,f.jsx)(A.DW,{...u,required:i,name:e.input.name,value:e.input.value,errors:(0,x.HJ)(m,e.meta.error||(e.meta.dirtySinceLastSubmit?void 0:e.meta.submitError)),meta:e.meta,onChange:(t,a)=>{e.input.onChange(a),null===o||void 0===o||o(t,a)},onFocus:t=>{e.input.onFocus(t),null===l||void 0===l||l(t)},onBlur:t=>{e.input.onBlur(t),null===d||void 0===d||d(t)},ref:t})})}));var j=a(1437),b=a(8013),C=a(5429),y=a.n(C),E=a(107),T=a(8563),U=a(824);a(8512);class R extends E.A{constructor(){super(...arguments),this.handleChange=e=>{var t,a;null===(t=(a=this.props).onChange)||void 0===t||t.call(a,this.props.name,e)}}render(){const{onChange:e,value:t,timeFormat:a,dateFormat:s,name:n,style:r,tooltip:o,label:l,className:c,helpText:d,errors:u,meta:m,...h}=this.props;return(0,f.jsx)(i.A.Group,{...this.getGroupProps(),controlId:n,className:this.getFormGroupClassNames(),style:r,children:(0,f.jsxs)(U.A,{condition:null!=o,render:e=>(0,f.jsx)(T.A,{id:`${n}-tooltip`,tooltip:o,children:e}),children:[this.getLabel(),this.getHelpText(),this.getErrorMessage(),(0,f.jsx)(y(),{value:null!==t&&void 0!==t?t:"",inputProps:{name:n,className:"form-control",...h},dateFormat:s||"ddd, ll",timeFormat:a,closeOnSelect:!0,className:"form-datetime",onChange:this.handleChange})]})})}}function N(e){return null==e?e:u()(e).unix()}function w(e){return null!=e?u().unix(e):e}const M=(0,s.forwardRef)(((e,t)=>{let{name:a,required:s,format:n=w,parse:i=N,onChange:o,onFocus:l,onBlur:d,...u}=e;const m=(0,r.A)();return(0,f.jsx)(c.D0,{name:a,validate:s?x.yt:void 0,validateFields:[],format:n,parse:i,children:e=>(0,f.jsx)(R,{...u,required:s,name:e.input.name,value:e.input.value,errors:(0,x.HJ)(m,e.meta.error||(e.meta.dirtySinceLastSubmit?void 0:e.meta.submitError)),meta:e.meta,onChange:(t,a)=>{e.input.onChange(a),null===o||void 0===o||o(t,a)},onFocus:t=>{e.input.onFocus(t),null===l||void 0===l||l(t)},onBlur:t=>{e.input.onBlur(t),null===d||void 0===d||d(t)},ref:t})})})),F=(0,n.YK)({start_date:{id:"menu_item_modal.start_date",description:"Start Date",defaultMessage:"Start Date"},recipe:{id:"menu_item_modal.recipe",description:"Recipe",defaultMessage:"Recipe"},complete:{id:"menu_item_modal.complete",description:"Complete",defaultMessage:"Complete"}}),O=(0,s.forwardRef)(((e,t)=>{var a;let{item:n,recipe:d,recipeReadonly:m,fetchRecipes:h,onSubmit:p,onSubmitSuccess:g,submitRef:x}=e;const A=(0,r.A)(),{formatMessage:j}=A,C=(null===n||void 0===n||null===(a=n.recipe_data)||void 0===a?void 0:a.id)||(null===d||void 0===d?void 0:d.id),[y]=(0,s.useState)({recipe:C,start_date:u()((null===n||void 0===n?void 0:n.start_date)||new Date).unix(),complete:!1});return(0,f.jsx)(c.lV,{initialValues:y,onSubmit:p,subscription:{},render:e=>{var a;let{form:s,handleSubmit:r}=e;return(0,f.jsxs)(i.A,{onSubmit:r,ref:t,children:[(0,f.jsx)(v.A,{onSubmitSuccess:g}),(0,f.jsx)(_.A,{form:s,initialValues:y}),(0,f.jsxs)(o.A,{children:[(0,f.jsx)(l.A,{xs:12,children:(0,f.jsx)(S,{name:"recipe",initialValueLabel:(null===n||void 0===n||null===(a=n.recipe_data)||void 0===a?void 0:a.title)||(null===d||void 0===d?void 0:d.title),label:j(F.recipe),loadOptions:h,readOnly:m,required:!0})}),(0,f.jsx)(l.A,{xs:12,children:(0,f.jsx)(M,{label:j(F.start_date),name:"start_date",timeFormat:!1,required:!0})}),(0,f.jsx)(l.A,{xs:12,children:(0,f.jsx)(b.A,{name:"complete",label:j(F.complete)})})]}),(0,f.jsx)("button",{type:"submit",ref:x,className:"visibility-hidden",children:"Submit"})]})}})})),$=e=>{let{show:t,item:a,recipe:n,recipeReadonly:i,onSaveSuccess:o,onClose:l}=e;const c=(0,r.A)(),d=(0,h.wA)(),v=c.messages["recipe.add_to_menu_tooltip"],_=(0,s.useCallback)((e=>{e||l()}),[l]),x=(0,h.d4)((e=>e.menuItem.meta.pending)),A=(0,s.useRef)(null),S=(0,s.useCallback)((()=>{var e;null===(e=A.current)||void 0===e||e.click()}),[A.current]),b=(0,s.useCallback)((async e=>{const t={recipe:e.recipe||0,complete:e.complete,start_date:u().unix(e.start_date).toISOString()};return null==(null===a||void 0===a?void 0:a.id)?(0,m.vt)(d,t):(0,m.yo)(d,null===a||void 0===a?void 0:a.id,t)}),[null===a||void 0===a?void 0:a.id]),C=(0,s.useCallback)((()=>{o(),l()}),[o,l]);return t?(0,f.jsx)(g.A,{show:t,title:v,onAccept:S,acceptButtonProps:{disabled:x===p.F.SAVING},onClose:_,children:(0,f.jsx)(O,{item:a,recipe:n,recipeReadonly:i,fetchRecipes:j.Rq,onSubmit:b,onSubmitSuccess:C,submitRef:A})}):null}},4764:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(3626),n=a(97),r=a(9593),i=a(579);const o=(0,s.YK)({add_menu_item_success_toast:{id:"menu_item_modal.add_success_toast",description:"Add menu item success toast",defaultMessage:"Recipe added to your menu."},save_menu_item_success_toast:{id:"menu_item_modal.save_success_toast",description:"Save menu item success toast",defaultMessage:"Change saved."}}),l=e=>{let{show:t,created:a,onClose:s}=e;const{formatMessage:l}=(0,n.A)();return(0,i.jsx)(r.A,{show:t,variant:"success",anchorOrigin:{horizontal:"center",vertical:"bottom"},onClose:s,children:l(a?o.add_menu_item_success_toast:o.save_menu_item_success_toast)})}},3287:(e,t,a)=>{a.d(t,{TF:()=>h,ng:()=>u,qv:()=>m,vt:()=>c,yo:()=>d});var s=a(1948),n=a(6746),r=a(9140),i=a(6847),o=a(5386),l=a(5393);const c=async(e,t)=>(e({...(0,o.OS)(l.gU,i.h.CREATE_START)}),(0,s.Em)().post(n.U.menu_item).send(t).then((t=>{const a=(0,l.yY)(t.body);e({...(0,o.OS)(l.gU,i.h.CREATE_SUCCESS),payload:a})})).catch((t=>(0,r.NC)(e,t,l.gU)))),d=async(e,t,a)=>(e({...(0,o.OS)(l.gU,i.h.UPDATE_START)}),(0,s.Em)().patch(`${n.U.menu_item}${t}/`).send(a).then((t=>{const a=(0,l.yY)(t.body);e({...(0,o.OS)(l.gU,i.h.UPDATE_SUCCESS),payload:a})})).catch((t=>(0,r.NC)(e,t,l.gU)))),u=async(e,t)=>(e({...(0,o.OS)(l.gU,i.h.UPDATE_START)}),(0,s.Em)().patch(`${n.U.menu_item}${t}/`).send({complete:!0}).then((t=>{const a=(0,l.yY)(t.body);e({...(0,o.OS)(l.gU,i.h.UPDATE_SUCCESS),payload:a})})).catch((t=>(0,r.NC)(e,t,l.gU)))),m=e=>t=>{t({...(0,o.OS)(l.gU,l.e_.HIDE_COMPLETED),payload:e})},h=e=>t=>{t({...(0,o.OS)(l.gU,i.h.DELETE_START)}),(0,s.Em)().delete(`${n.U.menu_item}${e}/`).then((()=>{t({...(0,o.OS)(l.gU,i.h.DELETE_SUCCESS),payload:{id:e}})})).catch((e=>t((0,r.H4)(e,l.gU))))}},1437:(e,t,a)=>{a.d(t,{Hh:()=>d,Rq:()=>u});var s=a(1948),n=a(6746),r=a(5386),i=a(6847),o=a(9140),l=a(1296),c=a(5393);const d=()=>e=>{e({...(0,r.OS)(l.L,i.h.GET_START)}),(0,s.Ay)().get(`${n.U.menu_item}?complete=false`).then((t=>{e({...(0,r.OS)(l.L,i.h.GET_SUCCESS),payload:t.body.results.map((e=>(0,c.yY)(e)))})})).catch((t=>e((0,o.H4)(t,l.L))))},u=e=>(0,s.Ay)().get(`${n.U.recipe}?fields=id,title&limit=5&search=${e}`).then((e=>{const t=[];return e.body.results.map((e=>(t.push({value:String(e.id),label:e.title}),e))),t})).catch((()=>[]))},933:(e,t,a)=>{a.d(t,{A:()=>g});var s=a(5043),n=a(3626),r=a(97),i=a(8139),o=a.n(i),l=a(4282),c=a(6308),d=a(824),u=a(579);const m=(0,n.YK)({star_alt:{id:"rating_comments.star_alt",description:"Alt text for star button, for screen reader.",defaultMessage:"Select to rate item {stars, plural, one {# star} other {# stars}}"},stars_alt:{id:"rating_comments.stars_alt",description:"Alt text for read-only stars (view).",defaultMessage:"{stars} out of 5 stars"},rating_count:{id:"rating_comments.rating_count",description:"Rating count (view).",defaultMessage:"{count} ratings"}}),h=e=>{let{stars:t,num:a,onChange:n}=e;const{formatMessage:i}=(0,r.A)(),o=(0,s.useCallback)((()=>{null===n||void 0===n||n(a)}),[n,a]),h=t>a-1&&t<a,p=h?"star-half":"star",g=a>t||h?"light":"filled";return(0,u.jsx)(d.A,{condition:null!=n,render:e=>(0,u.jsx)(l.A,{variant:"transparent",className:"rating",onClick:o,children:e}),children:(0,u.jsx)(c.A,{icon:p,variant:g,size:null!=n?"2x":"1x",ariaLabel:n?i(m.star_alt,{stars:a}):void 0},a)},a)},p=e=>{let{stars:t}=e;const a=t>0&&t<4,s=a?"star-half":"star",n=0===t||a?"light":"filled";return(0,u.jsx)(c.A,{icon:s,variant:n,size:"1x"},t)},g=e=>{let{stars:t,count:a,showCount:n=!0,collapsed:i=!1,onChange:l}=e;const{formatMessage:c}=(0,r.A)();let d=t;t>5?d=5:t<0&&(d=0);const g=(0,s.useMemo)((()=>i?(0,u.jsx)(p,{stars:d}):Array.from({length:5},((e,t)=>t+1)).map((e=>(0,u.jsx)(h,{stars:d,num:e,onChange:l},e)))),[d,i,l]),v=t>0?`${t}/5`:"",_=!n||0!==t&&!a||l?void 0:null!==a&&void 0!==a?a:0;return(0,u.jsxs)("div",{className:"rating-stars",children:[(0,u.jsx)("span",{className:o()("stars-icons",{active:t>0}),"aria-hidden":!0,children:g}),v&&(0,u.jsx)("span",{className:"rating-text","aria-hidden":!0,children:v}),(0,u.jsx)("span",{className:"sr-only",children:c(m.stars_alt,{stars:d})}),null!=_&&(0,u.jsx)("span",{className:"rating-count",children:`(${i?_:c(m.rating_count,{count:_})})`})]})}}}]);
//# sourceMappingURL=289.c559780a.chunk.js.map