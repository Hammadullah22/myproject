(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{1363:function(e,t,r){"use strict";r.r(t);var n=r(21),o=(r(33),r(81),r(26),r(43),r(25),r(7),r(4),r(57),r(40),r(58),r(129));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l=Object(n.a)({auth:!1,data:function(){return{currentlyActiveTemplate:""}},computed:{},mounted:function(){this.$auth.loggedIn&&(this.$auth.$storage.getUniversal("redirect")?(this.$router.replace(this.$auth.$storage.getUniversal("redirect")),this.$auth.$storage.removeUniversal("redirect")):this.$gates.hasRole("customer")&&(this.$gates.hasRole("customer")?this.$gates.hasRole("customer")&&this.$router.replace(this.localePath("/customer/profile")):this.$gates.hasPermission("admin")&&"admin"==this.$auth.strategy.options.name?this.$router.replace(this.localePath("/admin/dashboard")):this.$gates.hasRole("vendor")&&"vendor"==this.$auth.strategy.options.name&&this.$router.replace(this.localePath("/vendor/dashboard"))))},methods:{},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme}},"computed",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({allSettings:"allDefaultSettings"}))),h=l,d=r(71),component=Object(d.a)(h,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("Website"+e.currentlyActiveTemplate+"SetGuestLayout",{tag:"Component"})}),[],!1,null,null,null);t.default=component.exports}}]);