(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148),l=a(146),c=(a(34),a(4)),o=a.n(c),s=function(e){var t=e.children,a=e.title;return r.a.createElement("div",null,r.a.createElement("div",{style:{height:"1px",backgroundColor:"#000",margin:"10px 0"}}),r.a.createElement("h3",null,"> ",a),r.a.createElement("div",{className:a.replace(/ /g,"-").toLowerCase()+"-item"},t))};s.propTypes={children:o.a.node.isRequired,title:o.a.string.isRequired};var u=s,m=(a(160),function(){return r.a.createElement(u,{title:"Waving String"},r.a.createElement("div",null,r.a.createElement("span",{className:"waving-string"},"W"),r.a.createElement("span",{className:"waving-string"},"a"),r.a.createElement("span",{className:"waving-string"},"v"),r.a.createElement("span",{className:"waving-string"},"i"),r.a.createElement("span",{className:"waving-string"},"n"),r.a.createElement("span",{className:"waving-string"},"g"),r.a.createElement("span",{className:"waving-string"}," "),r.a.createElement("span",{className:"waving-string"},"S"),r.a.createElement("span",{className:"waving-string"},"t"),r.a.createElement("span",{className:"waving-string"},"r"),r.a.createElement("span",{className:"waving-string"},"i"),r.a.createElement("span",{className:"waving-string"},"n"),r.a.createElement("span",{className:"waving-string"},"g")))}),d=(a(161),a(162)),p=a.n(d),g=["grayscale(1)","blur(2px)","sepia(0.75)","saturate(6)","hue-rotate(90deg)","invert(0.8)","opacity(0.5)","brightness(3)","contrast(4)"],f=function(){return r.a.createElement(u,{title:"Filter"},r.a.createElement("div",{className:"filter-div"},r.a.createElement("img",{src:p.a,alt:"dva"}),r.a.createElement("code",null,"no filter;")),g.map(function(e){return r.a.createElement("div",{className:"filter-div",key:e},r.a.createElement("img",{src:p.a,alt:"dva",style:{filter:e}}),r.a.createElement("code",null,"filter: ",e,";"))}))},E=(a(77),a(52),a(78),a(163),a(165),{1:function(e){return"0, "+e+", 0), rgb(0, "+e+", 255"},2:function(e){return e+", 0, 0), rgb("+e+", 0, 255"},3:function(e){return e+", 0, 0), rgb("+e+", 255, 0"}}),h=function(){var e=Object(n.useState)(1),t=e[0],a=e[1];return r.a.createElement(u,{title:"Linear Gradient"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{onClick:function(){return a(1)}},"1"),r.a.createElement("button",{onClick:function(){return a(2)}},"2"),r.a.createElement("button",{onClick:function(){return a(3)}},"3")),r.a.createElement("code",null,"{ (1..256).each do |i|}"),r.a.createElement("code",null,"background-image: linear-gradient(to right, rgb(",E[t]("i"),"))"),Array.from(Array(256).keys()).map(function(e){return r.a.createElement("div",{key:e,className:"color-line",style:{backgroundImage:"linear-gradient(to right, rgb("+E[t](e)+"))"}})}))},v=(a(166),a(167)),y=a.n(v),b=function(e){return r.a.createElement("button",{onClick:function(){return alert((e||"Nothing")+" submitted!")}},"Submit")},w=function(){var e=Object(n.useState)(""),t=e[0],a=e[1],i=Object(n.useState)(!1),l=i[0],c=i[1],o=y()("input-title",{"on-top":""!==t||l});return r.a.createElement("div",{className:"input-a"},r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{value:t,onChange:function(e){return a(e.target.value)},onFocus:function(){return c(!0)},onBlur:function(){return c(!1)}}),r.a.createElement("div",{className:o},"Input something here!")),b(t),r.a.createElement("button",{onClick:function(){return a("")}},"Clear"))},k=function(){var e=Object(n.useState)(""),t=e[0],a=e[1],i=Object(n.useState)(!1),l=i[0],c=i[1];return r.a.createElement("div",{className:"input-b"},r.a.createElement("input",{className:y()({"is-input-focus":l}),value:t,onChange:function(e){return a(e.target.value)},onFocus:function(){return c(!0)},onBlur:function(){return c(!1)},placeholder:"Input something here!"}),r.a.createElement("div",{className:y()("btn-container",{"is-input-focus":l})},b(t)))},N=function(){return r.a.createElement(u,{title:"Input"},w(),k())},x=function(){return console.log("%c Yoho ~","color: red"),console.log("%c Yoho ~","color: blue"),console.log("%c Yoho ~","color: white; background-color: black"),r.a.createElement(u,{title:"Console"},r.a.createElement("code",null,"console.log('%c Yoho ~', 'color: red')"),r.a.createElement("br",null),r.a.createElement("code",null,"console.log('%c Yoho ~', 'color: blue')"),r.a.createElement("br",null),r.a.createElement("code",null,"console.log('%c Yoho ~', 'color: white; background-color: black')"),r.a.createElement("br",null),r.a.createElement("div",null,"Open your Dev Tools to checkout! ",r.a.createElement("span",{role:"img","aria-label":"right-hand-side"},"👉")),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"On Mac: press ",r.a.createElement("code",null,"⌘ Command + ⌥ Option + i"),"."),r.a.createElement("li",null,"On Windows & Linux: press ",r.a.createElement("code",null,"Ctrl + Shift + j")," or ",r.a.createElement("code",null,"F12"),".")))},C=(a(168),["auto","default","none","pointer","wait","text","move","help","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","not-allowed","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ns-resize","ew-resize","ne-resize","nw-resize","se-resize","sw-resize","nesw-resize","nwse-resize"]),S=function(){return r.a.createElement(u,{title:"Cursor"},r.a.createElement("ul",null,C.map(function(e){return r.a.createElement("li",{key:e,style:{cursor:e}},e)})),r.a.createElement("p",null,"And the cursor can also be an image ",r.a.createElement("span",{role:"img","aria-label":"right-hand-side"},"👉"),r.a.createElement("span",{className:"image-cursor-span"}),r.a.createElement("code",null,"cursor: url(../../images/lock_black.png), auto;")))},q=(a(169),function(){return r.a.createElement(u,{title:"HoverStyle"},r.a.createElement("a",{className:"item-a hoverstyle-item",href:"/"},"hover me ~"),r.a.createElement("br",null),r.a.createElement("a",{className:"item-b hoverstyle-item",href:"/"},"hover me ~"))}),T=(a(170),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique lobortis orci ac lacinia. Fusce eu purus eget diam vehicula auctor nec eu elit. Morbi consequat facilisis orci vel malesuada. Donec ultrices molestie sollicitudin. Aliquam pharetra libero enim. Donec et suscipit massa. Donec dui odio, dignissim non sodales et, tincidunt a sapien. Phasellus elit nibh, adipiscing sed blandit vel, interdum et arcu."),z=function(){return r.a.createElement(u,{title:"Drop Cap"},r.a.createElement("p",{id:"first-letter"},"The ",r.a.createElement("b",null,"::first-letter")," selector is used to add a style to the first letter of the specified selector. ",T),r.a.createElement("p",{id:"use-span"},r.a.createElement("b",null,r.a.createElement("span",{className:"drop-cap"},"U"),"se an extra span. "),T))};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react","css","animation"]}),r.a.createElement("p",null,"A collection of css magics, including animations, etc."),r.a.createElement("p",null,"See ",r.a.createElement("span",{role:"img","aria-label":"right-hand-side"},"👉"),r.a.createElement("a",{href:"https://github.com/Cygra/css_magic",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),"."),r.a.createElement("p",null,"The whole content is ",r.a.createElement("span",{role:"img","aria-label":"down-hand-side"},"👇"),", press ",r.a.createElement("code",null,"⌘ Command + F")," or ",r.a.createElement("code",null,"Ctrl + F")," to search",r.a.createElement("span",{role:"img","aria-label":"search"},"🔍"),"."),r.a.createElement(m,null),r.a.createElement(f,null),r.a.createElement(h,null),r.a.createElement(N,null),r.a.createElement(x,null),r.a.createElement(S,null),r.a.createElement(q,null),r.a.createElement(z,null))}},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(140),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(142),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},142:function(e,t,a){var n;e.exports=(n=a(144))&&n.default||n},143:function(e){e.exports={data:{site:{siteMetadata:{title:"CSS Magic"}}}}},144:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(56),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},145:function(e,t,a){},146:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(149),s=a.n(o),u=a(141);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},147:function(e){e.exports={data:{site:{siteMetadata:{title:"CSS Magic",description:"A collection of css magics, including animations, etc.",author:"Cygra"}}}}},148:function(e,t,a){"use strict";var n=a(143),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(141),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#3f51b5",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.Link,{to:"/",style:{color:"white",textDecoration:"none",fontVariant:"small-caps"}},t))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var u=s,m=(a(145),function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});m.propTypes={children:c.a.node.isRequired};t.a=m},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){e.exports=a.p+"static/dva-41383ae1b51297055fdf5adca3a2a75e.jpg"},163:function(e,t,a){"use strict";var n=a(16),r=a(11),i=a(25),l=a(73),c=a(74),o=a(14),s=a(164),u=a(75);r(r.S+r.F*!a(76)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,m,d=i(e),p="function"==typeof this?this:Array,g=arguments.length,f=g>1?arguments[1]:void 0,E=void 0!==f,h=0,v=u(d);if(E&&(f=n(f,g>2?arguments[2]:void 0,2)),null==v||p==Array&&c(v))for(a=new p(t=o(d.length));t>h;h++)s(a,h,E?f(d[h],h):d[h]);else for(m=v.call(d),a=new p;!(r=m.next()).done;h++)s(a,h,E?l(m,f,[r.value,h],!0):r.value);return a.length=h,a}})},164:function(e,t,a){"use strict";var n=a(24),r=a(51);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===i)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-b35f0824928f39ab18c6.js.map