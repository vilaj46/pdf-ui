(this["webpackJsonppdf-ui"]=this["webpackJsonppdf-ui"]||[]).push([[0],{62:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=(n(35),n(16)),i=n.n(c),o=n(13),l=n(7),s=n(29),u=n(30),d=n(3),b=n(4),p=n(0);var f=Object(l.b)((function(e){return{file:e.file,topNavigation:e.topNavigation}}))((function(e){var t=e.file,n=e.topNavigation.openDropdown,a=t.name,r=void 0===a?"":a,c=t.blob,i=""===n?"auto":"-1";return(Object.keys(t)>0||r.length>0)&&Object(p.jsx)("iframe",{src:c,title:r,frameBorder:"0",style:{zIndex:i,overflow:"hidden",height:"98vh",width:"60%",position:"absolute",left:"50%",transform:"translateX(-50%)"}})})),j=n(5),h=n.n(j),v=n(2),O=n(8),g="ENABLED_APP",x="CLOSED_FILE",m="DISABLED_APP",y="CHANGED_BLOB",w="UPLOADED_FILE",N="CHANGED_METADATA",P="CHANGED_FILE_PATH",k="CLOSED_DROPDOWN",D="EXPANDED_DROPDOWN",C="CLOSED_MODAL",A="EXPANDED_MODAL",I="CLOSED_MODAL_EXPANSION",E="OPENED_MODAL_EXPANSION",F=n(11),M=n.n(F);function S(){return(S=Object(O.a)(h.a.mark((function e(t){var n,a,r,c,i,o,l,s,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),a={method:"POST",url:"upload",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*"},data:n,responseType:"blob"},e.prev=3,e.next=6,M()(a);case 6:if(200!==(r=e.sent).status){e.next=15;break}return c=r.data,i=r.headers,o=i["x-pagecount"],l=i["x-filename"],s=i["x-filepath"],u=i["x-metadata"],e.abrupt("return",Object(v.a)(Object(v.a)({},c),{},{pageCount:o,fileName:l,filePath:s,metadata:u}));case 15:e.next=20;break;case 17:return e.prev=17,e.t0=e.catch(3),e.abrupt("return");case 20:case"end":return e.stop()}}),e,null,[[3,17]])})))).apply(this,arguments)}var X=function(e){return S.apply(this,arguments)};function L(){return(L=Object(O.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"PUT",url:"upload",headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,M()(t);case 4:if(200!==(n=e.sent).status){e.next=8;break}return a=n.data,e.abrupt("return",a);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}var H=function(){return L.apply(this,arguments)};var R={closeFile:function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",H().then((function(){t({payload:{},type:x})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},disableApp:function(){return function(e){return e({type:m})}},enableApp:function(){return function(e){return e({type:g})}},changeBlob:function(e){return function(t){return t({payload:e,type:y})}},uploadFile:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",X(e.file).then((function(t){void 0!==t&&n({payload:Object(v.a)(Object(v.a)(Object(v.a)({},e),t),{},{loading:!1}),type:w})})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeFilePath:function(e){return function(t){return t({type:P,payload:e})}},changeMetadata:function(e){return function(t){return t({type:N,payload:e})}}};var T,B,V={expandModal:function(e){return function(t){return t({payload:e,type:A})}},closeModal:function(){return function(e){return e({type:C})}}},_={fileActions:R,topNavigation:{expandDropdown:function(e){return function(t){return t({payload:e,type:D})}},closeDropdown:function(){return function(e){return e({type:k})}}},modalsActions:V},U=b.a.div(T||(T=Object(d.a)(["\n  left: 0;\n  right: 0;\n  width: 60vw;\n  z-index: 10;\n  margin: 0 auto;\n  position: absolute;\n"]))),z=b.a.div(B||(B=Object(d.a)(["\n  width: 100%;\n"])));var G=_.modalsActions.closeModal,J=Object(l.b)((function(e){return{modals:e.modals}}),{closeModal:G})((function(e){var t=e.closeModal,n=e.modals.openModal,a=e.Body;return Object(p.jsx)(U,{children:Object(p.jsx)(z,{children:Object(p.jsxs)("div",{className:"window",children:[Object(p.jsxs)("div",{className:"title-bar",children:[Object(p.jsx)("div",{className:"title-bar-text",children:n}),Object(p.jsx)("div",{className:"title-bar-controls",children:Object(p.jsx)("button",{"aria-label":"Close",onClick:function(){return t()}})})]}),Object(p.jsx)("div",{className:"window-body",children:Object(p.jsx)(a,{})})]})})})})),q=n(9),W=n(6),K=90;function Y(e,t){var n=e.text,a=t.length,r=n.lastIndexOf(t);if(r===n.length-a){var c=n.slice(0,r);return{text:c,maxChars:c.length}}return e}function Q(e,t){var n=e.slice(0,t).lastIndexOf(" "),a=e.slice(0,n);return{text:a,maxChars:a.length}}var Z=function(e,t){var n=e.lines,a="";if(n.forEach((function(e){a=a+" "+e})),t)return Object(v.a)(Object(v.a)({},e),{},{lines:[a.trim()]});var r=function(e){for(var t=e,n=K,a=[],r=Math.ceil(e.length/K),c=0;c<r;c++)if(t.length<=K)a.push(t.trim());else{var i=Q(t,n);i=Y(i,"dated"),a.push(i.text.trim()),n=i.maxChars,t=t.slice(n,t.length)}return a}(a);return Object(v.a)(Object(v.a)({},e),{},{lines:r})};var $=function(e,t){var n=-1;return t.forEach((function(t,a){if(t.idNumber===e)return n=a,a})),n};var ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-1",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-1",r="-1"!==n?n:String(e.length+1),c="-1"!==a?a:String(e.length+1);return{startPage:r,endPage:c,index:e.length,idNumber:Math.ceil(1e6*Math.random()),lines:[t]}},te="CODE<<ELLIPSE>>CODE";function ne(e){return e.replace(/\n+/gi,"")}function ae(e){return e.replace(/\s+/gi,"")}var re,ce=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI","XXII","XXIII","XXIV","XXV","XXVI","XXVII","XXVIII","XXIX","XXX"],ie=function(e,t){var n=function(e){var t=/Table of Contents/gi;return e.replace(t,"")}(e);n=function(e){var t=e;return ce.forEach((function(e){var n=(e=e.toLowerCase()).length,a=new RegExp(e,"g"),r=t.search(a);if(-1!==r){var c=t.slice(r-1,r+n),i=(c=ne(c)).search(e);if(0===i)if(""===c.slice(i+n)){var o=t.slice(0,r),l=t.slice(r+n,t.length);t=o+l}}})),t}(n);var a=function(e){var t=new RegExp("".concat(te,"\\s+\\d+"),"gi"),n=e.split(t),a=[];n.forEach((function(e){var t=e.trim();t.length>0&&a.push(t)}));var r=new RegExp("".concat(te,"\\s+?"),"gi"),c=e.split(r),i=[];return c.forEach((function(e,t){if(0!==t){var n=e.trim();if(Number(n))i.push(n);else{var a=n.indexOf(" "),r=n.slice(0,a);if(Number(r))i.push(r);else{var c=function(e){var t=/\D+/,n=e.split(t)[0];if(Number(n))return n;return-1}(r);-1!==c&&i.push(c)}}}})),{text:a,pageNumbers:i}}(n=function(e){var t=/\.{2,}/gi;return e.replace(t,te)}(n=ne(n)));return function(e,t){var n=!0,a=e.pageNumbers,r=e.text;if(a.length!==r.length)return!1;var c=t;return c=function(e){var t=/\.{2,}/gi;return e.replace(t,"")}(c=ae(c=ne(c))),r.forEach((function(e,t){var r=a[t],i=ae(e);i+=r,-1!==c.indexOf(i)||(n=!1)})),n}(a,e)?function(e,t){var n=e.text,a=e.pageNumbers;return n.map((function(e,n){var r=a[n];return ee(t,e,r,r)}))}(a,t):t},oe=b.a.textarea(re||(re=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  resize: vertical;\n  border: 1px solid lightgray;\n"])));var le=function(e){var t=e.tocText,n=e.changeTocString,a=e.addTocHeaders;return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("label",{htmlFor:"tocString",children:"Table of Contents String:"}),Object(p.jsx)(oe,{htmlFor:"tocString",value:t,onChange:function(e){return n(e)}}),Object(p.jsx)("button",{onClick:a,children:"Ok"})]})};var se,ue,de,be=function(e,t){if(e.length!==t.length)return!1;var n=!0;return e.forEach((function(e,a){e!==t[a]&&(n=!1)})),n},pe=b.a.input(se||(se=Object(d.a)(["\n  display: block;\n  border: 1px solid lightgray !important;\n  width: 100%;\n  text-align: center;\n"]))),fe=b.a.div(ue||(ue=Object(d.a)(["\n  display: flex;\n  position: relative;\n"]))),je=b.a.button(de||(de=Object(d.a)(["\n  position: absolute;\n  right: -110px;\n"])));var he,ve,Oe=function(e){var t=e.line,n=e.index,a=e.updateLines,c=e.addLine,i=e.removeLine,o=r.a.useState(!1),l=Object(W.a)(o,2),s=l[0],u=l[1],d=Math.floor(1e6*Math.random());return Object(p.jsxs)(fe,{children:[Object(p.jsx)(pe,{type:"text",value:t,index:n,onChange:function(e){return function(e,t){var n=e.target.value;a(t,n)}(e,n)},onKeyDown:function(e){var t=e.keyCode,a=e.target.selectionStart;13===t&&c(a,n)},onMouseEnter:function(){document.getElementById(d).focus()},onFocus:function(){u(!0)},onBlur:function(e){return function(e){u(!1);try{"Remove Line"===e.relatedTarget.title&&i(n)}catch(t){}}(e)},id:d},n),s&&Object(p.jsx)(je,{type:"text",title:"Remove Line",children:"X"})]})},ge=b.a.div(he||(he=Object(d.a)(["\n  display: flex;\n"]))),xe=b.a.div(ve||(ve=Object(d.a)(["\n  border: 1px dashed black;\n  margin-bottom: 10px;\n  padding: 10px;\n\n  &:hover {\n    border: 2px dashed yellow;\n  }\n"])));var me=function(e){var t=e.header,n=e.removing,a=e.inserting,c=e.removeHeader,i=e.updateHeader,o=e.addForDeletion,l=e.addForInsertion,s=e.removeForDeletion,u=e.markedForDeletion,d=e.markedForInsertion,b=e.removeForInsertion,f=t.lines,j=t.idNumber,h=u.includes(j),O=d.includes(j),g=r.a.useState(f),x=Object(W.a)(g,2),m=x[0],y=x[1],w=r.a.useState(h),N=Object(W.a)(w,2),P=N[0],k=N[1],D=r.a.useState(O),C=Object(W.a)(D,2),A=C[0],I=C[1];P!==h&&k(h),A!==O&&I(O),r.a.useEffect((function(){!1===be(f,m)&&y(f)}),[y,f,m]);var E=function(e,n){var a=Object(q.a)(m);a[e]=n,y(a);var r=Object(v.a)(Object(v.a)({},t),{},{lines:a});i(r)},F=function(e){var n=e.target,a=n.name,r=n.value,c=Object(v.a)({},t);c[a]=r,i(c)},M=function(e,n){var a=m[n],r=Object(q.a)(m);if(0===e)r.splice(n,0,"");else if(a.length===e)r.splice(n+1,0,"");else{var c=a.slice(0,e).trim(),o=a.slice(e,a.length).trim();r[n]=c,r.splice(n+1,0,o)}y(r);var l=Object(v.a)(Object(v.a)({},t),{},{lines:r});i(l)},S=function(e){var n=Object(q.a)(f);if(n.splice(e,1),y(n),0===n.length)c(t);else{var a=Object(v.a)(Object(v.a)({},t),{},{lines:n});i(a)}},X=function(){k(!P),P?s(j):o(j)},L=function(){I(!A),A?b(j):l(j)};return Object(p.jsxs)(xe,{children:[Object(p.jsxs)(ge,{children:[n&&Object(p.jsx)("input",{type:"checkbox",checked:P,onChange:X}),n&&Object(p.jsx)("label",{onClick:X,children:"Delete"}),a&&Object(p.jsx)("input",{type:"checkbox",checked:A,onChange:L}),a&&Object(p.jsx)("label",{onClick:L,children:"Insertion"}),Object(p.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(p.jsx)("label",{children:"Start Page:"}),Object(p.jsx)("input",{type:"text",name:"startPage",value:t.startPage,onChange:function(e){return F(e)}}),Object(p.jsx)("label",{children:"End Page:"}),Object(p.jsx)("input",{type:"text",name:"endPage",value:t.endPage,onChange:function(e){return F(e)}})]})]}),Object(p.jsx)("div",{className:"header",children:m.map((function(e,t){return Object(p.jsx)(Oe,{type:"text",line:e,index:t,addLine:M,removeLine:S,updateLines:E},t)}))})]})};var ye,we,Ne,Pe=function(e){var t=e.setTab,n=e.tab;return Object(p.jsxs)("menu",{role:"tablist","aria-label":"Sample Tabs",children:[Object(p.jsx)("button",{role:"tab","aria-selected":"tab-Main"===n&&"true","aria-controls":"tab-Main",onClick:function(){return t("tab-Main")},children:"Heads"}),Object(p.jsx)("button",{role:"tab","aria-selected":"tab-Toc"===n&&"true","aria-controls":"tab-Toc",onClick:function(){return t("tab-Toc")},children:"TOC"})]})},ke=b.a.div(ye||(ye=Object(d.a)(["\n  position: fixed;\n  top: 100px;\n  left: 10px;\n  color: #ffffff;\n\n  @media screen and (max-width: 855px) {\n    left: 0px;\n  }\n"]))),De=b.a.div(we||(we=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Ce=b.a.div(Ne||(Ne=Object(d.a)(["\n  display: flex;\n"])));function Ae(e){var t=e.toggleInserting,n=e.inserting,a=e.insertHeadersIntoPositions;return n?Object(p.jsxs)(Ce,{children:[Object(p.jsx)("button",{type:"text",onClick:a,children:"\u2713"}),Object(p.jsx)("button",{type:"text",title:"Close Removing",onClick:t,children:"X"})]}):Object(p.jsx)("button",{type:"text",onClick:t,children:"Insert Headers"})}var Ie,Ee,Fe,Me=function(e){var t=e.addHeader,n=e.inserting,a=e.spaceHeaders,r=e.applyHeaders,c=e.addPageRanges,i=e.toggleInserting,o=e.insertHeadersIntoPositions;return Object(p.jsx)(ke,{children:Object(p.jsxs)("div",{className:"window",children:[Object(p.jsx)("div",{className:"title-bar",children:Object(p.jsx)("div",{className:"title-bar-text",children:"Positive Controls"})}),Object(p.jsxs)(De,{className:"window-body",children:[Object(p.jsx)("button",{type:"text",onClick:t,children:"Add Header"}),Object(p.jsx)(Ae,{inserting:n,toggleInserting:i,insertHeadersIntoPositions:o}),Object(p.jsx)("button",{type:"text",onClick:a,children:"Space Headers"}),Object(p.jsx)("button",{type:"text",onClick:c,children:"Add Page Ranges"}),Object(p.jsx)("hr",{}),Object(p.jsx)("button",{type:"text",onClick:r,children:"Apply Headers"})]})]})})},Se=b.a.div(Ie||(Ie=Object(d.a)(["\n  position: fixed;\n  top: 300px;\n  left: 10px;\n  color: #ffffff;\n\n  @media screen and (max-width: 855px) {\n    left: 0px;\n  }\n"]))),Xe=b.a.div(Ee||(Ee=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Le=b.a.div(Fe||(Fe=Object(d.a)(["\n  display: flex;\n"])));function He(e){var t=e.toggleRemoving,n=e.removing,a=e.removeMarkedForDeletion;return n?Object(p.jsxs)(Le,{children:[Object(p.jsx)("button",{type:"text",onClick:a,children:"\u2713"}),Object(p.jsx)("button",{type:"text",title:"Close Removing",onClick:t,children:"X"})]}):Object(p.jsx)("button",{type:"text",onClick:t,children:"Remove Headers"})}var Re=function(e){var t=e.removing,n=e.removeSpace,a=e.clearHeaders,r=e.toggleRemoving,c=e.removeBlankLines,i=e.removePageRanges,o=e.removeBlankHeaders,l=e.removeMarkedForDeletion;return Object(p.jsx)(Se,{children:Object(p.jsxs)("div",{className:"window",children:[Object(p.jsx)("div",{className:"title-bar",children:Object(p.jsx)("div",{className:"title-bar-text",children:"Negative Controls"})}),Object(p.jsxs)(Xe,{className:"window-body",children:[Object(p.jsx)(He,{removing:t,toggleRemoving:r,removeMarkedForDeletion:l}),Object(p.jsx)("button",{type:"text",onClick:n,children:"Remove Auto Space"}),Object(p.jsx)("button",{type:"text",onClick:o,children:"Remove Blank Headers"}),Object(p.jsx)("button",{type:"text",onClick:i,children:"Remove Page Ranges"}),Object(p.jsx)("button",{type:"text",onClick:c,children:"Remove Blank Lines"}),Object(p.jsx)("hr",{}),Object(p.jsx)("button",{type:"text",onClick:a,children:"Clear Headers"})]})]})})};function Te(){return(Te=Object(O.a)(h.a.mark((function e(t,n){var a,r,c,i,o,l,s,u,d,b,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.fileName,r=n.filePath,c=n.metadata,i=t.filter((function(e){return!!Be(e.startPage,e.endPage)})),o=new FormData,l={},i.forEach((function(e,t){l["".concat(t)]=e})),o.append("headers",JSON.stringify(l)),o.append("fileName",a),o.append("filePath",r),o.append("metadata",c),e.prev=9,e.next=12,M.a.post("headers/apply",o,{responseType:"blob"});case 12:if(s=e.sent,u=s.headers,d=u["x-filepath"],b=u["x-metadata"],200!==s.status){e.next=19;break}return p=s.data,e.abrupt("return",{newBlob:p,newFilePath:d,newMetadata:b});case 19:e.next=24;break;case 21:return e.prev=21,e.t0=e.catch(9),e.abrupt("return");case 24:case"end":return e.stop()}}),e,null,[[9,21]])})))).apply(this,arguments)}function Be(e,t){try{return Number(e)<=Number(t)}catch(n){return!1}}var Ve,_e=function(e,t){return Te.apply(this,arguments)},Ue=b.a.section(Ve||(Ve=Object(d.a)(["\n  position: relative;\n"])));var ze=R.changeBlob,Ge=R.enableApp,Je=R.disableApp,qe=R.changeFilePath,We=R.changeMetadata,Ke=V.closeModal,Ye=Object(l.b)((function(e){var t=e.file;return Object(v.a)({},t)}),{changeBlob:ze,closeModal:Ke,enableApp:Ge,disableApp:Je,changeFilePath:qe,changeMetadata:We})((function(e){var t=e.changeBlob,n=e.closeModal,a=e.disableApp,c=e.enableApp,i=e.changeFilePath,o=e.changeMetadata,l=e.pageCount,s=e.fileName,u=e.filePath,d=e.metadata,b=r.a.useState([]),f=Object(W.a)(b,2),j=f[0],g=f[1],x=r.a.useState("tab-Main"),m=Object(W.a)(x,2),y=m[0],w=m[1],N=r.a.useState(""),P=Object(W.a)(N,2),k=P[0],D=P[1],C=r.a.useState(!1),A=Object(W.a)(C,2),I=A[0],E=A[1],F=r.a.useState(!1),M=Object(W.a)(F,2),S=M[0],X=M[1],L=r.a.useState([]),H=Object(W.a)(L,2),R=H[0],T=H[1],B=r.a.useState([]),V=Object(W.a)(B,2),_=V[0],U=V[1],z=function(e){var t=e.index,n=e.idNumber;if(j[t].idNumber===n){var a=Object(q.a)(j);a.splice(t,1),g(a)}else{var r=$(n,j);if(-1!==r){var c=Object(q.a)(j);c.splice(r,1),g(c)}}},G=function(e){var t=e.index,n=e.idNumber;if(j[t].idNumber===n){var a=Object(q.a)(j);a[t]=e,g(a)}else{var r=$(n,j);if(-1!==r){var c=Object(q.a)(j);c[r]=e,g(c)}}},J=function(e){var t=Object(q.a)(R);t.push(e),T(t)},K=function(e){var t=Object(q.a)(_);t.push(e),U(t)},Y=function(e){var t=[];R.forEach((function(n){e!==n&&t.push(n)})),T(t)},Q=function(e){var t=[];_.forEach((function(n){e!==n&&t.push(n)})),U(t)},te=function(){var e=Object(O.a)(h.a.mark((function e(){var r,l,b,p,f;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.next=3,_e(j,{fileName:s,filePath:u,metadata:d});case 3:r=e.sent,l=r.newBlob,b=r.newFilePath,p=r.newMetadata,f=URL.createObjectURL(l),t(f),n(),c(),i(b),o(p);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(e){var t=-1;return e.forEach((function(e,n){e.trim().length>0&&(t=n+1)})),t},ae=function(e){try{var t=j[e+1].endPage;return Number(t)-1}catch(n){return Number(l)}};return Object(p.jsxs)(Ue,{children:[Object(p.jsx)(Me,{inserting:S,addHeader:function(){var e=ee(j),t=j.concat([e]);g(t);var n=Array.from(document.querySelectorAll(".header"));try{n[n.length-1].scrollIntoView()}catch(a){}},applyHeaders:te,spaceHeaders:function(){var e=j.map((function(e){return Z(e,!1)}));g(e)},addPageRanges:function(){var e=j.map((function(e,t){var n=e.lines,a=e.startPage,r=ae(t),c=Object(q.a)(n);if(r-a>0){var i="[pages ".concat(a,"-").concat(r,"]");if(1===n.length)c.push(i);else{var o=ne(n),l=n[o-1].trim()+" "+i;n[o-2].trim().length>=l.length?c[o-1]=l:c.splice(o,0,i)}}return Object(v.a)(Object(v.a)({},e),{},{lines:c})}));g(e)},toggleInserting:function(){X(!S),!S&&_.length>0&&U([])},insertHeadersIntoPositions:function(){var e=Object(q.a)(j);_.forEach((function(t){var n=$(t,e),a=ee(e,"",-1,-1);e.splice(n,0,a)})),g(e),U([]),X(!1)}}),Object(p.jsx)(Re,{removing:I,removeSpace:function(){var e=j.map((function(e){return Z(e,!0)}));g(e)},clearHeaders:function(){g([])},toggleRemoving:function(){E(!I),!I&&R.length>0&&T([])},removePageRanges:function(){var e=j.map((function(e){var t=/\[pages\s+\d+\s+to\s+\d+\]/gi,n=e.lines,a=[];return n.forEach((function(e){if(-1!==e.search(t)){var n=e.replace(t,"");n.trim().length>0&&a.push(n)}else a.push(e)})),Object(v.a)(Object(v.a)({},e),{},{lines:a})}));g(e)},removeBlankLines:function(){var e=j.map((function(e){var t=e.lines,n=[];return t.forEach((function(e){var t=e.trim();e.length>0&&n.push(t)})),Object(v.a)(Object(v.a)({},e),{},{lines:n})}));g(e)},removeBlankHeaders:function(){var e=j.filter((function(e){var t=e.lines,n="";return t.forEach((function(e){n+=e})),0!==n.trim().length}));g(e)},removeMarkedForDeletion:function(){var e=[];j.forEach((function(t){var n=t.idNumber;R.includes(n)||e.push(t)})),g(e),T([]),E(!1)}}),Object(p.jsxs)("section",{className:"tabs",children:[Object(p.jsx)(Pe,{tab:y,setTab:w}),"tab-Main"===y&&Object(p.jsx)("article",{role:"tabpanel",children:j.map((function(e){var t=e.idNumber;return Object(p.jsx)(me,{header:e,removing:I,inserting:S,removeHeader:z,updateHeader:G,addForDeletion:J,addForInsertion:K,removeForDeletion:Y,markedForDeletion:R,markedForInsertion:_,removeForInsertion:Q},t)}))}),"tab-Toc"===y&&Object(p.jsx)("article",{role:"tabpanel",id:"tab-Toc",children:Object(p.jsx)(le,{tocText:k,addTocHeaders:function(){var e=ie(k,j),t=Object(q.a)(j).concat(e);g(t),w("tab-Main"),D("")},changeTocString:function(e){var t=e.target.value;D(t)}})})]})]})}));function Qe(){return(Qe=Object(O.a)(h.a.mark((function e(t){var n,a,r,c,i,o,l,s,u,d,b,p,f,j;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.startPage,a=t.endPage,r=t.text,c=t.option,i=t.fileName,o=t.filePath,l=t.metadata,"range"!==c){e.next=5;break}if(Ze(n,a)){e.next=5;break}return e.abrupt("return",!1);case 5:return s={startPage:n,endPage:a,text:r,range:c},(u=new FormData).append("pageNumbers",JSON.stringify(s)),u.append("fileName",i),u.append("filePath",o),u.append("metadata",l),e.prev=11,e.next=14,M.a.post("pageNumbers/apply",u,{responseType:"blob"});case 14:if(d=e.sent,b=d.headers,p=b["x-filepath"],f=b["x-metadata"],200!==d.status){e.next=21;break}return j=d.data,e.abrupt("return",{newBlob:j,newFilePath:p,newMetadata:f});case 21:e.next=26;break;case 23:return e.prev=23,e.t0=e.catch(11),e.abrupt("return");case 26:return e.abrupt("return",{});case 27:case"end":return e.stop()}}),e,null,[[11,23]])})))).apply(this,arguments)}function Ze(e,t){try{return Number(e)<=Number(t)}catch(n){return!1}}var $e,et,tt,nt,at,rt,ct,it,ot,lt=function(e){return Qe.apply(this,arguments)},st=b.a.div($e||($e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ut=b.a.div(et||(et=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  margin: 0 auto;\n  text-align: center;\n  margin: 20px 0;\n  padding: 10px 0;\n"]))),dt=b.a.input(tt||(tt=Object(d.a)(["\n  text-align: center;\n"]))),bt=b.a.label(nt||(nt=Object(d.a)(["\n  text-align: center;\n  margin: 0 auto;\n"]))),pt=b.a.div(at||(at=Object(d.a)(["\n  display: flex;\n  justify-content: space-around;\n"]))),ft=b.a.div(rt||(rt=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),jt=b.a.div(ct||(ct=Object(d.a)(["\n  display: flex;\n  margin: 10px 0;\n  align-items: center;\n"]))),ht=b.a.div(it||(it=Object(d.a)(["\n  margin: 0 auto;\n  display: flex;\n"]))),vt=b.a.div(ot||(ot=Object(d.a)(["\n  margin: 0 5px;\n"])));function Ot(e){var t=e.startPage,n=e.endPage,a=e.setStartPage,r=e.setEndPage;return Object(p.jsxs)(ht,{children:[Object(p.jsxs)(vt,{children:[Object(p.jsx)("label",{htmlFor:"startPage",children:"Start Page:"}),Object(p.jsx)("input",{type:"number",min:"1",name:"startPage",value:t,onChange:function(e){return a(e.target.value)}})]}),Object(p.jsxs)(vt,{children:[Object(p.jsx)("label",{htmlFor:"startPage",children:"End Page:"}),Object(p.jsx)("input",{type:"number",min:"1",name:"endPage",value:n,onChange:function(e){return r(e.target.value)}})]})]})}var gt=R.changeBlob,xt=R.enableApp,mt=R.disableApp,yt=R.changeFilePath,wt=R.changeMetadata,Nt=V.closeModal,Pt=Object(l.b)((function(e){var t=e.file;return Object(v.a)({},t)}),{closeModal:Nt,changeBlob:gt,enableApp:xt,disableApp:mt,changeFilePath:yt,changeMetadata:wt})((function(e){var t=e.closeModal,n=e.changeBlob,a=e.enableApp,c=e.disableApp,i=e.changeFilePath,o=e.changeMetadata,l=e.fileName,s=e.filePath,u=e.metadata,d=r.a.useState("<<1>>"),b=Object(W.a)(d,2),f=b[0],j=b[1],v=r.a.useState("<<1>>"),g=Object(W.a)(v,2),x=g[0],m=g[1],y=r.a.useState(1),w=Object(W.a)(y,2),N=w[0],P=w[1],k=r.a.useState(1),D=Object(W.a)(k,2),C=D[0],A=D[1],I=r.a.useState(1),E=Object(W.a)(I,2),F=E[0],M=E[1],S=r.a.useState(""),X=Object(W.a)(S,2),L=X[0],H=X[1],R=function(e){var t=e.target,n=t.value,a=t.name;"centerPageNumber"===a?(j(n),T(n)):"startPage"===a?A(n):"startingPage"===a&&V(n)},T=function(e){if(-1!==e.search(/<<\d+>>/g)){var t=e.replace(/<<|>>/g,"");m(t)}else m(e)},B=function(e){var t=e.target.id;H(t)},V=function(e){P(e);var t=/<<\d+>>/g;if(-1!==f.search(t)){var n=f.replace(t,"<<"+e+">>");R({target:{name:"centerPageNumber",value:n}})}},_=function(){var e=Object(O.a)(h.a.mark((function e(){var r,d,b,p,j,v;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(),r={text:f,outcome:x,startPage:C,endPage:F,option:L,startingPage:N,fileName:l,filePath:s,metadata:u},e.next=4,lt(r);case 4:d=e.sent,b=d.newBlob,p=d.newFilePath,j=d.newMetadata,v=URL.createObjectURL(b),n(v),t(),a(),i(p),o(j);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("article",{role:"tabpanel",children:[Object(p.jsxs)(pt,{children:[Object(p.jsxs)(st,{children:[Object(p.jsx)("label",{htmlFor:"centerPageNumber",children:"Center Page Number:"}),Object(p.jsx)(dt,{type:"text",name:"centerPageNumber",value:f,onChange:R})]}),Object(p.jsxs)(st,{children:[Object(p.jsx)("label",{htmlFor:"centerPageNumber",children:"Starting Page Number:"}),Object(p.jsx)(dt,{type:"number",name:"startingPage",min:"1",value:N,onChange:R})]})]}),Object(p.jsxs)(ut,{children:[Object(p.jsx)(bt,{htmlFor:"outcome",children:"Outcome:"}),Object(p.jsx)(dt,{type:"text",name:"outcome",value:x,disabled:!0})]}),Object(p.jsxs)(ft,{children:[Object(p.jsxs)(jt,{children:[Object(p.jsx)("input",{id:"all",type:"radio",name:"pageRange",onClick:B}),Object(p.jsx)("label",{htmlFor:"all",children:"All Pages"})]}),Object(p.jsxs)(jt,{children:[Object(p.jsx)("input",{id:"range",type:"radio",name:"pageRange",onClick:B}),Object(p.jsx)("label",{htmlFor:"range",children:"Page Range"}),"range"===L&&Object(p.jsx)(Ot,{startPage:C,endPage:F,setStartPage:A,setEndPage:M})]})]}),Object(p.jsx)("button",{type:"text",onClick:_,children:"Ok"}),Object(p.jsx)("button",{type:"text",onClick:t,children:"Cancel"})]})}));var kt,Dt,Ct,At=Object(l.b)((function(e){return{headers:e.headers,modals:e.modals}}))((function(e){var t=e.modals.openModal,n=t.length>0;return"Headers"===t?n&&Object(p.jsx)(J,{Body:Ye}):n&&Object(p.jsx)(J,{Body:Pt})})),It=b.a.div(kt||(kt=Object(d.a)(["\n  height: 100%;\n  width: 100vw;\n  opacity: 0.9;\n  z-index: 11;\n  position: absolute;\n  background-color: #333;\n"]))),Et=b.a.p(Dt||(Dt=Object(d.a)(["\n  color: yellow;\n  font-size: 32px;\n  text-align: center;\n"]))),Ft=b.a.div(Ct||(Ct=Object(d.a)(["\n  display: none;\n"])));var Mt=function(e){return"none"===e.pointerEvents?Object(p.jsx)(It,{children:Object(p.jsx)(Et,{children:"LOADING"})}):Object(p.jsx)(Ft,{})};var St={closeAllDropdowns:function(e,t){e.forEach((function(e){setTimeout((function(){e.removeAttribute("open")}),t)}))},closeDropdownsAfterAnotherOpened:function(e,t,n){e.forEach((function(e){setTimeout((function(){Array.from(e.classList).includes(t)||e.removeAttribute("open")}),n)}))}};var Xt=_.topNavigation,Lt=Xt.expandDropdown,Ht=Xt.closeDropdown,Rt=Object(l.b)((function(e){return{topNavigation:e.topNavigation}}),{expandDropdown:Lt,closeDropdown:Ht})((function(e){var t=e.expandDropdown,n=e.closeDropdown,a=e.data,r=a.title,c=a.items,i=a.location,o=Array.from(document.querySelectorAll(".".concat(i)));return Object(p.jsx)("ul",{className:"tree-view",children:Object(p.jsx)("li",{children:Object(p.jsxs)("details",{className:"".concat(i," ").concat(r),onClick:function(e){Xt.openDropdown===r?(St.closeAllDropdowns(o,10),n()):(St.closeDropdownsAfterAnotherOpened(o,r,10),t(r))},children:[Object(p.jsx)("summary",{children:r}),Object(p.jsx)("ul",{children:c.map((function(e,t){var r=a.state,c=e.label,i=e.onClick,l=function(e){e.stopPropagation(),i(r),n(),St.closeAllDropdowns(o,10)};return Object(p.jsx)("li",{onClick:function(e){return l(e)},children:c},t)}))})]})})})}));function Tt(e){var t={};for(var n in e)t[n]=e[n];return t}var Bt={openFile:function(e){var t=e.uploadFile,n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","pdf"),n.addEventListener("change",function(){var e=Object(O.a)(h.a.mark((function e(n){var a,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"application/pdf"===(a=n.target.files[0]).type&&(r=URL.createObjectURL(a),c=Tt(a),t(Object(v.a)(Object(v.a)({},c),{},{blob:r,file:a})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.click()},closeOpenedFile:function(e){var t=e.closeFile,n=e.file;Object.keys(n).length>0&&t()}},Vt={fileObject:{title:"File",location:"topNavigationDetails",items:[{label:"Open",onClick:function(e){return Bt.openFile(e)}},{label:"Close",onClick:function(e){return Bt.closeOpenedFile(e)}}],state:{}},documentObject:{title:"Document",location:"topNavigationDetails",items:[{label:"Headers",onClick:function(e){return e.expandModal("Headers")}},{label:"Page Numbers",onClick:function(e){return e.expandModal("Page Numbers")}}],state:{}}};var _t=function(e,t){var n=t.state;return t.state=Object(v.a)(Object(v.a)({},n),e),t};var Ut=_.fileActions,zt=_.modalsActions,Gt=Object(l.b)((function(e){return{file:e.file,modals:e.modals}}),Object(v.a)(Object(v.a)({},Ut),zt))((function(e){var t=e.uploadFile,n=e.closeFile,a=e.expandModal,r=e.file,c={expandModal:a},i=Vt.fileObject,o=Vt.documentObject;return i=_t({file:r,uploadFile:t,closeFile:n},i),o=_t(c,o),Object(p.jsxs)("div",{style:{display:"flex"},className:"topNavigation",children:[Object(p.jsx)(Rt,{data:i}),Object(p.jsx)(Rt,{data:o})]})}));var Jt,qt={closeTopNavigation:function(e,t,n){var a="topNavigationDetails",r="SUMMARY"===e.target.tagName?e.target.parentNode:e.target;if(!Array.from(r.classList).includes(a)&&""!==t){n();var c=Array.from(document.querySelectorAll(".".concat(a)));St.closeAllDropdowns(c,10)}}},Wt=b.a.main(Jt||(Jt=Object(d.a)(["\n  height: 100vh;\n  width: auto;\n  position: relative;\n"])));var Kt=_.topNavigation.closeDropdown,Yt=Object(l.b)((function(e){return{topNavigation:e.topNavigation,file:e.file}}),{closeDropdown:Kt})((function(e){var t=e.closeDropdown,n=e.topNavigation,a=e.file,r=n.openDropdown,c=!0===a.loading?"none":"auto",i=!0===a.loading?"hidden":"visible";return Object(p.jsxs)(Wt,{style:{pointerEvents:c,overflow:i},onClick:function(e){return qt.closeTopNavigation(e,r,t)},children:[Object(p.jsx)(Gt,{}),Object(p.jsx)(At,{}),Object(p.jsx)(f,{}),Object(p.jsx)(Mt,{pointerEvents:c})]})})),Qt={};var Zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:case x:return t.payload;case y:return Object(v.a)(Object(v.a)({},e),{},{blob:t.payload});case g:return Object(v.a)(Object(v.a)({},e),{},{loading:!1});case m:return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case P:return Object(v.a)(Object(v.a)({},e),{},{filePath:t.payload});case N:return Object(v.a)(Object(v.a)({},e),{},{metadata:t.payload});default:return e}},$t=[];var en=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t,t=arguments.length>1?arguments[1]:void 0;return t.type,e},tn={openDropdown:""};var nn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(v.a)(Object(v.a)({},e),{},{openDropdown:t.payload});case k:return tn;default:return e}},an={openModal:""};var rn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(v.a)(Object(v.a)({},e),{},{openModal:t.payload});case C:return Object(v.a)({},an);case E:return Object(v.a)(Object(v.a)({},e),{},{expansion:t.payload.expansion,expansionData:t.payload.expansionData});case I:return Object(v.a)(Object(v.a)({},e),{},{expansion:"",expansionData:{}});default:return e}},cn=Object(o.combineReducers)({file:Zt,modals:rn,headers:en,topNavigation:nn}),on=Object(o.createStore)(cn,Object(u.composeWithDevTools)(Object(o.applyMiddleware)(s.a)));i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(l.a,{store:on,children:Object(p.jsx)(Yt,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.a5f77db8.chunk.js.map