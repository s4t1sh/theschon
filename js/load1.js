/*! verge 1.7.0 | viewport utils by @ryanve | @link verge.airve.com | @license MIT */
(function(f,e,g){"undefined"!=typeof module&&module.exports?module.exports=g():f[e]=g()})
(this,"verge",function(){function f(a,c){var b={};a&&!a.nodeType&&(a=a[0]);if(!a||1!==a.nodeType)return!1;
c="number"==typeof c&&c||0;a=a.getBoundingClientRect();b.width=(b.right=a.right+c)-(b.left=a.left-c);
b.height=(b.bottom=a.bottom+c)-(b.top=a.top-c);return b}
var e=window,g=document.documentElement,l=e.Modernizr,h=e.matchMedia||e.msMatchMedia,m=h?function(a){return!!h.call(e,a).matches}:function(){return!1},
d=function(a,c,b){return g[b]<e[c]&&m("(min-"+a+":"+e[c]+"px)")?function(){return e[c]}:function(){return g[b]}},j=d("width","innerWidth","clientWidth"),
k=d("height","innerHeight","clientHeight"),d={};d.mq=!h&&l&&l.mq||m;d.matchMedia=h?function(){return h.apply(e,arguments)}:function(){return{}};
d.viewportW=j;d.viewportH=k;d.scrollX=function(){return e.pageXOffset||g.scrollLeft};d.scrollY=function(){return e.pageYOffset||g.scrollTop};d.rectangle=f;
d.aspect=function(a){a=a&&1===a.nodeType?f(a):a;var c=
null==a?k:a.height,b=null==a?j:a.width,c="function"==typeof c?c.call(a):c,b="function"==typeof b?b.call(a):b;return b/c};d.inX=function(a,c){var b=f(a,c);return!!b&&0<=b.right&&b.left<=j()};d.inY=function(a,c){var b=f(a,c);return!!b&&0<=b.bottom&&b.top<=k()};d.inViewport=function(a,c){var b=f(a,c);return!!b&&0<=b.bottom&&0<=b.right&&b.top<=k()&&b.left<=j()};return d});