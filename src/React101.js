import React, { Component } from 'react';


class React101 extends Component {

    // The constructor for a React component is called before it is mounted
    // When implementing the constructor for a React.Component subclass,
    // you should call super(props) before any other statement
    // Otherwise, this.props will be undefined in the constructor, which can lead to bugs
    // 
    // Typically, in React constructors are only used for two purposes:
    // - Initializing local state by assigning an object to this.state
    // - Binding event handler methods to an instance
    constructor(props) {
        super(props);

        // this is just a JavaScript object
        this.state = {
            name: "",
            age: 20,
            isActive: false
        }

        // binding an event
        this.doSomething = this._doSomething.bind(this);
    }

    render() {
        // is the only required method in a class component
        // should be pure and simple, should not modify the state

        return <div>Hello world!</div>; // JSX

        // a custom component
        return <CustomComponent></CustomComponent>;

        // if null is returned the component is unmounted
        // and nothing is rendered
        return null;

    }

    componentDidMount() {
        // is invoked immediately after a component is mounted (inserted into the tree).
        // Initialization that requires DOM nodes should go here.
        // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
        // This method is a good place to set up any subscriptions.
        // If you do that, don’t forget to unsubscribe in componentWillUnmount()

        // you can use this.setState() to update the UI
        // when you get the response of an API call
    }

    componentDidUpdate(prevProps, prevState) {
        // is invoked immediately after updating occurs.
        // This method is not called for the initial render
        // you can compare new and old props as well as new and old state
    }

    componentWillUnmount() {
        // is invoked immediately before a component is unmounted and destroyed.
        // Perform any necessary cleanup in this method, such as invalidating timers,
        //canceling network requests, or cleaning up any subscriptions
        // that were created in componentDidMount()
    }

    _updateState() {
        // this.setState() is the only way to update state
        // state should not be modified directly such as
        this.state.name = "some name"; // do not do this!

        // This is the primary method you use to update the user interface
        this.setState({
            age: 25
        }, () => {
            // a callback function executed
            // after the state is updated
        });
    }

    // a custom function
    _doSomething() {
        // do something
    }
}

export default React101;