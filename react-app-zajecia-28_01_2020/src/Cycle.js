import React, { Component} from 'react';

class Cycle extends React.Component {

    state = {
        interval:1
    }

    componentDidMount() {
        
        this.uidInterval = setInterval(
            () => this.setState({interval:this.state.interval + 1}),
            1000
        )
    }

    componentWillUnmount() {
        console.log('UNMOUNT')
    }

    render() {
        return (
        <div style={{color:'red'}}>{this.state.interval}</div>
        )
    }
}

export default Cycle