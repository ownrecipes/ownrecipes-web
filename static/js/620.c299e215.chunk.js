"use strict";(self.webpackChunkownrecipes_web=self.webpackChunkownrecipes_web||[]).push([[620],{941:(e,t,n)=>{n.d(t,{A:()=>b});var s=n(5043),i=n(6971),a=n(3626),r=n(97),o=(n(1840),n(6308)),l=n(2437),c=n(5386),d=n(3306),u=n(2235),m=n(1948),p=n(6746),h=n(6847),f=n(9140),g=n(7473),_=n(1965);const w=e=>t=>{t({...(0,c.OS)(_.T,h.h.GET_START)}),(0,m.Ay)().get(`${p.U.mini_browse}${e?`&${e}`:""}`).then((e=>{var n;t({...(0,c.OS)(_.T,h.h.GET_SUCCESS),payload:null===(n=e.body.results)||void 0===n?void 0:n.map(g.A)})})).catch((e=>t((0,f.H4)(e,_.T))))};var v=n(579);const x=(0,a.YK)({shuffleSuggestionsButton:{id:"browse.shuffle_suggestions_button_title",description:"Title/tooltip of the icon button to shuffle the suggestions.",defaultMessage:"Shuffle suggestions"}});function k(e,t){const n=new URLSearchParams(t);return n.append("limit",e.toString()),n.toString()}const b=e=>{var t;let{heading:n,count:a,filters:m}=e;const{formatMessage:p}=(0,r.A)(),h=(0,c.wA)(),f=(0,i.zy)(),g=(0,i.g)(),_=g.recipe,b=(0,c.d4)((e=>e.browse.browserMini.items)),j=(0,s.useMemo)((()=>null===b||void 0===b?void 0:b.filter((e=>e.slug!==_))),[_,b]),A=null!==(t=g.recipe)&&void 0!==t?t:"";(0,s.useEffect)((()=>{h(w(k(a,m)))}),[f]);const M=(0,s.useCallback)((()=>{h(w(k(a,m)))}),[k,a,m]),C=(0,s.useCallback)((e=>{A!==e.slug&&h(d.uv(e))}),[A]);return null!=j&&0===j.length?null:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{id:"suggestions-heading",children:n}),(0,v.jsx)(l.A,{id:"shuffle-suggestions-button",variant:"outline-primary",onClick:M,className:"print-hidden",tooltip:p(x.shuffleSuggestionsButton),children:(0,v.jsx)(o.A,{icon:"arrow-repeat",variant:"light"})}),(0,v.jsx)(u.A,{data:j,onOpenRecipe:C})]})}},5718:(e,t,n)=>{n.d(t,{A:()=>m});var s=n(5043),i=n(8139),a=n.n(i),r=n(1318),o=n(3626),l=n(97),c=n(3702),d=n(579);const u=(0,o.YK)({permalink_tooltip:{id:"permalink.tooltip",description:"Tooltip when hovering a permalink.",defaultMessage:"Permalink to this headline"}}),m=(0,s.forwardRef)(((e,t)=>{let{linkFor:n,className:s,...i}=e;const{formatMessage:o}=(0,l.A)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.N_,{className:a()("headerlink",s),to:`#${n}`,title:o(u.permalink_tooltip),...i,ref:t,children:"\xb6"}),(0,d.jsx)(c.A,{uriFragmentId:n})]})}))},1321:(e,t,n)=>{n.d(t,{A:()=>T});var s=n(5043),i=n(5386),a=n(3287),r=n(1437),o=n(3306),l=n(8602),c=n(3626),d=n(97),u=n(6178),m=n.n(u),p=n(8139),h=n.n(p),f=n(7341),g=n(2521),_=n(6641),w=n(2437),v=n(7772),x=n(6308),k=n(2235),b=n(962),j=n(579);const A=e=>{let{item:t,onHide:n}=e;(0,s.useEffect)((()=>{t.complete&&setTimeout((()=>{n(t)}),3500)}),[t.complete]);const i=(0,s.useCallback)((()=>{n(t)}),[t,n]);return t.complete?(0,j.jsx)(w.A,{id:`hide-completed-menu-item-${t.id}`,className:"menu-item-complete-transition",variant:"transparent",onClick:i,children:(0,j.jsx)(x.A,{icon:"check",variant:"light"})}):null};var M=n(7062),C=n(4764);const y=(0,c.YK)({mark_as_completed_button:{id:"menu_item.mark_as_completed_button",defaultMessage:"Mark as completed"},edit_button:{id:"menu_item.edit_button",defaultMessage:"Edit menu item"},delete_button:{id:"menu_item.delete_button",defaultMessage:"Remove menu item"},confirm_delete_message:{id:"menu_item.confirm_delete",description:"Are you sure you want to delete this item?",defaultMessage:"Are you sure you want to delete this item?"}}),N=e=>{let{items:t,onCompleteClick:n,onHideCompleted:i,onOpenRecipe:a,onDelete:r}=e;const o=(0,d.A)(),{formatMessage:l}=o,[c,u]=(0,s.useState)(void 0),p=(0,s.useCallback)((()=>{u(void 0)}),[]),[f,g]=(0,s.useState)(""),_=(0,s.useCallback)((()=>{g(null==(null===c||void 0===c?void 0:c.id)?"create":"update")}),[c]),N=(0,s.useCallback)((()=>{g("")}),[]),[S,E]=(0,s.useState)(void 0),R=(0,s.useCallback)((e=>{E(e)}),[]),T=(0,s.useCallback)((()=>{E(void 0)}),[]),O=(0,s.useCallback)((()=>{S&&(null===r||void 0===r||r(S))}),[S]),D=(0,s.useMemo)((()=>t.map((e=>({key:String(e.id),className:h()({completed:e.complete,active:m()(e.start_date).isSame(new Date,"day")}),...e.recipe_data,header:(0,j.jsx)("span",{children:`${m()(e.start_date).format("dddd")} (${m()(e.start_date).format("l")})`}),footer:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(v.M,{position:"end",className:"print-hidden",children:[(0,j.jsx)(w.A,{id:`complete-btn-menu-item-${e.id}`,variant:"outline-primary",tooltip:l(y.mark_as_completed_button),onClick:()=>n(e),style:{padding:0},children:(0,j.jsx)(x.A,{icon:"check",variant:"light",size:"2x"})}),(0,j.jsx)(w.A,{id:`edit-btn-menu-item-${e.id}`,variant:"outline-primary",tooltip:l(y.edit_button),onClick:()=>{u(e)},children:(0,j.jsx)(x.A,{icon:"pencil"})}),(0,j.jsx)(w.A,{id:`delete-btn-menu-item-${e.id}`,variant:"outline-danger",className:"menu-2x-button",tooltip:l(y.delete_button),onClick:()=>R(e),children:(0,j.jsx)(x.A,{icon:"x",variant:"light",size:"2x"})})]}),(0,j.jsx)(A,{item:e,onHide:i})]})})))),[t]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(k.A,{lg:4,data:D,onOpenRecipe:a}),(0,j.jsx)(M.A,{show:Boolean(c),item:c,onSaveSuccess:_,onClose:p}),(0,j.jsx)(C.A,{show:Boolean(f),created:"create"===f,onClose:N}),(0,j.jsx)(b.A,{show:Boolean(S),title:o.messages["recipe.confirm_delete_title"],acceptTitle:o.messages["recipe.confirm_delete_accept"],onAccept:O,onClose:T,acceptButtonProps:{variant:"danger"},children:l(y.confirm_delete_message)})]})},S=(0,c.YK)({no_items:{id:"menu.no_items",description:"Info that the user has no item on the menu.",defaultMessage:"(You don't have any item on your menu.)"},force_show_previous_button:{id:"menu.force_show_previous_button",description:"Show previous weeks button",defaultMessage:"Show previous weeks"},section_this_week:{id:"menu.section_this_week_heading",description:'Heading of the "This week (...)" section',defaultMessage:"This Week ({title})"},section_next_week:{id:"menu.section_next_week_heading",description:'Heading of the "Next week (...)" section',defaultMessage:"Next Week ({title})"},section_last_week:{id:"menu.section_last_week_heading",description:'Heading of the "Last week (...)" section',defaultMessage:"Last Week ({title})"}});function E(e,t){return m()(e.start_date).diff(m()(t.start_date))}const R=e=>{let{items:t,pending:n,withPast:i=!0,withDistantFuture:a=!0,className:r,onRender:o,onCompleteClick:c,onHideCompleted:u,onOpenRecipe:p,onDelete:k,...b}=e;const{formatMessage:A}=(0,d.A)(),[M,C]=(0,s.useState)(!1),y=(0,s.useCallback)((()=>{C(!0)}),[]),R=(0,s.useMemo)((()=>{const e=function(e,t,n){if(!e)return e;const s=m()().startOf("week");let i=e;if(t||(i=i.filter((e=>m()(e.start_date).diff(s)>=0))),!n){const e=m()().add(2,"week").startOf("week");i=i.filter((t=>m()(t.start_date).diff(e)<0))}return i}(null===t||void 0===t?void 0:t.sort(E),i||M,a),n=m()().add(1,"week").startOf("week").format("MMMM D"),s=m()().startOf("week").format("MMMM D"),r=m()().subtract(1,"week").startOf("week").format("MMMM D");return null===e||void 0===e?void 0:e.reduce(((e,t)=>{const i=t.start_date,a=m()(i).startOf("week").format("MMMM D");let o=`${a} - ${m()(i).endOf("week").format("MMMM D")}`;return s===a?o=A(S.section_this_week,{title:o}):n===a?o=A(S.section_next_week,{title:o}):r===a&&(o=A(S.section_last_week,{title:o})),"undefined"===typeof e[o]&&(e[o]=[]),e[o].push(t),e}),{})}),[t,i,a,M,A]),T=n===f.F.COMPLETED&&(null==t||0===t.length||null==R||0===Object.keys(R).length);return(0,s.useEffect)((()=>{null===o||void 0===o||o(R)}),[R]),(0,j.jsxs)("div",{className:h()("menu-plan",r),...b,children:[n===f.F.LOADING&&(null==t||0===t.length)&&(0,j.jsx)(_.A,{}),T&&(0,j.jsx)(g.A,{className:"placeholder",children:A(S.no_items)}),i&&!M&&(0,j.jsx)(v.M,{position:"center",children:(0,j.jsxs)(w.A,{id:"show-previous-menu-items-button",variant:"outline-primary",onClick:y,children:[(0,j.jsx)(x.A,{icon:"arrow-up",variant:"light",style:{marginRight:"0.25em"}}),A(S.force_show_previous_button)]})}),R&&t&&t.length>0&&(0,j.jsx)(l.A,{xs:12,className:"recipes",children:Object.keys(R).map((e=>(0,j.jsxs)(s.Fragment,{children:[(0,j.jsx)("h2",{className:"section-header",children:e}),(0,j.jsx)(N,{items:R[e],onCompleteClick:c,onHideCompleted:u,onOpenRecipe:p,onDelete:k})]},e)))})]})},T=e=>{let{...t}=e;const n=(0,i.wA)(),l=(0,i.d4)((e=>e.menuItems)),{items:c}=l;(0,s.useEffect)((()=>{n(r.Hh())}),[]);const d=(0,s.useCallback)((e=>{a.ng(n,e.id)}),[]),u=(0,s.useCallback)((e=>{n(a.qv(e.id))}),[]),m=(0,s.useCallback)((e=>{n(o.uv(e))}),[]),p=(0,s.useCallback)((e=>{n(a.TF(e.id))}),[]);return(0,j.jsx)(R,{items:c,pending:l.meta.pending,onCompleteClick:d,onHideCompleted:u,onOpenRecipe:m,onDelete:p,...t})}},8785:(e,t,n)=>{n.r(t),n.d(t,{default:()=>re});var s=n(97),i=n(8591),a=n(5838),r=n(3626),o=n(5386),l=n(941),c=n(4949),d=n(579);const u=(0,r.YK)({recommendedRecipes:{id:"nav.home.recommended_recipes_title",description:"Recommended Recipes Title",defaultMessage:"Recommended Recipes"}}),m=()=>{const{formatMessage:e}=(0,s.A)(),t=(0,o.d4)((e=>e.browse.browserMini.meta)),n=(0,o.d4)((e=>e.settings.disableRecipeDiscovery))||(0,a.gw)("REACT_APP_DISABLE_RECIPE_DISCOVERY")||!1;return!t.hasConnection||null!=t.error||n?null:(0,d.jsx)(c.A,{verbose:!0,printStack:!0,children:(0,d.jsx)("div",{children:(0,d.jsx)(l.A,{heading:e(u.recommendedRecipes),count:4})})})};var p=n(5043),h=n(9436),f=n(8139),g=n.n(f),_=n(1456);const w=function(e,t){const n=(0,p.useRef)(!0);(0,p.useEffect)((()=>{if(!n.current)return e();n.current=!1}),t)};var v=n(8232),x=n(3240),k=n(6161),b=n(7121),j=n(7852);const A=p.forwardRef(((e,t)=>{let{className:n,bsPrefix:s,as:i="div",...a}=e;return s=(0,j.oU)(s,"carousel-caption"),(0,d.jsx)(i,{ref:t,className:g()(n,s),...a})}));A.displayName="CarouselCaption";const M=A,C=p.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:s,className:i,...a}=e;const r=g()(i,(0,j.oU)(s,"carousel-item"));return(0,d.jsx)(n,{ref:t,...a,className:r})}));C.displayName="CarouselItem";const y=C;var N=n(2663),S=n(3492),E=n(2643),R=n(2529);const T=p.forwardRef(((e,t)=>{let{defaultActiveIndex:n=0,...s}=e;const{as:i="div",bsPrefix:a,slide:r=!0,fade:o=!1,controls:l=!0,indicators:c=!0,indicatorLabels:u=[],activeIndex:m,onSelect:h,onSlide:f,onSlid:A,interval:M=5e3,keyboard:C=!0,onKeyDown:y,pause:T="hover",onMouseOver:O,onMouseOut:D,wrap:I=!0,touch:$=!0,onTouchStart:P,onTouchMove:F,onTouchEnd:L,prevIcon:H=(0,d.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:K="Previous",nextIcon:Y=(0,d.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:B="Next",variant:W,className:U,children:G,...z}=(0,b.Zw)({defaultActiveIndex:n,...s},{activeIndex:"onSelect"}),q=(0,j.oU)(a,"carousel"),X=(0,j.Wz)(),J=(0,p.useRef)(null),[V,Z]=(0,p.useState)("next"),[Q,ee]=(0,p.useState)(!1),[te,ne]=(0,p.useState)(!1),[se,ie]=(0,p.useState)(m||0);(0,p.useEffect)((()=>{te||m===se||(J.current?Z(J.current):Z((m||0)>se?"next":"prev"),r&&ne(!0),ie(m||0))}),[m,te,se,r]),(0,p.useEffect)((()=>{J.current&&(J.current=null)}));let ae,re=0;(0,N.jJ)(G,((e,t)=>{++re,t===m&&(ae=e.props.interval)}));const oe=(0,v.A)(ae),le=(0,p.useCallback)((e=>{if(te)return;let t=se-1;if(t<0){if(!I)return;t=re-1}J.current="prev",null==h||h(t,e)}),[te,se,h,I,re]),ce=(0,_.A)((e=>{if(te)return;let t=se+1;if(t>=re){if(!I)return;t=0}J.current="next",null==h||h(t,e)})),de=(0,p.useRef)();(0,p.useImperativeHandle)(t,(()=>({element:de.current,prev:le,next:ce})));const ue=(0,_.A)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(de.current)&&(X?le():ce())})),me="next"===V?"start":"end";w((()=>{r||(null==f||f(se,me),null==A||A(se,me))}),[se]);const pe=`${q}-item-${V}`,he=`${q}-item-${me}`,fe=(0,p.useCallback)((e=>{(0,E.A)(e),null==f||f(se,me)}),[f,se,me]),ge=(0,p.useCallback)((()=>{ne(!1),null==A||A(se,me)}),[A,se,me]),_e=(0,p.useCallback)((e=>{if(C&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(X?ce(e):le(e));case"ArrowRight":return e.preventDefault(),void(X?le(e):ce(e))}null==y||y(e)}),[C,y,le,ce,X]),we=(0,p.useCallback)((e=>{"hover"===T&&ee(!0),null==O||O(e)}),[T,O]),ve=(0,p.useCallback)((e=>{ee(!1),null==D||D(e)}),[D]),xe=(0,p.useRef)(0),ke=(0,p.useRef)(0),be=(0,x.A)(),je=(0,p.useCallback)((e=>{xe.current=e.touches[0].clientX,ke.current=0,"hover"===T&&ee(!0),null==P||P(e)}),[T,P]),Ae=(0,p.useCallback)((e=>{e.touches&&e.touches.length>1?ke.current=0:ke.current=e.touches[0].clientX-xe.current,null==F||F(e)}),[F]),Me=(0,p.useCallback)((e=>{if($){const t=ke.current;Math.abs(t)>40&&(t>0?le(e):ce(e))}"hover"===T&&be.set((()=>{ee(!1)}),M||void 0),null==L||L(e)}),[$,T,le,ce,be,M,L]),Ce=null!=M&&!Q&&!te,ye=(0,p.useRef)();(0,p.useEffect)((()=>{var e,t;if(!Ce)return;const n=X?le:ce;return ye.current=window.setInterval(document.visibilityState?ue:n,null!=(e=null!=(t=oe.current)?t:M)?e:void 0),()=>{null!==ye.current&&clearInterval(ye.current)}}),[Ce,le,ce,oe,M,ue,X]);const Ne=(0,p.useMemo)((()=>c&&Array.from({length:re},((e,t)=>e=>{null==h||h(t,e)}))),[c,re,h]);return(0,d.jsxs)(i,{ref:de,...z,onKeyDown:_e,onMouseOver:we,onMouseOut:ve,onTouchStart:je,onTouchMove:Ae,onTouchEnd:Me,className:g()(U,q,r&&"slide",o&&`${q}-fade`,W&&`${q}-${W}`),children:[c&&(0,d.jsx)("div",{className:`${q}-indicators`,children:(0,N.Tj)(G,((e,t)=>(0,d.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=u&&u.length?u[t]:`Slide ${t+1}`,className:t===se?"active":void 0,onClick:Ne?Ne[t]:void 0,"aria-current":t===se},t)))}),(0,d.jsx)("div",{className:`${q}-inner`,children:(0,N.Tj)(G,((e,t)=>{const n=t===se;return r?(0,d.jsx)(R.A,{in:n,onEnter:n?fe:void 0,onEntered:n?ge:void 0,addEndListener:S.A,children:(t,s)=>p.cloneElement(e,{...s,className:g()(e.props.className,n&&"entered"!==t&&pe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&he)})}):p.cloneElement(e,{className:g()(e.props.className,n&&"active")})}))}),l&&(0,d.jsxs)(d.Fragment,{children:[(I||0!==m)&&(0,d.jsxs)(k.A,{className:`${q}-control-prev`,onClick:le,children:[H,K&&(0,d.jsx)("span",{className:"visually-hidden",children:K})]}),(I||m!==re-1)&&(0,d.jsxs)(k.A,{className:`${q}-control-next`,onClick:ce,children:[Y,B&&(0,d.jsx)("span",{className:"visually-hidden",children:B})]})]})]})}));T.displayName="Carousel";const O=Object.assign(T,{Caption:M,Item:y});var D=n(1948),I=n(6746),$=n(6847),P=n(9140),F=n(4903);var L=n(2521),H=n(7341),K=n(6641);(0,r.YK)({news_placeholder_introduction:{id:"news.placeholder.introduction",defaultMessage:"OwnRecipes is an open source recipe management site. You can share recipes with friends, rate recipes, store your favorite recipes to find easily, and more."}});const Y=()=>{const e=(0,s.A)(),t=(0,o.wA)(),n=(0,o.d4)((e=>e.news)),i=n.items;(0,p.useEffect)((()=>{null!=i&&0!==i.length||t((e=>{e({...(0,o.OS)(F.K,$.h.GET_START)}),(0,D.Ay)().get(I.U.news).then((t=>{var n;e({...(0,o.OS)(F.K,$.h.GET_SUCCESS),payload:null===(n=t.body.results)||void 0===n?void 0:n.map(F.u)})})).catch((t=>e((0,P.H4)(t,F.K))))}))}),[]);const r=(0,p.useMemo)((()=>{var t;return null!==(t=null===i||void 0===i?void 0:i.filter((e=>e.frontpage&&"%features%"!==e.content)).map((t=>{return(0,d.jsxs)(O.Item,{children:[t.image&&(0,d.jsx)("img",{className:"d-block",src:t.image,alt:""}),(0,d.jsxs)(O.Caption,{className:g()({"with-image":null!=t.image}),children:[(0,d.jsx)("h2",{children:t.title}),(0,d.jsx)(L.A,{children:(n=e,s=t.content,s.startsWith("%")&&s.endsWith("%")?(0,a.yW)(n,"news.placeholder.",s.substring(1,s.length-1).toLocaleLowerCase()):s)})]})]},t.id);var n,s})))&&void 0!==t?t:[]}),[i,e.locale]);return(0,d.jsxs)(d.Fragment,{children:[n.meta.pending===H.F.LOADING&&(0,d.jsx)(K.A,{}),r.length>0&&(0,d.jsx)(O,{className:g()("news-carousel",{"with-controls":r.length>1}),interval:15e3,controls:r.length>1,indicators:r.length>1,children:r})]})};var B=n(3519),W=n(1072),U=n(8602),G=n(8628),z=n(6308);const q=[{icon:"pencil",title:"create recipes"},{icon:"search-heart",title:"search recipes"},{icon:"chat-left-text",title:"comment and rating"},{icon:"phone-flip",title:"responsive design"},{icon:"clock-history",title:"easy setup"},{icon:"building",title:"administration"},{icon:"git",title:"open source"},{icon:"globe",title:"open api"}];(0,r.YK)({news_features_create_recipes:{id:"news.features.create recipes",defaultMessage:"Create Recipes"},news_features_create_recipes_description:{id:"news.features.create recipes description",defaultMessage:"Easily create and manage your own recipes, and combine them to menus."},news_features_search_recipes:{id:"news.features.search recipes",defaultMessage:"Search Recipes"},news_features_search_recipes_description:{id:"news.features.search recipes description",defaultMessage:"Use powerful browsing tools to find your new favorite meals."},news_features_comment_and_rating_recipes:{id:"news.features.comment and rating",defaultMessage:"Rating and Comments"},news_features_comment_and_rating_description:{id:"news.features.comment and rating description",defaultMessage:"Provide useful feedback on recipes and add your rating. Help your friends to avoid repeating your mistakes."},news_features_responsive_design:{id:"news.features.responsive design",defaultMessage:"Responsive Design"},news_features_responsive_design_description:{id:"news.features.responsive design description",defaultMessage:"Manage your recipes on your large screen at home, and conveniently use your phone for cooking."},news_features_easy_setup:{id:"news.features.easy setup",defaultMessage:"Easy Setup"},news_features_easy_setup_description:{id:"news.features.easy setup description",defaultMessage:"Getting Your instance up and running is extremely easy, thanks to docker. To focus on the important things in life."},news_features_administration:{id:"news.features.administration",defaultMessage:"Administration"},news_features_administration_description:{id:"news.features.administration description",defaultMessage:"The app ships with a powerful administration platform, to make the house-keeping a breeze."},news_features_open_source:{id:"news.features.open source",defaultMessage:"Open Source"},news_features_open_source_description:{id:"news.features.open source description",defaultMessage:"Built by passionate people who care. <3"},news_features_open_api:{id:"news.features.open api",defaultMessage:"OpenApi"},news_features_open_api_description:{id:"news.features.open api description",defaultMessage:"The api is documented with OpenAPI (ex. Swagger). That makes it fairly easy to integrate custom tools and queries."}});const X=()=>{const e=(0,s.A)(),t=(0,o.d4)((e=>e.news)).items;return(0,p.useMemo)((()=>null!==t&&void 0!==t&&t.filter((e=>e.frontpage)).find((e=>"%features%"===e.content))?(0,d.jsx)(B.A,{className:"features-overview",children:(0,d.jsx)(W.A,{xs:1,sm:2,lg:4,className:"g-4",children:q.map((t=>(0,d.jsx)(U.A,{children:(0,d.jsx)(G.A,{children:(0,d.jsxs)(G.A.Body,{children:[(0,d.jsxs)(G.A.Title,{children:[(0,d.jsx)(z.A,{icon:t.icon,variant:"light"}),(0,a.yW)(e,"news.features.",t.title)]}),(0,d.jsx)(G.A.Text,{children:(0,a.yW)(e,"news.features.",`${t.title} description`)})]})})},t.title)))})}):null),[t,e.locale])};var J=n(4282);const V=(0,r.YK)({news_hide:{id:"news.hide news button",defaultMessage:"Got it!"},news_show:{id:"news.show news button",defaultMessage:"Show news"}}),Z=e=>{let{showNews:t,onClick:n}=e;const{formatMessage:i}=(0,s.A)(),a=(0,o.d4)((e=>e.connection)),r=(0,o.d4)((e=>e.news)),l=r.items;return a.hasConnection?r.meta.pending===H.F.COMPLETED&&null!=l&&0===l.filter((e=>!1!==e.frontpage)).length?null:(0,d.jsx)(J.A,{id:"toggle-news-button",variant:"outline-primary",onClick:n,className:g()("print-hidden",{show:!t,hide:t}),children:i(t?V.news_hide:V.news_show)}):null},Q="show_news",ee=()=>{const e=(0,o.d4)((e=>e.account)).item,t=null===e||void 0===e?void 0:e.username,n=(0,o.d4)((e=>e.settings.disableNews))||(0,a.gw)("REACT_APP_DISABLE_NEWS")||!1,[s,i]=(0,p.useState)(!1);(0,p.useEffect)((()=>{i("false"!==h.A.getItem(Q,t))}),[t]);const r=(0,p.useCallback)((()=>{s?(h.A.setItem(Q,"false",t),i(!1)):(h.A.removeItem(Q,t),i(!0))}),[s,t]);return(0,d.jsxs)(c.A,{verbose:!0,printStack:!0,children:[n&&(0,d.jsx)("h1",{style:{textAlign:"center"},children:"OwnRecipes"}),!n&&s&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Y,{}),(0,d.jsx)(X,{})]}),!n&&(0,d.jsx)(Z,{showNews:s,onClick:r})]})};var te=n(1318),ne=n(1321),se=n(5718);const ie=(0,r.YK)({news_menu_heading:{id:"news.menu_heading",description:"Menu plan heading",defaultMessage:"Your Menu"}}),ae=()=>{const{formatMessage:e}=(0,s.A)(),t=(0,o.d4)((e=>e.menuItems)),[n,i]=(0,p.useState)(!1),r=(0,p.useCallback)((e=>{i(null!=e&&0===Object.keys(e).length)}),[]);return!t.meta.hasConnection||null!=t.meta.error||t.meta.pending===H.F.COMPLETED&&n?null:(0,d.jsx)(c.A,{verbose:!0,printStack:!0,children:(0,d.jsxs)("div",{children:[t.meta.pending===H.F.COMPLETED&&(0,d.jsxs)("h2",{id:"news-menu-heading",children:[(0,d.jsx)(te.N_,{className:"link-text",to:(0,a.hp)("/menu"),children:e(ie.news_menu_heading)}),(0,d.jsx)(se.A,{linkFor:"menu-heading"})]}),(0,d.jsx)(W.A,{children:(0,d.jsx)(ne.A,{withPast:!1,withDistantFuture:!1,onRender:r})})]})})},re=()=>{const e=(0,s.A)();return(0,d.jsxs)(i.A,{title:e.messages["nav.home"],children:[(0,d.jsx)(ee,{}),!(0,a.HP)()&&(0,d.jsx)(ae,{}),(0,d.jsx)(m,{})]})}},1840:()=>{}}]);
//# sourceMappingURL=620.c299e215.chunk.js.map