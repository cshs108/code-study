(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{241:function(t,e,r){var content=r(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("243baf80",content,!0,{sourceMap:!1})},242:function(t,e,r){"use strict";r(241)},243:function(t,e,r){var n=r(44)(!1);n.push([t.i,".github-icon[data-v-3dcc6962]{margin-top:0!important;margin-bottom:0!important}.dark-mode .dark\\:prose-dark a[data-v-3dcc6962]{color:rgba(255,255,255,var(--tw-text-opacity))}.prose a[data-v-3dcc6962]{color:rgba(74,85,104,var(--tw-text-opacity));text-decoration:none}.prose a[data-v-3dcc6962]:hover{background-color:#d4d4d4}.dark-mode .dark\\:prose-dark a[data-v-3dcc6962]:hover{background-color:#000}",""]),t.exports=n},245:function(t,e,r){"use strict";r.r(e);var n={props:{contributor:{type:String,required:!0}}},o=(r(242),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"\n    inline-flex\n    mb-2\n    mr-2\n    overflow-hidden\n    transition-colors\n    ease-linear\n    border\n    rounded\n    border-light-border\n  ",attrs:{href:"https://github.com/"+t.contributor,target:"_blank"}},[r("img",{staticClass:"h-8 github-icon",attrs:{alt:t.contributor,src:"https://github.com/"+t.contributor+".png?size=32",srcset:"https://github.com/"+t.contributor+".png?size=32 1x, https://github.com/"+t.contributor+".png?size=64 2x",loading:"lazy"}}),t._v(" "),r("span",{staticClass:"inline-block px-2 leading-loose"},[t._v("\n    "+t._s(t.contributor)+"\n  ")])])}),[],!1,null,"3dcc6962",null);e.default=component.exports},256:function(t,e,r){"use strict";r.r(e);var n=r(5),o=r(3),c=(r(12),r(29),r(13),r(7),r(19),r(20),r(24),r(21));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={data:function(){return{contributors:[]}},props:{document:{type:Object,required:!0}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getGithubContributors();case 2:t.contributors=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{getGithubContributors:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.document.contributors){e.next=2;break}return e.abrupt("return",t.document.contributors);case 2:return e.prev=2,r="".concat(t.githubUrls.api.repo,"/commits?path=content").concat(t.document.path).concat(t.document.extension),e.next=6,fetch(r);case 6:return n=e.sent,e.next=9,n.json();case 9:return data=e.sent,e.abrupt("return",data.sort((function(a,b){var t=new Date(b.commit.author.date);return new Date(a.commit.author.date)-t})).map((function(t){return t.author.login})).filter((function(t,e,r){return r.indexOf(t)===e})));case 13:return e.prev=13,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})))()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["githubUrls"]))},m=d,v=r(2),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col"},[t.document.subtitle?r("div",[r("p",{staticClass:"text-gray-600 dark:text-gray-400"},[t._v(t._s(t.document.subtitle))])]):t._e(),t._v(" "),r("div",[r("span",{staticClass:"text-xs md:text-sm"},[t._v("\n      字數總計："+t._s(t.document.readingStats.words)+" 個\n    ")]),t._v(" "),r("span",{staticClass:"mx-1"},[t._v("|")]),t._v(" "),r("span",{staticClass:"text-xs md:text-sm"},[t._v("\n      閱讀時長："+t._s(Math.ceil(t.document.readingStats.minutes))+" 分鐘\n    ")]),t._v(" "),r("span",{staticClass:"mx-1"},[t._v("|")]),t._v(" "),t._m(0)]),t._v(" "),t.contributors?r("div",{staticClass:"mt-1 z-10"},t._l(t.contributors,(function(t,e){return r("AppGithubLink",{key:e,staticClass:"mr-2",attrs:{contributor:t}})})),1):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"text-xs md:text-sm",attrs:{id:"busuanzi_container_page_pv"}},[r("span",[t._v("閱讀次數：")]),t._v(" "),r("span",{attrs:{id:"busuanzi_value_page_pv"}}),t._v("\n      次\n    ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AppGithubLink:r(245).default})}}]);