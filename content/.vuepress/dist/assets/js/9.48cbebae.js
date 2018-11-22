(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{173:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("SessionHeader",{attrs:{goal:"Building a minimal mesh solution",time:25,tools:["Argon","Grove starter kits for Particle mesh","A partner, also with an Argon + Grove kit"]}}),t._v(" "),s("p",[t._v("In this session, it will all come together. One device is measuring a distance and broadcasting the value, while another is listening for updates and displaying them on a digital display. If you get stuck at any point in the process, you can see the code for the completed lab "),s("a",{attrs:{href:"http://about:blank",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("In a "),s("router-link",{attrs:{to:"./grove-kit-distance-display.html"}},[t._v("previous session")]),t._v(" you wrote code that read the distance from the ultrasonic distance sensor in the Grove sensor kit.")],1),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),s("ol",{attrs:{start:"2"}},[s("li",[t._v("In a "),s("router-link",{attrs:{to:"./grove-kit-distance-display.html"}},[t._v("previous session")]),t._v(" you wrote code that showed a value on the digital display from the Grove sensor kit. Copy paste the part of the code that did the displaying of the value into the handler function.")],1)]),t._v(" "),t._m(13),t._m(14),t._v(" "),s("p",[t._v("Now, every time a distance measurement is broadcasted by the , the display is updated, hooray!!!")]),t._v(" "),s("p",[t._v("This concludes the workshop 🎉")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Feedback for the workshop")]),t._v(" "),s("p",[t._v("If you fill out this "),s("a",{attrs:{href:"https://goo.gl/forms/jQFWiEgWw7WCjIXM2",target:"_blank",rel:"noopener noreferrer"}},[t._v("5 question survey"),s("OutboundLink")],1),t._v(", we may improve this workshop to benefit future "),s("em",[t._v("workshoppers")]),t._v(", or just pad ourselves on the back for doing great. And you may "),s("strong",[t._v("win a 3D printed case")]),t._v(" for the Grove sensor shield (only participants at ThingsCon 2018).")])]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("Feel you want more mesh? Try adding features to your IoT mesh solution see these "),s("router-link",{attrs:{to:"./extra.html"}},[t._v("hidden hints")]),t._v(".")],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"putting-it-all-togehter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#putting-it-all-togehter","aria-hidden":"true"}},[this._v("#")]),this._v(" Putting it all togehter")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"partner-up-with-your-neighbour"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#partner-up-with-your-neighbour","aria-hidden":"true"}},[this._v("#")]),this._v(" Partner up with your neighbour")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Also for this session, it is necessary to cooperate in groups of at least two participants. Group members will have to implement different code depending on the role of their device. One group member should implement the "),e("em",[this._v("remote distance sensor")]),this._v(" code, the other(s) should implement the "),e("em",[this._v("remote display")]),this._v(" code.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Do yo come prepared?")]),this._v(" "),e("p",[this._v("It is assumed that you come to this session with all of your group's Argons already on the same mesh network.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"remote-distance-sensor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remote-distance-sensor","aria-hidden":"true"}},[this._v("#")]),this._v(" Remote distance sensor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Make a new app and copy paste the part of the code that did the reading of the sensor. It should look something like this:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("insert"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("code"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("here"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Now take that reading and publish it to the mesh network. The group needs to agree on a name for the event – in the example we will use "),e("code",[this._v("dist-cm")]),this._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("insert"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("code"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("here"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("Upload this code to the device connected to the distance sensor.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"remote-display"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remote-display","aria-hidden":"true"}},[this._v("#")]),this._v(" Remote display")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Make a new app and set up a subscription to the distance sensor broadcast. The group needs to agree on a name for the event – in the example we will use "),e("code",[this._v("dist-cm")]),this._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("insert"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("code"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("here"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("insert"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("code"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("here"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("Upload this code to the device connected to the distance sensor.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"more-mesh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more-mesh","aria-hidden":"true"}},[this._v("#")]),this._v(" More mesh?")])}],!1,null,null,null);r.options.__file="mesh-distance-display.md";e.default=r.exports}}]);