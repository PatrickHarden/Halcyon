webpackJsonp([12],{102:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){e.map(function(e){"dining"==e.slug&&(u=e.yoast_meta.yoast_wpseo_title,r=e.yoast_meta.yoast_wpseo_metadesc,d=e.yoast_meta.yoast_wpseo_canonical)})}Object.defineProperty(t,"__esModule",{value:!0});var u,r,d,c=l(0),o=a(c),i=l(6),m=l(11),f=l(15),s=a(f);t.default=(0,i.withRouteData)(function(e){var t=e.stores,l=e.pages,a=e.siteRoot,c=e.title,f=e.metaDescription;return o.default.createElement("section",null,n(l),o.default.createElement(i.Head,null,o.default.createElement("body",{className:"blog"}),u?o.default.createElement("title",null,u):o.default.createElement("title",null,c),r?o.default.createElement("meta",{name:"description",content:r}):o.default.createElement("meta",{name:"description",content:f}),d?o.default.createElement("link",{rel:"canonical",href:d}):o.default.createElement("link",{rel:"canonical",href:a})),o.default.createElement(m.Container,null,o.default.createElement(m.Row,null,o.default.createElement(m.Col,{xs:"12"},o.default.createElement("h1",null,"Dining"))),o.default.createElement(m.Row,null,o.default.createElement("div",{className:"card-columns"},t.map(function(e){return"restaurant"==e.acf.store_type?o.default.createElement(m.Card,{key:e.id,className:"card-"+e.id},o.default.createElement(i.Link,{to:"/dining/"+e.slug+"/"}),o.default.createElement(m.CardBody,null,o.default.createElement(i.Link,{to:"/dining/"+e.slug+"/"},o.default.createElement(m.CardTitle,null,e.title.rendered?o.default.createElement("div",null,(0,s.default)(e.title.rendered)):"")),o.default.createElement(m.CardText,null,(0,s.default)(e.acf.post_copy)),o.default.createElement(m.CardText,null,o.default.createElement("small",null,e.date)))):""})))))})}});