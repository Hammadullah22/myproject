(window.webpackJsonp=window.webpackJsonp||[]).push([[561,108,109,116,244],{1354:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(0),l=(r(5),r(129));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={auth:!1,data:function(){return{currentlyActiveTemplate:"",key:1,detail:"",seo:{}}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme},head:function(){return this.seo},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$webService.productDetail(t.$route.params.slug);case 2:r=e.sent,(data=r.data)&&(t.detail=data,t.seo=data.product.seo);case 5:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)({allSettings:"allDefaultSettings"}))},m=d,v=r(71),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$fetchState.pending?r("section",{staticClass:"product-detail m-0"},[r("WebsiteGlobalComponentsBreadCrumb",{attrs:{page:"product_detail"}}),t._v(" "),r("WebsiteSkeleton"+t.currentlyActiveTemplate+"ProductDetailPage",{tag:"Component"})],1):t.detail&&"Template1"==t.currentlyActiveTemplate?r("section",{staticClass:"product-detail m-0"},[r("WebsiteGlobalComponentsBreadCrumb",{attrs:{page:"product_detail",product:t.detail.product.name}}),t._v(" "),r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 d-none d-lg-block"},[t.detail&&t.detail.featured_products&&t.detail.featured_products.length>0?r("h5",{staticClass:"fw-fold mb-3"},[t._v(t._s(t.$t("web.customer.product_detail.featured_products")))]):t._e(),t._v(" "),t._l(t.detail.featured_products,(function(e){return r(t.currentlyActiveTemplate+"FeaturedProductCard",{key:e.id,tag:"Component",attrs:{modal_id:"product_detail_quickview",product:e,small:""}})}))],2),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-7 col-12 mb-3 mb-md-0 px-5"},[r("WebsiteGlobalComponentsProductDetailCarousel",{attrs:{media:t.detail.product.media}})],1),t._v(" "),r("div",{staticClass:"col-lg-4 col-md-5 col-12"},[r("WebsiteGlobalComponentsProductDetailOptions",{attrs:{product:t.detail.product}})],1)])])]),t._v(" "),r("Website"+t.currentlyActiveTemplate+"ProductInformation",{tag:"Component",attrs:{product:t.detail.product}}),t._v(" "),t.detail.product.vendor&&t.allSettings&&t.allSettings.general_settings&&t.allSettings.general_settings.is_multi_vendor&&1==t.allSettings.general_settings.is_multi_vendor?r("WebsiteGlobalComponentsFeaturedVendorProfile",{attrs:{vendor:t.detail.product.vendor}}):t._e(),t._v(" "),t.detail.product.faq.length>0?r("WebsiteGlobalComponentsFaqs",{attrs:{product:t.detail.product}}):t._e(),t._v(" "),t.detail.related_products.length>0?r("Website"+t.currentlyActiveTemplate+"RelatedProductsSection",{tag:"Component",attrs:{products:t.detail.related_products}}):t._e(),t._v(" "),r("WebsiteTemplate1NewsLetterSection")],1):t.detail&&"Template2"==t.currentlyActiveTemplate?r("section",{staticClass:"product-detail m-0"},[r("WebsiteGlobalComponentsBreadCrumb",{attrs:{page:"product_detail",product:t.detail.product.name}}),t._v(" "),r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 col-md-6 col-12 mb-3 mb-md-0 pe-lg-5"},[r("WebsiteGlobalComponentsProductDetailCarousel",{attrs:{media:t.detail.product.media}})],1),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6 col-12 ps-lg-5"},[r("div",{staticClass:"sticky-section"},[r("WebsiteGlobalComponentsProductDetailOptions",{attrs:{product:t.detail.product}}),t._v(" "),r("Website"+t.currentlyActiveTemplate+"ProductInformation",{tag:"Component",staticClass:"m-0",attrs:{product:t.detail.product}})],1)])])])]),t._v(" "),t.detail.product.vendor&&t.allSettings&&t.allSettings.general_settings&&t.allSettings.general_settings.is_multi_vendor&&1==t.allSettings.general_settings.is_multi_vendor?r("WebsiteGlobalComponentsFeaturedVendorProfile",{attrs:{vendor:t.detail.product.vendor}}):t._e(),t._v(" "),t.detail.product.faq.length>0?r("WebsiteGlobalComponentsFaqs",{attrs:{product:t.detail.product}}):t._e(),t._v(" "),t.detail.related_products.length>0?r("Website"+t.currentlyActiveTemplate+"RelatedProductsSection",{tag:"Component",attrs:{products:t.detail.related_products}}):t._e(),t._v(" "),r("WebsiteTemplate1NewsLetterSection")],1):r("section",[r("Website"+t.currentlyActiveTemplate+"404",{tag:"Component"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WebsiteGlobalComponentsBreadCrumb:r(687).default,WebsiteGlobalComponentsProductDetailCarousel:r(928).default,WebsiteGlobalComponentsProductDetailOptions:r(1053).default,WebsiteGlobalComponentsFeaturedVendorProfile:r(794).default,WebsiteGlobalComponentsFaqs:r(929).default,WebsiteTemplate1NewsLetterSection:r(691).default})},662:function(t,e,r){t.exports=r.p+"img/defult-product-img.e4aa9fc.png"},677:function(t,e,r){var content=r(690);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(131).default)("e62035f2",content,!0,{sourceMap:!1})},687:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(129);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:["page","post","product"],data:function(){return{currentlyActiveTemplate:""}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({allSettings:"allDefaultSettings"}))},d=c,m=r(71),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"site-breadcrumb bg-secondary py-3 mt-0 mb-0"},["Template1"==t.currentlyActiveTemplate?r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/"}},[t._v("\n                "+t._s(this.$t("home"))+"\n              ")])],1),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/blog"}},[t._v("\n                "+t._s(this.$t("blog"))+"\n              ")])],1):t._e(),t._v(" "),"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/shop"}},[t._v("\n                "+t._s(this.$t("products"))+"\n              ")])],1):t._e(),t._v(" "),"order_details"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/customer/orders"}},[t._v("\n                "+t._s(this.$t("my_orders"))+"\n              ")])],1):t._e(),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.post))]):"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.product))]):"order_details"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$t("order_details")))]):r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.$t(this.page)))])])])])])]):t._e(),t._v(" "),"Template2"==t.currentlyActiveTemplate?r("div",{staticClass:"container"},[r("div",{staticClass:"row mx-0"},[r("div",{staticClass:"col px-0"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/"}},[t._v("\n                "+t._s(this.$t("home"))+"\n              ")])],1),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/blog"}},[t._v("\n                "+t._s(this.$t("blog"))+"\n              ")])],1):t._e(),t._v(" "),"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/shop"}},[t._v("\n                "+t._s(this.$t("products"))+"\n              ")])],1):t._e(),t._v(" "),"order_details"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/customer/orders"}},[t._v("\n                "+t._s(this.$t("my_orders"))+"\n              ")])],1):t._e(),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.post))]):"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.product))]):"order_details"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$t("order_details")))]):r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.$t(this.page)))])])])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},689:function(t,e,r){"use strict";r(677)},690:function(t,e,r){var n=r(130)((function(i){return i[1]}));n.push([t.i,".cursor-pointer{cursor:pointer}",""]),n.locals={},t.exports=n},691:function(t,e,r){"use strict";r.r(e);var n=r(0),o=(r(5),{data:function(){return{formData:{email:""}}},methods:{add_email:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$webService.addNewsletterEmail({email:t.formData.email}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==r.success?t.$toast.error(t.$t("subscription_email_already_exists_message")):(t.formData.email="",t.$toast.success(t.$t("subscription_email_added_message")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.response.data.errors&&(t.error=r.response.data.errors,t.error.email&&t.$toast.error(t.error.email[0]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))()}}}),l=o,c=(r(689),r(71)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"news-letter m-0 news-temp2"},[r("div",{staticClass:"news-letter-mail py-5 mt-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 pe-5"},[r("h2",{staticClass:"text-uppercase"},[t._v(t._s(this.$t("web.home.news.newsletter.heading")))]),t._v(" "),r("p",[t._v(t._s(this.$t("web.home.news.newsletter.description")))])]),t._v(" "),r("div",{staticClass:"col-sm-6 my-auto"},[r("div",{staticClass:"input-group mail shadow-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control border rounded px-3",attrs:{placeholder:t.$t("enter_email"),type:"email"},domProps:{value:t.formData.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add_email()},input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),t._v(" "),r("span",{staticClass:"\n                input-group-append\n                position-absolute\n                top-50\n                end-0\n                translate-middle-y\n                me-3\n                cursor-pointer\n              ",on:{click:function(e){return t.add_email()}}},[r("fa",{attrs:{icon:["fa","paper-plane"]}})],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},705:function(t,e,r){t.exports=r.p+"img/mart-section-bg.c3a223e.png"},706:function(t,e,r){t.exports=r.p+"img/mart-section-logo.8953740.png"},794:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(0),l=(r(5),r(129));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={props:["vendor"],data:function(){return{follow:!1,currentlyActiveTemplate:"",data:{vendor_id:"",customer_id:""},settings:{infinite:!0,slidesToShow:4,speed:500,rows:2,slidesPerRow:1,responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}},methods:{followVendor:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.$auth.loggedIn||!e.$gates.hasRole("customer")){r.next=7;break}return e.data.vendor_id=t,e.data.customer_id=e.$auth.user.id,r.next=5,e.$webService.followVendor(e.data).then(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.follow=r.data.is_follow,e.$emit("updateFollowCount",e.follow),e.$toast.success(r.message);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:r.next=8;break;case 7:e.$toast.error(e.$t("please_login_first"));case 8:case"end":return r.stop()}}),r)})))()}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme,this.follow=this.vendor.is_followed},computed:d(d({},Object(l.c)({allSettings:"allDefaultSettings"})),{},{cover_image:function(){return this.vendor&&this.vendor.store&&this.vendor.store.cover_image?this.vendor.store.cover_image:null},store_logo:function(){return this.vendor&&this.vendor.store&&this.vendor.store.store_logo?this.vendor.store.store_logo:null}})},v=m,_=r(71),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"vender-detail mart-sectioin mt-5"},["Template1"==t.currentlyActiveTemplate?n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"vender-detail-wrap bg-secondary rounded-bottom pb-4"},[n("div",{staticClass:"mart-bg-wrap"},[null!=t.vendor.store&&t.vendor.store.cover_image?n("img",{staticClass:"mart-bg",attrs:{src:"/backend"+t.vendor.store.cover_image.original_media_path,alt:""}}):n("img",{staticClass:"mart-bg",attrs:{src:r(705),alt:""}}),t._v(" "),n("div",{staticClass:"mart-logo-wrap img-wrap"},[null!=t.vendor.store&&t.vendor.store.store_logo?n("img",{staticClass:"img-fluid",attrs:{src:"/backend"+t.vendor.store.store_logo.original_media_path,alt:""}}):n("img",{staticClass:"img-fluid",attrs:{src:r(706),alt:""}})])]),t._v(" "),null!=t.vendor.store&&t.vendor.store.name?n("h2",{staticClass:"section-heading"},[t._v(t._s(this.vendor.store.name))]):t._e(),t._v(" "),n("div",{staticClass:"\n              vender-info\n              d-flex\n              justify-content-between\n              align-items-center\n              p-4\n              px-5\n\n            "},[n("div",{staticClass:"vender-rating"},[n("div",{staticClass:"text-primary fw-bold mb-1"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews"}},[t._v("\n                 "+t._s(t.$t("web.customer.featured_vendor_profile.seller_rating"))+"\n                ")])],1),t._v(" "),n("div",{staticClass:"star-rating mx-auto"},[n("GlobalRating",{attrs:{rating:""+t.vendor.reviews_average_rating}})],1)]),t._v(" "),n("div",{staticClass:"vender-rating"},[n("div",{staticClass:"text-primary fw-bold mb-1"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews"}},[t._v("\n                 "+t._s(t.$t("web.customer.featured_vendor_profile.order_completion"))+"\n                ")])],1),t._v(" "),n("div",{staticClass:"star-rating mx-auto"},[n("GlobalRating",{attrs:{rating:""+t.vendor.orders_average_rating}})],1)]),t._v(" "),n("div",{staticClass:"vender-followers"},[n("div",[t._v("  "+t._s(t.$t("web.customer.featured_vendor_profile.followers")))]),t._v(" "),n("div",{staticClass:"text-primary fw-bold mb-1"},[t._v(t._s(t.vendor.total_follower))])]),t._v(" "),n("div",{staticClass:"vender-btns"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews?type=all-products"}},[n("button",{staticClass:"\n                  btn btn-primary\n                  text-white\n                  rounded\n                  fw-bold\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  mb-2\n                  mx-auto\n                "},[t._v("\n                "+t._s(t.$t("web.customer.featured_vendor_profile.all_products"))+"\n              ")])]),t._v(" "),n("button",{staticClass:"\n                  btn btn-warning\n                  rounded\n                  fw-bold\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  mx-auto\n                ",on:{click:function(e){return t.followVendor(t.vendor.id)}}},[n("fa",{staticClass:"me-2",class:t.follow?"text-danger":"",attrs:{icon:["fas","heart"]}}),t._v(" "+t._s(t.$t("follow"))+"\n              ")],1)],1)])])])])]):t._e(),t._v(" "),"Template2"==t.currentlyActiveTemplate?n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"vender-detail-wrap bg-secondary rounded-bottom pb-4"},[n("div",{staticClass:"mart-bg-wrap"},[null!=t.vendor.store&&t.vendor.store.cover_image?n("img",{staticClass:"mart-bg",attrs:{src:"/backend"+t.vendor.store.cover_image.original_media_path,alt:""}}):n("img",{staticClass:"mart-bg",attrs:{src:r(705),alt:""}}),t._v(" "),n("div",{staticClass:"mart-logo-wrap img-wrap"},[null!=t.vendor.store&&t.vendor.store.store_logo?n("img",{staticClass:"img-fluid",attrs:{src:"/backend"+t.vendor.store.store_logo.original_media_path,alt:""}}):n("img",{staticClass:"img-fluid",attrs:{src:r(706),alt:""}})])]),t._v(" "),null!=t.vendor.store&&t.vendor.store.name?n("h2",{staticClass:"section-heading"},[t._v(t._s(this.vendor.store.name))]):t._e(),t._v(" "),n("div",{staticClass:"\n              vender-info\n              d-flex\n              justify-content-between\n              align-items-center\n              p-4\n              px-5\n\n            "},[n("div",{staticClass:"vender-rating"},[n("div",{staticClass:"text-primary fw-bold mb-1"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews"}},[t._v("\n                   "+t._s(t.$t("web.customer.featured_vendor_profile.seller_rating"))+"\n                ")])],1),t._v(" "),n("div",{staticClass:"star-rating mx-auto"},[n("GlobalRating",{attrs:{rating:""+t.vendor.reviews_average_rating}})],1)]),t._v(" "),n("div",{staticClass:"vender-rating"},[n("div",{staticClass:"text-primary fw-bold mb-1"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews"}},[t._v("\n                 "+t._s(t.$t("web.customer.featured_vendor_profile.order_completion"))+"\n                ")])],1),t._v(" "),n("div",{staticClass:"star-rating mx-auto"},[n("GlobalRating",{attrs:{rating:""+t.vendor.orders_average_rating}})],1)]),t._v(" "),n("div",{staticClass:"vender-followers"},[n("div",[t._v(t._s(t.$t("web.customer.featured_vendor_profile.followers")))]),t._v(" "),n("div",{staticClass:"text-primary fw-bold mb-1"},[t._v(t._s(t.vendor.total_follower))])]),t._v(" "),n("div",{staticClass:"vender-btns"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews?type=all-products"}},[n("button",{staticClass:"\n                  btn btn-primary\n                  text-white\n                  rounded\n                  fw-bold\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  mb-2\n                  mx-auto\n                "},[t._v("\n                 "+t._s(t.$t("web.customer.featured_vendor_profile.all_products"))+"\n              ")])]),t._v(" "),n("button",{staticClass:"\n                  btn btn-warning\n                  rounded\n                  fw-bold\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  mx-auto\n                ",on:{click:function(e){return t.followVendor(t.vendor.id)}}},[n("fa",{staticClass:"me-2",class:t.follow?"text-danger":"",attrs:{icon:["fas","heart"]}}),t._v(" "+t._s(t.$t("follow"))+"\n              ")],1)],1)])])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalRating:r(664).default})},830:function(t,e,r){t.exports=r.p+"img/fi-rr-shield-interrogation.7ce06a5.png"},831:function(t,e,r){t.exports=r.p+"img/fi-rr-shield-check.dd5dced.png"},928:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:r(662),alt:""}})])}],o=(r(43),r(25),r(7),r(4),r(57),r(40),r(58),r(21)),l=r(129);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={props:["media"],data:function(){return{c1:void 0,c2:void 0,currentlyActiveTemplate:""}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme},mounted:function(){this.c1=this.$refs.c1,this.c2=this.$refs.c2},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)({allSettings:"allDefaultSettings"}))},m=d,v=r(71),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["Template1"==t.currentlyActiveTemplate?n("div",{staticClass:"product-detail-carousel p-0 bg-transparent"},[n("VueSlickCarousel",{ref:"c1",staticClass:"shadow mb-4",attrs:{asNavFor:t.c2,focusOnSelect:!0}},[t._l(t.media,(function(e){return n("div",{key:e.id},["image"==e.type?n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:"/backend"+e.thumbnails.large.thumbnail,alt:e.alt_text}})]):t._e(),t._v(" "),"video"==e.type?n("div",{staticClass:"img-wrap"},[n("video",{attrs:{width:"auto",height:"auto",controls:"",src:"/backend"+e.original_media_path,alt:e.alt_text}})]):t._e()])})),t._v(" "),0==t.media.length?n("div",[n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:r(662),alt:""}})])]):t._e()],2),t._v(" "),n("VueSlickCarousel",{ref:"c2",attrs:{asNavFor:t.c1,slidesToShow:4,focusOnSelect:!0}},[t._l(t.media,(function(t){return n("div",{key:t.id},[n("div",{staticClass:"img-wrap border rounded"},[n("img",{attrs:{src:"/backend"+t.thumbnails.small.thumbnail,alt:t.alt_text}})])])})),t._v(" "),0==t.media.length?n("div",[n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:r(662),alt:""}})])]):t._e()],2)],1):t._e(),t._v(" "),"Template2"==t.currentlyActiveTemplate?n("div",{staticClass:"product-detail-carousel p-0 bg-transparent"},[t._l(t.media,(function(e){return n("div",{key:e.id,staticClass:"mb-5"},["image"==e.type?n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:"/backend"+e.thumbnails.large.thumbnail,alt:e.alt_text}})]):t._e(),t._v(" "),"video"==e.type?n("div",{staticClass:"img-wrap"},[n("video",{attrs:{width:"auto",height:"auto",controls:"",src:"/backend"+e.original_media_path,alt:e.alt_text}})]):t._e()])})),t._v(" "),0==t.media.length?n("div",[t._m(0)]):t._e()],2):t._e()])}),n,!1,null,null,null);e.default=component.exports},929:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(129);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:["product"],data:function(){return{currentlyActiveTemplate:""}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme},methods:{},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({allSettings:"allDefaultSettings"}))},d=c,m=r(71),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"product-faqs"},["Template1"==t.currentlyActiveTemplate?n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h2",{staticClass:"section-heading text-start text-capitalize"},[t._v("\n                    "+t._s(t.$t("question_about_products"))+"\n                ")]),t._v(" "),n("h4",{staticClass:"text-medium"},[t._v(t._s(t.$t("total_questions"))+": "+t._s(this.product.faq.length))]),t._v(" "),n("div",{staticClass:"row g-0"},[n("div",{staticClass:"col-md-8 pt-5"},t._l(t.product.faq,(function(e){return n("div",{key:e.id},[n("div",{staticClass:"d-flex align-items-start"},[n("img",{staticClass:"pe-4",attrs:{src:r(830),alt:""}}),t._v(" "),n("h2",[t._v(t._s(e.question))])]),t._v(" "),n("div",{staticClass:"d-flex align-items-start pt-4 mb-5"},[n("img",{staticClass:"pe-4",attrs:{src:r(831),alt:""}}),t._v(" "),n("p",[t._v(t._s(e.answer))])])])})),0)])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);