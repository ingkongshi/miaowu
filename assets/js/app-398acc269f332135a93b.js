"use strict";(self.webpackChunkuchinoko_maker=self.webpackChunkuchinoko_maker||[]).push([[2176,8172],{18172:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var o=n(85893),r=n(67294),a=n(28670),s=n.n(a),l=n(51537),i=n(40529),c=n(77526),u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)},f=(0,r.lazy)((function(){return n.e(847).then(n.bind(n,90847))})),h=(0,r.lazy)((function(){return n.e(4229).then(n.bind(n,64229))}));const b=function(){var e=(0,r.useContext)(c.S).avatarState,t=(0,r.useState)(""),n=t[0],a=t[1],b=(0,r.useState)(""),p=b[0],y=b[1],k=(0,i.o)(e.pattern,"noseMouth");return(0,r.useEffect)((function(){a(e.pattern.type.match(/black/)&&"#000000"===e.nose.type?k:e.nose.type),y((0,l.Z)(s()("#ffffff").css(),"rgba(".concat(s()(e.noseMouthPattern.fill).alpha(e.noseMouthPattern.fillOpacity).rgba().join(","),")")))}),[e.pattern,e.nose,k,e.noseMouthPattern.fillOpacity,e.noseMouthPattern.fill]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("g",u({className:"nose-mouth"},{children:(0,o.jsxs)(r.Suspense,u({fallback:(0,o.jsx)(o.Fragment,{})},{children:["cobby"!==e.bodyType&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(f,{noseFill:n,bruiseFill:p,stroke:k})}),"cobby"===e.bodyType&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(h,{noseFill:n,bruiseFill:p,stroke:k})})]}))}))})}},40529:(e,t,n)=>{n.d(t,{o:()=>a});var o=n(67294),r=n(96486),a=function(e,t){var n=(0,o.useState)(""),a=n[0],s=n[1];return(0,o.useEffect)((function(){var n="#000000";if((0,r.has)(e,"stroke")&&e.stroke){var o=(0,r.has)(e,"fill")&&e.fill?e.fill:"#ffffff";("noseMouth"===t&&"#000000"===o&&e.type.match(/basic|bicolor_[1]$/)||"eye"===t&&"#000000"===o&&e.type.match(/basic|bicolor_[1-4]$/)||!["noseMouth","eye"].includes(t))&&(n=e.stroke)}s(n)}),[t,e]),a}}}]);