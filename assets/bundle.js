!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var i=g(n(1)),o=g(n(2)),r=g(n(3)),a=g(n(4)),c=g(n(5)),s=g(n(6)),l=g(n(7)),u=g(n(8)),d=g(n(9)),f=g(n(10)),p=g(n(11)),h=g(n(12)),m=g(n(13)),v=g(n(14));function g(e){return e&&e.__esModule?e:{default:e}}o.default.init(),r.default.init(),i.default.init(),a.default.init(),c.default.init(),s.default.init(),l.default.init(),u.default.markdownLinksNewPage(),d.default.init(),f.default.init(),p.default.init(),h.default.init(),m.default.init(),"/project-details/"!==window.location.pathname&&"/project-details"!==window.location.pathname&&"/simsec-luminate/project-details"!==window.location.pathname&&"/simsec-luminate/project-details/"!==window.location.pathname||v.default.init()},function(e,t,n){"use strict";var i={onClickOverlay:function(){$("#overlay").click(function(){$(".js-active").removeClass("js-active"),$(".js-active-menu").removeClass("js-active-menu")})},init:function(){this.onClickOverlay()}};e.exports=i},function(e,t,n){"use strict";var i={openModal:function(){$(".js-open-modal").click(function(e){$(e.currentTarget).parent().find(".js-target-modal").addClass("js-active"),$("#overlay").addClass("js-active"),$("body").addClass("js-body-modal-active")})},closeModal:function(){$("body").on("click",".js-close-modal",function(){$(".js-target-modal").removeClass("js-active"),$("#overlay").removeClass("js-active"),$("body").removeClass("js-body-modal-active")})},clickOverlayCloseModal:function(){$("#overlay").click(function(){$("body").removeClass("js-body-modal-active")})},init:function(){this.openModal(),this.closeModal(),this.clickOverlayCloseModal()}};e.exports=i},function(e,t,n){"use strict";var i={mainMenu:function(){$(".js-trigger-menu").click(function(e){$(e.currentTarget).next().addClass("js-active-menu"),$("#overlay").addClass("js-active")})},init:function(){this.mainMenu()}};e.exports=i},function(e,t,n){"use strict";var i={smoothScrolling:function(){$("a[href*=\\#]:not([href=\\#])").on("click",function(e){var t=$(e.currentTarget.hash),n=e.currentTarget.hostname,i=window.location.hostname,o=e.currentTarget.pathname.replace(/^\//,""),r=window.location.pathname.replace(/^\//,"");return t.length||(t=$("[name="+e.currentTarget.hash.slice(1)+"]")),!t.length||n!==i&&o!==r||($("html, body").animate({scrollTop:t.offset().top},1e3),!1)})},init:function(){this.smoothScrolling()}};e.exports=i},function(e,t,n){"use strict";var i={fixedSearchTrigger:function(){$(".js-trigger-search").on("click",function(e){e.preventDefault(),$(e.currentTarget).parent().addClass("js-active"),$("#overlay").addClass("js-active")})},init:function(){this.fixedSearchTrigger()}};e.exports=i},function(e,t,n){"use strict";var i={generalSlider:function(){$(".slider").slick({arrows:!0,draggable:!1,swipeToSlide:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:800,settings:{draggable:!0}}]})},init:function(){this.generalSlider()}};e.exports=i},function(e,t,n){"use strict";var i={closeSticky:function(){$(".js-close-sticky").click(function(){$(".js-target-sticky").removeClass("js-active")})},init:function(){this.closeSticky()}};e.exports=i},function(e,t,n){"use strict";var i={markdownLinksNewPage:function(){$(".markdown a").map(function(e,t){return t.setAttribute("target","_blank")})}};e.exports=i},function(e,t,n){"use strict";var i={fixDropdown:function(){var e=$(window);if($(".fixed-dropdown").length>0){var t=$(".fixed-dropdown"),n=t.offset().top;e.scroll(function(){t.toggleClass("fixed",e.scrollTop()>n)})}},redirectDropdownSelect:function(){document.querySelector(".redirect-dropdown-nav").addEventListener("change",function(e){var t=e.currentTarget.options[e.currentTarget.selectedIndex].getAttribute("data-path");window.location.pathname=t})},matchDropdownToPath:function(){var e=document.querySelector("main").getAttribute("data-page"),t=document.querySelector(".redirect-dropdown-nav"),n=document.querySelectorAll(".redirect-dropdown-nav__option[data-page='"+e+"']")[0].index;t.selectedIndex=n},init:function(){var e=document.querySelector(".redirect-dropdown-nav"),t=document.querySelector("main").getAttribute("data-page");this.fixDropdown(),e&&t&&(this.redirectDropdownSelect(),this.matchDropdownToPath())}};e.exports=i},function(e,t,n){"use strict";var i={slidePage:function(){var e=document.querySelectorAll(".slide-about-page"),t=document.querySelector(".slide-panel"),n=document.querySelector(".close-panel");Array.prototype.slice.call(e).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),t.classList.add("slide-panel--is-visible"),document.querySelector(".main-menu--left").classList.remove("js-active-menu"),document.querySelector("#overlay").classList.remove("js-active"),document.querySelector(".close-panel").focus(),document.querySelector(".slide-panel__container").focus()})}),n.addEventListener("click",function(){t.classList.remove("slide-panel--is-visible")})},init:function(){this.slidePage()}};e.exports=i},function(e,t,n){"use strict";var i={recommendationList:void 0,searchQueries:void 0,options:{valueNames:["title","theme","insight"]},createList:function(){i.recommendationList=new List("recommendations-list",i.options),i.recommendationList.sort("title",{order:"asc"}),i.setSearchQueryDefaults()},setSearchQueryDefaults:function(){i.searchQueries={theme:"all",insight:"all"}},filterList:function(e){var t=e.theme,n=e.insight;i.recommendationList.filter(function(e){if(-1!==e.values().theme.indexOf(t)&&-1!==e.values().insight.indexOf(n))return!0})},filterByDropdowns:function(){var e=void 0,t=void 0;document.querySelector(".dropdown").addEventListener("change",function(n){Array.prototype.slice.call(n.currentTarget.childNodes).forEach(function(n){"all"===n.getAttribute("data-select")?i.setSearchQueryDefaults():Array.prototype.slice.call(n.childNodes).forEach(function(n){!0===n.selected&&(e=n.getAttribute("data-type"),t=n.getAttribute("data-select"),i.setSearchQueryDefaults(),i.searchQueries[e]=t)})}),i.filterList(i.searchQueries)})},filterByUrlParams:function(){var e=window.location.search.split("=")[0].slice(1),t=window.location.search.split("=")[1];e&&document.querySelector("#"+e).childNodes.forEach(function(e){e.getAttribute("data-select")===t&&(e.selected=!0)});i.searchQueries[e]=t,i.filterList(i.searchQueries),i.matchSearchQueriesToUI()},matchSearchQueriesToUI:function(){var e=document.querySelector(".dropdown"),t=e.options[e.selectedIndex];i.searchQueries[e.id]=e.options[e.selectedIndex].getAttribute("data-select"),-1!==t&&(e.selectedIndex=t),i.filterList(i.searchQueries)},clearAllDropdowns:function(){document.querySelector(".clear-all").addEventListener("click",function(e){e.preventDefault(),i.setSearchQueryDefaults(),i.recommendationList.filter(),i.recommendationList.sort("title",{order:"asc"}),document.querySelectorAll(".dropdown").forEach(function(e){return e.selectedIndex=0}),document.querySelector(".no-results").style.display="none"})},init:function(){document.querySelector("#recommendations")&&(this.createList(),this.filterByDropdowns(),this.filterByUrlParams(),this.clearAllDropdowns())}};e.exports=i},function(e,t,n){"use strict";var i={insightList:void 0,searchQueries:void 0,options:{valueNames:["theme"]},createList:function(){i.insightList=new List("insights-list",i.options),i.setSearchQueryDefaults()},setSearchQueryDefaults:function(){i.searchQueries={theme:"all"}},filterList:function(e){var t=e.theme;i.insightList.filter(function(e){if(-1!==e.values().theme.indexOf(t))return!0})},filterByDropdowns:function(){document.querySelector(".dropdown").addEventListener("change",function(e){var t=e.currentTarget.id,n=void 0;Array.prototype.slice.call(e.currentTarget.childNodes).forEach(function(e){!0===e.selected&&(n=e.getAttribute("data-select"),i.searchQueries[t]=n)}),i.filterList(i.searchQueries)})},matchSearchQueriesToUI:function(){var e=document.querySelector(".dropdown");i.searchQueries[e.id]=e.selectedOptions[0].getAttribute("data-select");var t=e.selectedOptions[0].index;-1!==t&&(e.selectedIndex=t),i.filterList(i.searchQueries)},init:function(){document.querySelector("#insights")&&(this.createList(),this.filterByDropdowns(),this.matchSearchQueriesToUI())}};e.exports=i},function(e,t,n){"use strict";var i={activeColor:function(){var e=document.querySelector("main").id,t=document.querySelectorAll(".nav-link");Array.prototype.slice.call(t).forEach(function(t){t.getAttribute("nav-data")===e?t.classList.add("active-orange"):"insight"===e||"recommendation"===e||"theme"===e?t.getAttribute("nav-data").includes(e)&&t.classList.add("active-blue"):"themes"===t.getAttribute("nav-data")&&"index"===e&&$(window).scroll(function(){$(window).scrollTop()+50>=$("#themes").position().top?t.classList.add("active-blue"):t.classList.remove("active-blue")})})},init:function(){this.activeColor()}};e.exports=i},function(e,t,n){"use strict";var i={createDropdownOptions:function(){var e=document.querySelectorAll(".internal-page-nav"),t=document.querySelector("#internal-page-nav");$(e).each(function(e,n){var i=document.createElement("option");i.value=n.innerHTML,i.text=n.innerHTML,i.setAttribute("class","internal-page-nav__option"),i.setAttribute("data-target",n.id),t.add(i)})},handleDropdownSelect:function(){document.querySelector(".internal-page-nav__container").addEventListener("change",function(){var e=document.querySelectorAll(".internal-page-nav__select > option:checked")[0].getAttribute("data-target");$("html, body").animate({scrollTop:$("#"+e).offset().top-55})})},getCurrentScroll:function(){var e=this;window.addEventListener("scroll",function(){e.matchDropdownToScrollPosition()})},matchDropdownToScrollPosition:function(){$(".internal-page-nav").each(function(e,t){if(t.getBoundingClientRect().bottom<300){var n=t.id;$(".internal-page-nav__option").each(function(e,t){n===t.getAttribute("data-target")&&(document.querySelector("#internal-page-nav").selectedIndex=e)})}})},init:function(){this.createDropdownOptions(),this.handleDropdownSelect(),this.getCurrentScroll()}};e.exports=i}]);