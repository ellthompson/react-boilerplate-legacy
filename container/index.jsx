import React from 'react';
import { connect } from 'react-redux';

class Container extends React.Component {
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentShouldUpdate() {
    }
    componentWillUpdate() {
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <div></div>
        );
    }
}

Container.propTypes = {
};

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
