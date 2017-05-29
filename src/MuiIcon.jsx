import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';

const iconStyle = {
  display: 'inline-block',
  marginRight: 10,
  paddingTop: 3,
  verticalAlign: '-32%',
};

class MuiIcon extends React.PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    muiTheme: PropTypes.object.isRequired, // eslint-disable-line
    color: PropTypes.string,
    style: PropTypes.object, // eslint-disable-line
    plain: PropTypes.bool,
  };

  static defaultProps = {
    color: '',
    style: {},
    plain: false,
  };

  render() {
    const { icon, muiTheme, style, color, plain, ...rest } = this.props;
    const iconColor = muiTheme.listItem.rightIconColor;
    return (
      <FontIcon
        className="material-icons"
        color={color || iconColor}
        style={{ ...(plain ? {} : iconStyle), ...style }}
        {...rest}
      >
        {icon}
      </FontIcon>
    );
  }
}

export default muiThemeable()(MuiIcon);
