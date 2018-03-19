import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Region } from "./regions.component";
import * as regionActions from "./regions.actionCreators";

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        ...regionActions,
    }, dispatch)
);

const mapStateToProps = state => ({ ...state.regionsReducer, });

export const RegionConnected = connect(
    mapStateToProps, mapDispatchToProps
)(Region);
