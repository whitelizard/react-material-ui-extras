import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';

const iconStyle = {
  display: 'inline',
  marginRight: 10,
  paddingTop: 3,
  verticalAlign: '-32%',
};

class MuiIcon extends React.PureComponent {

  static propTypes = {
    // icon: React.PropTypes.string.isRequired,
    muiTheme: React.PropTypes.object.isRequired, // eslint-disable-line
    // color: React.PropTypes.string,
    style: React.PropTypes.object, // eslint-disable-line
    plain: React.PropTypes.bool,
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
