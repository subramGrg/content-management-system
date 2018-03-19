import React from "react";

class Region extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getRegions();
    };

    render() {
        const {
            loadSpinner,
            regions,
        } = this.props;
        let content;

        if(loadSpinner) {
            content = "loading";
        } else {
            content = regions.map(
                region => <div key={region.ID}>{region.Name}</div>
            );
        }

        return(
            <div>
                { content }
            </div>
        );
    }
}

export { Region };
