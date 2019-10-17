// React is imported but never used
// the reason for importing it anyway
// is because it is need for JSX
// each JSX expression is converted into
// React.createElement()
import React, { Component, createElement } from 'react';

class React extends Component {

    render() {
        return (
            <h1 className="greeting">
                Hello, world!
            </h1>
        );

        // this is the equivalent of the above
        // return (React.createElement(
        //     'h1',
        //     { className: 'greeting' },
        //     'Hello, world!'
        // ));
    }
}