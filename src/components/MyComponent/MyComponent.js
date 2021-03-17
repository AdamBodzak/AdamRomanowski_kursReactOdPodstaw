import React from 'react';

class MyComponent extends React.Component {
    state = {
        text: 'Przykład',
    }

    handleChange = (e) => this.setState({ text: e.target.value });

    render() {
        return (
            <>
                <input
                    placeholder="Your text"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <h1>{this.state.text}</h1>
            </>
        )
    }
};

export default MyComponent;