(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./packages/DocumentElement/README.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),p=n("./node_modules/react/index.js"),u=n.n(p),A=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.esm.js"),d=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),g=n("./node_modules/react-side-effect/lib/index.js"),E=n.n(g);"undefined"!==typeof DocumentElementProps&&DocumentElementProps&&DocumentElementProps===Object(DocumentElementProps)&&Object.defineProperty(DocumentElementProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DocumentElementProps",filename:"packages/DocumentElement/src/DocumentElement.tsx"}});var b=function(e){return e.children||null};function B(e){var t=new Set(e.join(" ").split(" "));return Array.from(t).filter(Boolean).join(" ")}b&&b===Object(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"_DocumentElementInner",filename:"packages/DocumentElement/src/DocumentElement.tsx"}});var D=E()(function(e){return{style:Object.assign.apply(Object,[{}].concat(Object(d.a)(e.map(function(e){return e.style||{}})))),className:B(e.map(function(e){return e.className||""}))}},function(e){var t=document.documentElement;t.style.cssText="",e.style&&(Object.assign(t.style,e.style),Object.keys(e.style).filter(function(e){return e.startsWith("--")}).forEach(function(n){return t.style.setProperty(n,e.style[n])}));var n=e.className||"";n!==t.className&&(t.className=n)})(b);"undefined"!==typeof D&&D&&D===Object(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DocumentElement",filename:"packages/DocumentElement/src/DocumentElement.tsx"}}),n.d(t,"default",function(){return j});var j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).layout=null,n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=Object(a.a)(e,["components"]);return u.a.createElement(A.MDXTag,{name:"wrapper",components:t},u.a.createElement(A.MDXTag,{name:"h1",components:t,props:{id:"c4605react-document-element"}},"@c4605/react-document-element"),u.a.createElement(A.MDXTag,{name:"h2",components:t,props:{id:"introduction"}},"Introduction"),u.a.createElement(A.MDXTag,{name:"p",components:t},"Provides a declarative way to specify ",u.a.createElement(A.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"document.documentElement")," attributes in a single-page app."),u.a.createElement(A.MDXTag,{name:"p",components:t},"This component can be used on server side (but won't produce any effect)."),u.a.createElement(A.MDXTag,{name:"p",components:t},"Built with ",u.a.createElement(A.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/gaearon/react-side-effect"}},"React Side Effect"),"."),u.a.createElement(A.MDXTag,{name:"p",components:t},"Inspired by ",u.a.createElement(A.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/gaearon/react-document-title"}},"React Document Title"),"."),u.a.createElement(A.MDXTag,{name:"h2",components:t,props:{id:"features"}},"Features"),u.a.createElement(A.MDXTag,{name:"ul",components:t},u.a.createElement(A.MDXTag,{name:"li",components:t,parentName:"ul"},"Can be defined in many places throughout the application;"),u.a.createElement(A.MDXTag,{name:"li",components:t,parentName:"ul"},"Supports arbitrary levels of nesting, so you can set app-wide and page-specific\nclass name or style to ",u.a.createElement(A.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"document.documentElement"),";"),u.a.createElement(A.MDXTag,{name:"li",components:t,parentName:"ul"},"Works just as well with isomorphic apps.")),u.a.createElement(A.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),u.a.createElement(i.d,{of:b}),u.a.createElement(A.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),u.a.createElement(i.c,{__position:1,__code:"() => {\n  const [color, changeColor] = useState('blue')\n  return (\n    <DocumentElement\n      className=\"root-class-name\"\n      style={{ '--font-color': 'black' }}\n    >\n      <DocumentElement style={{ '--font-color': color }} />\n      <label>\n        Choose text color:\n        <select value={color} onChange={e => changeColor(e.target.value)}>\n          {['green', 'blue', 'yellow'].map(color => (\n            <option key={color} value={color}>\n              {color}\n            </option>\n          ))}\n        </select>\n      </label>\n      <div style={{ color: 'var(--font-color)' }}>Some text</div>\n    </DocumentElement>\n  )\n}",__scope:{props:this?this.props:n,useState:p.useState,Playground:i.c,Props:i.d,DocumentElement:D,_DocumentElementInner:b},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYBcjgGBnAILJ2HkV1jXlM0_X5O1IPYAAFKBXESFIhFCDAlmwgc7CQo1ZXaA8AC90Ig9goK1U5Qivc9L30JYAH0WMPfQLxgdiGlQZ0jkot12g9OABHISQ-LYgTOJoBjMPYQNJWQ6jTUVMFUF0FFjlOWi4MSLF2G4Jj1iiARnlQK52gABnYJMZiwdo92rGYOxYGcHIAFjc9gADY3I89YwGAgAxb1oESBz-GcQ4EQdTAcKEfgliIahKDgbyEXC6tIpoZwIFoy52AARn8zz5D0gypgAQTmCz2AjKDyBsKB0DDRCOQssQ2ujGR2BRMyYG4YA6NMrF5C3GtgE66AeuCAAyVbxkSeZKGaJbut67hDrlMBiMlAZUHadgAH4NmWsMI36q49pW1A6urKQZCrN8zBhdVjhgMAwigKYHoGob3ua5dqwsYBQe4QbgBXCwGvYABtKgoCFJZOvcNJHExgQAF1WryWD4NoR8PCgBlXyRidRz6cwo2hmsEwU9jBPYunWfIPC4DgAA5b0Jv4IQRHNXn_Dgc1UGF_huZrMbYEmqD2nNc1iotDGhXaByqYlbZLvkN7WdZ-bTZrRh2aUoSXSVibgFV9XNYlygCd1wsCcQpDNwVhM8MCKBzYtmt7GGXLuloLApm1ss_ctmDYE01h4gZSbY6Q6gw9xh3unhjYc_xoUIz_eDbNHHAU-pmAOTm-PWeAVH2kIoILqWdoqZp9vEnnTGRnaQmcCiGYI1jsHmZDyfa0oGZu3MbYYESdO3aFJCq7TxaV4EOuWan03N4Jk299NqQZ7n4O945Wv69rSRE62AgL5PyQA_nJ_WZjDh7ZVz2hQclOBARmdsBV2BMORGzmklI84xsAEA-rGBWUhrY0E5voJ-b5WbG2jJISGX0zBfhADJOSyCOK2xoDgAgcAsCAV0CBAwYEMJ_URtWewzhnBkRnhkGI8BPIWA0gQAWgJeHqU1KgmgwioqnTnmuagXEzASRQjpF8to_r5jwKVTAZ4wBgAflpE0mpzT5EwOaAGOjdKoEYfaKCpVfwAClnA6gFksM8WBeahEwAAaUXohPR7QAAC5B_LBUcgAVkkJQ80BAtrwHaHpX69o0C0AEIDFKJCxEEA4YOZhyM-aC2FldK4KJpyFGrPbApDg2GZK4RAeA7ANo2LJDAexjj1jPTDOU_hgjMDyLiVgNSKNeKsQ5spAgIkxJXEkfpaRjpZE0CtkMm27FMlwEGpZdqrSuovVqv1fOo9Nm9QAD4HPYKgUIC4Qh2H4ekvSJ0pnnXYEecu9hclCyPHAUeLzhb3FGqiAoqNCb9WyYWVAhlJb81ebBUcrVnRjGcKOD5UsIVwH_JQNAj45QchwHlKALx0WvgwfTAgjN2CNQEJkRIOAqIIvBcLOFBACUWEpdAJJEZrzCHJO-FcKK0WXVpq9G5Uj7ldHQKEBEyzLCUDglkCefZyIABlbAECuGkkZyz_meQ5FcMUABHUIEBhWMBcW4zxi95n8RQaq8i7c2l0HaGIBGrTqCGUeWkdAM087sB1B4dQD8cBSwgCkVA7UlDsBwGG_sM84AKpREPWYEYZhgxmFiqJsB2BHKYvIK-jqQUx0-W81qEa7jRoILGkeCb85JrBXk6B6b2h8vWF0IlAhzBAosPbK4LrsjuuETkxFwsO0ZDxnm-A1Lq3wA5MIt6b0zC3LOsyPwGBYBStoNnGcMAdSoGeTUmgMrC3fLFE21AlhomMCidtZowrRUwHFZK8mMAxAaqstWFGUEDyKQtWQqYSFLJvq5v6asv7FnHnth8fmlhYGtTresCAzR43kWTeNQFK4vU-slH6_mAag2AY_exBDsBSTwftgyz13rfUL0SO8vdeGa50yZcDSMux87bGTa4YUcAADquJHzq3xbRyKAgzwSjwBGRjg1sOkNwyBmCGSBxcMSCJgjkbqMAEJUbbABQS6dz6nVTGdNHZ5fboGWSo1WiFabjlQerDBtqemCAGZpdA5TR1xPpI-MOpDLMXMjLc4Zj1tn7NjvWFO3p_SdPsBVZ-1qaiNEwC0WYggMrL1ivIhK5dMBhELvQEuu9q60gbq3XI98EZBnmok_oMZGQ3wEPytsVwaR_xwGoDQ4C-gGBAv4LLI8_Arj8B-MWaoGQTFYG9I0zK6x-CsAyPkag3X2D8EcjgBbjkxvVn4OUcg_RZ7nVm_wRqo0MKpp_I0_6ZJKA9xyHkAo9MzSu3KH8UsK2LD8CiGgHbKhwwaDgI9ubIBMDzHDPpGpX2kBPtZqLTUb2AB6lVgo4AAByLe-09wQBijEwBMdoh-UPKo4BxyEpHP2AlBNCeE6WZ74BQ4WwAJlxwT8HN2rTY9hwj5bIAgvyIIf17wHxqCQBSA1pr2haGtbAojEAtAfRZG67100tBzRKPNLMGY_B5AKGNkAA"},function(){var e=Object(p.useState)("blue"),t=Object(o.a)(e,2),n=t[0],a=t[1];return u.a.createElement(D,{className:"root-class-name",style:{"--font-color":"black"}},u.a.createElement(D,{style:{"--font-color":n}}),u.a.createElement("label",null,"Choose text color:",u.a.createElement("select",{value:n,onChange:function(e){return a(e.target.value)}},["green","blue","yellow"].map(function(e){return u.a.createElement("option",{key:e,value:e},e)}))),u.a.createElement("div",{style:{color:"var(--font-color)"}},"Some text"))}))}}]),t}(u.a.Component);"undefined"!==typeof j&&j&&j===Object(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"packages/DocumentElement/README.mdx"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"packages/DocumentElement/README.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=document-element-readme.ccc04e16b46a2b5abb59.js.map