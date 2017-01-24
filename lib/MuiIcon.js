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
  display: 'inline',
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
  // icon: React.PropTypes.string.isRequired,
  muiTheme: _react2.default.PropTypes.object.isRequired, // eslint-disable-line
  // color: React.PropTypes.string,
  style: _react2.default.PropTypes.object, // eslint-disable-line
  plain: _react2.default.PropTypes.bool
}, _class.defaultProps = {
  color: '',
  style: {},
  plain: false
}, _temp);
exports.default = (0, _muiThemeable2.default)()(MuiIcon);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NdWlJY29uLmpzeCJdLCJuYW1lcyI6WyJpY29uU3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwidmVydGljYWxBbGlnbiIsIk11aUljb24iLCJwcm9wcyIsImljb24iLCJtdWlUaGVtZSIsInN0eWxlIiwiY29sb3IiLCJwbGFpbiIsInJlc3QiLCJpY29uQ29sb3IiLCJsaXN0SXRlbSIsInJpZ2h0SWNvbkNvbG9yIiwiUHVyZUNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsV0FBUyxRQURPO0FBRWhCQyxlQUFhLEVBRkc7QUFHaEJDLGNBQVksQ0FISTtBQUloQkMsaUJBQWU7QUFKQyxDQUFsQjs7SUFPTUMsTzs7Ozs7Ozs7Ozs7NkJBZ0JLO0FBQUEsbUJBQ2tELEtBQUtDLEtBRHZEO0FBQUEsVUFDQ0MsSUFERCxVQUNDQSxJQUREO0FBQUEsVUFDT0MsUUFEUCxVQUNPQSxRQURQO0FBQUEsVUFDaUJDLEtBRGpCLFVBQ2lCQSxLQURqQjtBQUFBLFVBQ3dCQyxLQUR4QixVQUN3QkEsS0FEeEI7QUFBQSxVQUMrQkMsS0FEL0IsVUFDK0JBLEtBRC9CO0FBQUEsVUFDeUNDLElBRHpDOztBQUVQLFVBQU1DLFlBQVlMLFNBQVNNLFFBQVQsQ0FBa0JDLGNBQXBDO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRSxxQkFBVSxnQkFEWjtBQUVFLGlCQUFPTCxTQUFTRyxTQUZsQjtBQUdFLDhCQUFhRixRQUFRLEVBQVIsR0FBYVgsU0FBMUIsRUFBeUNTLEtBQXpDO0FBSEYsV0FJTUcsSUFKTjtBQU1HTDtBQU5ILE9BREY7QUFVRDs7OztFQTdCbUIsZ0JBQU1TLGEsVUFFbkJDLFMsR0FBWTtBQUNqQjtBQUNBVCxZQUFVLGdCQUFNVSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFGaEIsRUFFNEI7QUFDN0M7QUFDQVgsU0FBTyxnQkFBTVMsU0FBTixDQUFnQkMsTUFKTixFQUljO0FBQy9CUixTQUFPLGdCQUFNTyxTQUFOLENBQWdCRztBQUxOLEMsU0FRWkMsWSxHQUFlO0FBQ3BCWixTQUFPLEVBRGE7QUFFcEJELFNBQU8sRUFGYTtBQUdwQkUsU0FBTztBQUhhLEM7a0JBc0JULDhCQUFlTixPQUFmLEMiLCJmaWxlIjoiTXVpSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbXVpVGhlbWVhYmxlIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9tdWlUaGVtZWFibGUnO1xuaW1wb3J0IEZvbnRJY29uIGZyb20gJ21hdGVyaWFsLXVpL0ZvbnRJY29uJztcblxuY29uc3QgaWNvblN0eWxlID0ge1xuICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgbWFyZ2luUmlnaHQ6IDEwLFxuICBwYWRkaW5nVG9wOiAzLFxuICB2ZXJ0aWNhbEFsaWduOiAnLTMyJScsXG59O1xuXG5jbGFzcyBNdWlJY29uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBpY29uOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbXVpVGhlbWU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIC8vIGNvbG9yOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgcGxhaW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICcnLFxuICAgIHN0eWxlOiB7fSxcbiAgICBwbGFpbjogZmFsc2UsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgbXVpVGhlbWUsIHN0eWxlLCBjb2xvciwgcGxhaW4sIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaWNvbkNvbG9yID0gbXVpVGhlbWUubGlzdEl0ZW0ucmlnaHRJY29uQ29sb3I7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb250SWNvblxuICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgIGNvbG9yPXtjb2xvciB8fCBpY29uQ29sb3J9XG4gICAgICAgIHN0eWxlPXt7IC4uLihwbGFpbiA/IHt9IDogaWNvblN0eWxlKSwgLi4uc3R5bGUgfX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtpY29ufVxuICAgICAgPC9Gb250SWNvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG11aVRoZW1lYWJsZSgpKE11aUljb24pO1xuIl19