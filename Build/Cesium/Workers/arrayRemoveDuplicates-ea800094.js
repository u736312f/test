define(["exports","./RuntimeError-8952249c","./defaultValue-81eec7ed","./ComponentDatatype-be80d12c"],(function(e,n,t,d){"use strict";const i=d.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,n,d,u){if(!t.defined(e))return;d=t.defaultValue(d,!1);const f=t.defined(u),r=e.length;if(r<2)return e;let s,c,l,a=e[0],o=0,p=-1;for(s=1;s<r;++s)c=e[s],n(a,c,i)?(t.defined(l)||(l=e.slice(0,s),o=s-1,p=0),f&&u.push(s)):(t.defined(l)&&(l.push(c),o=s,f&&(p=u.length)),a=c);return d&&n(e[0],e[r-1],i)&&(f&&(t.defined(l)?u.splice(p,0,o):u.push(r-1)),t.defined(l)?l.length-=1:l=e.slice(0,-1)),t.defined(l)?l:e}}));
