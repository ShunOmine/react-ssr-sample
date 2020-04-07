"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssr = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _CountUp = require("./CountUp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ssr = function ssr() {
  return "\n  <html>\n    <head>\n      <title>CountUp</title>\n      <meta charset=\"utf-8\"/>\n    </head>\n    <body>\n      <div id=\"app\">\n        ".concat((0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_CountUp.CountUp, null)), "\n      </div>\n    </body>\n    <script src=\"./client.js\"></script>\n  </html>\n");
};

exports.ssr = ssr;