!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=22)}({22:function(e,t){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}$(document).ready((function(){$(".dropdown__guests-selected").click((function(){$(".dropdown-guests-content").toggle(),$(".inputs__card_pick-up-a-number-button").toggle()})),$(".click-clear").css("cursor","default").click((function(){y()})),$(".click-apply").css("cursor","default").click((function(){$(".dropdown-guests-content").hide(),$(".dropdown__guests-selected-text").click()&&$(".inputs__card_pick-up-a-number-button").show()}))}));var a=0,c=0,l=0;$(document).ready((function(){y(),$(".plus-adults").click((function(){5!=a&&(d(++a),localStorageForAdults())})),$(".minus-adults").click((function(){0!=a&&(d(--a),localStorageForAdults())})),$(".plus-children").click((function(){5!=c&&(s(++c),localStorageForChildren())})),$(".minus-children").click((function(){0!=c&&(s(--c),localStorageForChildren())})),$(".plus-babies").click((function(){5!=l&&(p(++l),localStorageForBabies())})),$(".minus-babies").click((function(){0!=l&&(p(--l),localStorageForBabies())}))}));localStorageForAdults=function(){localStorage.setItem("key_adults",a)};localStorageForChildren=function(){localStorage.setItem("key_children",c)};var i,u;function d(e){$(".inc-adults").text(e),f(),m(),$(".minus-adults").prop("disabled",0==a),$(".plus-adults").prop("disabled",5==a),g()}function s(e){$(".inc-children").text(e),f(),m(),$(".minus-children").prop("disabled",0==c),$(".plus-children").prop("disabled",5==c),g()}function p(e){$(".inc-babies").text(e),f(),m(),$(".minus-babies").prop("disabled",0==e),$(".plus-babies").prop("disabled",5==e),g()}function f(){var e="",t="",n="";a>0&&(e=a),c>0&&(t=c),l>0&&(n=l+v(l," младенец"," младенца"," младенцев"));var r=[];e.length>0&&r.push(e),t.length>0&&r.push(t),n.length>0&&r.push(n),$(".dropdown__guests-selected-text").html(r.join(", "))}function m(){var e=[a,c],t=0;$.each(e,(function(){t+=parseInt(this)||0})),t>0&&$(".dropdown__guests-selected-text").html(t+v(t," гость"," гостя"," гостей")),l>0&&t>0&&$(".dropdown__guests-selected-text").html(t+v(t," гость"," гостя"," гостей")+", "+l+v(l," младенец"," младенца"," младенцев"))}function g(){0==a&&0==c&&0==l?($(".dropdown__guests-selected-text").text("Сколько гостей"),$(".click-clear").hide()):$(".click-clear").show()}function v(e,t,n,r){return e=Math.abs(e),(e%=100)>=5&&e<=20?r:1==(e%=10)?t:e>=2&&e<=4?n:r}function y(){a=localStorage.getItem("key_adults",a),c=localStorage.getItem("key_children",c),l=localStorage.getItem("key_babies",l),d(a),s(c),p(l)}localStorageForBabies=function(){localStorage.setItem("key_babies",l)},function(e){e=e.length?e:[e];for(var t=0;t<e.length;t++)e[t].style.display="none"}(document.querySelectorAll(".dropdown-guests-content")),$(".inputs__column_dropdown-guests-items ").clone().appendTo(".inputs__card_reservation-appartment-a-number-of-guests"),$(".datepicker-filter").datepicker({dateFormat:"dd M"}),$(".datepicker-here").datepicker({navTitles:{days:"MM <i>yyyy</i>"},clearButton:!0}),$(".datepicker-content__buttons").appendTo(".datepicker--content"),$(document).ready((function(){$(".calendar, .calendar-for-reservation").hide()})),$(".datepicker-pick-a-number-card-arrival, .datepicker-pick-a-number-card-exit").click((function(){$(".calendar").toggle()})),$(".datepicker-reservation-card-arrival, .datepicker-reservation-card-exit").click((function(){$(".calendar-for-reservation").toggle()})),$((function(){$(".calendar-for-reservation").datepicker(o({onSelect:function(e){$("#start_coming").val(e)}},"onSelect",(function(e){var t=e.split("-");$("#start_coming").val(t[0]),$("#end_departure").val(t[1])})))})),$((function(){$(".calendar").datepicker(o({onSelect:function(e){$("#start_arrival").val(e)}},"onSelect",(function(e,t){var n=e.split("-");if($("#start_arrival").val(n[0]),$("#end_exit").val(n[1]),null!=t[0]&&null!=t[1]){var r=(t[1]-t[0])/864e5;document.getElementById("number-of-days").value=r+" суток";var o=r*_;document.getElementById("day-cost").value=o.toLocaleString()+"₽";var a=o+S-k;document.getElementById("total_cost").value=a.toLocaleString()+"₽"}i=t[0],u=t[1],setupDatesFrom(),setupDatesTo()})))})),setupDatesFrom=function(){var e=n(new Intl.DateTimeFormat("en",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(i),5),t=e[0].value,r=e[2].value,o=e[4].value;$("#start_coming").val("".concat(r,".").concat(t,".").concat(o))},setupDatesTo=function(){var e=n(new Intl.DateTimeFormat("en",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(u),5),t=e[0].value,r=e[2].value,o=e[4].value;$("#end_departure").val("".concat(r,".").concat(t,".").concat(o))};var b=$(".cost-for-room").val(),_=parseInt(b),h=_.toLocaleString();document.getElementById("rubles-for-days").value=h+"₽",document.getElementById("day-cost").value=h+"₽";var k=2179,S=300,w=document.getElementById("total_cost"),I=_+S-k;w.value=I.toLocaleString()+"₽",$(".inputs__carousel-pictures").slick({dots:!0})}});