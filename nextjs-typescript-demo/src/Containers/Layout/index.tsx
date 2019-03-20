import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';

import { RootState } from '@RootType';
import { StateToProps, DispatchToProps, OwnedProps } from '@AppType/Components/Layout';

import { setDemoMode } from '@Actions/Layout';
import { getDemoMode, getDemoVersion } from '@Selectors/Layout';

import LayoutComponent from '@Components/Layout';

const mapStateToProps: MapStateToProps<StateToProps, OwnedProps, RootState> = state => ({
  demoMode: getDemoMode(state),
  demoVersion: getDemoVersion(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, OwnedProps> = dispatch => ({
  setDemoMode: demoMode => dispatch(setDemoMode(demoMode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
