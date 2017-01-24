import React, { PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';
import FontIcon from 'material-ui/FontIcon';
import { ListItem } from 'material-ui/List';

const childStyle = {
  padding: '6px 12px 12px 60px',
};
const toggleStyle = {
  position: 'absolute',
  right: 0,
  top: '-4px',
};

export default class ListItemToggle extends React.PureComponent {

  static propTypes = {
    primaryText: PropTypes.node,
    icon: PropTypes.any,
    onToggle: PropTypes.func.isRequired,
    toggled: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    primaryText: '',
    icon: '',
  }

  render() {
    const { primaryText, icon, onToggle, toggled, children, ...rest } = this.props;
    let iconEl = icon;
    if (typeof icon === 'string') {
      iconEl = <FontIcon className="material-icons">{icon}</FontIcon>;
    }
    return (
      <div>
        <ListItem
          primaryText={primaryText || 'Unknown'}
          onClick={onToggle}
          leftIcon={icon && iconEl}
          style={{ position: 'relative' }}
          {...rest}
        >
          <Toggle
            toggled={toggled}
            iconStyle={toggleStyle}
          />
        </ListItem>
        {toggled && children &&
          <div style={childStyle}>
            {children}
          </div>
        }
      </div>
    );
  }
}
