"use strict";(self.webpackChunktodde_design=self.webpackChunktodde_design||[]).push([[93],{3723:function(e,t,a){a.d(t,{G:function(){return A},L:function(){return p},M:function(){return k},P:function(){return E},_:function(){return o},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return u},h:function(){return l}});var r=a(7294),i=(a(2369),a(5697)),n=a.n(i);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a,r,i){return void 0===i&&(i={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:t?1:0})})}function u(e,t,a,r,i,n,o,l){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=i,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],g=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=o(e,m);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:i,alt:n="",shouldLoad:l}=e,c=o(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,n=o(e,y);const l=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,s({},n,t,{sizes:l,shouldLoad:i}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:l})})),c):c};var v;f.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},b.displayName="Picture",b.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:i.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const I=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:n().object.isRequired,alt:I},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],C=new Set;let S,N;const z=function(e){let{as:t="div",image:i,style:n,backgroundColor:c,className:d,class:u,onStartLoad:m,onLoad:g,onError:p}=e,h=o(e,L);const{width:y,height:f,layout:b}=i,v=function(e,t,a){const r={};let i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}(y,f,b),{style:w,className:E}=v,k=o(v,T),I=(0,r.useRef)(),x=(0,r.useMemo)((()=>JSON.stringify(i.images)),[i.images]);u&&(d=u);const z=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,f);return(0,r.useEffect)((()=>{S||(S=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return N=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=I.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void C.add(x);if(N&&C.has(x))return;let t,r;return S.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;I.current&&(I.current.innerHTML=a(s({isLoading:!0,isLoaded:C.has(x),image:i},h)),C.has(x)||(t=requestAnimationFrame((()=>{I.current&&(r=o(I.current,x,C,n,m,g,p))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[i]),(0,r.useLayoutEffect)((()=>{C.has(x)&&N&&(I.current.innerHTML=N(s({isLoading:C.has(x),isLoaded:C.has(x),image:i},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(t,s({},k,{style:s({},w,n,{backgroundColor:c}),className:E+(d?" "+d:""),ref:I,dangerouslySetInnerHTML:{__html:z},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(z,e):null}));A.propTypes=x,A.displayName="GatsbyImage";const D=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],O=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),j={src:n().string.isRequired,alt:I,width:O,height:O,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},U=(_=A,function(e){let{src:t,__imageData:a,__error:i}=e,n=o(e,D);return i&&console.warn(i),a?r.createElement(_,s({image:a},n)):(console.warn("Image not loaded",t),null)});var _;U.displayName="StaticImage",U.propTypes=j},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let i=0;i<e.length;i++){const n=e[i];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,r=a,a=!0,i++):a&&r&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,i-1)+"-"+e.slice(i-1),r=a,a=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,r=a,a=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},621:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),i=a(1883),n=a(3723);var s=function(e){let{linkTo:t,title:a,subTitle:s,img:o,imgAlt:l,marginTop:c,marginBottom:d,rounded:u,isPageNav:m,isExternal:g,hRef:p,isLocked:h}=e;return r.createElement("div",null,r.createElement(i.Link,{to:!h&&t},r.createElement("a",{href:g&&p,target:"_blank",rel:"noopener noreferrer"},r.createElement("div",{className:"relative group w-full transition duration-500 transform\n               rounded-"+(u||0)+" overflow-hidden\n                  "+(m?"transition duration-500 transform cursor-pointer group-hover:scale-[1.1] group-hover:rotate-[0.5deg":"")+"\n                  md:mt-"+c+" md:mb-"+d},r.createElement(n.G,{className:"transition duration-500 transform "+(h?"cursor-default":"cursor-pointer group-hover:scale-[1.03] group-hover:rotate-[0.5deg]")+" ",image:o,alt:l,loading:"eager"}),m?null:r.createElement("div",{className:"group absolute top-0 left-0 md:left-auto md:right-0 flex justify-between align-bottom bg-dark/60 backdrop-blur-xs px-3 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out duration-100"},r.createElement("p",{className:"text-xs md:text-sm font-bold tracking-more"},a),r.createElement("p",{className:"text-xs md:text-xs mx-1 align-baseline md:mx-3"},"|"),h?r.createElement("div",{className:"w-6 md:w-4"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"hover:text-grey"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",strokeWidth:1.5,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"}))):r.createElement("p",{className:"text-xs md:text-sm tracking-more"},s))))))},o=a(4667);var l=function(e){let{isPageNav:t,props:a}=e;const n=(0,i.useStaticQuery)("609897690"),l=[{label:"Web Design",title:"BuzzSumo",subTitle:"Web Design Marketing",cta:"View more",img:n.buzzsumoImg.childImageSharp.gatsbyImageData,id:n.buzzsumoImg.id,linkTo:"/projects/buzzsumo",imgAlt:"Buzzsumo Web Page",isLocked:!1},{label:"UI/UX Design",title:"Pet Time",subTitle:"Pet management",cta:"View use case",img:n.petImg.childImageSharp.gatsbyImageData,id:n.petImg.id,linkTo:"/projects/pet-time",imgAlt:"Pet Time App UI Design",isLocked:!1},{label:"UI/UX Design",title:"Homely.",subTitle:"DIY tool rental",cta:"View use case",img:n.homelyImg.childImageSharp.gatsbyImageData,id:n.homelyImg.id,linkTo:"/projects/homely",imgAlt:"DIY tool rental",isLocked:!1},{label:"UI/UX Design",title:"Classica",subTitle:"Classical Music Player",cta:"View use case",img:n.classicaImg.childImageSharp.gatsbyImageData,id:n.classicaImg.id,linkTo:"/projects/classica",imgAlt:"classica app ui design",isLocked:!1},{label:"UI/UX Design",title:"theecoexperts.co.uk",subTitle:"Web design",cta:"View use case",img:n.theEcoExpertsImg.childImageSharp.gatsbyImageData,id:n.theEcoExpertsImg.id,linkTo:"/theecoexperts",imgAlt:"DIY tool rental",isExternal:!1,isLocked:!0}];return r.createElement("section",{id:"work",className:" "+(t?"bg-white py-24 ":"py-8 md:py-36")},t&&r.createElement("h3",{className:"container text-dark mb-4 md:mb-12"},"Other projects"),r.createElement("div",{className:"container grid "+(t?"grid-cols-1 md:grid-cols-3 gap-5":"grid-cols-1 gap-4 md:gap-24 ")},l.map((e=>r.createElement(o.Z,{key:e.id},r.createElement(s,{className:"mb-1 opacity-50",alt:e.title,loading:"eager",img:e.img,imgAlt:e.imgAlt,title:!t&&e.title,subTitle:!t&&e.subTitle,cta:e.cta,label:!t&&e.label,linkTo:e.linkTo,hRef:e.hRef,marginTop:e.marginTop,marginBottom:e.marginBottom,rounded:"0",isPageNav:t,isExternal:e.isExternal,isLocked:e.isLocked}))))))}}}]);
//# sourceMappingURL=53609369feceb590d44f8a794796fb2484a513c3-282d87d044e4acd69c25.js.map