(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(148),o=n(146);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},141:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(140),s=n.n(c);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var u=n(142),l=n.n(u);n.d(e,"PageRenderer",function(){return l.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(t,e,n){var a;t.exports=(a=n(144))&&a.default||a},143:function(t){t.exports={data:{site:{siteMetadata:{title:"CSS Magic"}}}}},144:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(54),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},145:function(t,e,n){},146:function(t,e,n){"use strict";var a=n(147),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(149),u=n.n(s),l=n(141);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},147:function(t){t.exports={data:{site:{siteMetadata:{title:"CSS Magic",description:"A collection of css magics, including animations, etc.",author:"Cygra"}}}}},148:function(t,e,n){"use strict";var a=n(143),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(141),u=function(t){var e=t.siteTitle;return i.a.createElement("div",{style:{background:"#3f51b5",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none",fontVariant:"small-caps"}},e))))};u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var l=u,d=(n(145),function(t){var e=t.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e))},data:a})});d.propTypes={children:c.a.node.isRequired};e.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-e992959036ddba69777a.js.map