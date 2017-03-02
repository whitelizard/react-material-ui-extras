'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var childStyle = {
  padding: '6px 12px 12px 60px'
};
var toggleStyle = {
  position: 'absolute',
  right: 0,
  top: '-4px'
};

var ListItemToggle = (_temp = _class = function (_React$PureComponent) {
  _inherits(ListItemToggle, _React$PureComponent);

  function ListItemToggle() {
    _classCallCheck(this, ListItemToggle);

    return _possibleConstructorReturn(this, (ListItemToggle.__proto__ || Object.getPrototypeOf(ListItemToggle)).apply(this, arguments));
  }

  _createClass(ListItemToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          primaryText = _props.primaryText,
          icon = _props.icon,
          onToggle = _props.onToggle,
          toggled = _props.toggled,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['primaryText', 'icon', 'onToggle', 'toggled', 'children']);

      var iconEl = icon;
      if (typeof icon === 'string') {
        iconEl = _react2.default.createElement(
          _FontIcon2.default,
          { className: 'material-icons' },
          icon
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _List.ListItem,
          _extends({
            primaryText: primaryText || 'Unknown',
            onClick: onToggle,
            leftIcon: icon && iconEl,
            style: { position: 'relative' }
          }, rest),
          _react2.default.createElement(_Toggle2.default, {
            toggled: toggled,
            iconStyle: toggleStyle
          })
        ),
        toggled && children && _react2.default.createElement(
          'div',
          { style: childStyle },
          children
        )
      );
    }
  }]);

  return ListItemToggle;
}(_react2.default.PureComponent), _class.propTypes = {
  primaryText: _react.PropTypes.node,
  icon: _react.PropTypes.any,
  onToggle: _react.PropTypes.func.isRequired,
  toggled: _react.PropTypes.bool.isRequired,
  children: _react.PropTypes.node.isRequired
}, _class.defaultProps = {
  primaryText: '',
  icon: ''
}, _temp);
exports.default = ListItemToggle;