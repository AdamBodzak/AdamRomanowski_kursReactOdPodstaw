import React from 'react';

class MyComponent extends React.Component {
    state = {
        text: 'Przykład',
    }
    render() {
        return (
            <>
                <input placeholder="Your text" />
                <h1>{this.state.text}</h1>
            </>
        )
    }
};

export default MyComponent;