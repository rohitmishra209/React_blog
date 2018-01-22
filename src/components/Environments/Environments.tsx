import * as React from "react";
import { connect } from "react-redux";
import { isUndefined } from "lodash";
import { bindActionCreators } from "redux";

import { addEnvironment, getEnvironments, updateEnvironment, deleteEnvironment } from "./actions";

const mapStateToProps = state => {
    return {
        listEnvironments: state.listEnvironments,
        environment: state.environment
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteEnvironment: (uid) => {
            dispatch(deleteEnvironment(uid))
        },
        updateEnvironment: (data) => {
            dispatch(updateEnvironment(data))
        },
        listEnvironments: () => {
            dispatch(getEnvironments())
        }
    }
}

interface Props {
    listEnvironments;
    environment;
}

class Environments extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return `<div className="list">
            <ul>
                `+
                this.props.listEnvironments.map(env => {
                    return `<li>{env.name}</li>`;
                })
            +`</ul>
        </div>`;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Environments);