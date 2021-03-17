import React from 'react';

class MyComponent extends React.Component {
    state = {
        text: 'Przykład',
    }

    handleChange = () => console.log('change');

    render() {
        return (
            <>
                <input
                    placeholder="Your text"
                    onChange={this.handleChange}
                />
                <h1>{this.state.text}</h1>
            </>
        )
    }
};

export default MyComponent;