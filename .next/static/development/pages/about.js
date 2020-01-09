(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['static\\development\\pages\\about.js'],
  {
    /***/ './node_modules/react/index.js':
      /*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ff16f8ce03537687a35c ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! dll-reference dll_ff16f8ce03537687a35c */ 'dll-reference dll_ff16f8ce03537687a35c'
        )('./node_modules/react/index.js');

        /***/
      },

    /***/ './node_modules/webpack/buildin/harmony-module.js':
      /*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(originalModule) {
          if (!originalModule.webpackPolyfill) {
            var module = Object.create(originalModule);
            // module.parent = undefined by default
            if (!module.children) module.children = [];
            Object.defineProperty(module, 'loaded', {
              enumerable: true,
              get: function() {
                return module.l;
              }
            });
            Object.defineProperty(module, 'id', {
              enumerable: true,
              get: function() {
                return module.i;
              }
            });
            Object.defineProperty(module, 'exports', {
              enumerable: true
            });
            module.webpackPolyfill = 1;
          }
          return module;
        };

        /***/
      },

    /***/ './pages/about.js':
      /*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function(module) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ './node_modules/react/index.js'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          var _jsxFileName =
            'I:\\Projects\\nextjs-firebase-blog\\pages\\about.js';

          var imageStyle = {
            height: '500px'
          };
          /* harmony default export */ __webpack_exports__[
            'default'
          ] = function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: '',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 6
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'img',
                {
                  src: '/static/images/2thrones.jpg',
                  alt: '2 Thrones Wallpaper',
                  style: imageStyle,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                  },
                  __self: this
                },
                'Still.... About Page'
              )
            );
          };
          (function(Component, route) {
            if (!Component) return;
            if (false) {
            }
            module.hot.accept();
            Component.__route = route;

            if (module.hot.status() === 'idle') return;

            var components = next.router.components;
            for (var r in components) {
              if (!components.hasOwnProperty(r)) continue;

              if (components[r].Component.__route === route) {
                next.router.update(r, Component);
              }
            }
          })(
            typeof __webpack_exports__ !== 'undefined'
              ? __webpack_exports__.default
              : module.exports.default || module.exports,
            '/about'
          );

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
          )(module)
        ));

        /***/
      },

    /***/ 3:
      /*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __NEXT_REGISTER_PAGE('/about', function() {
          module.exports = __webpack_require__(
            /*! ./pages/about.js */ './pages/about.js'
          );

          return { page: module.exports.default };
        });

        /***/
      },

    /***/ 'dll-reference dll_ff16f8ce03537687a35c':
      /*!*******************************************!*\
  !*** external "dll_ff16f8ce03537687a35c" ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = dll_ff16f8ce03537687a35c;

        /***/
      }
  },
  [[3, 'static/runtime/webpack.js']]
]);
//# sourceMappingURL=about.js.map
