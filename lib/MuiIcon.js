'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iconStyle = {
  display: 'inline-block',
  marginRight: 10,
  paddingTop: 3,
  verticalAlign: '-32%'
};

var MuiIcon = (_temp = _class = function (_React$PureComponent) {
  _inherits(MuiIcon, _React$PureComponent);

  function MuiIcon() {
    _classCallCheck(this, MuiIcon);

    return _possibleConstructorReturn(this, (MuiIcon.__proto__ || Object.getPrototypeOf(MuiIcon)).apply(this, arguments));
  }

  _createClass(MuiIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          muiTheme = _props.muiTheme,
          style = _props.style,
          color = _props.color,
          plain = _props.plain,
          rest = _objectWithoutProperties(_props, ['icon', 'muiTheme', 'style', 'color', 'plain']);

      var iconColor = muiTheme.listItem.rightIconColor;
      return _react2.default.createElement(
        _FontIcon2.default,
        _extends({
          className: 'material-icons',
          color: color || iconColor,
          style: _extends({}, plain ? {} : iconStyle, style)
        }, rest),
        icon
      );
    }
  }]);

  return MuiIcon;
}(_react2.default.PureComponent), _class.propTypes = {
  icon: _react2.default.PropTypes.string.isRequired,
  muiTheme: _react2.default.PropTypes.object.isRequired, // eslint-disable-line
  color: _react2.default.PropTypes.string,
  style: _react2.default.PropTypes.object, // eslint-disable-line
  plain: _react2.default.PropTypes.bool
}, _class.defaultProps = {
  color: '',
  style: {},
  plain: false
}, _temp);
exports.default = (0, _muiThemeable2.default)()(MuiIcon);