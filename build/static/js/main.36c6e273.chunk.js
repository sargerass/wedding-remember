(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},46:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var a,o,s=n(1),i=n.n(s),c=n(18),r=n.n(c),l=(n(25),n(3)),h=n(4),d=n(6),u=n(5),p=(n(26),n(20)),j=n(8),m=(n(27),n(7)),b=n.n(m);n(46);!function(t){t.Unfolding="unfolding",t.Revealing="revealing",t.Uncovering="uncovering",t.BlowUp="blow-up",t.MeepMeep="meep-meep",t.Sketch="sketch",t.Bond="bond"}(a||(a={})),function(t){t.Initial="Initial",t.InitialLoading="InitialLoading",t.Loading="Loading",t.Loaded="Loaded"}(o||(o={}));var g=n(0),v=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={photos:[]},a._setup(),a}return Object(h.a)(n,[{key:"_setup",value:function(){this._showPhoto=this._showPhoto.bind(this)}},{key:"_showPhoto",value:function(){this.props.showPhoto(this.props.photo)}},{key:"_loadImage",value:function(){var t=this,e=this.props.photo,n=new Image;n.onload=function(){e.status=o.Loaded,t.setState({})},e.status=o.Loading,n.src=e.image}},{key:"render",value:function(){var t,e=this.props.photo;if(e.status===o.InitialLoading&&this._loadImage(),e.status===o.Loaded)t=Object(g.jsx)("img",{className:"app-photo__image",src:e.image,alt:""});else{var n=Math.round(200*Math.random()+100)+"px";t=Object(g.jsx)("div",{style:{height:n},className:"app-photo__loader"})}return Object(g.jsx)("div",{className:"app-photo",onClick:this._showPhoto,children:t})}}]),n}(i.a.Component),_=(n(48),function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={init:!1},a._setup(),a}return Object(h.a)(n,[{key:"_setup",value:function(){this._closeModal=this._closeModal.bind(this),this._forceCloseModal=this._forceCloseModal.bind(this)}},{key:"_closeModal",value:function(t){"modal-background"===t.target.className&&this._forceCloseModal()}},{key:"_forceCloseModal",value:function(){this.setState({init:!0}),this.props.outModal&&this.props.outModal()}},{key:"render",value:function(){var t=this.props,e=t.show,n=t.type,a=this.state.init,o=e?n:a?"out ".concat(n):"",s=e?this.props.children:"";return Object(g.jsx)("div",{className:"app-modal ".concat(o),onClick:this._closeModal,children:Object(g.jsx)("div",{className:"modal-background",children:Object(g.jsxs)("div",{className:"modal",children:[Object(g.jsx)("svg",{className:"modal-svg",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",preserveAspectRatio:"none",children:Object(g.jsx)("rect",{x:"0",y:"0",fill:"none",width:"226",height:"162",rx:"3",ry:"3"})}),Object(g.jsxs)("div",{className:"app-modal__content",children:[s,Object(g.jsx)("button",{className:"app-modal__content__btn-close",onClick:this._forceCloseModal,children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAF9JREFUeNpiYMAB/v//LwDCDMQCqIbzUCxAigYQeA/EBkNMAyPUo/uBGKawEIgvELJl/X8SASPUKSCbYEELsuUDMcFsAPXLf6LjBovG+aSkBLI1JiD5mWyNCejyAAEGADlh5u/HTpF5AAAAAElFTkSuQmCC",alt:""})})]})]})})})}}]),n}(i.a.Component)),f=n(19),O=n.n(f);var y=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={photos:[],showModal:!1,photoCurrent:void 0},a._setup(),a}return Object(h.a)(n,[{key:"_setup",value:function(){var t=this;this._showPhoto=this._showPhoto.bind(this),document.addEventListener("scroll",(function(){return t.componentDidUpdate()}))}},{key:"componentDidMount",value:function(){this._chargePhotos()}},{key:"_chargePhotos",value:function(){var t=this;b.a.get("/word-remenbers").then((function(e){var n=e.data.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{status:o.Initial})}));t.setState({photos:n})}),(function(t){console.log("error",t)}))}},{key:"_showPhoto",value:function(t){this.setState({showModal:!0,photoCurrent:t})}},{key:"componentDidUpdate",value:function(){for(var t=this,e=document.getElementsByClassName("app-gallery__item"),n=!1,a=function(a){var s=e[a],i=function(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}(s),c=s.getAttribute("id");if(i){var r=t.state.photos.find((function(t){return t.id.toString()==c}));r&&r.status===o.Initial&&(r.status=o.InitialLoading,n=!0)}},s=0;s<e.length;s++)a(s);n&&this.setState({photos:this.state.photos})}},{key:"_getElements",value:function(t){var e=this;return t.map((function(t){return Object(g.jsx)("div",{className:"app-gallery__item",id:t.id.toString(),children:Object(g.jsx)(v,{showPhoto:e._showPhoto,photo:t})},t.id)}))}},{key:"_getContentMessage",value:function(){var t=this.state.photoCurrent;return t?Object(g.jsxs)("div",{className:"app-gallery__modal",children:[Object(g.jsx)("img",{className:"app-gallery__modal__image",src:t.image,alt:""}),Object(g.jsx)("div",{className:"app-gallery__modal__message",children:Object(g.jsx)(O.a,{className:"",startDelay:1e3,children:t.message})})]}):Object(g.jsx)("div",{})}},{key:"render",value:function(){var t=this,e=this.state,n=e.photos,o=e.showModal,s=Object(p.a)(n),i=s.splice(0,Math.floor(s.length/2)),c=this._getElements(s),r=this._getElements(i),l=this._getContentMessage();return Object(g.jsxs)("div",{className:"app-gallery",children:[Object(g.jsx)("div",{className:"app-gallery__container",children:Object(g.jsxs)("div",{className:"app-gallery__container__row",children:[Object(g.jsx)("div",{className:"app-gallery__container__column",children:c}),Object(g.jsx)("div",{className:"app-gallery__container__column",children:r})]})}),Object(g.jsx)(_,{show:o,type:a.Revealing,outModal:function(){return t.setState({showModal:!1})},children:l})]})}}]),n}(i.a.Component),x=(n(49),function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"app-home",children:[Object(g.jsx)("header",{className:"app-home__title",children:"Cristina y Guillermo"}),Object(g.jsx)("div",{className:"app-home__container",children:Object(g.jsx)(y,{})})]})}}]),n}(i.a.Component)),w=(n(50),function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"app-background",children:[Object(g.jsx)("div",{id:"stars"}),Object(g.jsx)("div",{id:"stars2"}),Object(g.jsx)("div",{id:"stars3"})]})}}]),n}(i.a.Component)),A=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t))._setup(),a}return Object(h.a)(n,[{key:"_setup",value:function(){b.a.defaults.baseURL="https://api.vamosamiboda.com/api",window.addEventListener("resize",this._updateHeight),this._updateHeight()}},{key:"_updateHeight",value:function(){document.documentElement.style.setProperty("--app-height","".concat(window.innerHeight,"px"))}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(w,{}),Object(g.jsx)(x,{})]})}}]),n}(i.a.Component),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),o(t),s(t),i(t)}))};r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root")),k()}},[[51,1,2]]]);
//# sourceMappingURL=main.36c6e273.chunk.js.map