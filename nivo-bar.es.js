import{Axes as e,Grid as a,renderGridLinesToCanvas as i,renderAxesToCanvas as t}from"@nivo/axes";import{useAnnotations as n,Annotation as r,useComputedAnnotations as l,renderAnnotationsToCanvas as o}from"@nivo/annotations";import{jsx as d,Fragment as u,jsxs as c}from"react/jsx-runtime";import{BoxLegendSvg as s,renderLegendToCanvas as h}from"@nivo/legends";import{useTheme as b,getPropertyAccessor as g,usePropertyAccessor as v,useValueFormatter as f,Container as m,useMotionConfig as p,useDimensions as x,bindDefs as y,CartesianMarkers as S,SvgWrapper as k,getRelativeCursor as L,isCursorInRect as w,ResponsiveWrapper as C}from"@nivo/core";import{useMemo as V,createElement as W,useCallback as M,useState as B,Fragment as I,forwardRef as T,useRef as R,useEffect as H}from"react";import{animated as P,to as E,useTransition as F}from"@react-spring/web";import{useTooltip as X,BasicTooltip as Y}from"@nivo/tooltip";import{useOrdinalColorScale as D,useInheritedColor as O}from"@nivo/colors";import{computeScale as G}from"@nivo/scales";import{stack as A,stackOffsetDiverging as j}from"d3-shape";import q from"lodash/uniqBy";function z(){return z=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},z.apply(this,arguments)}function K(e,a){if(null==e)return{};var i,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],a.indexOf(i)>=0||(n[i]=e[i]);return n}var N,J=function(e){var a=e.bars,i=e.annotations,t=n({data:a,annotations:i,getPosition:function(e){return{x:e.x+e.width/2,y:e.y+e.height/2}},getDimensions:function(e){var a=e.height,i=e.width;return{width:i,height:a,size:Math.max(i,a)}}});return d(u,{children:t.map((function(e,a){return d(r,z({},e),a)}))})},Q=function(e){var a=e.width,i=e.height,t=e.legends,n=e.toggleSerie;return d(u,{children:t.map((function(e,t){var r,l=e[0],o=e[1];return d(s,z({},l,{containerWidth:a,containerHeight:i,data:null!=(r=l.data)?r:o,toggleSerie:l.toggleSerie&&"keys"===l.dataFrom?n:void 0}),t)}))})},U=["data"],Z=function(e){var a,i=e.bar,t=i.data,n=K(i,U),r=e.style,l=r.borderColor,o=r.color,u=r.height,s=r.labelColor,h=r.labelOpacity,g=r.labelX,v=r.labelY,f=r.transform,m=r.width,p=e.borderRadius,x=e.borderWidth,y=e.label,S=e.shouldRenderLabel,k=e.isInteractive,L=e.onClick,w=e.onMouseEnter,C=e.onMouseLeave,B=e.tooltip,I=e.isFocusable,T=e.ariaLabel,R=e.ariaLabelledBy,H=e.ariaDescribedBy,F=b(),Y=X(),D=Y.showTooltipFromEvent,O=Y.showTooltipAt,G=Y.hideTooltip,A=V((function(){return function(){return W(B,z({},n,t))}}),[B,n,t]),j=M((function(e){null==L||L(z({color:n.color},t),e)}),[n,t,L]),q=M((function(e){return D(A(),e)}),[D,A]),N=M((function(e){null==w||w(t,e),D(A(),e)}),[t,w,D,A]),J=M((function(e){null==C||C(t,e),G()}),[t,G,C]),Q=M((function(){O(A(),[n.absX+n.width/2,n.absY])}),[O,A,n]),Z=M((function(){G()}),[G]);return c(P.g,{transform:f,children:[d(P.rect,{width:E(m,(function(e){return Math.max(e,0)})),height:E(u,(function(e){return Math.max(e,0)})),rx:p,ry:p,fill:null!=(a=t.fill)?a:o,strokeWidth:x,stroke:l,focusable:I,tabIndex:I?0:void 0,"aria-label":T?T(t):void 0,"aria-labelledby":R?R(t):void 0,"aria-describedby":H?H(t):void 0,onMouseEnter:k?N:void 0,onMouseMove:k?q:void 0,onMouseLeave:k?J:void 0,onClick:k?j:void 0,onFocus:k&&I?Q:void 0,onBlur:k&&I?Z:void 0}),S&&d(P.text,{x:g,y:v,textAnchor:"middle",dominantBaseline:"central",fillOpacity:h,style:z({},F.labels.text,{pointerEvents:"none",fill:s}),children:y})]})},$=["color","label"],_={indexBy:"id",keys:["value"],groupMode:"stacked",layout:"vertical",reverse:!1,minValue:"auto",maxValue:"auto",valueScale:{type:"linear"},indexScale:{type:"band",round:!0},padding:.1,innerPadding:0,axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,enableLabel:!0,label:"formattedValue",labelSkipWidth:0,labelSkipHeight:0,labelTextColor:{from:"theme",theme:"labels.text.fill"},colorBy:"id",colors:{scheme:"nivo"},borderRadius:0,borderWidth:0,borderColor:{from:"color"},isInteractive:!0,tooltip:function(e){var a=e.color,i=e.label,t=K(e,$);return d(Y,{id:i,value:t.formattedValue,enableChip:!0,color:a})},tooltipLabel:function(e){return e.id+" - "+e.indexValue},legends:[],initialHiddenIds:[],annotations:[],markers:[]},ee=z({},_,{layers:["grid","axes","bars","markers","legends","annotations"],barComponent:Z,defs:[],fill:[],animate:!0,motionConfig:"default",role:"img",isFocusable:!1}),ae=z({},_,{layers:["grid","axes","bars","legends","annotations"],pixelRatio:"undefined"!=typeof window&&null!=(N=window.devicePixelRatio)?N:1}),ie=function(e,a,i,t,n,r){return G(t,{all:e.map(a),min:0,max:0},n,r).padding(i)},te=function(e,a){return e.map((function(e){return z({},a.reduce((function(e,a){return e[a]=null,e}),{}),e)}))},ne=function(e){return Object.keys(e).reduce((function(a,i){return e[i]&&(a[i]=e[i]),a}),{})},re=function(e){return[e,Number(e)]},le=["layout","minValue","maxValue","reverse","width","height","padding","innerPadding","valueScale","indexScale","hiddenIds"],oe=function(e,a){return e>a},de=function(e,a){return e<a},ue=function(e,a){return Array.from(" ".repeat(a-e),(function(a,i){return e+i}))},ce=function(e){return oe(e,0)?0:e},se=function(e,a,i,t){var n=e.data,r=e.formatValue,l=e.getColor,o=e.getIndex,d=e.getTooltipLabel,u=e.innerPadding,c=void 0===u?0:u,s=e.keys,h=e.xScale,b=e.yScale,g=e.margin,v=i?de:oe,f=n.map(ne),m=[];return s.forEach((function(e,i){return ue(0,h.domain().length).forEach((function(u){var s,p,x,y=re(n[u][e]),S=y[0],k=y[1],L=o(n[u]),w=(null!=(s=h(L))?s:0)+a*i+c*i,C=v(p=k,0)?null!=(x=b(p))?x:0:t,V=function(e,a){var i;return v(e,0)?t-a:(null!=(i=b(e))?i:0)-t}(k,C),W={id:e,value:null===S?S:k,formattedValue:r(k),hidden:!1,index:u,indexValue:L,data:f[u]};m.push({key:e+"."+W.indexValue,index:m.length,data:W,x:w,y:C,absX:g.left+w,absY:g.top+C,width:a,height:V,color:l(W),label:d(W)})}))})),m},he=function(e,a,i,t){var n=e.data,r=e.formatValue,l=e.getIndex,o=e.getColor,d=e.getTooltipLabel,u=e.keys,c=e.innerPadding,s=void 0===c?0:c,h=e.xScale,b=e.yScale,g=e.margin,v=i?de:oe,f=n.map(ne),m=[];return u.forEach((function(e,i){return ue(0,b.domain().length).forEach((function(u){var c,p,x,y=re(n[u][e]),S=y[0],k=y[1],L=l(n[u]),w=v(p=k,0)?t:null!=(x=h(p))?x:0,C=(null!=(c=b(L))?c:0)+a*i+s*i,V=function(e,a){var i;return v(e,0)?(null!=(i=h(e))?i:0)-t:t-a}(k,w),W={id:e,value:null===S?S:k,formattedValue:r(k),hidden:!1,index:u,indexValue:L,data:f[u]};m.push({key:e+"."+W.indexValue,index:m.length,data:W,x:w,y:C,absX:g.left+w,absY:g.top+C,width:V,height:a,color:o(W),label:d(W)})}))})),m},be=function(e){var a,i,t=e.layout,n=e.minValue,r=e.maxValue,l=e.reverse,o=e.width,d=e.height,u=e.padding,c=void 0===u?0:u,s=e.innerPadding,h=void 0===s?0:s,b=e.valueScale,g=e.indexScale,v=e.hiddenIds,f=void 0===v?[]:v,m=K(e,le),p=m.keys.filter((function(e){return!f.includes(e)})),x=te(m.data,p),y="vertical"===t?["y","x",o]:["x","y",d],S=y[0],k=y[1],L=y[2],w=ie(x,m.getIndex,c,g,L,k),C=z({max:r,min:n,reverse:l},b),V="auto"===C.min?ce:function(e){return e},W=x.reduce((function(e,a){return[].concat(e,p.map((function(e){return a[e]})))}),[]).filter(Boolean),M=V(Math.min.apply(Math,W)),B=(i=Math.max.apply(Math,W),isFinite(i)?i:0),I=G(C,{all:W,min:M,max:B},"x"===S?o:d,S),T="vertical"===t?[w,I]:[I,w],R=T[0],H=T[1],P=(w.bandwidth()-h*(p.length-1))/p.length,E=[z({},m,{data:x,keys:p,innerPadding:h,xScale:R,yScale:H}),P,C.reverse,null!=(a=I(0))?a:0];return{xScale:R,yScale:H,bars:P>0?"vertical"===t?se.apply(void 0,E):he.apply(void 0,E):[]}},ge=["data","layout","minValue","maxValue","reverse","width","height","padding","valueScale","indexScale","hiddenIds"],ve=function e(a){var i;return a.some(Array.isArray)?e((i=[]).concat.apply(i,a)):a},fe=function(e,a,i){var t=e.formatValue,n=e.getColor,r=e.getIndex,l=e.getTooltipLabel,o=e.innerPadding,d=e.stackedData,u=e.xScale,c=e.yScale,s=e.margin,h=[];return d.forEach((function(e){return u.domain().forEach((function(d,b){var g,v,f=e[b],m=null!=(g=u(r(f.data)))?g:0,p=(null!=(v=function(e){return c(e[i?0:1])}(f))?v:0)+.5*o,x=function(e,a){var t;return(null!=(t=c(e[i?1:0]))?t:0)-a}(f,p)-o,y=re(f.data[e.key]),S=y[0],k=y[1],L={id:e.key,value:null===S?S:k,formattedValue:t(k),hidden:!1,index:b,indexValue:d,data:ne(f.data)};h.push({key:e.key+"."+d,index:h.length,data:L,x:m,y:p,absX:s.left+m,absY:s.top+p,width:a,height:x,color:n(L),label:l(L)})}))})),h},me=function(e,a,i){var t=e.formatValue,n=e.getColor,r=e.getIndex,l=e.getTooltipLabel,o=e.innerPadding,d=e.stackedData,u=e.xScale,c=e.yScale,s=e.margin,h=[];return d.forEach((function(e){return c.domain().forEach((function(d,b){var g,v,f=e[b],m=null!=(g=c(r(f.data)))?g:0,p=(null!=(v=function(e){return u(e[i?1:0])}(f))?v:0)+.5*o,x=function(e,a){var t;return(null!=(t=u(e[i?0:1]))?t:0)-a}(f,p)-o,y=re(f.data[e.key]),S=y[0],k=y[1],L={id:e.key,value:null===S?S:k,formattedValue:t(k),hidden:!1,index:b,indexValue:d,data:ne(f.data)};h.push({key:e.key+"."+d,index:h.length,data:L,x:p,y:m,absX:s.left+p,absY:s.top+m,width:x,height:a,color:n(L),label:l(L)})}))})),h},pe=function(e){var a,i=e.data,t=e.layout,n=e.minValue,r=e.maxValue,l=e.reverse,o=e.width,d=e.height,u=e.padding,c=void 0===u?0:u,s=e.valueScale,h=e.indexScale,b=e.hiddenIds,g=void 0===b?[]:b,v=K(e,ge),f=v.keys.filter((function(e){return!g.includes(e)})),m=A().keys(f).offset(j)(te(i,f)),p="vertical"===t?["y","x",o]:["x","y",d],x=p[0],y=p[1],S=p[2],k=ie(i,v.getIndex,c,h,S,y),L=z({max:r,min:n,reverse:l},s),w=(a=ve(m),"log"===s.type?a.filter((function(e){return 0!==e})):a),C=Math.min.apply(Math,w),V=Math.max.apply(Math,w),W=G(L,{all:w,min:C,max:V},"x"===x?o:d,x),M="vertical"===t?[k,W]:[W,k],B=M[0],I=M[1],T=v.innerPadding>0?v.innerPadding:0,R=k.bandwidth(),H=[z({},v,{innerPadding:T,stackedData:m,xScale:B,yScale:I}),R,L.reverse];return{xScale:B,yScale:I,bars:R>0?"vertical"===t?fe.apply(void 0,H):me.apply(void 0,H):[]}},xe=function(e){var a=e.bars,i=e.direction,t=e.from,n=e.groupMode,r=e.layout,l=e.legendLabel,o=e.reverse,d=g(null!=l?l:"indexes"===t?"indexValue":"id");return"indexes"===t?function(e,a,i){var t=q(e.map((function(e){var a,t;return{id:null!=(a=e.data.indexValue)?a:"",label:i(e.data),hidden:e.data.hidden,color:null!=(t=e.color)?t:"#000"}})),(function(e){return e.id}));return"horizontal"===a&&t.reverse(),t}(a,r,d):function(e,a,i,t,n,r){var l=q(e.map((function(e){var a;return{id:e.data.id,label:r(e.data),hidden:e.data.hidden,color:null!=(a=e.color)?a:"#000"}})),(function(e){return e.id}));return("vertical"===a&&"stacked"===t&&"column"===i&&!0!==n||"horizontal"===a&&"stacked"===t&&!0===n)&&l.reverse(),l}(a,r,i,n,o,d)},ye=function(e){var a=e.indexBy,i=void 0===a?_.indexBy:a,t=e.keys,n=void 0===t?_.keys:t,r=e.label,l=void 0===r?_.label:r,o=e.tooltipLabel,d=void 0===o?_.tooltipLabel:o,u=e.valueFormat,c=e.colors,s=void 0===c?_.colors:c,h=e.colorBy,g=void 0===h?_.colorBy:h,m=e.borderColor,p=void 0===m?_.borderColor:m,x=e.labelTextColor,y=void 0===x?_.labelTextColor:x,S=e.groupMode,k=void 0===S?_.groupMode:S,L=e.layout,w=void 0===L?_.layout:L,C=e.reverse,W=void 0===C?_.reverse:C,I=e.data,T=e.minValue,R=void 0===T?_.minValue:T,H=e.maxValue,P=void 0===H?_.maxValue:H,E=e.margin,F=e.width,X=e.height,Y=e.padding,G=void 0===Y?_.padding:Y,A=e.innerPadding,j=void 0===A?_.innerPadding:A,q=e.valueScale,K=void 0===q?_.valueScale:q,N=e.indexScale,J=void 0===N?_.indexScale:N,Q=e.initialHiddenIds,U=void 0===Q?_.initialHiddenIds:Q,Z=e.enableLabel,$=void 0===Z?_.enableLabel:Z,ee=e.labelSkipWidth,ae=void 0===ee?_.labelSkipWidth:ee,ie=e.labelSkipHeight,te=void 0===ie?_.labelSkipHeight:ie,ne=e.legends,re=void 0===ne?_.legends:ne,le=e.legendLabel,oe=B(null!=U?U:[]),de=oe[0],ue=oe[1],ce=M((function(e){ue((function(a){return a.indexOf(e)>-1?a.filter((function(a){return a!==e})):[].concat(a,[e])}))}),[]),se=v(i),he=v(l),ge=v(d),ve=f(u),fe=b(),me=D(s,g),ye=O(p,fe),Se=O(y,fe),ke=("grouped"===k?be:pe)({layout:w,reverse:W,data:I,getIndex:se,keys:n,minValue:R,maxValue:P,width:F,height:X,getColor:me,padding:G,innerPadding:j,valueScale:K,indexScale:J,hiddenIds:de,formatValue:ve,getTooltipLabel:ge,margin:E}),Le=ke.bars,we=ke.xScale,Ce=ke.yScale,Ve=V((function(){return Le.filter((function(e){return null!==e.data.value})).map((function(e,a){return z({},e,{index:a})}))}),[Le]),We=M((function(e){var a=e.width,i=e.height;return!!$&&(!(ae>0&&a<ae)&&!(te>0&&i<te))}),[$,ae,te]),Me=V((function(){return n.map((function(e){var a=Le.find((function(a){return a.data.id===e}));return z({},a,{data:z({id:e},null==a?void 0:a.data,{hidden:de.includes(e)})})}))}),[de,n,Le]),Be=V((function(){return re.map((function(e){return[e,xe({bars:"keys"===e.dataFrom?Me:Le,direction:e.direction,from:e.dataFrom,groupMode:k,layout:w,legendLabel:le,reverse:W})]}))}),[re,Me,Le,k,w,le,W]);return{bars:Le,barsWithValue:Ve,xScale:we,yScale:Ce,getIndex:se,getLabel:he,getTooltipLabel:ge,formatValue:ve,getColor:me,getBorderColor:ye,getLabelColor:Se,shouldRenderBarLabel:We,hiddenIds:de,toggleSerie:ce,legendsWithData:Be}},Se=["isInteractive","animate","motionConfig","theme","renderWrapper"],ke=function(i){var t=i.data,n=i.indexBy,r=i.keys,l=i.margin,o=i.width,u=i.height,c=i.groupMode,s=i.layout,h=i.reverse,b=i.minValue,g=i.maxValue,v=i.valueScale,f=i.indexScale,m=i.padding,L=i.innerPadding,w=i.axisTop,C=i.axisRight,M=i.axisBottom,B=void 0===M?ee.axisBottom:M,T=i.axisLeft,R=void 0===T?ee.axisLeft:T,H=i.enableGridX,P=void 0===H?ee.enableGridX:H,E=i.enableGridY,X=void 0===E?ee.enableGridY:E,Y=i.gridXValues,D=i.gridYValues,O=i.layers,G=void 0===O?ee.layers:O,A=i.barComponent,j=void 0===A?ee.barComponent:A,q=i.enableLabel,K=void 0===q?ee.enableLabel:q,N=i.label,U=i.labelSkipWidth,Z=void 0===U?ee.labelSkipWidth:U,$=i.labelSkipHeight,_=void 0===$?ee.labelSkipHeight:$,ae=i.labelTextColor,ie=i.markers,te=void 0===ie?ee.markers:ie,ne=i.colorBy,re=i.colors,le=i.defs,oe=void 0===le?ee.defs:le,de=i.fill,ue=void 0===de?ee.fill:de,ce=i.borderRadius,se=void 0===ce?ee.borderRadius:ce,he=i.borderWidth,be=void 0===he?ee.borderWidth:he,ge=i.borderColor,ve=i.annotations,fe=void 0===ve?ee.annotations:ve,me=i.legendLabel,pe=i.tooltipLabel,xe=i.valueFormat,Se=i.isInteractive,ke=void 0===Se?ee.isInteractive:Se,Le=i.tooltip,we=void 0===Le?ee.tooltip:Le,Ce=i.onClick,Ve=i.onMouseEnter,We=i.onMouseLeave,Me=i.legends,Be=i.role,Ie=void 0===Be?ee.role:Be,Te=i.ariaLabel,Re=i.ariaLabelledBy,He=i.ariaDescribedBy,Pe=i.isFocusable,Ee=void 0===Pe?ee.isFocusable:Pe,Fe=i.barAriaLabel,Xe=i.barAriaLabelledBy,Ye=i.barAriaDescribedBy,De=i.initialHiddenIds,Oe=p(),Ge=Oe.animate,Ae=Oe.config,je=x(o,u,l),qe=je.outerWidth,ze=je.outerHeight,Ke=je.margin,Ne=je.innerWidth,Je=je.innerHeight,Qe=ye({indexBy:n,label:N,tooltipLabel:pe,valueFormat:xe,colors:re,colorBy:ne,borderColor:ge,labelTextColor:ae,groupMode:c,layout:s,reverse:h,data:t,keys:r,minValue:b,maxValue:g,margin:Ke,width:Ne,height:Je,padding:m,innerPadding:L,valueScale:v,indexScale:f,enableLabel:K,labelSkipWidth:Z,labelSkipHeight:_,legends:Me,legendLabel:me,initialHiddenIds:De}),Ue=Qe.bars,Ze=Qe.barsWithValue,$e=Qe.xScale,_e=Qe.yScale,ea=Qe.getLabel,aa=Qe.getTooltipLabel,ia=Qe.getBorderColor,ta=Qe.getLabelColor,na=Qe.shouldRenderBarLabel,ra=Qe.toggleSerie,la=Qe.legendsWithData,oa=F(Ze,{keys:function(e){return e.key},from:function(e){return z({borderColor:ia(e),color:e.color,height:0,labelColor:ta(e),labelOpacity:0,labelX:e.width/2,labelY:e.height/2,transform:"translate("+e.x+", "+(e.y+e.height)+")",width:e.width},"vertical"===s?{}:{height:e.height,transform:"translate("+e.x+", "+e.y+")",width:0})},enter:function(e){return{borderColor:ia(e),color:e.color,height:e.height,labelColor:ta(e),labelOpacity:1,labelX:e.width/2,labelY:e.height/2,transform:"translate("+e.x+", "+e.y+")",width:e.width}},update:function(e){return{borderColor:ia(e),color:e.color,height:e.height,labelColor:ta(e),labelOpacity:1,labelX:e.width/2,labelY:e.height/2,transform:"translate("+e.x+", "+e.y+")",width:e.width}},leave:function(e){return z({borderColor:ia(e),color:e.color,height:0,labelColor:ta(e),labelOpacity:0,labelX:e.width/2,labelY:0,transform:"translate("+e.x+", "+(e.y+e.height)+")",width:e.width},"vertical"===s?{}:{labelX:0,labelY:e.height/2,height:e.height,transform:"translate("+e.x+", "+e.y+")",width:0})},config:Ae,immediate:!Ge,initial:Ge?void 0:null}),da=V((function(){return{borderRadius:se,borderWidth:be,enableLabel:K,isInteractive:ke,labelSkipWidth:Z,labelSkipHeight:_,onClick:Ce,onMouseEnter:Ve,onMouseLeave:We,getTooltipLabel:aa,tooltip:we,isFocusable:Ee,ariaLabel:Fe,ariaLabelledBy:Xe,ariaDescribedBy:Ye}}),[se,be,K,aa,ke,_,Z,Ce,Ve,We,we,Ee,Fe,Xe,Ye]),ua=y(oe,Ue,ue,{dataKey:"data",targetKey:"data.fill"}),ca={annotations:null,axes:null,bars:null,grid:null,legends:null,markers:null};G.includes("annotations")&&(ca.annotations=d(J,{bars:Ue,annotations:fe},"annotations")),G.includes("axes")&&(ca.axes=d(e,{xScale:$e,yScale:_e,width:Ne,height:Je,top:w,right:C,bottom:B,left:R},"axes")),G.includes("bars")&&(ca.bars=d(I,{children:oa((function(e,a){return W(j,z({},da,{bar:a,style:e,shouldRenderLabel:na(a),label:ea(a.data)}))}))},"bars")),G.includes("grid")&&(ca.grid=d(a,{width:Ne,height:Je,xScale:P?$e:null,yScale:X?_e:null,xValues:Y,yValues:D},"grid")),G.includes("legends")&&(ca.legends=d(Q,{width:Ne,height:Je,legends:la,toggleSerie:ra},"legends")),G.includes("markers")&&(ca.markers=d(S,{markers:te,width:Ne,height:Je,xScale:$e,yScale:_e},"markers"));var sa=V((function(){return z({},da,{margin:Ke,width:o,height:u,innerWidth:Ne,innerHeight:Je,bars:Ue,legendData:la,enableLabel:K,xScale:$e,yScale:_e,tooltip:we,getTooltipLabel:aa,onClick:Ce,onMouseEnter:Ve,onMouseLeave:We})}),[da,Ke,o,u,Ne,Je,Ue,la,K,$e,_e,we,aa,Ce,Ve,We]);return d(k,{width:qe,height:ze,margin:Ke,defs:ua,role:Ie,ariaLabel:Te,ariaLabelledBy:Re,ariaDescribedBy:He,isFocusable:Ee,children:G.map((function(e,a){var i;return"function"==typeof e?d(I,{children:W(e,sa)},a):null!=(i=null==ca?void 0:ca[e])?i:null}))})},Le=function(e){var a=e.isInteractive,i=void 0===a?ee.isInteractive:a,t=e.animate,n=void 0===t?ee.animate:t,r=e.motionConfig,l=void 0===r?ee.motionConfig:r,o=e.theme,u=e.renderWrapper,c=K(e,Se);return d(m,{animate:n,isInteractive:i,motionConfig:l,renderWrapper:u,theme:o,children:d(ke,z({isInteractive:i},c))})},we=["isInteractive","renderWrapper","theme"],Ce=function(e,a,i,t){return e.find((function(e){return w(e.x+a.left,e.y+a.top,e.width,e.height,i,t)}))},Ve=function(e){var a=e.data,r=e.indexBy,u=e.keys,c=e.margin,s=e.width,g=e.height,v=e.groupMode,f=e.layout,m=e.reverse,p=e.minValue,y=e.maxValue,S=e.valueScale,k=e.indexScale,w=e.padding,C=e.innerPadding,B=e.axisTop,I=e.axisRight,T=e.axisBottom,P=void 0===T?ae.axisBottom:T,E=e.axisLeft,F=void 0===E?ae.axisLeft:E,Y=e.enableGridX,D=void 0===Y?ae.enableGridX:Y,O=e.enableGridY,G=void 0===O?ae.enableGridY:O,A=e.gridXValues,j=e.gridYValues,q=e.layers,K=void 0===q?ae.layers:q,N=e.renderBar,J=void 0===N?function(e,a){var i=a.bar,t=i.color,n=i.height,r=i.width,l=i.x,o=i.y,d=a.borderColor,u=a.borderRadius,c=a.borderWidth,s=a.label,h=a.labelColor,b=a.shouldRenderLabel;if(e.fillStyle=t,c>0&&(e.strokeStyle=d,e.lineWidth=c),e.beginPath(),u>0){var g=Math.min(u,n);e.moveTo(l+g,o),e.lineTo(l+r-g,o),e.quadraticCurveTo(l+r,o,l+r,o+g),e.lineTo(l+r,o+n-g),e.quadraticCurveTo(l+r,o+n,l+r-g,o+n),e.lineTo(l+g,o+n),e.quadraticCurveTo(l,o+n,l,o+n-g),e.lineTo(l,o+g),e.quadraticCurveTo(l,o,l+g,o),e.closePath()}else e.rect(l,o,r,n);e.fill(),c>0&&e.stroke(),b&&(e.textBaseline="middle",e.textAlign="center",e.fillStyle=h,e.fillText(s,l+r/2,o+n/2))}:N,Q=e.enableLabel,U=void 0===Q?ae.enableLabel:Q,Z=e.label,$=e.labelSkipWidth,_=void 0===$?ae.labelSkipWidth:$,ee=e.labelSkipHeight,ie=void 0===ee?ae.labelSkipHeight:ee,te=e.labelTextColor,ne=e.colorBy,re=e.colors,le=e.borderRadius,oe=void 0===le?ae.borderRadius:le,de=e.borderWidth,ue=void 0===de?ae.borderWidth:de,ce=e.borderColor,se=e.annotations,he=void 0===se?ae.annotations:se,be=e.legendLabel,ge=e.tooltipLabel,ve=e.valueFormat,fe=e.isInteractive,me=void 0===fe?ae.isInteractive:fe,pe=e.tooltip,xe=void 0===pe?ae.tooltip:pe,Se=e.onClick,ke=e.onMouseEnter,Le=e.onMouseLeave,we=e.legends,Ve=e.pixelRatio,We=void 0===Ve?ae.pixelRatio:Ve,Me=e.canvasRef,Be=R(null),Ie=b(),Te=x(s,g,c),Re=Te.margin,He=Te.innerWidth,Pe=Te.innerHeight,Ee=Te.outerWidth,Fe=Te.outerHeight,Xe=ye({indexBy:r,label:Z,tooltipLabel:ge,valueFormat:ve,colors:re,colorBy:ne,borderColor:ce,labelTextColor:te,groupMode:v,layout:f,reverse:m,data:a,keys:u,minValue:p,maxValue:y,margin:Re,width:He,height:Pe,padding:w,innerPadding:C,valueScale:S,indexScale:k,enableLabel:U,labelSkipWidth:_,labelSkipHeight:ie,legends:we,legendLabel:be}),Ye=Xe.bars,De=Xe.barsWithValue,Oe=Xe.xScale,Ge=Xe.yScale,Ae=Xe.getLabel,je=Xe.getTooltipLabel,qe=Xe.getBorderColor,ze=Xe.getLabelColor,Ke=Xe.shouldRenderBarLabel,Ne=Xe.legendsWithData,Je=X(),Qe=Je.showTooltipFromEvent,Ue=Je.hideTooltip,Ze=l({annotations:n({data:Ye,annotations:he,getPosition:function(e){return{x:e.x,y:e.y}},getDimensions:function(e){var a=e.width,i=e.height;return{width:a,height:i,size:Math.max(a,i)}}})}),$e=V((function(){return{borderRadius:oe,borderWidth:ue,isInteractive:me,isFocusable:!1,labelSkipWidth:_,labelSkipHeight:ie,margin:Re,width:s,height:g,innerWidth:He,innerHeight:Pe,bars:Ye,legendData:Ne,enableLabel:U,xScale:Oe,yScale:Ge,tooltip:xe,getTooltipLabel:je,onClick:Se,onMouseEnter:ke,onMouseLeave:Le}}),[oe,ue,me,_,ie,Re,s,g,He,Pe,Ye,Ne,U,Oe,Ge,xe,je,Se,ke,Le]);H((function(){var e,a=null==(e=Be.current)?void 0:e.getContext("2d");Be.current&&a&&(Be.current.width=Ee*We,Be.current.height=Fe*We,a.scale(We,We),a.fillStyle=Ie.background,a.fillRect(0,0,Ee,Fe),a.translate(Re.left,Re.top),K.forEach((function(e){"grid"===e?"number"==typeof Ie.grid.line.strokeWidth&&Ie.grid.line.strokeWidth>0&&(a.lineWidth=Ie.grid.line.strokeWidth,a.strokeStyle=Ie.grid.line.stroke,D&&i(a,{width:s,height:g,scale:Oe,axis:"x",values:A}),G&&i(a,{width:s,height:g,scale:Ge,axis:"y",values:j})):"axes"===e?t(a,{xScale:Oe,yScale:Ge,width:He,height:Pe,top:B,right:I,bottom:P,left:F,theme:Ie}):"bars"===e?De.forEach((function(e){J(a,{bar:e,borderColor:qe(e),borderRadius:oe,borderWidth:ue,label:Ae(e.data),labelColor:ze(e),shouldRenderLabel:Ke(e)})})):"legends"===e?Ne.forEach((function(e){var i=e[0],t=e[1];h(a,z({},i,{data:t,containerWidth:He,containerHeight:Pe,theme:Ie}))})):"annotations"===e?o(a,{annotations:Ze,theme:Ie}):"function"==typeof e&&e(a,$e)})),a.save())}),[P,F,I,B,De,oe,ue,Ze,D,G,qe,Ae,ze,A,j,v,g,Pe,He,$e,K,f,Ne,Re.left,Re.top,Fe,Ee,We,J,Oe,Ge,m,Ke,Ie,s]);var _e=M((function(e){if(Ye&&Be.current){var a=L(Be.current,e),i=a[0],t=a[1],n=Ce(Ye,Re,i,t);void 0!==n?(Qe(W(xe,z({},n.data,{color:n.color,label:n.label,value:Number(n.data.value)})),e),"mouseenter"===e.type&&(null==ke||ke(n.data,e))):Ue()}}),[Ue,Re,ke,Ye,Qe,xe]),ea=M((function(e){if(Ye&&Be.current){Ue();var a=L(Be.current,e),i=a[0],t=a[1],n=Ce(Ye,Re,i,t);n&&(null==Le||Le(n.data,e))}}),[Ue,Re,Le,Ye]),aa=M((function(e){if(Ye&&Be.current){var a=L(Be.current,e),i=a[0],t=a[1],n=Ce(Ye,Re,i,t);void 0!==n&&(null==Se||Se(z({},n.data,{color:n.color}),e))}}),[Re,Se,Ye]);return d("canvas",{ref:function(e){Be.current=e,Me&&"current"in Me&&(Me.current=e)},width:Ee*We,height:Fe*We,style:{width:Ee,height:Fe,cursor:me?"auto":"normal"},onMouseEnter:me?_e:void 0,onMouseMove:me?_e:void 0,onMouseLeave:me?ea:void 0,onClick:me?aa:void 0})},We=T((function(e,a){var i=e.isInteractive,t=e.renderWrapper,n=e.theme,r=K(e,we);return d(m,{isInteractive:i,renderWrapper:t,theme:n,animate:!1,children:d(Ve,z({},r,{canvasRef:a}))})})),Me=function(e){return d(C,{children:function(a){var i=a.width,t=a.height;return d(Le,z({width:i,height:t},e))}})},Be=T((function(e,a){return d(C,{children:function(i){var t=i.width,n=i.height;return d(We,z({width:t,height:n},e,{ref:a}))}})}));export{Le as Bar,We as BarCanvas,Z as BarItem,Me as ResponsiveBar,Be as ResponsiveBarCanvas,ae as canvasDefaultProps,_ as defaultProps,ee as svgDefaultProps};
//# sourceMappingURL=nivo-bar.es.js.map