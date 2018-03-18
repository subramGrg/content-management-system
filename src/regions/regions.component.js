import React from "react";

class Region extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            loadSpinner,
            getRegions,
        } = this.props;

        let content;

        if(loadSpinner) {
            debugger;
            content = "loading";
        } else {
            content = <button onClick={getRegions}>show region</button>;
        }

        return(
            <div>
                { content }
            </div>
        );
    }
}

export { Region };
