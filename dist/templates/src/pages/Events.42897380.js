webpackJsonp([11],{96:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){e.map(function(e){"events"==e.slug&&(d=e,u=e.yoast_meta.yoast_wpseo_title,c=e.yoast_meta.yoast_wpseo_metadesc,r=e.yoast_meta.yoast_wpseo_canonical)})}Object.defineProperty(t,"__esModule",{value:!0});var u,c,r,d,o=l(0),m=a(o),s=l(6),f=l(11),i=l(15),E=a(i);t.default=(0,s.withRouteData)(function(e){var t=e.events,l=e.pages,a=e.siteRoot,o=e.title,i=e.metaDescription;return m.default.createElement("section",null,n(l),m.default.createElement(s.Head,null,m.default.createElement("body",{className:"events "+d.acf.global_page_color}),u?m.default.createElement("title",null,u):m.default.createElement("title",null,o),c?m.default.createElement("meta",{name:"description",content:c}):m.default.createElement("meta",{name:"description",content:i}),r?m.default.createElement("link",{rel:"canonical",href:r}):m.default.createElement("link",{rel:"canonical",href:a})),m.default.createElement(f.Container,null,m.default.createElement(f.Row,null,m.default.createElement(f.Col,{xs:"12"},m.default.createElement("h1",{className:"mt-3"},"Events"))),m.default.createElement(f.Row,null,m.default.createElement("div",{className:"card-columns"},t.map(function(e){return m.default.createElement(f.Card,{key:e.id,className:"card-"+e.id},m.default.createElement(s.Link,{to:"/events/"+e.slug+"/"}),m.default.createElement(f.CardBody,null,m.default.createElement(s.Link,{to:"/events/"+e.slug+"/"},m.default.createElement(f.CardTitle,null,e.title.rendered?m.default.createElement("div",null,e.title.rendered):"")),m.default.createElement(f.CardText,null,(0,E.default)(e.acf.post_copy)),m.default.createElement(f.CardText,null,m.default.createElement("small",null,e.date))))})))))})}});