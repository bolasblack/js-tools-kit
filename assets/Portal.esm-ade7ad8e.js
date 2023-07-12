import{r as c}from"./index-8db94870.js";import{r as u}from"./index-8ce4a492.js";import{s as h}from"./index-67a74965.js";var m=class extends c.PureComponent{constructor(){super(...arguments),this._portalEl=document.createElement("div"),this._onClickDocument=t=>{var e,s;this.props.visible&&((s=(e=this.props).onVisibleChange)==null||s.call(e,!1,{event:t}))}}componentDidMount(){var t;((t=this.props.baseElement)!=null?t:document.documentElement).addEventListener("click",this._onClickDocument),this._assignRef(this.props.portalContainerRef,this._portalEl),this._updatePortalEl(this._portalEl,null,this.props)}componentDidUpdate(t){this._updatePortalEl(this._portalEl,t,this.props)}componentWillUnmount(){var t;((t=this.props.baseElement)!=null?t:document.documentElement).removeEventListener("click",this._onClickDocument),this._updatePortalEl(this._portalEl,this.props,null),this._assignRef(this.props.portalContainerRef,null)}render(){return this._getParent(this.props)?u.createPortal(this.props.children,this._portalEl):c.createElement("div",{className:this.props.className,style:{...this._getDisplayStyle(this.props.visible),...this.props.style}},this.props.children)}_updatePortalEl(t,e,s){var a,r,o;if((!e||!s||e.parent!==s.parent)&&(this._operateParent(e,i=>i==null?void 0:i.removeChild(t)),this._operateParent(s,i=>i==null?void 0:i.appendChild(t))),s){(!e||e.className!==s.className)&&(t.className=((a=s.className)==null?void 0:a.trim())||"");const i=(r=e&&e.style)!=null?r:{},l=(o=s.style)!=null?o:{};h(i,l)?s.visible?t.style.removeProperty("display"):t.style.display="none":(t.style.cssText="",Object.assign(t.style,this._getDisplayStyle(s.visible),l),Object.keys(l).filter(n=>n.startsWith("--")).forEach(n=>{t.style.setProperty(n,l[n])}))}}_assignRef(t,e){t!=null&&(typeof t=="function"?t(e):t.current=e)}_getDisplayStyle(t){return t?{}:{display:"none"}}_getParent(t){return t.parent===void 0?document.body:typeof t.parent=="function"?t.parent():t.parent}_operateParent(t,e){t&&e(this._getParent(t))}};m.displayName="Portal";export{m as P};
//# sourceMappingURL=Portal.esm-ade7ad8e.js.map
