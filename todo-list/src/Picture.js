import React from 'react';
import PropTypes from 'prop-types';

class Picture extends React.Component {
    static propTypes = {
        src: PropTypes.string.isRequired
    }

    render() {
        return (
            <img src={this.props.src} />
        );
    }
}

class Spinner extends React.Component {
    render() {
        return <div>Spinner</div>
    }
}

const aNumber = 3;

export {
    Picture,
    Spinner,
    aNumber
};
