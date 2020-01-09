webpackHotUpdate('static\\development\\pages\\about.js', {
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
          height: ''
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
              src: '/static/images/2thrones.jpg',
              alt: '2 Thrones Wallpaper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7
              },
              __self: this
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h3',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8
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
    }
});
//# sourceMappingURL=about.js.5f0d2ee5358e16f8a714.hot-update.js.map
