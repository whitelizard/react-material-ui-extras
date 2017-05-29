import React, { PropTypes } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
// import { large } from '../styles/responsiveness';

const withContentSize = (MyComponent, drawerThreshold) => {
  class WithContentSize extends React.Component {
    static propTypes = {
      muiTheme: PropTypes.objectOf(PropTypes.object).isRequired,
      windowSize: PropTypes.objectOf(PropTypes.number).isRequired,
    };

    render() {
      const { muiTheme, windowSize } = this.props;
      const contentHeight = windowSize.height - muiTheme.appBar.height;
      const contentWidth =
        windowSize.width - (windowSize.width < drawerThreshold ? 0 : muiTheme.drawer.width);
      return (
        <MyComponent contentHeight={contentHeight} contentWidth={contentWidth} {...this.props} />
      );
    }
  }
  return muiThemeable()(
    connect(state => ({
      windowSize: state.windowSize,
    }))(WithContentSize),
  );
};
export default withContentSize;
