import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Region } from "./regions.component";
import { getRegions } from "./regions.actionCreators";

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getRegions,
    }, dispatch)
);

const mapStateToProps = state => (
    {
        regions: state.regions,
        loadSpinner: state.loadSpinner,
    }
);

export const RegionConnected = connect(
    mapStateToProps, mapDispatchToProps
)(Region);
