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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaXN0SXRlbVRvZ2dsZS5qc3giXSwibmFtZXMiOlsiY2hpbGRTdHlsZSIsInBhZGRpbmciLCJ0b2dnbGVTdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJMaXN0SXRlbVRvZ2dsZSIsInByb3BzIiwicHJpbWFyeVRleHQiLCJpY29uIiwib25Ub2dnbGUiLCJ0b2dnbGVkIiwiY2hpbGRyZW4iLCJyZXN0IiwiaWNvbkVsIiwiUHVyZUNvbXBvbmVudCIsInByb3BUeXBlcyIsIm5vZGUiLCJhbnkiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYTtBQUNqQkMsV0FBUztBQURRLENBQW5CO0FBR0EsSUFBTUMsY0FBYztBQUNsQkMsWUFBVSxVQURRO0FBRWxCQyxTQUFPLENBRlc7QUFHbEJDLE9BQUs7QUFIYSxDQUFwQjs7SUFNcUJDLGM7Ozs7Ozs7Ozs7OzZCQWVWO0FBQUEsbUJBQzZELEtBQUtDLEtBRGxFO0FBQUEsVUFDQ0MsV0FERCxVQUNDQSxXQUREO0FBQUEsVUFDY0MsSUFEZCxVQUNjQSxJQURkO0FBQUEsVUFDb0JDLFFBRHBCLFVBQ29CQSxRQURwQjtBQUFBLFVBQzhCQyxPQUQ5QixVQUM4QkEsT0FEOUI7QUFBQSxVQUN1Q0MsUUFEdkMsVUFDdUNBLFFBRHZDO0FBQUEsVUFDb0RDLElBRHBEOztBQUVQLFVBQUlDLFNBQVNMLElBQWI7QUFDQSxVQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUJLLGlCQUFTO0FBQUE7QUFBQSxZQUFVLFdBQVUsZ0JBQXBCO0FBQXNDTDtBQUF0QyxTQUFUO0FBQ0Q7QUFDRCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHlCQUFhRCxlQUFlLFNBRDlCO0FBRUUscUJBQVNFLFFBRlg7QUFHRSxzQkFBVUQsUUFBUUssTUFIcEI7QUFJRSxtQkFBTyxFQUFFWCxVQUFVLFVBQVo7QUFKVCxhQUtNVSxJQUxOO0FBT0U7QUFDRSxxQkFBU0YsT0FEWDtBQUVFLHVCQUFXVDtBQUZiO0FBUEYsU0FERjtBQWFHUyxtQkFBV0MsUUFBWCxJQUNDO0FBQUE7QUFBQSxZQUFLLE9BQU9aLFVBQVo7QUFDR1k7QUFESDtBQWRKLE9BREY7QUFxQkQ7Ozs7RUExQ3lDLGdCQUFNRyxhLFVBRXpDQyxTLEdBQVk7QUFDakJSLGVBQWEsaUJBQVVTLElBRE47QUFFakJSLFFBQU0saUJBQVVTLEdBRkM7QUFHakJSLFlBQVUsaUJBQVVTLElBQVYsQ0FBZUMsVUFIUjtBQUlqQlQsV0FBUyxpQkFBVVUsSUFBVixDQUFlRCxVQUpQO0FBS2pCUixZQUFVLGlCQUFVSyxJQUFWLENBQWVHO0FBTFIsQyxTQVFaRSxZLEdBQWU7QUFDcEJkLGVBQWEsRUFETztBQUVwQkMsUUFBTTtBQUZjLEM7a0JBVkhILGMiLCJmaWxlIjoiTGlzdEl0ZW1Ub2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICdtYXRlcmlhbC11aS9Ub2dnbGUnO1xuaW1wb3J0IEZvbnRJY29uIGZyb20gJ21hdGVyaWFsLXVpL0ZvbnRJY29uJztcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWkvTGlzdCc7XG5cbmNvbnN0IGNoaWxkU3R5bGUgPSB7XG4gIHBhZGRpbmc6ICc2cHggMTJweCAxMnB4IDYwcHgnLFxufTtcbmNvbnN0IHRvZ2dsZVN0eWxlID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6IDAsXG4gIHRvcDogJy00cHgnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW1Ub2dnbGUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHByaW1hcnlUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICBpY29uOiBQcm9wVHlwZXMuYW55LFxuICAgIG9uVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRvZ2dsZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmltYXJ5VGV4dDogJycsXG4gICAgaWNvbjogJycsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcmltYXJ5VGV4dCwgaWNvbiwgb25Ub2dnbGUsIHRvZ2dsZWQsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBpY29uRWwgPSBpY29uO1xuICAgIGlmICh0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGljb25FbCA9IDxGb250SWNvbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntpY29ufTwvRm9udEljb24+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgcHJpbWFyeVRleHQ9e3ByaW1hcnlUZXh0IHx8ICdVbmtub3duJ31cbiAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZX1cbiAgICAgICAgICBsZWZ0SWNvbj17aWNvbiAmJiBpY29uRWx9XG4gICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUb2dnbGVcbiAgICAgICAgICAgIHRvZ2dsZWQ9e3RvZ2dsZWR9XG4gICAgICAgICAgICBpY29uU3R5bGU9e3RvZ2dsZVN0eWxlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIHt0b2dnbGVkICYmIGNoaWxkcmVuICYmXG4gICAgICAgICAgPGRpdiBzdHlsZT17Y2hpbGRTdHlsZX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==