'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { large } from '../styles/responsiveness';

var withContentSize = function withContentSize(MyComponent, drawerThreshold) {
  var _class, _temp;

  var WithContentSize = (_temp = _class = function (_React$Component) {
    _inherits(WithContentSize, _React$Component);

    function WithContentSize() {
      _classCallCheck(this, WithContentSize);

      return _possibleConstructorReturn(this, (WithContentSize.__proto__ || Object.getPrototypeOf(WithContentSize)).apply(this, arguments));
    }

    _createClass(WithContentSize, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            muiTheme = _props.muiTheme,
            windowSize = _props.windowSize;

        var contentHeight = windowSize.height - muiTheme.appBar.height;
        var contentWidth = windowSize.width - (windowSize.width < drawerThreshold ? 0 : muiTheme.drawer.width);
        return _react2.default.createElement(MyComponent, _extends({
          contentHeight: contentHeight,
          contentWidth: contentWidth
        }, this.props));
      }
    }]);

    return WithContentSize;
  }(_react2.default.Component), _class.propTypes = {
    muiTheme: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
    windowSize: _react.PropTypes.objectOf(_react.PropTypes.number).isRequired
  }, _temp);

  return (0, _muiThemeable2.default)()((0, _reactRedux.connect)(function (state) {
    return {
      windowSize: state.windowSize
    };
  })(WithContentSize));
};
exports.default = withContentSize;