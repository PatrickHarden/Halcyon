webpackJsonp([12],{100:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){e.map(function(e){"blog"==e.slug&&(u=e.yoast_meta.yoast_wpseo_title,r=e.yoast_meta.yoast_wpseo_metadesc,c=e.yoast_meta.yoast_wpseo_canonical)})}Object.defineProperty(t,"__esModule",{value:!0});var u,r,c,d=l(0),o=a(d),m=l(6),s=l(11),f=l(15),i=a(f);t.default=(0,m.withRouteData)(function(e){var t=e.posts,l=e.siteRoot,a=e.title,d=e.metaDescription,f=e.pages;return o.default.createElement("section",null,n(f),o.default.createElement(m.Head,null,o.default.createElement("body",{className:"blog"}),u?o.default.createElement("title",null,u):o.default.createElement("title",null,a),r?o.default.createElement("meta",{name:"description",content:r}):o.default.createElement("meta",{name:"description",content:d}),c?o.default.createElement("link",{rel:"canonical",href:c}):o.default.createElement("link",{rel:"canonical",href:l})),o.default.createElement(s.Container,null,o.default.createElement(s.Row,null,o.default.createElement(s.Col,{xs:"12"},o.default.createElement("h1",null,"News & Updates"))),o.default.createElement(s.Row,null,o.default.createElement("div",{className:"card-columns"},t.map(function(e){return o.default.createElement(s.Card,{key:e.id,className:"card-"+e.id},o.default.createElement(m.Link,{to:"/blogs/"+e.slug+"/"}),o.default.createElement(s.CardBody,null,o.default.createElement(m.Link,{to:"/blogs/"+e.slug+"/"},o.default.createElement(s.CardTitle,null,e.title.rendered)),o.default.createElement(s.CardText,null,(0,i.default)(e.excerpt.rendered)),o.default.createElement(s.CardText,null,o.default.createElement("small",null,e.date))))})))))})}});